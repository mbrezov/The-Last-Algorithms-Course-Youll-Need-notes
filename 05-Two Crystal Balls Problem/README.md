# Two Crystal Balls Problem

***Given two crystal balls that will break if dropped from a high enough distance, determine the exact spot in which it will break in the most optimized way.***

>*Often, you'll hear something like you're in a 100-story building and you have 2 crystal balls and you wanna find out which floor do they break.*
>*So what's the most efficient way to do it in 100-story building?*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/e9ded132-fa9a-469a-9036-62a9efc03d65)

***It is an array full of falses that at some point become true, and from there, it's all true
We are trying to find where is that midpoint***

<br />

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/b5225000-d9cd-400b-8c4f-7960d501a00f)

>If we linear walk and find t, we gonna write the for loop over the space of the array, checking every single time

`running time is O(n)`

<br />

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/f7a1db83-c1bf-4e31-a08a-885a2796378b)

>We jump to the middle and check if Xi is true. If it's yes, one of our two crystal balls broke. With the remaining one, we have to linearly walk from our last good point until we hit the bad point.

`Running time: O(1/2n) = O(n)`

<br />

>[!CAUTION]
> **Both of our algorithms are bad with `running time O(n)`**

***We need to jump in such a way that isn't some portion of N that means we have to walk some portion of N. We need to be able to jump by a fundamentally different unit.***

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/a6634119-1ea2-42ba-a4db-b37f30aa313e)

>We jump the square root of N. And so that means we're gonna jump a square root amount of times until it breaks. And if it breaks, we have to walk backward to our last known good point and find the point of breaking.
>If we walk back we have to walk forward. We will walk forward the square root of N times.
>sqrt(n) + sqrt(n) - worst case

`Running time: O(sqrt(n))`

<br />

> [!IMPORTANT]
> **Code example**
> 
> [TwoCrystalBalls.ts](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/blob/main/05-Two%20Crystal%20Balls%20Problem/src/TwoCrystalBalls.ts)
