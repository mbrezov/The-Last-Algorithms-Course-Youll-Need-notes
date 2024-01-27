# Bubble Sort

***Definition of the sorted array: Any x sub i, meaning any ith position within the array, is going to be less than or equal to any i + 1***

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/7678e315-6d33-4cdd-9b09-0b4838adda5c)

## How Bubble Sort works

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/c45957fd-2b00-47b4-9dc2-92dbf5389a0d)

>***It starts in the 0'th position, and it's gonna go to the end of the array. And what it's gonna do is it's gonna say, hey, person next to me. if I'm larger than you, we swap positions.***

<br />

```
1. is 1 > 2 ? - it's not
2. is 3 > 7 ? - it's not
3. is 7 > 4 ? - yes
  Swap 7 with 4
```
![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/a7e1c4f7-221b-4d83-acb2-a072f695c1f2)

<br />

```
4. is 7 > 2 ? - yes
  Swap 7 with 2
```
![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/7d31eb98-9d02-46d9-b180-268adb11d4b5)

>[!NOTE]
> ***singular iteration will always produce the largest item in the last spot.***

>***The next time we do bubble sort, it means we only have to go up to but not include the last position, because that is already sorted, we don't need to look there.***

<br />

> [!TIP]
>*Array looks like this now*
><br />
>![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/8d7f8682-0dbe-45a7-9477-d507de46dc24)

<br />

```
5. is 1 > 3 ? - it's not
6. is 3 > 4 ? - it's not
7. is 4 > 2 ? - yes
  Swap 4 with 2
```

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/295efe6d-0c32-4e41-9dcb-8ffb15614525)

<br />

```
8. is 1 > 3 ? - it's not
9. is 3 > 2 ? - yes
  Swap 3 with 2
```
![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/a2d455bc-ab5e-440d-bf66-2a58e7287696)

<br />

> [!TIP]
>*Array looks like this now*
><br />
>![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/ef01aff3-42b8-46ba-9663-4d33101ef7ef)

<br />

***We keep running until we have one position left***
<br />
![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/46f4641e-7cd5-4961-8daf-c3349cf2b8a7)

<br />

> [!IMPORTANT]
> ***The array of one element is always sorted***

<br />

`Running time: O(n^2)`

>Gauss
>(n(n + 1))/2 = n(n +1)

<br />

> [!IMPORTANT]
> **Code example**
> 
> [BubbleSort.ts](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/blob/main/06-Bubble%20Sort/src/BubbleSort.ts)
