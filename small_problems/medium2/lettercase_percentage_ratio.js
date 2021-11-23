// Lettercase Percentage Ratio https://launchschool.com/exercises/71983fb9

// // initial
// function letterPercentages(str) {
//   let countsObj = {
//     lowercase: 0,
//     uppercase: 0,
//     neither: 0
//   };

//   let chars = str.split('');
//   chars.forEach(char => {
//     if (/[a-z]/.test(char)) {
//       countsObj.lowercase += 1;
//     } else if (/[A-Z]/.test(char)) {
//       countsObj.uppercase += 1;
//     } else {
//       countsObj.neither += 1;
//     }
//   })

//   let percentagesObj = {};
  
//   percentagesObj.lowercase = getPercentage(countsObj.lowercase, str.length);
//   percentagesObj.uppercase = getPercentage(countsObj.uppercase, str.length);
//   percentagesObj.neither = getPercentage(countsObj.neither, str.length);

//   return percentagesObj;
// }

// function getPercentage(count, total) {
//   return String(
//     (count / total * 100)
//     .toFixed(2)
//   );
// }

// // second
// function letterPercentages(str) {
//   let count = str.length;
  
//   let lowercaseMatches = str.match(/[a-z]/g) || [];
//   let uppercaseMatches = str.match(/[A-Z]/g) || [];
//   let neitherMatches = str.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: getPercentage(lowercaseMatches.length, count),
//     uppercase: getPercentage(uppercaseMatches.length, count),
//     neither: getPercentage(neitherMatches.length, count)
//   }
// }

// function getPercentage(count, total) {
//   return (count / total * 100).toFixed(2);
// }


// third
function letterPercentages(str) {
  let count = str.length;
  
  return {
    lowercase: ((str.match(/[a-z]/g) || []).length / count * 100).toFixed(2),
    uppercase: ((str.match(/[A-Z]/g) || []).length / count * 100).toFixed(2),
    neither: ((str.match(/[^a-z]/gi) || []).length / count * 100).toFixed(2)
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
