/*
https://launchschool.com/exercises/2ff0fcf7

*/

function transpose(nestedArr) {
  let originalNumOfRows = nestedArr.length;
  let originalNumOfColumns = nestedArr[0].length;

  const newArr = Array(originalNumOfColumns).fill(true).map(_ => []);

  for (let idx = 0; idx < newArr.length; ++idx) {
    let newRow = newArr[idx];

    nestedArr.forEach(originalRow => {
      let elem = originalRow[idx];
      newRow.push(elem);
    });
  }

  return newArr;
}

function rotate90(matrix) {
  return transpose(matrix).map(row => row.reverse());
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]