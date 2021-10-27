/*
** Squaring an Argument: https://launchschool.com/exercises/5a165802
** Using the multiply() function from the "Multiplying Two Numbers" problem,
** write a function that computes the square of its argument
** (the square is the result of multiplying a number by itself).
*/

// Assignment
const multiply = (num1, num2) => num1 * num2;
const square = num => multiply(num, num);
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Cube
const cube = num => multiply(multiply(num, num), num);
console.log(cube(5));

// Generalization
const powerToN = (base, exponent) => {
  result = base;
  for (let i = 1; i < exponent; i += 1) {
    result = multiply(result, base);
  }
  return result;
}