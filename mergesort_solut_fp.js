console.time('test')
const mergeSort = (arr) => 
    arr.length <= 1 
    ? arr 
    : (([left,right]) => {
        const merge = (a,b) =>
            a.length === 0 ? b
            : b.length === 0 ? a
            : a[0] < b[0] 
            ? [a[0], ...merge(a.slice(1), b)] // the order of what goes into the merge() doesn't matter
            : [b[0], ...merge(a, b.slice(1))];

        return merge(mergeSort(left),mergeSort(right));
    })([arr.slice(0,Math.floor(arr.length/2)), arr.slice(Math.floor(arr.length / 2))]);

const unsortedArray = Array.from({length:13},() => Math.floor(Math.random() * 100));
console.log(mergeSort(unsortedArray));
console.timeEnd('test')

/*
Merge Sort

Total of 18 lines

Steps:
  1. Pass unsorted array to mergeSort.
  2a. If array has one or less element, return the array, thus braking the recursion.
  2b. Else, go inside an IIFE, split the array in half, pass the halves 'left' and 'right' in.
  
  3. Define the 'merge' function. Don't execute the code. Skip it.
  4. Jump to line 14. Call the inner 'merge()' function with 'left' and 'right' as args. Ultimately, return the final result, which will be a sorted and merged array!
return merge(mergeSort(left), mergeSort(right));

MINUTIA :
  5. Pass the array into a named arrow function. left = 'a', right = 'b'.
    5a. Since you have two very large arrrays, we do the same exact thing as steps 3 and 4.
        We split the arrays even further. And further. Until 'left' and 'right' are just one element long.
    5b. When they finally are, we then reach the outside of the recursive call:
            return MERGE(mergeSort(left), mergeSort(right));
        to the 'merge()' part, with our tiny one-element 'left' and 'right' variables, and we send them to the merge() function as 'a' and 'b'.



    6a. If 'a's length == 0, return 'b'. Else:
    6b. If 'b's length == 0, return 'a'. Else:
    6c. 
                If: 
          In this case, Let's say a is [8] and b is [4]. Let's break down the code line by line:

          a[0] is 8. Since a has only one element, a.slice(1) will result in an empty array [].
          The recursive call merge([], b) is made. Since a.slice(1) is empty, the base case a.length === 0 is triggered, and b is returned as it is ([4]).
          Therefore, the line ? [a[0], ...merge(a.slice(1), b)] evaluates to [8, 4], which is the correct merging of a[0], the rest of a (empty array []), and b.

                Else:
          In this case, a is [8] and b is [4]. Again, let's break down the code line by line:

          b[0] is 4.
          b.slice(1) is an empty array [] since b has only one element.
          The recursive call merge(a, []) is made. Since b.slice(1) is empty, the base case b.length === 0 is triggered, and a is returned as it is ([8]).
          Therefore, the line : [b[0], ...merge(a, b.slice(1))] evaluates to [4, 8], which is the correct merging of b[0], a, and the rest of b.

          So, in the case where a = [8] and b = [4], the lines of code you mentioned result in merging [8] and [4] into [4, 8], which correctly sorts the two elements in ascending order.









NOTES:
  - .slice() will remove everything before the _th number in an array. Starts from 1. Copies it to a new array.
        slice()
        slice(start)
        slice(start, end)
  - The slice() is meant so that way you don't compare and move an element more than once!

[4 8] [16, 9]

is 16 greater than 4? Yes. So:

[4] merge([8][15,9])
            |
            |
    array1.slice(1)

This is a crude example, and may not happen.

The point is, every item gets compared from the left-most, to to right-most.
That's what we care about:
is a[0] < b[0]?

We literally do that to every time we reach the bottom of the recursion, single element vs. single element, then we go up a level and ask:
is a[0] < b[0]?
Check it, go up, ask:
is a[0] < b[0]?.


*/
