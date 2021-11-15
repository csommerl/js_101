// Multiply All Pairs https://launchschool.com/exercises/2c36b66c

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result.push(num1 * num2);
    })
  })
  
  // result.sort((num1, num2) => {
  //   if (num1 < num2) {
  //     return -1;
  //   } else if (num2 < num1) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });

  result.sort((num1, num2) => num1 - num2);
  return result;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]