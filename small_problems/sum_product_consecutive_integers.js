let readlineSync = require('readline-sync');
let integer = parseInt(readlineSync.question('Please enter an integer greater than 0: '));
let operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (operation === 's') {
  let sum = 0;
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (operation === 'p') {
  let product = 1;
  for (let i = 1; i <= integer; i++) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
}