# Arrays vs Linked List

### Usability

#### Array
>- indexing accessing is fast. You allocate memory, access that, and set values
>- there is no literal insert, there is only write. You can't insert value to an array without writing for loops manually to shift everything over, then putting your value or unshifting everything and writing over your value if you want to delete
>- it is O(1) everything
>- as you allocate all in front, so if you want a potential 1000 items, you need to allocate all. Then you may use how much you need.

<br />

#### Linked List
>- when you create it it has nothing to begin with, when you insert something, it creates a single containing node, if you insert two things it has two containing nodes, so the memory usage is more optimised
>- always will use less memory
>- usability is different, if you want to get item an item out of the list, you have to traverse each item on the list until you find it. It is a linear search, there is no such thing as a binary search as you can't hop in the middle, you need to walk

<br />

>[!IMPORTANT]
>If you want to scan a list or hop into a list at random access, you want to use something like an **ARRAY**. If you want to just push or pop from the head or tail, you want to use something like a **LIST**.
