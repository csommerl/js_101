// Palindromic Numbers https://launchschool.com/exercises/c16de937

function isPalindromicNumber(int) {
  let str = String(int);
  let reverseStr = str
    .split('')
    .reverse()
    .join('');
  return str === reverseStr;
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
