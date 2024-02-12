# Heap (Priority queue)

***It is a binary tree where every child and grandchild is smaller (MaxHeap) or larger (MinHeap) than the current node.***

>[!TIP]
>*Whenever a node is added or deleted, we must adjust the tree
><br />
>There is no traverseing the tree*

<br />

>[!NOTE]
>**Heap condition**
>
>*If it's a **MinHeap** every node bellow must be **larger or equate** to node above.*
><br />
>*If it's a **MaxHeap** every node bellow must be **smaller or equate** to node above.*

<br />

## MinHealp
*- top value must be the smallest*
<br />
*- always completed, adding from left to right with no empty space*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/cd383666-96b0-4529-8cac-8e381bcc492d)

### Insertion

*Bubbling up, checks if the node above is smaller*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/1bb5e323-e198-4f0f-a731-9b68477b0c13)

```
Inserting 3
3 < 101 - TRUE, swap 3 and 101
3 < 71 - TRUE, swap 3 and 71
3 < 50 - TRUE, swap 3 and 50
```

`Running time: O(logn)`

<br />

### Deletion

***Take the very last node at the tree, and put it up, and now we need to heapify down (bubble it down) to put it back into the correct spot***

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/d4aa6c37-3e92-460b-b31c-9d0f037baa10)

```
Removing 3
We have a hole in the node where we removed 3 (top node)
We take the very last node in the tree (200), delete it, and put it on top
We now heapify down:
200 > 50 - TRUE, swap 200 and 50
200 > 71 - TRUE, swap 200 and 71
200 > 101 - TRUE, swap 200 and 101
```

`Running time: O(logn)`

<br />

>[!NOTE]
>***To get a specific node value, we can implement a tree into the array.***

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/e24198c4-870e-47db-bb43-c7b6642d4b74)

```
i = index
(i -1 )/2 -> node above (parent node)
2i + 1 -> left child
2i + 2 -> right child
```

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/fe9405d0-216c-4029-9d25-211edebc23e7)

<br />

>[!TIP]
>**heapifyDown(0)** -> *starting at 0*
>
>**heapifyUp(length)** -> *starting at length (index of the last node)*
