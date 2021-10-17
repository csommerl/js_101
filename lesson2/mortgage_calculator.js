/*
** Assignment: Mortgage / Car Loan Calculator
** https://launchschool.com/lessons/64655364/assignments/fb1e377c
*/

let readline = require('readline-sync');

// Get user information
console.log('Enter the total amount of the loan.');
let loanAmount = Number(readline.prompt());

console.log('Enter the Annual Percentage Rate (APR) as a percentage.');
let aprPercentage = Number(readline.prompt());

console.log('Enter the duration of the loan in years');
let durationInYears = Number(readline.prompt());

// Convert to right types
let monthlyRate = (aprPercentage / 12) / 100;
let durationInMonths = durationInYears * 12;

// calculate
let monthlyPayment = loanAmount *
  (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-durationInMonths))));

console.log(`Your monthly payment would be $${monthlyPayment.toFixed(2)}.`);