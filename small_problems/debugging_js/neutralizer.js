// Neutralizer https://launchschool.com/exercises/5d853595

// function neutralize(sentence) {
//   let words = sentence.split(" ");
//   let newSentence = [];

//   words.forEach(word => {
//     if (!isNegative(word)) newSentence.push(word);
//   });

//   return newSentence.join(" ");
// };

function neutralize(sentence) {
  return sentence
    .split(' ')
    .filter(word => !isNegative(word))
    .join(' ');
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.