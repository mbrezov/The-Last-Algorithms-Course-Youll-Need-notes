# ArrayBuffer

**We have an index-based head and tail. Everything within the head and tail are items that we have.**

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/860239ab-aeaa-4994-9b47-3418ad2fdf8a)

```
If we want to remove from the front
we just do head + 1 and that item is no longer in the there

If we want to add to the tail
we just do tail + 1
```
`Running time: O(1)` *- for all operations*

<br />
<br />

>[!NOTE]
>***If we go over the edge:***
>```
>this.tail % length = index into the array
>```

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/e9342765-3b21-4324-bde5-313f07e1c769)

>[!IMPORTANT]
>**RingBuffers maintain order** *so when we shift and unshift, we get the element that was last added into the front (first element added)*
>
>*That means if the tail exceeds the head, we need to **resize***

<br />

### Resizing

>[!NOTE]
>**We start at the head, go with the length, and write that into a new larger capacity buffer**
