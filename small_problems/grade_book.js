/*
** Grade Book
** https://launchschool.com/exercises/257a77fb
*/

// // mine 1
// function getGrade(num1, num2, num3) {
//   let avg = getAverage([num1, num2, num3]);
//   if (avg >= 90) {
//     return 'A';
//   } else if (avg >= 80) {
//     return 'B';
//   } else if (avg >= 70) {
//     return 'C';
//   } else if (avg >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// function getAverage(arr) {
//   let sum = 0;
//   arr.forEach(num => sum += num);
//   return sum / arr.length;
// }

/////////////////////////////

// // Other versions of average

// function getAverage(...scores) {
//   let sum = 0;
//   [...scores].forEach(score => sum += score);
//   return sum / [...scores].length;
// }

// function getAverage(...scores) {
//   let sum = (num1, num2) => num1 + num2;
//   return [...scores].reduce(sum) / [...scores].length;
// }

// my new one
const LETTER_GRADE_MIN_SCORES = {A: 90, B: 80, C: 70, D: 60};

function getAverage(...scores) {
  let sum = (num1, num2) => num1 + num2;
  return [...scores].reduce(sum) / [...scores].length;
}

function getGrade(...scores) {
  let avg = getAverage(...scores);
  if (avg >= LETTER_GRADE_MIN_SCORES['A']) return 'A';
  if (avg >= LETTER_GRADE_MIN_SCORES['B']) return 'B';
  if (avg >= LETTER_GRADE_MIN_SCORES['C']) return 'C';
  if (avg >= LETTER_GRADE_MIN_SCORES['D']) return 'D';
  return 'F';
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
