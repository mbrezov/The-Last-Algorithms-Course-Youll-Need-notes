# Depth-First Search

### BST (Binary Search Tree)

>A lot of the same characteristics of **Quicksort**.

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/e08b8e47-be03-4c03-98cf-b33193585e0a)


## Find
*Simplified version of binary search on an array.*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/0ca496d3-e77f-4d9c-8a4f-98dbbe713243)

>[!IMPORTANT]
>**Subtree 1**
><br />
>*Everything on that side must be <= 17, so we can't insert 17 because in that case on the right child, we should insert a value that is greater than 17 and that would break the upper logic that everything on the left side is smaller or equal to 17.*

<br />

### Pseudo Code

```
find(n): bool
    if !n
        return false;
    if n.value = value
        return true;
    if n.value < value
        return find(n.right, value);
    return find(n.left, value)
```

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/2b6c07e3-a939-42c7-b747-805d7c12cbed)


>[!IMPORTANT]
>Every subtree should perserve the case `<= n <` && upper

<br />

`Running time: O(height) -> O(logn) - O(n)`

<br />

## Insert
*Version of find, we just keep going until we hit a point in which the value is NULL*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/a82081d8-0985-46d5-863c-0b9e079e46b3)

>[!NOTE]
>Inserting **17**
><br />
>`17 = 17` -> go left
><br />
>`17 > 15` -> go right
><br />
>`17 > 16` -> go right
><br />
>`value is null` -> insert

### Pseudo Code

```
insert(n, value)
    if n.value < value
        if !n.right
            insert(n.right, value);
    else if (n.value >= v)
        insert(n.left, value);
```

<br />

## Delete

>After deletion, the binary tree should preserve its shape!

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/46591ef9-e990-47e5-a29d-15597239d424)

```
If we delete 4, tree is still valid as 4 has no children
```
