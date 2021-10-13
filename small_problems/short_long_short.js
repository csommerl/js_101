/*
Short Long Short: https://launchschool.com/exercises/c55f9982
*/

// function shortLongShort(str1, str2) {
//    if (str1.length < str2.length) {
//      return str1 + str2 + str1;
//    } else {
//      return str2 + str1 + str2;
//    }
// }

function shortLongShort(str1, str2) {
  let newStr = str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
  return newStr;
}



console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"