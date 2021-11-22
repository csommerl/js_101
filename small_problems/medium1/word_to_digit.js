// Word to Digit https://launchschool.com/exercises/9010f84f

// // with list processing strategy
// function wordToDigit(str) {
//   const NUM_WORDS_TO_DIGITS = {
//     'zero': '0',
//     'one': '1',
//     'two': '2',
//     'three': '3',
//     'four': '4',
//     'five': '5',
//     'six': '6',
//     'seven': '7',
//     'eight': '8',
//     'nine': '9'
//   }

//   let result = [];

//   str.split(' ').forEach(elem => {
//     if (NUM_WORDS_TO_DIGITS.hasOwnProperty(elem)) {
//       result.push(NUM_WORDS_TO_DIGITS[elem]);
//     } else {
//       result.push(elem);
//     }
//   });

//   return result.join(' ');
// }

// with regular expression
function wordToDigit(str) {
  const NUM_WORDS_TO_DIGITS = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  }

  Object.keys(NUM_WORDS_TO_DIGITS).forEach(numWord => {
    let regex = new RegExp('\\b' + numWord + '\\b', 'gi');
    str = str.replace(regex, NUM_WORDS_TO_DIGITS[numWord]);
  });

  return str;
}

// let testStr = 'Please call me at five five five one two three four. Thanks.';
// console.log(wordToDigit(testStr));  // "Please call me at 5 5 5 1 2 3 4. Thanks."
// console.log(testStr);


console.log(wordToDigit('The "eight" is one.'));