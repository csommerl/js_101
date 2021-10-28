// When Will I Retire? https://launchschool.com/exercises/6898c049

let readlineSync = require('readline-sync');

let currentAge = Number(readlineSync.question(
  'What is your age? '
));
let retirementAge = Number(readlineSync.question(
  'At what age would you like to retire? '
));

let currentYear = new Date().getFullYear();
let retirementYear = currentYear + (retirementAge - currentAge);
let yearsMoreWork = retirementYear - currentYear;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsMoreWork} years of work to go!`);