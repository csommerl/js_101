/*
** String Strings
** https://launchschool.com/exercises/db532919
** Write a function that takes one argument, a positive integer,
** and returns a string of alternating '1's and '0's, always starting with a '1'.
** The length of the string should match the given integer.
*/

// // mine
// function stringy(num) {
//   if (num % 2 === 0) {
//     return '10'.repeat(num / 2);
//   } else {
//     return '10'.repeat(Math.floor(num / 2)) + '1';
//   }
// }

// // inspired by theirs
// function stringy(num) {
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//     result += (i % 2)
//   }
//   return result;
// }

// theirs
function stringy(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    let char = (i % 2 === 1) ? '1' : '0';
    result += char;
  }
  return result;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
stringy(0);   // ""
stringy(1);   // "1"
