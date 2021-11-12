function doubleOddIndices(numbers) {
  let doubledNums = [];

  for (let idx = 0; idx < numbers.length; idx += 1) {
    let currentNumber = numbers[idx];

    if (idx % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));  // => [2, 8, 6, 14, 2, 12]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]
