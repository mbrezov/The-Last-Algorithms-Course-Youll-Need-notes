# Maps

>Just use HashMap - a popular expression on job interviews

## Terminology
>[!IMPORTANT]
>`load factor` - *the amount of data points vs the amount of storage (data.len / storage.capacity). If we have 7 items on our map and we have 10 available units of storage, we would have a load factor of 0.7*
>
>`key` - *a value that is hashable and is used to look up data. The hash has to be consistent*
>
>`value` - *a value that is associated with a key*
>
>`collision` - *when 2 keys map to the same cell*

<br />

>[!NOTE]
>**It is an ArrayList**

*We have a key and it needs to be mapped to a value (it needs to be a consistent hash - always needs to give the same answer back).*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/682dae87-e6ac-4321-a7dc-2b7840304465)

`Linear or exponential back off` - *go down to the next slot and put it in there*

<br />

>[!IMPORTANT]
>If we have exceeded the load factor, we take current data storage, iterate through all keys we can find, and then rehash them and restore them to a larger storage arena.

<br />

>[!NOTE]
>*Due to collision issues in modern ways we use instead a list underneath the hood to be able to add items. So we have an **ArrayList** that has ArrayList that can add items and then we just walk the ArrayList.*
