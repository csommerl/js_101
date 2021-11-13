let statement = "The Flintstones Rock";
let frequencies = {};

// let charsInStatement = statement.split('').filter(char => char !== ' ');
// charsInStatement.forEach(char => {
//   if (frequencies[char]) {
//     frequencies[char] += 1;
//   } else {
//     frequencies[char] = 1;
//   }
// });

// let charsInStatement = statement.split('').filter(char => char !== ' ');
// charsInStatement.forEach(char => {
//   frequencies[char] = frequencies[char] || 0;
//   frequencies[char] += 1;
// })

// let charsInStatement = statement.split('').filter(char => char !== ' ');
// charsInStatement.forEach(char => {
//   if (Object.keys(frequencies).includes(char)) {
//     frequencies[char] += 1;
//   } else {
//     frequencies[char] = 1;
//   }
// });

for (let idx = 0; idx < statement.length; idx += 1) {
  let char = statement[idx];
  
  if (char === ' ') continue;
  
  frequencies[char] = frequencies[char] || 0;
  frequencies[char] += 1;
}

console.log(frequencies);
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }