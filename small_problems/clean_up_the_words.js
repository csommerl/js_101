/*
** Clean up the words
** https://launchschool.com/exercises/6ccbdf07
*/

function cleanUp(str) {
  let strArr = str.split(' ');
  let replacedCharsArr = strArr.map(word => word.replace(/\W/g, ' '));
  return replacedCharsArr.join(' ');
}

cleanUp("---what's my +*& line?");    // " what s my line "
