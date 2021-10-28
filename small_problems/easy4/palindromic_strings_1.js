// Palindromic Strings (Part 1) https://launchschool.com/exercises/a0491d16

function isPalindrome(str) {
  let reverseStr = str
    .split('')
    .reverse()
    .join('');
  return str === reverseStr;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
