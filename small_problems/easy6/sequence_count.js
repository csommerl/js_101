// Sequence Count https://launchschool.com/exercises/cad01bcb

function sequence(count, startingNumber) {
  let arr = [];

  for (let idx = 1; idx <= count; idx += 1) {
    arr.push(idx * startingNumber);
  }

  return arr;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
