# Breadth-First Search

*Opposite of Depth-First Search, we are using **Queue** data structure.*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/c4796467-ffa0-4d68-a5e8-a3d778fb9c37)

`Running time: O(n)`
>If we used a JavaScript array it will be O(n^2)

<br />

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/96046c65-13a4-461c-b36f-81e568e88c4e)


```
Start at 7, add 27 and 8
Pop off 7, now head points at 23 (print 7)
We visited 23, add 5 and 4 (print 23)
We visit 8, add 21 and 15 (print 8)
Visit 5, it has no children, (print 5)
Visti 4, it has no children (print 4)
Same goes to 21 and 15 (print 21, print 15)
```

<br />

### Pseudo Code

```
while q.notEmpty()
    next = q.deque();
    q.enque (next.Left);
    q.enque (next.Right);
```

<br />

## Practice Problem
Comparing two binary trees to see if they are equal in both shape and structure.

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/aee03202-2250-4a56-9239-d711cb1352b5)

<br />

>[!NOTE]
>**Breadth-First Search** is WRONG. It is not structurally true!

>[!IMPORTANT]
>**Depth-First Search** does preserve shape while Breadth-First Search does NOT!
