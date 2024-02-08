# Stack
***The opposite of the queue (backward queue), great for the performance***

`LIFO structure` - ***Last in first out.***

<img width="600" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/7aac8d73-5fa8-4ac0-9ed7-d79581008971">

<br />
<br />

>[!IMPORTANT]
>**push** - *add a single item onto the stack*
><br />
>**pop** - *returns the element that is available at the top of the stack and removes that element from the stack*
><br />
>**peek** - *see what value is on top of the stack*

<br />

```
node<T>
  value: T
  next?: node<T>
  prev?: node<T>
```
<br />

### Insertion (push)

<img width="600" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/8343fba5-9333-4965-8be5-b082c038e60a">

<br />
<br />

```
E point to head
update head to point to E
```

<br />

### Removing (pop)

<img width="600" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/fb16661e-89e4-4148-b9db-c68cd0564947">

<br />
<br />

```
save E
update head to point to prev (D)
// Link from E to D is broken
```

<br />

>[!NOTE]
>`Running time O(1)`
>
>It is fast because we only allow push and pop on the one side

<br />

> [!IMPORTANT]
> **Code example**
> 
> [Stack.ts](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/blob/main/09-Stack/src/Stack.ts)
