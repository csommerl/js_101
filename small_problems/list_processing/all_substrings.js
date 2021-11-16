// All Substrings https://launchschool.com/exercises/381f7129

// // mine
// function leadingSubstrings(str) {
//   let substrings = [];
//   let firstChar = 0;
  
//   for (let length = 1; length <= str.length; length += 1) {
//     let substr = str.slice(firstChar, length);
//     substrings.push(substr);
//   }
  
//   return substrings;
// }

// function substrings(str) {
//   let substrings = [];

//   for (let idx = 0; idx < str.length; idx += 1) {
//     let substrFromIdx = leadingSubstrings(str.slice(idx));
//     substrings = substrings.concat(substrFromIdx);
//   }

//   return substrings;
// }

// further exploration
function leadingSubstrings(str) {
  return str
    .split('')
    .map((char, idx) => {
      return str.slice(0, idx + 1);
    });
}

function substrings(str) {
  return str
    .split('')
    .map((char, idx) => {
      return leadingSubstrings(str.slice(idx));
    })
    .flat();
}


console.log(substrings('abcde'));
// returns [ "a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde", "c", "cd", "cde", "d", "de", "e" ]