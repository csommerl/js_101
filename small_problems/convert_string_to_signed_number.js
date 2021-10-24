/*
** Convert a String to a Signed Number!
** https://launchschool.com/exercises/6974d7f2
*/

function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  
  let digits = str
    .split('')
    .map(digit => DIGITS[digit]);
  
  let convertDigitsToInteger = (num1, num2) => num1 * 10 + num2;
  let integer = digits.reduce(convertDigitsToInteger);
  return integer;
}

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '+':
      return stringToInteger(str.slice(1));
    case '-':
      return -1 * stringToInteger(str.slice(1));
    default:
      return stringToInteger(str);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
