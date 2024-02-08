type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++; // bookkeeping
        if (!this.head) {
            this.head = node; // set our head to the node
            return;
        }

        node.prev = this.head; // take our node and point to the head
        this.head = node; // take head and point to the new node
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1); // bookkeeping, we must always stay at 0, can't have a negative value as a length
        if (this.length === 0) {
            const head = this.head; // save head
            this.head = undefined; // we don't need to have a head anymore
            return head?.value;
        }
        // we need to detach head
        const head = this.head as Node<T>; // save our point
        this.head = head.prev; // update head to repoint back to the previous one
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value; // if we have a head we return value
    }
}
