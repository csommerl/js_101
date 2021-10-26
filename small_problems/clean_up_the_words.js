/*
** Clean up the words
** https://launchschool.com/exercises/6ccbdf07
*/

function cleanUp(str) {
  let charArr = str.split('');
  let replacedCharsArr = charArr.map(char => char.replace(/\W/g, ' '));
  let noExtraSpacesArr = replacedCharsArr.filter((char, idx) => {
    return !(replacedCharsArr[idx - 1] === ' ' && char === ' ');
  });
  return noExtraSpacesArr.join('');
}

cleanUp("---what's my +*& line?");    // " what s my line "
