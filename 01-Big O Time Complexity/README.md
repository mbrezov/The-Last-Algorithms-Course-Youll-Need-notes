# Big O Time Complexity
**Big O** - categorizes algorithm on time or memory based on the input. It's not meant to be an exact measurement.
- *It helps us to make decisions about why we should or should not use some specific data structure*
- *As your input grows, how fast do computation and memory grow*

***You can't trade time for memory as it takes time to make the memory***

<br />

```javascript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```
`Running time: O(n)`

<br />

> [!TIP]
> Trick: Look for Loop

*Strings are effectively arrays really when you think about it. If you look at the for loop, what you'll see is that the for loop has to execute the length of the string. That means if our string grows by 50%, and our function is slover by 50%. It grows linearly. For every one more unit of string, there is one more loop that it has to do.*

<br />

```javascript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }

  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
｝
```
`Running time: O(n)`

<br />

> [!NOTE]
> ***The second most important concept is you always drop constants, as we are not trying to get this is how many units of CPU you need to use. It's how it grows.***

<br />

```javascript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
      const charCode = n.charCodeAt(i);
      // Capital E
      if (charCode === 69) {
        return sum;
      }
      sum += charCode;
  }
  return sum;
}
```
`Running time: O(n)`

*In BigO we often consider the worst case
<br /> 
Especially in interviews.
<br /> 
E = 69
<br /> 
Therefore any string with E in it will terminate early (unless E is the last item in the list).
<br /> 
ITS STILL O(n)*

<br />

> [!IMPORTANT]
> **Important concepts**
> 1. Growth is with respect to the input
> 2. Constants are dropped
> 3. Worst case is usually the way we measure

<br />
<img width="740" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/668e6973-160f-4dbf-90d3-6f6d9f55ff93">

<br /> 
<br /> 

`O(1)` ⇢ ***constant time*** - *doesn't matter how big the input is, it does the same set of operations every single time it's instant, effectively.*
<br /> 
`O(logn)` ⇢ ***logarithmic*** - *as the input size grows, the number of operations grows very slowly.*
<br /> 
`O(n)` ⇢ ***linear*** - *the number of operations grows linearly with the size of the input.*
<br /> 
`O(nlogn)` ⇢ ***loglinear*** - *commonly found in efficient sorting algorithms like Merge Sort and Heap Sort.*
<br /> 
`O(n^2)` ⇢ ***quadratic*** - *the number of operations is proportional to the square of the size of the input. Commonly found in inefficient sorting algorithms like Bubble Sort and Insertion Sort.*
<br /> 
`O(2^n), O(n!)` - *algorithms that can't run on traditional computers*

<br />

```javascript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
      for (let j = 0; j < n.length; ++j) {
          sum += charCode;
      ｝
  }
  return sum;
}
```

`Running time: O(n^2)`

Count loops, for every single character we go into another for loop and check every single character (squared)

<br />

```javascript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
      for (let j = 0; j < n.length; ++j) {
          for (let k = 0; k < n.length; ++k) {
              sum += charCode;
          }
      ｝
  }
  return sum;
}
```

`Running time: O(n^3)`

<br />

`Running time: O(nlogn)` - Quicksort
<br />
- for every time, you go over. You have half the amount of space you need to search, but you need to search the whole space once every time. So, you go over n characters, then you have how much you need to do, then you go over n characters you have how much you need to look at.

<br />

`Running time: O(logn)` - Binary search trees
<br />
- you have the amount of input you have to search, but you only need to look at one point at a time. And so it eventually goes down to zero.
