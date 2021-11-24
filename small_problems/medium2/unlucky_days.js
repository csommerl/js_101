// Unlucky Days https://launchschool.com/exercises/071f5a1a

// function fridayThe13ths(year) {
//   const FRIDAY = 5;
//   const MONTHS = 12;

//   let count = 0;

//   let date = new Date(year, 0, 13);
  
//   for (let idx = 1; idx <= MONTHS; idx += 1) {
//     if (date.getDay() === FRIDAY) count += 1;
//     date.setMonth(idx);
//   }

//   return count;
// }

function fridayThe13ths(year) {
  const FRIDAY = 5;
  const MONTHS = 12;
  const THIRTEENTH = 13;

  let count = 0;

  for (let month = 0; month < MONTHS; month += 1) {
    let date = new Date(year, month, THIRTEENTH);
    if (date.getDay() === FRIDAY) count += 1;
  }

  return count;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2