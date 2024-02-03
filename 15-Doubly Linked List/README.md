# Doubly Linked List

>[!IMPORTANT]
>**This is the implementation of a doubly linked list.**
><br />
>*For a full definition of Linked List data structure and explanation check out [07-Linked List Data Structures](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/tree/main/07-Linked%20List%20Data%20Structures)*

<br />

## prepend
>[!NOTE]
>**Involving the Head in which we will need to be able to set in a new node at the head position.**

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/07fb3918-d101-4e55-8552-30c601d1cf1e)

```
1. G points to A first
2. A to point to G
3. Head to point to G
```

<br />

## insertAt
>[!NOTE]
>**Involving us pointing to the node in which we want to insert at.**

```
Order:
1. Attach the new nodes.
2. Break the old links.
```
![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/94863649-fe36-4710-85c4-3c66009ed9b8)

```
1. F needs to point to C as the next
2. F needs to point to B as the prev
3. C prev needs to point to F
4. B next needs to point to F
```

<br />

## append
>[!NOTE]
>**Similar to prepending, but we go at the end.**

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/c902da8c-bbf4-4dda-99f5-43eac913b62c)

```
1. Z points to D
2. D points to Z
3. Tail points to Z
```

<br />

## remove

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/01e59eb7-d345-4a35-b046-9449c9bfe6e7)

```
N - node we want to remove
1. prev points to the next
2. next points to the prev
3. links are broken
```
