// Get The Middle Character https://launchschool.com/exercises/3d371708

function centerOf(str) {
  let halfway = Math.floor(str.length / 2);
  if (str.length % 2 !== 0) {
    return str[halfway];
  } else {
    return str.slice((halfway - 1), (halfway + 1));
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
