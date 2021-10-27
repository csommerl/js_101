/*
** Convert a Signed Number to a String!
** https://launchschool.com/exercises/5fb347bd
*/

function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  
  do {
    let remainder = num % 10;
  
    num = Math.floor(num / 10);
  
    result = DIGITS[remainder] + result;
  } while (num > 0)
  
  return result;
}

function signedIntegerToString(num) {
  switch (Math.sign(num)) {
    case -1:
      return `-${integerToString(-num)}`;
    case 0:
      return integerToString(num);
    case 1:
      return `+${integerToString(num)}`;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
