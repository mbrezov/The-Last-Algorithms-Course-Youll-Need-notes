# Linked List Data Structure

***Data that is organized in such a way that you visit a node and that node points to the next node (for example, you visit node A and that node points to B)***

### Single linked list
<img width="623" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/1b6b6832-e65b-4476-a843-1a32487ff2de">

>"A" is a contained item. Node-based. You have a node that contains value and reference to another value (another node). We are allocating and walking memory.

<br />

```
node<T>
  value: T
  next?: node<T>
```

<br />

> [!IMPORTANT]
>*This is considered as a single link list because A points to B, B points to C, C points to D, and you can't walk backward, The moment you go forwards, if you don't have a reference to what is behind you, you've lost it forever.*

<br />

### Double linked list
>*We have bi-directional arrows, With this we get the bi-directional nature of a node which means we can go from A to B and from B back to A, We can keep on walking back and forth because we have these links right here*

<br />

<img width="592" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/3126247b-7953-44c3-8ea6-a3e2b3564cd8">

<br />
<br />

```
node<T>
  value: T
  next?: node<T>
  prev?: node<T>
```

### Insertion

<img width="629" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/01c01728-dc5a-4e3f-88ce-41a2b1aa077e">

<br />
<br />

```
We want to insert the F 
A needs to point to F
F needs to point to A
B needs to point to F
F needs to point to B
```

<br />

>[!NOTE]
>We have effectively moved everything over and inserted F. We had to set a bunch of nexts and previouses. They are the constant time. If you set a piece of memory on an object, it is constant time. We set two next (A -> F and F -> B) and two previous (F <- B and A <- F)

`Running time: O(1)`

<br />

### Deletion

<img width="638" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/6a92d76f-5ca4-4d50-ad82-1443a974daa1">

<br />
<br />

>[!NOTE]
>If we want to delete C, we need to break the link from B and point it through C's next to D. We have to go back, take its next, and point to our current one next. So we broke the link that points to C and point it to D.

```
We want to delete C
D = C.next
B = C.prev
B.next = D
D.prev = C.prev
C.prev = C.nexxt = null
```

<br />

>Deletion from front and back is really fast

`Running time: O(1)`
