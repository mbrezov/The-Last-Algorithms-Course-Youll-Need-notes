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
