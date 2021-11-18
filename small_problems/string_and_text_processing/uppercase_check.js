// Uppercase Check https://launchschool.com/exercises/59cd044d

function isUppercase(str) {
  return str === str.toUpperCase();
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
