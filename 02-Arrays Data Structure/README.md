**Array** - a contiguous memory space. Contiguous means unbreaking memory space which contains a certain amount of bytes.
- *It has a fixed size, it has to be a specified size (has to have size as part of its allocation)*
- *You can relocate it, create a new array, take your old array, write it into a new one, and then you have a new bigger array*
<br />

![image](https://github.com/mbrezov/The-Last-Algorithms-Course-Youll-Need-notes/assets/127137480/f442c60d-be10-4471-a5fd-4af0d207a599)
<br />

`a = int[3]`

`a[0]` - ***What you're telling the computer to do is, go to the memory address of A. Then add in the offset of zero multiplied by how big my type is. Because if your type is 32 bits or four bytes, index one has to be four bytes into the array or into the memory space.***

<br />

> [!NOTE]
>#### Getting
>- *it takes the width of the type, multiplied by the offset puts that into the memory address and you can grab it*
>
>#### Insertion
>- *when you insert something, it doesn't necessarily insert it, it overwrites it. So it's just gonna set that value. You do not get to grow your array into more memory.*
>- *you just go to A memory address if you will. You add in the width of the type (usually specified in bytes) multiplied by the offset.*
>
>#### Deletion
>- *works the same way as the insertion*
>- *You don't delete something out of contiguous memory. I could set it to zero or null for example. You have to be able to tell yourself when you've deleted this piece of memory. That's where null comes around, null, of course, being the zeroth value, just like hey, it's not something. It's just a way a named way for us to understand that there's not something in this very something spot.*

<br />

`Running time: O(1)` - ***We don't have to walk to that position we know the width of our type, we know the offset, multiply them together, get to that position, and read out the value. We do a constant amount of things no matter what the input is.***
