let arr1 = ['ant', 'bear'];

let arr2 = arr1.map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

console.log(arr2)

let arr3 = arr1.map(elem => {
  if (elem.length > 3) {
    return elem;
  } else {
    return elem + elem;
  }
});

console.log(arr3);