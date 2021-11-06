// After Midnight (Part 1) https://launchschool.com/exercises/a8ee10fc

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

// // original
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

// with Date class
function timeOfDay(deltaMinutes) {
  let date = new Date(2021, 10, 7);
  let dateMilliseconds = date.valueOf();
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
