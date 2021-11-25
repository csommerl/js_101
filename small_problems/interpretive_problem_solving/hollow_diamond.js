function hollowDiamond(num) {
  let starSequence = getStarSequence(num);
  starSequence.forEach(row => generateRow(num, row));
}

function generateRow(num, row) {
  let spaces = ' '.repeat((num - row) / 2);
  let diamondBody = '*';
  if (row > 1) {
    diamondBody += ' '.repeat(row - 2) + '*';
  }
  console.log(spaces + diamondBody);
}

function getStarSequence(num) {
  let starSequence = [];
  let increment = 2;
  let currentNum = 1;

  while (currentNum > 0) {
    starSequence.push(currentNum);
    if (currentNum === num) increment = -2;
    currentNum += increment;
  }

  return starSequence;
}

console.log(hollowDiamond(1));
console.log(hollowDiamond(3));
console.log(hollowDiamond(9));