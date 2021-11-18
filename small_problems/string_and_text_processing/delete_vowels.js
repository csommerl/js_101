// Delete Vowels https://launchschool.com/exercises/8249329a

const LOWER_CASE_VOWELS_STR = 'aeiou';

function removeVowels(arr) {
  return arr.map(str => deleteVowels(str));
}

function deleteVowels(str) {
  return str.split('')
    .filter(char => !LOWER_CASE_VOWELS_STR.includes(char.toLowerCase()))
    .join('');
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
