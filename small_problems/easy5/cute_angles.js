// Cute Angles https://launchschool.com/exercises/45794622

function dms(num) {
  while (num < 0) {
    num += 360;
  }

  while (num > 360) {
    num -= 360;
  }

  let degrees = Math.floor(num);
  let minutes = Math.floor((num - degrees) * 60);
  let seconds = Math.floor((((num - degrees) * 60) - minutes) * 60);
  return String(degrees) + '˚' + String(minutes).padStart(2, '0') + "'" + String(seconds).padStart(2, '0') + '"';
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
