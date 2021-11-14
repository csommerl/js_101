// Matching Parentheses? https://launchschool.com/exercises/541d0500

// // mine
// function isBalanced(str) {
//   let strOpenPar = str.match(/\(/g) ? str.match(/\(/g).length : 0;
//   let strClosePar = str.match(/\)/g) ? str.match(/\)/g).length : 0;

//   if (strOpenPar !== strClosePar) return false;
  
//   for (let idx = 0; idx <= str.length; idx += 1) {
//     let substr = str.slice(0, idx);
//     let substrOpenPar = substr.match(/\(/g) ? substr.match(/\(/g).length : 0;
//     let substrClosePar = substr.match(/\)/g) ? substr.match(/\)/g).length : 0;
//     if (substrClosePar > substrOpenPar) return false;
//   }
  
//   return true;
// }

// // based on theirs
// function isBalanced(str) {
//   let parCount = 0;

//   for (let idx = 0; idx < str.length; idx += 1) {
//     if (str[idx] === '(') parCount += 1;
//     if (str[idx] === ')') parCount -= 1;
//     if (parCount < 0) return false;
//   }

//   return parCount === 0;
// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// further exploration
function charIsBalanced(str, leftChar, rightChar) {
  let count = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === leftChar) count += 1;
    if (str[idx] === rightChar) count -= 1;
    if (count < 0) return false;
  }

  return count === 0;
}

function allIsBalanced(str) {
  return charIsBalanced(str, '(', ')') && 
    charIsBalanced(str, '[', ']') &&
    charIsBalanced(str, '{', '}') &&
    charIsBalanced(str, '"', '"') &&
    charIsBalanced(str, "'", "'");
}

// note that this doesn't take into account whether they are nested correctly!

console.log(allIsBalanced("What '([is)]' this?") === true);
console.log(allIsBalanced("What is] this?") === false);
console.log(allIsBalanced("What (is this?") === false);
console.log(allIsBalanced("((What) (is this))?") === true);
console.log(allIsBalanced("((What)) (is this))?") === false);
console.log(allIsBalanced("Hey!") === true);
console.log(allIsBalanced(")Hey!(") === false);
console.log(allIsBalanced("What ((is))) up(") === false);