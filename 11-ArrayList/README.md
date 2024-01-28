# ArrayList

***Uses an array as the fundamental datatype instead of a node-based structure.***

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/1b52b62f-2018-4fc7-a066-c6ecc0ed9ad6)

```
Length: 1
Capacity: 3
```

<br />

### Push
***Checks if the length is within capacity. If it is, we gonna push the value and increment length to point to the next part. We're creating a push operation on top of an array.***

```
push(val: T)
```

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/0039811e-7ffe-48e4-9c86-672808affad4)

>[!NOTE]
>When we exceed the capacity we can create a new array with the double capacity and copy the old array into a new one.

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/46812a03-393e-427c-9823-a94ab1e494e8)

```
Length: 3
Capacity: 6 (before was 3)
```
<br />

`Running time: O(1)`

<br />
<br />

### Pop
***We are gonna use length - 1, grab that value, then we decrement the length.***

```
pop(val: T | undefined)
```

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/0e4db4f6-fb3a-4018-bc17-5694ef0c4d00)

`Running time: O(1)`

<br />
<br />

### Enqueue and Dequeue

***With enqueue we need to grow our capacity***

>[!IMPORTANT]
>As this is an array you can't just write at the head because it would overwrite its value, so you need to move every item.
>
>That is `O(n) operation`. The same goes for **dequeue** but it's other direction.

<br />

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/261ec09e-411d-4ebd-9c78-7b203040545b)


```
Length: 3
Capacity: at first: 3, after enlarging: 6
```

>*After we moved every item by one place, we created the place to insert a new item on the list*

<br />

>[!IMPORTANT]
>ArrayList is really bad with **enqueue** **dequeue** but really good with **push** and **pop**
