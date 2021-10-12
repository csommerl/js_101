/* Tip Calculator: https://launchschool.com/exercises/824a7ad1
** Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
** The program must compute the tip, and then log both the tip and the total amount of the bill to the console.
** You can ignore input validation and assume that the user will enter numbers.
*/

let readlineSync = require('readline-sync');
let billAmount = Number(readlineSync.question('What is the bill? '));
let tipPercentage = Number(readlineSync.question('What is the tip percentage? ')) / 100;
let tipAmount = billAmount * tipPercentage;
let total = billAmount + tipAmount;
console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/