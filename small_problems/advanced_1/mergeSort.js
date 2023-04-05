/*
https://launchschool.com/exercises/968bc76d

rules
- every nested array with length > 1 must be split nested arrays.

Problems:
- how to dig into subarrays?
- baseline condition?
  - Every element is either an array of length 1, or
    is an array that is fullysplit

1. If the array contains non-arrays, split
2. Othewise, for every nested array, split
*/

/*
Examples

[9, 5, 7, 1]
[[9, 5], [7, 1]]
[[[9], [5]], [[7], [1]]]
[[5, 9], [1, 7]]
[1, 5, 7, 9]


[6, 2, 7, 1, 4]
[[6, 2, 7], [1, 4]]
[[[6, 2], [7]], [[1], [4]]]
[[[[6], [2]], [7]], [[1], [4]]]
[[[2, 6], [7]], [1, 4]]
[[2, 6, 7], [1, 4]]
[1, 2, 4, 6, 7]

*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let midpoint = Math.ceil(arr.length / 2);

  let firstArr = mergeSort(arr.slice(0, midpoint));
  let secondArr = mergeSort(arr.slice(midpoint));

  return merge(firstArr, secondArr);
}

function merge(arr1, arr2) {
  const result = [];

  let [arr1Idx, arr2Idx] = [0, 0];

  while (arr1Idx < arr1.length || arr2Idx < arr2.length) {
    let [arr1Elem, arr2Elem] = [arr1[arr1Idx], arr2[arr2Idx]];

    if (arr2Idx >= arr2.length || arr1Elem <= arr2Elem) {
      result.push(arr1Elem);
      ++arr1Idx;
    } else {
      result.push(arr2Elem);
      ++arr2Idx;
    }
  }

  return result;
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort([
  'Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'
]));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([
  7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46
]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]