// https://launchschool.com/lessons/60e10aa5/assignments/d70a34e0

function sumEvenNumberRow(rowNumber) {
  
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  
  return row;
}

console.log(sumEvenNumberRow(1));   // 2
console.log(sumEvenNumberRow(2));   // 10
console.log(sumEvenNumberRow(4));   // 68

console.log(createRow(2, 1));   // [2]
console.log(createRow(4, 2));   // [4, 6]
console.log(createRow(8, 3));   // [8, 10, 12]
