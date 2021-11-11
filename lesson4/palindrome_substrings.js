/* https://launchschool.com/lessons/60e10aa5/assignments/73c01de6

inputs: string
outputs: array of palindrome substrings

Explicit rules:
- identify palindrome substrings within a string
- palindromes are case sensitive

Implicit:
- substrings can be portions of longer words
- palindromes can be contained within other palindromes
- an empty array should be returned for strings that are empty or that don't contain palindromes

*/

function palindromeSubstrings(str) {
  let result = [];
  let substringArr = substrings(str);

  substringArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });
}

function substrings(str) {
  let result = [];
  let idx = 0;

  while (idx <= str.length - 2) {
    let numChars = 2;
    
    while (numChars <= str.length - idx) {
      let substring = str.slice(idx, idx + numChars);
      result.push(substring);
      numChars += 1;
    }
    
    idx += 1;
  }
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}