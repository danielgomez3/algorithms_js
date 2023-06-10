const binarySearch = (arr, target) =>
  arr.length <= 1
    ? arr
    : arr === target
    ? arr
    : binarySearch(target < arr[Math.floor(arr.length / 2)] ? arr.slice(0, Math.floor(arr.length / 2)) : arr.slice(Math.floor(arr.length / 2)), target);
