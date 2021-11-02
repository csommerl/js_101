let munstersDescription = "The Munsters are creepy and spooky.";

// // mine
// let arr = munstersDescription.split('');
// let result = '';
// for (let char of arr) {
//   result += char !== char.toLowerCase() ? char.toLowerCase() : char.toUpperCase();
// }

// based on theirs
munstersDescription.split('').map(char => {
  return char !== char.toLowerCase() ? char.toLowerCase() : char.toUpperCase()
}).join('');
