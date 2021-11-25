// Longest Sentence https://launchschool.com/exercises/a89915a7

// function longestSentence(str) {
//   const PUNCTUATION = '.!?';
//   let longestSentence = '';
//   let currentSentence = '';
//   str.split('').forEach(char => {
//     currentSentence += char;
//     if (PUNCTUATION.includes(char) && currentSentence > longestSentence) {
//       longestSentence = currentSentence;
//       currentSentence = '';
//     }
//   });

//   console.log(`${longestSentence}\n` +
//   `\nThe longest sentence has ${longestSentence.split(' ').length} words.`);
// }

// // revised
// function longestSentence(str) {
//   const PUNCTUATION = '.!?';

//   let words = str.split(' ');
//   let current = [];
//   let longest = [];

//   words.forEach(word => {
//     current.push(word);
//     if (current.length > longest.length) longest = current;
//     if (PUNCTUATION.includes(word[word.length - 1])) current = [];
//   });

//   console.log(`${longest.join(' ')}\n`);
//   console.log(`The longest sentence has ${longest.length} words.\n`);
// }

// // based on theirs
// function longestSentence(str) {
//   let sentences = str.match(/\w.*?[.?!]/g);
//   let longest = '';
//   sentences.forEach(sentence => {
//     if (sentence.split(/\s/).length > longest.split(/\s/).length) longest = sentence;
//   });

//   console.log(`${longest}\n`);
//   console.log(`The longest sentence has ${longest.split(/\s/).length} words.\n`);
// }

// based on theirs
function longestSentence(str) {
  let sentences = str.match(/\w.*?[.?!]/g);
  let longest = sentences.reduce((longest, sentence) => {
    let sentenceLength = sentence.split(/\s/).length;
    if (sentenceLength > longest['length']) {
      return {content: sentence, length: sentenceLength};
    } else {
      return longest;
    }
  }
  , {content: '', length: 0}
  );

  console.log(`${longest['content']}\n`);
  console.log(`The longest sentence has ${longest['length']} words.\n`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.