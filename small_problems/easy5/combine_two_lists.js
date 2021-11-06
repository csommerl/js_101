// Combine Two Lists https://launchschool.com/exercises/5e3b1da6

// // original
// function interleave(arr1, arr2) {
//   let newArr = [];

//   for (let idx = 0; idx < arr1.length; idx++) {
//     newArr.push(arr1[idx], arr2[idx]);
//   }
//   return newArr;
// }

// // further exploration: forEach
// function interleave(arr1, arr2) {
//   let newArr = [];

//   arr1.forEach((value, idx) => {
//     newArr.push(value, arr2[idx]);
//   })

//   return newArr;
// }

// // further exploration: map
// function interleave(arr1, arr2) {
//   return arr1.map((value, idx) => {
//     return [value, arr2[idx]];
//   }).flat();

// }

// further exploration: reduce
function interleave(arr1, arr2) {
  return arr1.reduce((newArr, value, idx) => {
    newArr.push(value, arr2[idx]);
    return newArr;
  }, []);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
