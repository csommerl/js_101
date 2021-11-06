// How Many? https://launchschool.com/exercises/705ea21f

let vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
];

// // original
// function countOccurrences(arr) {
//   let counts = {};

//   for (let idx = 0; idx < arr.length; idx += 1) {
//     counts[arr[idx]] ? counts[arr[idx]] += 1 : counts[arr[idx]] = 1;
//   }

//   for (let prop in counts) {
//     console.log(`${prop} => ${counts[prop]}`);
//   }
// }


let vehicles = [
  'CAR', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
];

// case insensitive
function countOccurrences(arr) {
  let counts = {};

  for (let idx = 0; idx < arr.length; idx += 1) {
    let item = arr[idx].toLowerCase();
    counts[item] = counts[item] || 0;
    counts[item] += 1;
  }

  for (let prop in counts) {
    console.log(`${prop} => ${counts[prop]}`);
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
