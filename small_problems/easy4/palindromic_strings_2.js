// Palindromic Strings (Part 2) https://launchschool.com/exercises/5de57318

function isRealPalindrome(str) {
  str = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  let reverseStr = str
    .split('')
    .reverse()
    .join('');
  return str === reverseStr;
}


isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

isRealPalindrome('356652'); // false
