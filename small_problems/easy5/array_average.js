// Array Average https://launchschool.com/exercises/23864b58

// // with forEach
// function average(arr) {
//   let sum = arr.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
//   }, 0);
  
//   return Math.floor(sum / arr.length);
// }

// // for loop
// function average(arr) {
//   let sum = 0;
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     sum += arr[idx];
//   }
//   return Math.floor(sum/arr.length);
// }

// // for of loop
// function average(arr) {
//   let sum = 0;
//   for (let value of arr) {
//     sum += value;
//   }
//   return Math.floor(sum/arr.length);
// }

// forEach
function average(arr) {
  let sum = 0;
  arr.forEach(value => sum += value);
  return Math.floor(sum/arr.length);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
