/*
** Convert a String to a Number!
** https://launchschool.com/exercises/a5d2d50f
*/

// function stringToInteger(str) {
//   let numerals = [];
//   for (let i = 0; i < str.length; i++) {
//     let num;
//     switch(str[i]) {
//       case '0':
//         num = 0;
//         break;
//       case '1':
//         num = 1;
//         break;
//       case '2':
//         num = 2;
//         break;
//       case '3':
//         num = 3;
//         break;
//       case '4':
//         num = 4;
//         break;
//       case '5':
//         num = 5;
//         break;
//       case '6':
//         num = 6;
//         break;
//       case '7':
//         num = 7;
//         break;
//       case '8':
//         num = 8;
//         break;
//       case '9':
//         num = 9;
//         break;
//     }
//     num *= Math.pow(10, str.length - 1 - i);
//     numerals.push(num);
//   }
//   let add = (num1, num2) => num1 + num2;
//   return numerals.reduce(add);
// }

// based on theirs
function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  
  let digits = str
    .split('')
    .map(digit => DIGITS[digit]);
  
  let numericalize = (num1, num2) => num1 * 10 + num2;
  let integer = digits.reduce(numericalize);
  return integer;
}

console.log(stringToInteger("4321"))// === 4321); // logs true
console.log(stringToInteger("570"))// === 570); // logs true

function hexadecimalToInteger(str) {

}


hexadecimalToInteger('4D9f') === 19871;