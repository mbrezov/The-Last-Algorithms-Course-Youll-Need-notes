# QuickSort Algorithm

***Divide and Conquer*** - *to be able to split input in chunks and then be able to go over these smaller subsets and solve things faster*

>*It is progressively getting smaller and smaller*

<br />

<img width="550" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/dea19b79-3136-4de7-958d-8cc0377ee1a4">

>[!NOTE]
>Everything on the right side is greater than P1 and still smaller or equal to the P0 (parent pivot). It keeps getting progressively more sorted until we get to the array of one element `[1]` which is always sorted.

<br />

<img width="906" alt="image" src="https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/4e08efe0-2f03-4937-aca7-a56305658451">

<br />

Branching factor: 2
<br />
We have to scan all the inputs while we are going down (for each level we scan inputs so we can get a pivot for each branch).
<br />
We have to do n operations all the way down to when n equals 1, which is an equation of `n/(2^k) = 1` which is `O(nlogn) running time`.

<br />

>[!IMPORTANT]
>It is not always fast. If we take a reverse sorted array `[10, 9, 8... 1]`  and we pick the last number as the pivot `1` our array looks like this `[1, 10, 9, 8 ...]` because we put everything that is bigger than 1 on the right side, and we are sorting `n-1` and it goes up n amount of scans, n-1 amount of scans, n-2 amount of scans and so on... Which is `Running time: O(n^2)`.
>It is somehow between `O(nlogn)` -> **best case** and `O(n^2)` -> **worst case**

<br />

>[!TIP]
>***Always pick the mid element as a pivot.***
