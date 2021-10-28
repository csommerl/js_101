// Searching 101 https://launchschool.com/exercises/5062a16f

// //mine
// let readline = require('readline-sync');

// let num1 = readline.question('Enter the 1st number: ');
// let num2 = readline.question('Enter the 2nd number: ');
// let num3 = readline.question('Enter the 3rd number: ');
// let num4 = readline.question('Enter the 4th number: ');
// let num5 = readline.question('Enter the 5th number: ');
// let num6 = readline.question('Enter the last number: ');

// let numbers = [num1, num2, num3, num4, num5];

// if (numbers.includes(num6)) {
//   console.log(`The number ${num6} appears in ${numbers.join()}.`);
// } else {
//   console.log(`The number ${num6} does not appear in ${numbers.join()}.`);
// }

// // redo
// let readline = require('readline-sync');

// let numbers = [];
// numbers.push(Number(readline.question('Enter the 1st number: ')));
// numbers.push(Number(readline.question('Enter the 2nd number: ')));
// numbers.push(Number(readline.question('Enter the 3rd number: ')));
// numbers.push(Number(readline.question('Enter the 4th number: ')));
// numbers.push(Number(readline.question('Enter the 5th number: ')));

// let testNumber = Number(readline.question('Enter the last number: '));

// function arrHasNumGreaterThanVal(arr, val) {
//   for (let elem of arr) {
//     if (elem > val) return true;
//   }
//   return false;
// }

// if (arrHasNumGreaterThanVal(numbers, testNumber)) {
//   console.log(`There is a number in ${numbers.join()} that is greater than ${testNumber}.`);
// } else {
//   console.log(`There is *not* a number in ${numbers.join()} that is greater than ${testNumber}.`);
// }

// redo
let readline = require('readline-sync');

const ORDINALS = ['1st', '2nd', '3rd', '4th', '5th']
let numbers = [];

for (let ordinal of ORDINALS) {
  numbers.push(Number(readline.question(`Enter the ${ordinal} number: `)));  
}

let testNumber = Number(readline.question('Enter the last number: '));

if (numbers.some(num => num > testNumber)) {
  console.log(`There is a number in ${numbers.join()} that is greater than ${testNumber}.`);
} else {
  console.log(`There is *not* a number in ${numbers.join()} that is greater than ${testNumber}.`);
}