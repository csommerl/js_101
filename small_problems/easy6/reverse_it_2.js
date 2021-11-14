// Reverse It (Part 2) https://launchschool.com/exercises/2ecfaa4e

// function reverseWords(str) {
//   let wordsArr = str.split(' ');
//   let resultArr = [];

//   for (let idx = 0; idx < wordsArr.length; idx += 1) {
//     let word = wordsArr[idx];
//     if (word.length >= 5) {
//       word = reverseWord(word);
//     }
//     resultArr.push(word);
//   }

//   return resultArr.join(' ');
// }

function reverseWord(word) {
  return word.split('').reverse().join('');
}

function reverseWords(str) {
  let wordsArr = str.split(' ');
  let resultArr = wordsArr.map(word => {
    if (word.length >= 5) word = reverseWord(word);
    return word;
  })
  return resultArr.join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"