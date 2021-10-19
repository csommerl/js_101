/*
** Assignment: Mortgage / Car Loan Calculator
** https://launchschool.com/lessons/64655364/assignments/fb1e377c
*/

let readline = require('readline-sync');

function getLoanAmount() {
  console.log('Enter the total amount of the loan.');
  let loanAmount = Number(readline.prompt());

  while (Number.isNaN(loanAmount) || loanAmount <= 0) {
    console.log('Invalid input. You must enter a positive number. Try again.');
    loanAmount = Number(readline.prompt());
  }

  return loanAmount;
}

function getMonthlyRate() {
  console.log('Enter the Annual Percentage Rate (APR) as a percentage.');
  let aprPercentage = Number(readline.prompt());

  while (Number.isNaN(aprPercentage) || aprPercentage < 0) {
    console.log('Invalid input. You must enter a positive number. Try again.');
    aprPercentage = Number(readline.prompt());
  }

  let monthlyRate = (aprPercentage / 12) / 100;
  return monthlyRate;
}

function getLoanDuration() {
  console.log('Enter the duration of the loan in years.');
  let durationInYears = Number(readline.prompt());

  while (!Number.isInteger(durationInYears) || durationInYears <= 0) {
    console.log('Invalid input. Enter a positive integer. Try again.');
    durationInYears = Number(readline.prompt());
  }

  let durationInMonths = durationInYears * 12;
  return durationInMonths;
}

function getMonthlyPayment(loanAmount, monthlyRate, loanDuration) {
  let monthlyPayment;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / loanDuration;
  } else {
    monthlyPayment = loanAmount *
      (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
  }
  return monthlyPayment;
}

function displayFinalAmounts(monthlyPayment) {
  console.log(`Your monthly payment would be $${monthlyPayment.toFixed(2)}.`);
}

function askForAnotherCalculation() {
  console.log('Would you like to calculate another mortgage payment? (y/n)');
  let anotherCalculation = readline.prompt().toLowerCase();
  while (anotherCalculation !== 'y' && anotherCalculation !== 'n') {
    console.log('Please enter a single letter that is either "y" or "n".');
    anotherCalculation = readline.prompt().toLowerCase();
  }
  return anotherCalculation;
}

// Main program
console.log('Welcome to the mortgage calculator!');
while (true) {

  let loanAmount = getLoanAmount();
  let monthlyRate = getMonthlyRate();
  let loanDuration = getLoanDuration();

  let monthlyPayment = getMonthlyPayment(loanAmount, monthlyRate, loanDuration);
  displayFinalAmounts(monthlyPayment);

  let anotherCalculation = askForAnotherCalculation();
  if (anotherCalculation === 'n') {
    console.log('Have a good day!');
    break;
  }
}