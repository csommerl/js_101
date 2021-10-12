let readlineSync = require('readline-sync');

function computeArraySum(numArray) {
  let add = (num1, num2) => num1 + num2;
  return numArray.reduce(add, 0);
}

function computeArrayProduct(numArray) {
  let multiply = (num1, num2) => num1 * num2;
  return numArray.reduce(multiply, 1);
}

function getIntegerArray() {
  let userInput = readlineSync.question('Please enter an array of integers: ');
  while (!Array.isArray(userInput)) {
    userInput = readlineSync.question('Invalid entry. Please enter an array of integers: ');
  }
  return userInput;
}

function getOperation() {
  let operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  while (operation !== 's' && operation !== 'p') {
    operation = readlineSync.question('Invalid. Enter "s" to compute the sum, or "p" to compute the product. ');
  }
  return operation;
}

let integerArray = getIntegerArray();
let operation = getOperation();

if (operation === 's') {
  let sum = computeArraySum(integerArray);  
  console.log(`The sum of the integers in ${integerArray} is ${sum}.`);
} else if (operation === 'p') {
  let product = computeArrayProduct(integerArray);
  console.log(`The product of the integers in ${integerArray} is ${product}.`);
} else {
  console.log('Something weird must have happened: an edge case was missed!');
}