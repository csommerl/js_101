/*
** Assignment: Mortgage / Car Loan Calculator
** https://launchschool.com/lessons/64655364/assignments/fb1e377c
*/

let readline = require('readline-sync');

function invalidNumber(num) {
  return  Number.isNaN(num) ||
          num < 0;
}

console.log('Welcome to the mortgage calculator!');

while (true) {
  // Get user information
  console.log('Enter the total amount of the loan.');
  let loanAmount = Number(readline.prompt());

  while (invalidNumber(loanAmount)) {
    console.log('Invalid input. You must enter a positive number. Try again.');
    loanAmount = Number(readline.prompt());
  }

  console.log('Enter the Annual Percentage Rate (APR) as a percentage.');
  let aprPercentage = Number(readline.prompt());

  while (invalidNumber(aprPercentage)) {
    console.log('Invalid input. You must enter a positive number. Try again.');
    aprPercentage = Number(readline.prompt());
  }

  console.log('Enter the duration of the loan in years');
  let durationInYears = Number(readline.prompt());

  while (invalidNumber(durationInYears)) {
    console.log('Invalid input. You must enter a positive number. Try again.');
    durationInYears = Number(readline.prompt());
  }

  // Convert to right types
  let monthlyRate = (aprPercentage / 12) / 100;
  let durationInMonths = durationInYears * 12;

  // calculate
  let monthlyPayment;
  if (aprPercentage === 0) {
    monthlyPayment = loanAmount / durationInMonths;
  } else {
    monthlyPayment =  loanAmount *
                      (monthlyRate /
                      (1 - Math.pow((1 + monthlyRate), (-durationInMonths))));
  }

  // display result
  console.log(`Your monthly payment would be $${monthlyPayment.toFixed(2)}.`);

  // conclude iteration
  console.log('Would you like to calculate another mortgage payment? (y/n)');
  let anotherCalculation = readline.prompt().toLowerCase();
  while (anotherCalculation[0] !== 'y' && anotherCalculation[0] !== 'n') {
    console.log('Please enter y or n.');
    anotherCalculation = readline.prompt().toLowerCase();
  }
  if (anotherCalculation[0] === 'n') {
    console.log('Have a good day!');
    break;
  }
}