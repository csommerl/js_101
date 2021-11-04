// Combining Arrays https://launchschool.com/exercises/fc3e7e81

// // original
// function union(arr1, arr2) {
//   let newArray = [];
  
//   arr1.forEach(elem => {
//     if (!newArray.includes(elem)) newArray.push(elem);
//   })
  
//   arr2.forEach(elem => {
//     if (!newArray.includes(elem)) newArray.push(elem);
//   })

//   return newArray;
// }

// // second
// function union(arr1, arr2) {
//   let newArray = [];
  
//   copyNonDupsTo(arr1, newArray);
//   copyNonDupsTo(arr2, newArray);
  
//   return newArray;
// }

// function copyNonDupsTo(fromArray, toArray) {
//   fromArray.forEach(elem => {
//     if (!toArray.includes(elem)) toArray.push(elem);
//   })
// }

// third
function union(...arrs) {
  let newArray = [];

  arrs.forEach(arr => copyNonDupsTo(arr, newArray));
  
  return newArray;
}

function copyNonDupsTo(fromArray, toArray) {
  fromArray.forEach(elem => {
    if (!toArray.includes(elem)) toArray.push(elem);
  })
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
