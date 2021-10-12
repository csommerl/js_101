/*
** Odd Numbers
** https://launchschool.com/exercises/e95e7a7d
** Log all odd numbers from 1 to 99, inclusive,
** to the console, with each number on a separate line.
*/

// for (let i = 1; i <= 99; i += 2) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 99) {
//   if (i % 2 === 1) console.log(i);
//   i++;
// }

let rlSync = require('readline-sync');
let start = Number(rlSync.question('What starting number would you like?\n'));
let end = Number(rlSync.question('What ending number would you like?\n'));

for (let i = start; i <= end; i += 1) {
  if (i % 2 === 1) console.log(i);
}