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
  else if v > m // right-hand side is greater than the needle, so reducing high side to that point and excluding the middle
    lo = m + 1 // +1 as we don't need to consider the midpoint as we know that it's not the right value
  else 
    hi = m 
} while(lo < hi) // do it till pointers get to the same point (collapse)
  return false
```
<br />

> [!IMPORTANT]
> **Code example**
> 
> [BinarySearchList.ts](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/blob/main/04-Binary%20Search%20Algorithm/src/BinarySearchList.ts)
