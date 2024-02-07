# Searching an Adjacency Matrix

*Often graphs are represented in two major ways:*
<br />

`Adj List` -> *more often used*
<br />
`Adj Matrix` -> *less often used as it takes more memory and is set up to do. To setup it takes running time of O(V^2)*
>There is also a Graph Node structure that has references to other graph nodes (weight, other node).

### Adj List

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/e14503ee-2286-4b3f-b1ba-f407782db2a5)

```
[
    [{
        to: 1,
        weight: 10
    }],
    [{}],
    [{
        to: 0,
        weight: 
    }],
    [{
    ...
    }],
]
```

<br />

### Adj Matrix
```
[    0    1    2    3
0   [0,  10,   0,   5]
1   [0,   0,   0,   0]
2   [                ]
3   [                ]
]
```

<br />

>[!NOTE]
>***BFS and DFS still exist on a graph.***

<br />

### DFS
>[!TIP]
>*We use **recursion**.*
```
We have 0 on the stack.
We push 1 on the stack. 1 Has no connections so we pop 1 off the stack.
We push 3, 3 has two connections (1 which we have already seen, and 2).
We push 2 on the stack, 2 has one connection (0 which we have already seen).
We pop 0 off the stack, 3 has no child, and we pop 3 off the stack. 
```

`Running time: O(V * E)`

<br />

### BFS
>[!TIP]
>*We use **queue**.*
```
We start at 0 in the queue.
We push 1 and 3. 0 gets popped off.
1 gets popped off. We have 3 because 1 has no connections.
We pop off 3.
3 pushes 2 because we have already seen 1.
We pop off 2. 2 tries to look at 0, 0 has already been seen, so we don't need to put it back in.
We are done
```

<br />

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/f892d7a0-f5c6-4dcc-bf15-18fed02ce7c2)

### Pseudo code
```
prev [-1, ... ] // previous array - with whom I came from
seen [true, false... ] // visited array, it means that we already visited that node
Q = [0]

do{
    curr = Q.deque(); // grab the first thing out of our queue
    if(curr = needle)
        break
    for child in curr // get all of the children and add them to the queue
        if seen
            continue
        seen[child] = true
        prev[child] = curr // now we know who brought us into this search
        Q push(child)
}while(Q.length);
prev[needle] = -1
```
`Running time: O(V + E)`
