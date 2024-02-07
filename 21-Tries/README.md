# Tries

*If it's not a priority queue it is probably a **trie tree**.*

>*The easiest way to visualize a trie is to think of auto-complete.*

### English Trie

>[!NOTE]
>Root does not have any value by itself but it contains how many symbols could have as children.

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/6a320f2b-ceca-46cc-943a-dc5eafa5e9d4)


```
"cat"
"cats"
"cattle"
"card"
"marc"
```

<br />

>*To find the right words, we can add "score" that is stored at the runtime, which will make sure that the user's most selected items are getting more often at the top*

<br />

>[!NOTE]
>*This is a Dept-First Search, preorder traversal*

### Pseudo Code for insertion

```

node()
    isWord: bool,
    child: [26] // 26 size array, hardcoded size 

insertion(str)
    curr = head
    for (c in str)
        if curr[c]
            curr = curr[c]
        else
            node = createNode()
            curr[c] = node
            curr = node
    curr.isWord = true;
```

<br />

```
Running time: O(1)
O(height)
height - is bound by the maximum sequence
```
