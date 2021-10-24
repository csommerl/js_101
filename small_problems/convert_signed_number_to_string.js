/*
** Convert a Signed Number to a String!
** https://launchschool.com/exercises/5fb347bd
*/

function integerToString(number) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  
  do {
    let remainder = number % 10;
  
    number = Math.floor(number / 10);
  
    result = DIGITS[remainder] + result;
  } while (number > 0)
  
  return result;
}

function signedIntegerToString(num) {

}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");