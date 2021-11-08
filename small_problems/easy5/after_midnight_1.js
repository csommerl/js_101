// After Midnight (Part 1) https://launchschool.com/exercises/a8ee10fc

// // original
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

// function timeOfDay(num) {
//   while (num > MINUTES_PER_DAY) { // their solution is more elegant here
//     num -= MINUTES_PER_DAY;
//   }

//   while (num < 0) {
//     num += MINUTES_PER_DAY;
//   }

//   let hour = Math.floor(num / MINUTES_PER_HOUR);
//   let minutes = num % MINUTES_PER_HOUR;
  
//   return String(hour).padStart(2, '0') + ':' + String(minutes).padStart(2, '0');
// }

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");


// with Date class
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;
const DAYS_OF_WEEK = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday','Friday','Saturday'
]

function timeOfDay(deltaMinutes) {
  let date = new Date(2021, 10, 7);
  date.setMinutes(deltaMinutes);
  
  let day = DAYS_OF_WEEK[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();
  return day + ', ' +
    String(hour).padStart(2, '0') +
    ':'
    + String(minutes).padStart(2, '0');
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));
