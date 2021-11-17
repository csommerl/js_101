// Sum of Sums https://launchschool.com/exercises/6187c3ec

// // mine
// function sumOfSums(arr) {
//   let sums = [];

//   for (let idx = 0; idx < arr.length; idx += 1) {
//     let previousSum = sums[idx - 1] || 0;
//     let currentSum = previousSum + arr[idx];
//     sums.push(currentSum);
//   }

//   return sums.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
// }

// function sumOfSums(arr) {
//   let sumTotal = 0;
  
//   for (let idx = 1; idx <= arr.length; idx += 1) {
//     sumTotal += arr.slice(0, idx).reduce((accum, val) => accum + val);
//   }
  
//   return sumTotal;
// }

function sumOfSums(arr) {
  return arr
    .map((_, idx) => {
      return arr.slice(0, idx + 1)
        .reduce((accum, val) => accum + val);
    })
    .reduce((accum, val) => accum + val);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35