/*
** Fibonacci Number Location By Length
** https://launchschool.com/exercises/6ec7341d
*/

// based on theirs
// function findFibonacciIndexByLength(length) {
//   let num1 = 1n;
//   let num2 = 1n;
//   let count = 3n;
//   let fibonacci;

//   while (true) {
//     fibonacci = num1 + num2;
//     if (BigInt(String(fibonacci).length) === length) return count;
//     count++;
//     num1 = num2;
//     num2 = fibonacci;
//   }
// }

function numIsLength(num, length) {
  return BigInt(String(num).length) === length;
}

function findFibonacciIndexByLength(length) {
  let num1 = 1n;
  let num2 = 1n;
  let index = 3n;
  let fibonacci = num1 + num2;

  while (!numIsLength(fibonacci, length)) {
    num1 = num2;
    num2 = fibonacci;
    fibonacci = num1 + num2;
    index++;
  }
  return index;
}

console.log(console.log(findFibonacciIndexByLength(2n) === 7n));    // 1 1 2 3 5 8 13
console.log(console.log(findFibonacciIndexByLength(3n) === 12n));   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(console.log(findFibonacciIndexByLength(10n) === 45n));
console.log(console.log(findFibonacciIndexByLength(16n) === 74n));
console.log(console.log(findFibonacciIndexByLength(100n) === 476n));
console.log(console.log(findFibonacciIndexByLength(1000n) === 4782n));
console.log(console.log(findFibonacciIndexByLength(10000n) === 47847n));  // The last example may take a minute or so to run.