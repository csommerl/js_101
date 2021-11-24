// Sum Square - Square Sum https://launchschool.com/exercises/68603298

// function sumSquareDifference(count) {
//   let integers = [];
//   for (let idx = 1; idx <= count; idx += 1) {
//     integers.push(idx);
//   }
  
//   let squareOfSum = integers.reduce((a, b) => a + b, 0) ** 2;
//   let sumOfSquares = integers.map(int => int ** 2).reduce((a, b) => a + b, 0);

//   return squareOfSum - sumOfSquares;
// }

function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let idx = 1; idx <= count; idx += 1) {
    sum += idx;
    sumOfSquares += Math.pow(idx, 2);
  }
  let squareOfSum = Math.pow(sum, 2);
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150