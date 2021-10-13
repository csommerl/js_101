/*
** Leap Years: https://launchschool.com/exercises/3a4df048

** In the modern era under the Gregorian Calendar,
** leap years occur in every year that is evenly divisible by 4,
** unless the year is also divisible by 100.
** If the year is evenly divisible by 100, then it is not a leap year,
** unless the year is also evenly divisible by 400.

** Assume this rule is valid for any year greater than year 0.
** Write a function that takes any year greater than 0 as input and
** returns true if the year is a leap year,
** or false if it is not a leap year.

P
I = year, O = boolean
A year is a leap year
  - if it is divisble by 400
  - or if it is divisible by 4 but not divisible by 100
A
  1. If year is not divisible by 4, return false
  2. If year is divisible by 4, then
    a. If year is divisible by 400, return true
    b. If year is divisible by 100, return false
    c. Else return true
  3. Alternatively:
    a. if year is divisible by 400, return true
    b. if year is divisible by 100, return false
    c. if year is divisible by 4, return true
    d. else return false
*/

// // mine
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

// // theirs
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// // further exploration
// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true * 
isLeapYear(240000);    // true *
isLeapYear(240001);    // false
isLeapYear(2000);      // true *
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true *