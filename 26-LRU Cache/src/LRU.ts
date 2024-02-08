type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

function createNode<V>(value: V): Node<V> {
    return { value };
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;

    // traversal - instant lookup being the map we gonna use to lookup from the key to the value
    private lookup: Map<K, Node<V>>;

    // for being able to go from the node back to the key, delete that out and delete the key that is in the lookup
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    // update - takes in a key and a value and should update how we have everything set up.
    update(key: K, value: V): void {
        // does it exist?
        let node = this.lookup.get(key);
        if (!node) {
            // if it doesn't exist, create new node
            node = createNode(value);
            this.length++;
            this.prepend(node);
            this.trimCache();
            this.lookup.set(key, node); // update our lookups
            this.reverseLookup.set(node, key);
        } else {
            // if it does exist, we need to move it to the front of the list
            this.detach(node);
            this.prepend(node);
            // update node value
            node.value = value;
        }

        // call get() - if we get the value out, it is gonna be updated, if we change the value in update() we don't want to use that
        // if it doesn't, we need to insert
        //     - check capacity and evict if over (if we have overdone our capacity we need to evict some item from the cache)
        // if it does, we need to update to the front of the list and update the value
    }
    //get - takes in a key and hopes for a value to come out.
    get(key: K): V | undefined {
        // check the cache for existence
        const node = this.lookup.get(key);
        if (!node) {
            return undefined;
        }
        // update the value we found and move it to the front (as we used it, it becomes the most recently used piece of cache)
        this.detach(node);
        this.prepend(node);
        // return out the value found or undefined if not exist
        return node.value;
    }

    private detach(node: Node<V>) {
        if (node.prev) {
            node.prev.next = node.next; // went backwards and say backwards foward must be our forward
        }
        if (node.next) {
            node.next.prev = node.prev; // went foward and say fowards prev needs to be current node prev
        }

        // tail and head checking
        if (this.head === node) {
            // thing that we are removing is the current head
            this.head = this.head.next; // we need to shift head over one before we break our links
        }

        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        node.next = undefined;
        node.prev = undefined;
    }

    private prepend(node: Node<V>) {
        // adding it to the front of the list
        if (!this.head) {
            // there is no head
            this.head = this.tail = node; // now we have head and tail
            return;
        }
        // if the above is not the case, we need to take the head, point to it then our head needs
        // to point to the node we are adding and then move the head where we are at
        node.next = this.head; // point head
        this.head.prev = node; // head prev needs to point to node
        this.head = node; // moving head where we are at
    }

    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }
        // remove the tail
        const tail = this.tail as Node<V>;
        this.detach(this.tail as Node<V>); // removed our tail from the list but not from the lookups

        const key = this.reverseLookup.get(tail) as K;

        this.lookup.delete(key);
        this.reverseLookup.delete(tail); // deleted everything out, we've detached our tail.
        this.length--;
    }
}
