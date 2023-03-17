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
  let iterations = Math.max(arr1.length, arr2.length);

  let result = [];

  for (let idx = 0; idx < iterations; ++idx) {
    let elements = [arr1[idx], arr2[idx]]
      .filter(elem => elem !== undefined)
      .sort((a, b) => a - b);
    result = result.concat(elements);
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]