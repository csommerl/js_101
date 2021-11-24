// What Century is That? https://launchschool.com/exercises/394e1c53

function century(year) {
  let centuryStr = String(Math.ceil(year / 100));
  
  let hundredth = centuryStr.slice(centuryStr.length - 2);

  if (['11', '12', '13'].includes(hundredth)) {
    return centuryStr + 'th';
  }

  switch (centuryStr[centuryStr.length - 1]) {
    case '1':
      return centuryStr + 'st';
    case '2':
      return centuryStr + 'nd';
    case '3':
      return centuryStr + 'rd';
    default:
      return centuryStr + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

// From Deepak Karivelil
console.log(century(11001003));
// returns 110011st. It should return 110011th
// 11,001,003
// 1,001 => 11th

console.log(century(11001103));
// returns 110012nd. It should return 110012th


console.log(century(11001203));
// returns 110013rd. It should return 110013th