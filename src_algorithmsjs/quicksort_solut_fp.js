console.time('test')
const quickSort = (arr) =>
  arr.length <= 1
    ? arr
    : (([pivot, ...tail]) =>
        [
          ...quickSort(tail.filter((x) => x < pivot)),
          pivot,
          ...quickSort(tail.filter((x) => x > pivot)),
        ])(arr);

const unsortedArray = Array.from({ length: 11 }, () => Math.floor(Math.random() * 100));
console.log(quickSort(unsortedArray));
console.timeEnd('test')

/* 
  NOTES:
{length:99} is an object literal, with a key-value pair.


- Create unsorted array in OO
const arr = Array.from({length: 99}, (_, index) => index + 1);
arr.sort(() => Math.random() - 0.5);

- Create one in FP
const unsortedArray = Array.from({length:11},() => Math.random()*10);

*/

/*

const quicksort = (arr) => 
  (([pivot,...tail]) => {
    
})(arr);
  pass;
*/