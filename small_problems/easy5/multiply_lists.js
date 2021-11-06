// Multiply Lists https://launchschool.com/exercises/f2543bd4

function multiplyList(arr1, arr2) {
  return arr1.map((value, idx) => {
    return value * arr2[idx];
  });
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
