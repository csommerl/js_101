let flintstones = [
  "Fred", "Barney", "Wilma",
  "Betty", "Pebbles", "Bambam"
];

// function transform(arr) {
//   let obj = {};
  
//   arr.forEach((elem, idx) => obj[elem] = idx);
  
//   return obj;
// }

function transform(arr) {
  let obj = {};

  for (let idx = 0; idx < arr.length; idx += 1) {
    obj[arr[idx]] = idx;
  }

  return obj;
}

console.log(transform(flintstones));

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

