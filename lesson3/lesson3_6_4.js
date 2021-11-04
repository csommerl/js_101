// problem one: doesn't return false condition
// problem two: doesn't handle the case when the input string has more or less than 4 components  

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  
  if (dotSeparatedWords.length !== 4) return false;
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

// // mine
// function isAnIpNumber(word) {
//   return Number(word) >= 0 && Number(word) <= 255;
// }

// theirs
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    return Number(str) >= 0 && Number(str) <= 255;
  }
  return false;
}