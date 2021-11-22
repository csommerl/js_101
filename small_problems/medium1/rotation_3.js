// Rotation (Part 3) https://launchschool.com/exercises/3d704505

function rotateRightmostDigits(num, count) {
  let strOfDigits = String(num);
  
  let firstHalf = strOfDigits.slice(0, strOfDigits.length - count);
  let secondHalf = strOfDigits.slice(strOfDigits.length - count);

  let newString = firstHalf + rotateString(secondHalf);
  
  return Number(newString);
}

function rotateString(str) {
  return str.slice(1) + str[0];
}

// // with rotateString
// function maxRotation(num) {
//   let strOfDigits = String(num);

//   for (let idx = 0; idx < strOfDigits.length - 1; idx += 1) {
//     let firstHalf = strOfDigits.slice(0, idx);
//     let secondHalf = strOfDigits.slice(idx);
    
//     secondHalf = rotateString(secondHalf);
    
//     strOfDigits = firstHalf + secondHalf;
//   }

//   return Number(strOfDigits);
// }

// with rotateRightmostDigits
function maxRotation(num) {
  let strOfDigits = String(num);

  for (let idx = strOfDigits.length; idx > 1; idx -= 1) {
    strOfDigits = rotateRightmostDigits(strOfDigits, idx);
  }

  return Number(strOfDigits);
}


console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3));  // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105));  // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
