/*
** Clean up the words
** https://launchschool.com/exercises/6ccbdf07
*/

// function cleanUp(str) {
//   let charArr = str.split('');
//   let replacedCharsArr = charArr.map(char => char.replace(/\W/g, ' '));
//   let noExtraSpacesArr = replacedCharsArr.filter((char, idx) => {
//     return !(replacedCharsArr[idx - 1] === ' ' && char === ' ');
//   });
//   return noExtraSpacesArr.join('');
// }

function cleanUp(str) {
  let cleanedStr = '';
  for (let idx = 0; idx < str.length; idx++) {
    if (/[a-z]/.test(str[idx]) || /[A-Z]/.test(str[idx])) {
      cleanedStr += str[idx];
    } else if (cleanedStr[cleanedStr.length - 1] !== ' ') {
      cleanedStr += ' ';
    }
  }
  return cleanedStr;
}

cleanUp("---what's my +*& line?");    // " what s my line "
