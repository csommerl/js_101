// List of Digits https://launchschool.com/exercises/6eb89adf

// // map
// function digitList(num) {
//   let stringArray = String(num).split('');
//   return stringArray.map(value => +value);
// }

// non-map
function digitList(num) {
  let stringArray = String(num).split('');
  let numArray = [];
  
  // stringArray.forEach(str => numArray.push(+str));

  // for (let str of stringArray) {
  //   numArray.push(+str);
  // }
  
  for (let idx = 0; idx < stringArray.length; idx += 1) {
    let digit = parseInt(stringArray[idx]);
    numArray.push(digit);
  }

  return numArray;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
