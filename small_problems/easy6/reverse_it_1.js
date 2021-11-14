// Reverse It (Part 1) https://launchschool.com/exercises/866dd469

// function reverseSentence(str) {
//   return str
//     .split(' ')
//     .reverse()
//     .join(' ');
// }

function reverseSentence(str) {
  let words = str.split(' ');
  let reversed = [];
  
  for (let idx = words.length - 1; idx >= 0; idx -= 1) {
    reversed.push(words[idx]);
  }

  return reversed.join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
