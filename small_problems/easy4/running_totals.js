// Running Totals https://launchschool.com/exercises/69839f2f

// // mine
// function runningTotal(arr) {
//   if (arr.length === 0) return [];
  
//   let result = [];
//   result.push(arr[0]);
  
//   for (let idx = 1; idx < arr.length; idx++) {
//     result.push(result[idx - 1] + arr[idx]);
//   }
  
//   return result;
// }

// // revised
// function runningTotal(arr) {
//   let result = [];
//   let runningSum = 0;
  
//   for (let idx = 0; idx < arr.length; idx++) {
//     runningSum += arr[idx];
//     result.push(runningSum);
//   }
  
//   return result;
// }

// further exploration
function runningTotal(arr) {
  let runningSum = 0;
  return arr.map(elem => runningSum += elem);
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
