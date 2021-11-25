// Diamonds https://launchschool.com/exercises/02297071

// // first
// function diamond(num) {
//   for (let idx = 1; idx < num; idx += 2) {
//     let spaces = ' '.repeat((num - idx) / 2);
//     let stars = '*'.repeat(idx);
//     console.log(spaces + stars);
//   }
//   for (let idx = num; idx >= 1; idx -= 2) {
//     let spaces = ' '.repeat((num - idx) / 2);
//     let stars = '*'.repeat(idx);
//     console.log(spaces + stars);
//   }
// }

// // second
// function diamond(num) {
//   for (let idx = 1; idx < num; idx += 2) {
//     generateRow(num, idx);
//   }
//   for (let idx = num; idx >= 1; idx -= 2) {
//     generateRow(num, idx);
//   }
// }

// function generateRow(num, idx) {
//   let spaces = ' '.repeat((num - idx) / 2);
//   let stars = '*'.repeat(idx);
//   console.log(spaces + stars);
// }

// based on theirs
function diamond(num) {
  let starSequence = getStarSequence(num);
  starSequence.forEach(elem => generateRow(num, elem));
}

function generateRow(num, idx) {
  let spaces = ' '.repeat((num - idx) / 2);
  let stars = '*'.repeat(idx);
  console.log(spaces + stars);
}

function getStarSequence(num) {
  let starSequence = [];
  let increment = 2;
  let currentNum = 1;

  while (currentNum > 0) {
    starSequence.push(currentNum);
    if (currentNum === num) increment = -2;
    currentNum += increment;
  }

  return starSequence;
}

// console.log(diamond(1));
// console.log(diamond(3));
console.log(diamond(9));