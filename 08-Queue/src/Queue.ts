type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++; //bookkeeping
        if (!this.tail) {
            this.tail = this.head = node; // created new node
            return;
        }

        this.tail.next = node; // took our tail and add a new one to the list
        this.tail = node; //point our tail to the new one (last item in the list)
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--; //bookkeeping
        const head = this.head; // saved our head
        this.head = this.head.next; // update head to point to the next value

        head.next = undefined; // cleanup, we don't need to do this

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value; // go to our head if it does exist and display the value
    }
}
