/* 
** Arithmetic Integer: https://launchschool.com/exercises/ca8e844b
** Write a program that prompts the user for two positive integers,
** and then prints the results of the following operations on those two numbers:
** addition, subtraction, product, quotient, remainder, and power.
** Do not worry about validating the input.
*/

let readlineSync = require('readline-sync');
// let num1 = parseInt(readlineSync.question('Enter the first number:\n'));
// let num2 = parseInt(readlineSync.question('Enter the second number:\n'));
console.log('Enter the first number:');
let num1 = parseInt(readlineSync.prompt());
let num2 = parseInt(readlineSync.prompt());
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
// console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
console.log(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);


/*
Example:
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/