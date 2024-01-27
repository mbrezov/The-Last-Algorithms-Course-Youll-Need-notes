# Queue
`FIFO structure` - ***First in first out***

<img width="600" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/3c44c064-8373-4aa2-9f29-7a49b66a5897">

<br />
<br />

>[!IMPORTANT]
>**enqueue** - *insertion of elements to the queue*
><br />
>**deque** - *removal of elements from the queue*
><br />
>**peek** - *the ability to see what is my first element without popping it off.*

<br />

<img width="614" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/3577a20d-d052-451c-9cf5-55b4071784a1">

<br />
<br />

>[!NOTE]
>**Popping**
>```
>h = head
>head = head.next
>h.next = null
>return h.value
>```
>**Insertion**
>```
>this.tail.next = E
>this.tail = E
>```

<br />

`Running time 2 O(1)` - **we don't traverse anything, we don't go over the list. We just have to set one next value to the new node, and update where the tail points to**

