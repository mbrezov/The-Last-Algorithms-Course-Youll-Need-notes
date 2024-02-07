# Graphs

*Series of nodes with some amount of connections, no rules like only top-down or only left-right.*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/06357d57-b4cf-40d3-be87-580509298693)

>*All tries are graphs, not all grasp are tries.*

<br />

## Terminology
>[!IMPORTANT]
>`cycle` - *when you start at Node(x), follow the links, and end back at Node(x). Requires 3 nodes to be a cycle*
>
>`acyclic` - *a graph that contains no cycles*
>
>`connected` - *when every node has a path to another node*
>
>`directed` - *when there is a direction to the connections. There are one-way connections or connections are asymmetric*
>
>`undirected` - *links don't have direction associate, you can go both ways*
>
>`weighted` - *the edges have a weight associated to them. They have some sort of value associated with that connection. In an undirected graph, a weight would be the same for both directions, it'd be a symmetric. Whereas in a directed graph, it can be asymmetric.*
>
>`dag` - *Directed acyclic graph*

<br />

## Implementation terms
>[!IMPORTANT]
>`node` - *a point or vortex on the graph*
>
>`edge` - *the connection*

<br />

## BigO
>**V** stands for **vertices** and **E** stands for **Edges**.

`Running time: O(V * E)` -> *means we will check every vertex and on every vertex, we check every edge*

<br />

### Asymmetric relationship
*Two-way connections. If you go from A to B, the cost of that connection is 20. If you go from B to A, the cost of that connection is 10.*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/55b014fb-7350-4ad4-bdbb-4a5dc3bf6d6d)

<br />

### Directed acyclic graph
*Can't make it to any other node, everything has a terminus.*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/c79d1496-6cc9-4992-ad6f-85d9d6e02cba)
