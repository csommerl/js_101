// Fibonacci Numbers (Memoization) https://launchschool.com/exercises/f3bfa787

// // first
// const FIB_VALUES = {};

// function fibonacci(num) {
//   if (num === 1 || num === 2) {
//     FIB_VALUES[num] = 1;
//   }
  
//   if (!FIB_VALUES[num]) {
//     FIB_VALUES[num] = fibonacci(num - 1) + fibonacci(num - 2);
//   }

//   return FIB_VALUES[num];
// }

// revised
const FIB_VALUES = {1: 1, 2: 1};

function fibonacci(num) {
  if (!FIB_VALUES[num]) {
    FIB_VALUES[num] = fibonacci(num - 1) + fibonacci(num - 2);
  }

  return FIB_VALUES[num];
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(FIB_VALUES);
console.log(fibonacci(75));       // 2111485077978050
