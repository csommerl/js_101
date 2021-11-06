// Multiplicative Average https://launchschool.com/exercises/e8b2e578

// // with reduce
// function multiplicativeAverage(arr) {
//   let multipliedValues = arr.reduce((previousValue, currentValue) => {
//     return previousValue * currentValue;
//   }, 1);
  
//   let multiplicativeAverageValue = multipliedValues / arr.length;

//   return multiplicativeAverageValue.toFixed(3);
// }

// manually
function multiplicativeAverage(arr) {
  let product = 1;
  arr.forEach(value => product *= value);
  return (product / arr.length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
