# Binary Search Algorithm

- we jump to the middle of the array and check if the mid value is equal to the value we need to find, if it's not we can check only one half of the array.
- it is under the assumption that the array is sorted, you can't do this on the unsorted array.

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/d2ca3094-aac1-4cb6-bf5c-d3aa8d16a3ba)

`Running time: O(logn)` - ***(n/2^k)=1***

`Running time: O(nlogn)` - ***in case we scan the input***

### Pseudo Code

```
m = [lo+(hi-lo)/2] //middle point of array
v = array[m] // setting the pointer to the middle of the array

do{
  if v === m
    return true
  else if v > m // our value is larger than the middle, it is larger than everything on the left side, so we need to only look on the right side, so we adjust our low
    lo = m + 1 // +1 as we don't need to consider the midpoint as we know that it's not the right value
  else // our value is lower than the current value, so we need to check on the lower (left) side
    hi = m 
} while(lo < hi) // do it till pointers get to the same point (collapse)
  return false
```

<br />

>[!NOTE]
>![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/c600476a-3894-4e70-b430-60a7c6a9756d)
><br />
>`else if v > m` ***// our value is larger than the middle, it is larger than everything on the left side, so we need to only look on the right side, so we adjust our low***
><br />
    `lo = m + 1` ***// +1 as we don't need to consider the midpoint as we know that it's not the right value***
>
><br />
><br />
>
>![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/81e56206-e210-481f-bc68-3d9ea8f25f2e)
><br />
>`hi = m ` ***// our value is lower than the current value, so we need to check on the lower (left) side***

<br />

> [!IMPORTANT]
> **Code example**
> 
> [BinarySearchList.ts](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/blob/main/04-Binary%20Search%20Algorithm/src/BinarySearchList.ts)
