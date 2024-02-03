# Tree Traversals

**Tree traversal is when you attempt to visit every single node.**

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/bc31e48a-8318-43a6-aedf-cbe0a1709c32)

>[!NOTE]
>`visit Node` - do something with the value of the node
>
>`recruse` - calling the function to do the same thing on a new node

<br />

## preorder traversal

```
visitNode()
recurseLeft()
recurseRight()
```

**Print:** `7, 23, 5, 4, 3, 18, 21`

>[!NOTE]
>***Root is at the beginning.***

<br />

## inorder traversal

```
recurseLeft()
visitNode()
recurseRight()
```

**Print:** `5, 23, 4, 7, 18, 3, 21`

>[!NOTE]
>***Root is in the middle.***

<br />

## postorder traversal

```
recurseLeft()
recurseRight()
visitNode()
```

**Print:** `5, 4, 23, 18, 21, 3, 7`

>[!NOTE]
>***Root is at the end.***

<br />
<br />

>[!TIP]
>*These type of traversals are known as **Depth First Search**, tehre is also **Breadth First Search**.*

`Running time: O(n)`

>We implicitly used **stack** data structure.
