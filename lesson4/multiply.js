function multiply(numbers, multiplier) {
  let multipliedNums = [];
  numbers.forEach(num => multipliedNums.push(num * multiplier));
  return multipliedNums
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]