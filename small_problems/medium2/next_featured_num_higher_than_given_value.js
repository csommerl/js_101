// Next Featured Number Higher than a Given Value https://launchschool.com/exercises/135a426a

// function featured(num) {
//   while (true) {
//     num += 1;
//     if (num > 9876543201) return "There is no possible number that fulfills those requirements.";
//     if (num % 2 !== 1) continue;
//     if (num % 7 !== 0) continue;
//     if (!hasUniqueDigits(num)) continue;
//     break;
//   }
//   return num;
// }

// function hasUniqueDigits(num) {
//   let digitArray = String(num).split('');
//   return digitArray.every((digit, idx, arr) => {
//     return !arr.slice(idx + 1).includes(digit);
//     // return arr.indexOf(digit) === arr.lastIndexOf(digit);
//   });
// }

// function featured(num) {
//   const MAX = 9876543201;
//   const MAX_MESSAGE = "There is no possible number that fulfills those requirements.";
//   let isOdd = num => num % 2 === 1;
//   let isDivisibleBy7 = num => num % 7 === 0;

//   while (true) {
//     num += 1;
//     if (num > MAX) return MAX_MESSAGE;
//     if (!isOdd(num)) continue;
//     if (!isDivisibleBy7(num)) continue;
//     if (!hasUniqueDigits(num)) continue;
//     break;
//   }
//   return num;
// }

// function hasUniqueDigits(num) {
//   let digitArray = String(num).split('');
//   return digitArray.every((digit, idx, arr) => {
//     return !arr.slice(idx + 1).includes(digit);
//   });
// }

// return arr.indexOf(digit) === arr.lastIndexOf(digit);

function featured(num) {
  const MAX = 9876543201;
  const MAX_MESSAGE = "There is no possible number that fulfills those requirements.";

  do {
    if (num >= MAX) return MAX_MESSAGE;
    num = nextOddMultipleOf7(num);
  } while (num <= MAX_MESSAGE && !hasUniqueDigits(num))

  return num;
}

function nextOddMultipleOf7(num) {
  let isOdd = num => num % 2 === 1;
  let isDivisibleBy7 = num => num % 7 === 0;
  do {
    num += 1;
  } while (!isOdd(num) || isDivisibleBy7(num))
  return num;
}

function hasUniqueDigits(num) {
  let digitArray = String(num).split('');
  let seen = {};

  for (let digit of digitArray) {
    if (seen[digit]) return false;
    seen[digit] = true;
  }
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
