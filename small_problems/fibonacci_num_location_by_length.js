/* 
** Fibonacci Number Location By Length
** https://launchschool.com/exercises/6ec7341d
*/

function findFibonacciIndexByLength(length) {
  let index = 0n;
  while (!isNumLength(fibonnaciNumAtIndex, length)) {
    index++;
  }
  return index;
}

function isNumLength(num, length) {
  return num >= (10n ** (length - 1n));
} // doesn't work for 0n as having length 1n

function fibonnaciNumAtIndex(index) {
  let arr = [];
  for (let i = 0n; i <= index; i++) {
    if (i === 0n || i === 1n) {
      arr[i] = 1n;
    } else {
      arr[i] = arr[i - 1n] + arr[i - 2n];
    }
  }
  return arr[index];
}

isNumLength(1n, 2n); // false
isNumLength(13n, 2n); // true
isNumLength(100n, 3n); // true

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;  // The last example may take a minute or so to run.
