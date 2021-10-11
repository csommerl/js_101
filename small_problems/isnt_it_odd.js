/*
** Isn't it Odd?
** https://launchschool.com/exercises/2abe5b37
** Write a function that takes one integer argument,
** which may be positive, negative, or zero.
** This method returns true if the number's absolute value is odd.
** You may assume that the argument is a valid integer value.
*/

// function isOdd(integer) {
//   let absoluteValue;
  
//   if (integer < 0) {
//     absoluteValue = integer * -1;
//   } else {
//     absoluteValue = integer;
//   }

//   if (absoluteValue % 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Attempt 2
// function isOdd(integer) {
//   let absoluteValue = integer;
//   if (integer < 0) absoluteValue *= -1;
//   return absoluteValue % 2 === 1;
// }

// Theirs
function isOdd(integer) {
  return Math.abs(integer) % 2 === 1;
}


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true