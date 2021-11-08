// After Midnight (Part 2) https://launchschool.com/exercises/4533932c

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(str) {
  let [hour, minutes] = getHourAndMinutes(str);
  return (hour * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(str) {
  let [hour, minutes] = getHourAndMinutes(str);
  return (MINUTES_PER_DAY - ((hour * MINUTES_PER_HOUR + minutes))) % MINUTES_PER_DAY;
}

function getHourAndMinutes(str) {
  let timeArray = str.split(':');
  let hour = +timeArray[0];
  let minutes = +timeArray[1];
  return [hour, minutes];
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
