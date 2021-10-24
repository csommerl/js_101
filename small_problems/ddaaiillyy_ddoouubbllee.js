/*
** ddaaiillyy ddoouubbllee
** https://launchschool.com/exercises/31e4c035
*/

// // mine
// function crunch(str) {
//   let result = '';
//   for (char of str) {
//     if (char !== result[result.length - 1]) {
//       result += char;
//     }
//   }
//   return result;
// }

// // theirs
// function crunch(text) {
//   let index = 0;
//   let crunchText = '';

//   while (index <= text.length - 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }

//     index += 1;
//   }

//   return crunchText;
// }

// with regex
function crunch(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let regexOfI = new RegExp(str[i]);
    if (result.length === 0) {
      result += str[0];
    } else if (!regexOfI.test(result[result.length - 1])) {
      result += str[i];
    }
  }
  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
