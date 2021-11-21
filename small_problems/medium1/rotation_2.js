// Rotation (Part 2) https://launchschool.com/exercises/38185d87

// function rotateArray(array) {
//   if (!Array.isArray(array)) {
//     return undefined;
//   }

//   if (array.length === 0) {
//     return [];
//   }

//   return array.slice(1).concat(array[0]);
// }

// function rotateRightmostDigits(num, count) {
//   let arr = String(num).split('');
  
//   let firstHalf = arr.slice(0, arr.length - count);
//   let secondHalf = arr.slice(arr.length - count);
  
//   let newSecondHalf = rotateArray(secondHalf);

//   let newArray = firstHalf.concat(newSecondHalf);
//   let str = newArray.join('');
//   return Number(str);
// }

function rotateRightmostDigits(num, count) {
  let strOfDigits = String(num);
  
  let firstHalf = strOfDigits.slice(0, strOfDigits.length - count);
  let secondHalf = strOfDigits.slice(strOfDigits.length - count);

  let newString = firstHalf + rotateString(secondHalf);
  
  return Number(newString);
}

function rotateString(str) {
  return str.slice(1) + str[0];
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
