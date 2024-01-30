# Recursion

***The function that calls itself until the problem is solved***

>[!NOTE]
>***we are using it when it's not able to use for loop***

<br />

```typescript
function foo(n: number): number {
    //Base case
    if(n ===1){
        return 1;
    }
    //We shall recurse
    return n + foo(n-1);
}
```

<br />

>[!IMPORTANT]
>***Recursion can be broken down into 3 steps:***
>
>`Pre` - *we can do something before we recurse (in our case it is n+)*
><br />
>`Recurse` - *calling the function*
><br />
>`Post` - *we can do something else after recursing*


### Pseudo code
```
foo(n)
    if n === 1
        return 1
    else
        return n+foo(n-1)
```

<br />

<img width="715" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/381a7c4a-65ea-432b-95f9-8e839883a532">

>[!NOTE]
>***It goes down the stack, then up the stack***

<br />
<br />

## MazeSolver

<img width="614" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/a7de73ed-0943-42c7-b9d4-d5f348b9308a">

```
>***We can only move in 4 directions (top, right, bottom, left)***
```

<br />

>[!IMPORTANT]
>### Recursion:
>
>**Base Case:**
><br/>
>1. off the map
>2. it's a wall
>3. it's the end
>4. if we have seen it
>
>**Recursive Case:**
><br/>
>Checking every direction (go all 4 directions)

<br />

`Running time`: O(4s) - *at most we check 4 times* = **O(n)**

<br />

> [!IMPORTANT]
> **Code example**
> 
> [MazeSolver.ts](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/blob/main/13-Recursion/src/MazeSolver.ts)
