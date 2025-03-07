# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

So my implementation has three nested loops at its center. The way i see this sort working is that it tries to seperate the high numbers from the low numbers and with enough attempts they graduly seperate into the right order. I bet it looks adjacent to bubble sort. Im going to assume though this logic that this algorithm can atleast find 1 correctly placed element per loop, meaning that the outer loop runs in the worst case n times. The next loop iterates though every element in the array and follows some not so easy logic that i made up. So obiously it also runs n ammount of times. Then finally my flip implementation is just bad and iterates though every element before the spatula 2 times, first to put it in an array and second to get it back out, in the worste case this will happend the length of the array, so 2n times for the flip function.

In the end my pancake sort implementation is T(n) = 2n * n * n $\in$ $\theta(n^3)$

Comparisons:
outer loop runs atmost n times and the inner loop runs n times aswell, at the end of these are always the comparisons making the comparisons:

T(n) = n * n $\in \theta(n^2)$

Flips:
the flips happend whenever a loop condition is met and in the worst case there may be a flip every comparison making it the same as the comparions:

T(n) = n * n $\in \theta(n^2)$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.