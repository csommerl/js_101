// How old is Teddy? https://launchschool.com/exercises/3043a86a

// // mine
// let age = Math.round((Math.random() * 100) + 20);
// console.log(`Teddy is ${age} years old!`);

// // based on theirs
// function randomBetween(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }
// console.log(`Teddy is ${randomBetween(20, 120)} years old!`);

// // What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to min was greater than max)?
// function randomBetween(num1, num2) {
//   let min;
//   let max;
//   if (num1 < num2) {
//     min = num1;
//     max = num2;
//   } else {
//     min = num2;
//     max = num1
//   }
//   return Math.round(Math.random() * (max - min) + min);
// }
// console.log(`Teddy is ${randomBetween(20, 120)} years old!`);


// What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to min was greater than max)?
function randomBetween(num1, num2) {
  let [min, max] = num1 < num2 ? [num1, num2] : [num2, num1];
  return Math.round(Math.random() * (max - min) + min);
}
console.log(`Teddy is ${randomBetween(20, 120)} years old!`);
