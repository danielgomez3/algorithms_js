const binarySearch = (arr, target) =>
  arr.length <= 1  // if
    ? arr[0] === target // if
      ? arr[0] // then, return the array. found it by default
      : null   // else, nothing left, didn't find it
    : target === arr[Math.floor(arr.length / 2)] //else, split
    ? arr[Math.floor(arr.length / 2)]
    : binarySearch(
        target < arr[Math.floor(arr.length / 2)]
          ? arr.slice(0, Math.floor(arr.length / 2))
          : arr.slice(Math.floor(arr.length / 2)),
        target
      );

// Example usage:
const sortedArray = [2, 8, 9, 32, 56, 57, 98, 101, 150];
const target = 32;

const result = binarySearch(sortedArray, target);
const index = sortedArray.indexOf(result);
result === null ? console.log(`target not found`) : console.log(`The value ${result} found at index ${index}`);



//  arr.length <= 1
//  ? arr // Found it by default
//  : arr === target 
//  ? arr // Match
//  : (([split]) => {
//      const split = (a,b) =>
//        a === b
//        ? [...a]
//        //left ? 
//      pass
//})(...arr[arr.length / 2]);