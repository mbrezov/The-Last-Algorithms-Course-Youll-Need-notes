# LRU Cache

>Stands for Least Recently Used

*Caching mechanism that says that we will evict the least recently used item.*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/b9880559-3e1b-43da-9fbe-3845b557461b)

>[!NOTE]
>Using **Doubly linked list data structure.**
>
>Using **HashMap** *- solves traversing effect of LinkedList, jump right to the value if it exists, it is using key for jumping.*
>```
>HashMap <key, value>
>```
>`key` - *used for jumping to the value*
><br/>
>`value` - needs to be a node inside the linked list. It is a container class of node
>
>*We need to have a HashMap that has items inside it that also have pointers to other items.*

<br />

## Running time
**HashMap lookup** - `Running time: O(1)`

**Breaking from the LinkedList and insertion in front of the LinkedList depends on traversal:**
<br />

*If traversal to the node is constant, it doesn't matter how many nodes are within the LinkedList, you have to break two connections on each side to pull it out. To insert it into the front you have to put two connections plus adjusting the head. S total of `7 O(1)` operations.*
