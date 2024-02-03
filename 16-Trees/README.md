# Trees

>*The DOM is a tree. Think about it, body or HTML body, thousands of div tags. It's a general tree, it has many children and has zero to many children.*

### DOM Tree

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/844fc404-71b3-43dc-81db-68b45e1d6800)

```
node <T>
  value: T,
  children: []
```

<br />

### Binary Tree

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/ee399861-4e33-4f10-bb42-715338a6f580)

```
node <T>
  value: T,
  left:
  right:
```

<br />

## Terminology
>[!IMPORTANT]
>`root` - *the most parent node, the first, Adam*
>
>`height` - *the longest path from the root to the most child node*
>
>`binary tree` - *a tree in which has at most 2 children, at least 0 children*
>
>`general tree` - *a tree with 0 or more children*
>
>`binary search tree` - *a tree which has a specific ordering to the nodes and at most 2 children*
>
>`leaves` - *a node without children*
>
>`balanced` - *a tree is perfectly balanced when any node's left and right children have the same height*
>
>`branching factor` - *the amount of children a tree has*
