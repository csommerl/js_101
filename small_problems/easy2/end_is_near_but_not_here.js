/*
** The End Is Near But Not Here: https://launchschool.com/exercises/e05e5eee
** Write a function that returns the next to last word in the String passed to it as an argument.
** Words are any sequence of non-blank characters.
** You may assume that the input String will always contain at least two words.
*/

function penultimate(str) {
  let words = str.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
** Further exploration
** Our solution ignored a couple of edge cases because we explicitly stated that you didn't have to handle them:
** strings that contain just one word, and strings that contain no words.

** Suppose we need a function that retrieves the middle word of a phrase/sentence.
** What edge cases need to be considered?
** How would you handle those edge cases without ignoring them?
** Write a function that returns the middle word of a phrase or sentence.
** It should handle all of the edge cases you thought of.
*/

/*
Edge Cases
- string contains 0 words
- string contains 1 word
- string contains 2 words
- string contains an even number of words

Also test for odd number of words: 3 & 7

- another possible edge case: more than one space between words
*/

function middleWord(str) {
  let wordArray = str.split(' ');
  if (wordArray.length % 2) { // if odd
    if (wordArray[0] === '') return '" "'
    else return wordArray[Math.floor(wordArray.length / 2)]
  } else { // if even
    return wordArray[(wordArray.length / 2) - 1] + ' ' + wordArray[wordArray.length / 2];
  }
}

console.log(middleWord('')); // > ''
console.log(middleWord('electric')); // > 'electric'
console.log(middleWord('Agharta Prelude')); // > 'Agharta Prelude'
console.log(middleWord('Castor and Pollux')); // > 'and'
console.log(middleWord('I fall in love too easily')); // > 'in love'
console.log(middleWord('You drink way too much coffee daily')); // > 'too'