function joinOr(arr, delimiter = ', ', finalConnector = 'or') {
  if (arr.length <= 1) {
    return arr.join('');
  } else if (arr.length === 2) {
    return `${arr[0]} ${finalConnector} ${arr[1]}`;
  } else {
    return arr.slice(0, arr.length - 1).join(delimiter) +
      `${delimiter}${finalConnector} ${arr[arr.length - 1]}`;
  }
}

// function joinOr(arr, delimiter = ', ', finalConnector = 'or') {
//   switch (arr.length) {
//     case 0:
//       return '';
//     case 1:
//       return `${arr[0]}`;
//     case 2:
//       return `${arr[0]} ${finalConnector} ${arr[1]}`;
//     default:
//       arr.slice(0, arr.length - 1).join(delimiter) +
//        `${delimiter}${finalConnector} ${arr[arr.length - 1]}`;
//   }
// }

// function joinOr(arr, delimiter = ', ', finalConnector = 'or') {
//   let delimitedArr = [];

//   if (arr.length <= 1) {
//     delimitedArr = arr;
//   } else if (arr.length === 2) {
//     delimitedArr.push(`${arr[0]} ${finalConnector} `);
//     delimitedArr.push(arr[1]);
//   } else {
//     arr.forEach((elem, idx) => {
//       if (idx === arr.length - 1) {
//         delimitedArr.push(`${finalConnector} ${elem}`);
//       } else {
//         delimitedArr.push(`${elem}${delimiter}`);
//       }
//     });
//   }

//   return delimitedArr.join('');
// }

// function joinOr(arr, delimiter = ', ', finalConnector = 'or') {
//   if (arr.length <= 1) {
//     return arr.join('');
//   } else if (arr.length === 2) {
//     return `${arr[0]} ${finalConnector} ${arr[1]}`;
//   } else {
//     let delimitedArr = [];
//     arr.forEach((elem, idx) => {  
//       if (idx === arr.length - 1) {
//         delimitedArr.push(`${finalConnector} ${elem}`);
//       } else {
//         delimitedArr.push(`${elem}${delimiter}`);
//       }
//     });
//     return delimitedArr.join('');
//   }
// }

console.log(joinOr([1, 2, 3])); // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; ')); // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));  // => ""
console.log(joinOr([5]));  // => "5"
console.log(joinOr([1, 2])); // => "1 or 2"