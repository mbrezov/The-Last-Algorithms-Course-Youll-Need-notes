# Dijkstra's Shortest Path

*It calculates the shortest path from one node to all other nodes in the graph. This means we can also specifically find it to an individual node as well.*
<br />

**Greedy algorithm** - *every time you find the shortest path, it is shortest possible path within a graph at that individual moment*

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/48d63612-85b3-49fe-8782-f695ed45e189)

>[!NOTE]
>***Shortest path is 0 -> 2 -> 4***

<br />

### Pseudo code
```
prev =  [-1, ... ] // previous array - with whom I came from
seen = [false, ... ] // true where source is. We don't have to use seen[] if we use the right data structure
dists = [∞, ...., 0] // all infinity except our source node, 0 for the source node
// All three above are O(V) running time

while hasUnvisited(){ // we get the nearest unvisited node, running time of function: O(V^2)
    lo = getLowestUnseen() // at first it is source array, running time: O(V^2)
    seen[lo] = true;
    for edge in lo { // running time: O(E)
        if seen[edge]
            continue;
        dist = dist[lo] + edge.weight
        if dist < dist[edge] { // running time: O(V^2 + E)
            prev[edge] = lo // running time: O(1)
            dist[edge] = dist // running time: O(1)
        }
    }
}
```
`Running time O(V^2)`

<br />

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/b627f5d5-def5-4abd-997f-989e5151599f)

>[!TIP]
>**We use MinHeap to make a running time better - OlogV(V + E)**
>
>*- if we have minheap, we remove the node which means we have seen it and it can't be back inside of it. Therefore we don't need a seen array because by the very state of the heap, it has been seen because we removed it and B it's always the smallest node at that point*

<br />

### Pseudo code after heapifying
```
prev =  [-1, ... ] // previous array - with whom I came from
seen = [false, ... ] // true where source is. We don't have to use seen[] if we use the right data structure
dists = [∞, ...., 0] // all infinity except our source node, 0 for the source node
// All three above are O(V) running time

while hasUnvisited(){ // we get the nearest unvisited node, running time of function: O(logV)
    lo = getLowestUnseen() // at first it is source array, running time: O(logV)
    seen[lo] = true;
    for edge in lo { // running time: O(E)
        if seen[edge]
            continue;
        dist = dist[lo] + edge.weight
        if dist < dist[edge] { // running time: O(V^2 + E)
            prev[edge] = lo // running time: O(logV)
            dist[edge] = dist // running time: O(logV)
        }
    }
}
```
`Running time OlogV(V + E)`

<br />

##  Graph question from interview
*- let's pretend that we have 2D array filed with 1 and 0*

***How many islands there are?** - island is anything that has a 1 that is connected in any of the four directions to another 1*

>[!NOTE]
>**We can use BFS or DFS**
><br/>
>We mark island 1 as seen (0). The check if any direction is 1, if it is not, we are done looking. If it is, we mark it as seen (turn into 0) and keep scanning.

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/17a333f9-25dc-4eaf-8c95-860ad4090818)

`There are 2 islands`

