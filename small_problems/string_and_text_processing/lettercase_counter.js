// Lettercase Counter https://launchschool.com/exercises/6a9bb11e

// function letterCaseCount(str) {
//   let counts = {lowercase: 0, uppercase: 0, neither: 0};

//   str.split('').forEach(char => {
//     let lowercaseChar = char.toLowerCase();
//     let uppercaseChar = char.toUpperCase();
//     if (lowercaseChar === uppercaseChar) {
//       counts.neither += 1;
//     } else if (char === lowercaseChar) {
//       counts.lowercase += 1;
//     } else {
//       counts.uppercase += 1;
//     }
//   });

//   return counts;
// }

// function letterCaseCount(str) {
//   let counts = {lowercase: 0, uppercase: 0, neither: 0};

//   for (let idx = 0; idx < str.length; idx += 1) {
//     let char = str[idx];
//     if (char >= 'a' && char <= 'z') {
//       counts.lowercase += 1;
//     } else if (char >= 'A' && char <= 'Z') {
//       counts.uppercase +=1;
//     } else {
//       counts.neither += 1;
//     }
//   }

//   return counts;
// }

function letterCaseCount(str) {
  let lowercaseChars = str.match(/[a-z]/g) || [];
  let uppercaseChars = str.match(/[A-Z]/g) || [];
  let neitherChars = str.match(/[^a-zA-Z]/g) || [];
  
  return {lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }