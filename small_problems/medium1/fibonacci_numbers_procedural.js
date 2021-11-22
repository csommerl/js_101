// Fibonacci Numbers (Procedural) https://launchschool.com/exercises/13738ab2

// // first
// function fibonacci(num) {
//   if (num === 1 || num === 2) {
//     return 1;
//   }

//   let n1 = 1
//   let n2 = 1;
//   let result;
//   for (let idx = 3; idx <= num; idx++) {
//     result = n1 + n2;
//     n2 = n1;
//     n1 = result;
//   }

//   return result;
// }

// // second
// function fibonacci(num) {
//   let fib1 = 1
//   let fib2 = 1;
//   let result = 1;
  
//   for (let counter = 1; counter <= num; counter++) {
//     if (counter < 3) continue;
//     result = fib1 + fib2;
//     fib2 = fib1;
//     fib1 = result;
//   }

//   return result;
// }

function fibonacci(num) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= num; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
