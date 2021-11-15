// Alphabetical Numbers https://launchschool.com/exercises/6a49d690

// // mine
// function alphabeticNumberSort(arr) {
//   const NUMBER_WORDS_ARRAY = [
//     'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
//     'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
//     'sixteen', 'seventeen', 'eighteen', 'nineteen'
//   ];

//   const numToWords = {
//     0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
//     7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
//     13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
//     17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
//   };

//   const alphaNumWords = [...NUMBER_WORDS_ARRAY].sort();

//   let result = [];

//   arr.forEach(num => {
//     let word = numToWords[num];
//     let idx = alphaNumWords.indexOf(word);
//     result[idx] = num;
//   });

//   return result;
// }

// // Based on theirs
// const NUMBER_WORDS_ARRAY = [
//   'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
//   'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
//   'sixteen', 'seventeen', 'eighteen', 'nineteen'
// ];

// function alphabeticNumberSort(arr) {
//   return [...arr].sort(numSort);
// }

// function numSort(num1, num2) {
//   if (NUMBER_WORDS_ARRAY[num1] < NUMBER_WORDS_ARRAY[num2]) {
//     return -1;
//   } else if (NUMBER_WORDS_ARRAY[num2] < NUMBER_WORDS_ARRAY[num1]) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// further exploration
const NUMBER_WORDS_ARRAY = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

function alphabeticNumberSort(arr) {
  return [...arr].sort((num1, num2) => {
    if (NUMBER_WORDS_ARRAY[num1] < NUMBER_WORDS_ARRAY[num2]) {
      return -1;
    } else if (NUMBER_WORDS_ARRAY[num2] < NUMBER_WORDS_ARRAY[num1]) {
      return 1;
    } else {
      return 0;
    }    
  });
}

let numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
];

let alphabeticalNumbers = alphabeticNumberSort(numbers);
console.log(alphabeticalNumbers);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

console.log(numbers);