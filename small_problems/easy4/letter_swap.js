// Letter Swap https://launchschool.com/exercises/0d838471

// mine
// function swap(str) {
//   let words = str.split(' ');
//   let swappedWords = [];

//   for (let word of words) {
//     if (word.length > 1) {
//       let swappedWord =
//         word[word.length - 1]
//         + word.substring(1, word.length - 1)
//         + word[0];
//       swappedWords.push(swappedWord);
//     } else {
//       swappedWords.push(word);
//     }
//   }

//   return swappedWords.join(' ');
// }

// // redo
// function swap(str) {
//   let wordArray = str.split(' ');

//   for (let idx = 0; idx < wordArray.length; idx+= 1) {
//     let word = wordArray[idx];
//     if (word.length === 1) {
//       continue;
//     } else {
//       let swappedWord = 
//         word[word.length - 1]
//         + word.slice(1, -1)
//         + word[0];
//       wordArray[idx] = swappedWord;
//     }
//   }
//   return wordArray.join(' ');
// }

// with map
function swap(str) {
  let words = str.split(' ');

  let swappedWords = words.map(word => word = swapWord(word));
  
  return swappedWords.join(' ');
}

function swapWord(word) {
  if (word.length > 1) {
    word = word[word.length - 1] + word.slice(1, -1) + word[0];
  }
  return word;
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
