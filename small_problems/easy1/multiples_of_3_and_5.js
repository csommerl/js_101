/*
** Multiples of 3 and 5: https://launchschool.com/exercises/847823f7
** Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5.
** For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

**You may assume that the number passed in is an integer greater than 1.
*/


// // First
// function multisum(integer) {
//   let multiples = [];
  
//   for (let i = 1; i <= integer; i += 1) {
//     if (i % 3 === 0) {
//       multiples.push(i);
//       continue;
//     } else if (i % 5 === 0) {
//       multiples.push(i);
//       continue;
//     } else {
//       continue;
//     }
//   }

//   let sum = 0;
//   multiples.forEach(multiple => sum += multiple);
//   return sum;
// }

// Second
// function multisum(integer) {
//   let multiples = [];
  
//   for (let i = 1; i <= integer; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       multiples.push(i);
//     }
//   }

//   return multiples.reduce((num1, num2) => num1 + num2);
// }

// // Third
// function multisum(integer) {
//   let sum = 0;
  
//   for (let i = 1; i <= integer; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// Fourth
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(integer) {
  let sum = 0;
  for (let i = 1; i <= integer; i++) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) {
      sum += i;
    }
  }
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168