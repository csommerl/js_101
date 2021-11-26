// Seeing Stars https://launchschool.com/exercises/e41ecf03

function star(num) {
  let asterisks = '***';
  let paddingChar = ' ';
  let midPoint = Math.floor(num / 2);

  function makeRow(idx) {
    middlePaddingLength = (num - (idx * 2) - asterisks.length) / 2;

    firstPadding = paddingChar.repeat(idx);
    middlePadding = paddingChar.repeat(middlePaddingLength);

    console.log(firstPadding + asterisks[0] + middlePadding 
      + asterisks[1] + middlePadding + asterisks[2]);
  }

  for (let idx = 0; idx < midPoint; idx += 1) {
    makeRow(idx);
  }

  console.log(`${asterisks[0].repeat(num)}`);

  for (let idx = midPoint - 1; idx >= 0; idx -= 1) {
    makeRow(idx);
  }
}

star(7);
/* logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/

star(9);
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/