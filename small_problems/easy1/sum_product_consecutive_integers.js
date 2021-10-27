let readlineSync = require('readline-sync');

function computeSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function computeProduct(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}

function getInteger() {
  let userNumber = Number(readlineSync.question('Please enter an integer greater than 0: '));
  while (userNumber < 0 || !Number.isInteger(userNumber)) {
    userNumber = Number(readlineSync.question('Invalid entry. Please enter an integer greater than 0: '));
  }
  return userNumber;
}

function getOperation() {
  let operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  while (operation !== 's' && operation !== 'p') {
    operation = readlineSync.question('Invalid. Enter "s" to compute the sum, or "p" to compute the product. ');
  }
  return operation;
}

let integer = getInteger();
let operation = getOperation();

if (operation === 's') {
  let sum = computeSum(integer);  
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (operation === 'p') {
  let product = computeProduct(integer);
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
} else {
  console.log('Something weird must have happened: an edge case was missed!');
}