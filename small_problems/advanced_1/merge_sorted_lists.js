/*
https://launchschool.com/exercises/f86ca7e7

input: two sorted arrays
output: new array
        - all the elements of the two arrays in sorted order

rules:
- don't sort result array
- don't mutate original arrays
*/

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

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]