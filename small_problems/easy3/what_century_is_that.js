// What Century is That? https://launchschool.com/exercises/394e1c53

function century(year) {
  let centuryStr = String(Math.ceil(year / 100));
  
  if (['11', '12', '13'].includes(centuryStr)) {
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

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
