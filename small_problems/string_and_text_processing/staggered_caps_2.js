// Staggered Caps (Part 2) https://launchschool.com/exercises/f6b29024

function staggeredCaseOnlyLetters(str) {
  let alphaCharCount = 0;
  return str
    .split('')
    .map((char) => {
      if (!/[a-z]/gi.test(char)) {
        return char;
      } else if (alphaCharCount % 2 === 0) {
        alphaCharCount += 1;
        return char.toUpperCase();
      } else {
        alphaCharCount += 1;
        return char.toLowerCase();
      }
    })
    .join('');
}

function staggeredCaseAllChars(str) {
  return str
    .split('')
    .map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}

function staggeredCase(str, ignoreNonAlpha = true) {
  return ignoreNonAlpha ? staggeredCaseOnlyLetters(str)
    : staggeredCaseAllChars(str);
}

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

console.log(staggeredCase("ignore 77 the 444 numbers"));
console.log(staggeredCase("ignore 77 the 444 numbers", false));