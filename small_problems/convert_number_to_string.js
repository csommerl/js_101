/*
** Convert a Number to a String!
** https://launchschool.com/exercises/ad60d5e2
*/

// mine
// function integerToString(num) {
//   const DIGITS_AS_CHARS = [
//     '0', '1', '2', '3', '4',
//     '5', '6', '7', '8', '9'
//   ];

//   let length = 1;
//   while (num / length >= 10) {
//     length *= 10;
//   }

//   let str = '';
//   while (length >= 1) {
//     let digit = Math.floor(num / length);
//     let char = DIGITS_AS_CHARS[digit];
//     str += char;
//     num -= (digit * length);
//     length /= 10;
//   }
//   return str;
// }

// theirs
function integerToString(number) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  
  do {
    let remainder = number % 10;
  
    number = Math.floor(number / 10);
  
    result = DIGITS[remainder] + result;
  } while (number > 0)
  
  return result;
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
