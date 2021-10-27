/*
** Right Triangles
** https://launchschool.com/exercises/ff51259d
*/

// mine
// function triangle(posInt) {
//   for (let numOfSpaces = posInt; numOfSpaces >= 0; numOfSpaces -= 1) {
//     console.log(' '.repeat(numOfSpaces) + '*'.repeat(posInt - numOfSpaces));
//   }
// }

function triangle(height) {
  let spaces = height;
  let stars = height - spaces;
  while (spaces >= 0) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    spaces = spaces - 1;
    stars = height - spaces;
  }
}

triangle(5);
triangle(9);
