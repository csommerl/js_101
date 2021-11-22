// Fibonacci Numbers (Recursion) https://launchschool.com/exercises/2a0d956d

function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
