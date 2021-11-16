// Leading Substrings https://launchschool.com/exercises/50f14ae3

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

// // further exploration: map
// function leadingSubstrings(str) {
//   return str
//     .split('')
//     .map((char, idx) => {
//       return str.slice(0, idx + 1);
//     })
// }

// further exploration: reduce
function leadingSubstrings(str) {
  return str.split('').reduce((acc, char, idx) => {
    return idx > 0 ? [...acc].concat(acc[acc.length - 1] + char) : acc.concat(char);
  }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]