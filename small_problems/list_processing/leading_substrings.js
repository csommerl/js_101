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

// further exploration
function leadingSubstrings(str) {
  let chars = str.split('');
  
  let substrings = chars.map((char, idx, arr) => {
    if (idx === 0) return char;
    return arr[idx - 1] + char;
  })
  
  return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]