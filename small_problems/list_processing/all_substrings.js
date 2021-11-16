// All Substrings https://launchschool.com/exercises/381f7129

function leadingSubstrings(str) {
  let substrings = [];
  let firstChar = 0;
  
  for (let length = 1; length <= str.length; length += 1) {
    let substr = str.slice(firstChar, length);
    substrings.push(substr);
  }
  
  return substrings;
}

function substrings(str) {

}


console.log(substrings('abcde'));
// returns [ "a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde", "c", "cd", "cde", "d", "de", "e" ]