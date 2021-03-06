// Bubble Sort https://launchschool.com/exercises/b648e695

// // first version
// function bubbleSort(arr) {
//   while (!arr.every((elem, idx) => {
//     if (idx === arr.length - 1) return true;
//     return arr[idx] < arr[idx + 1];
//   })) {
//     oneIterationOfBubbleSort(arr);
//   }
// }

// function oneIterationOfBubbleSort(arr) {
//   for (let idx = 0; idx < arr.length - 1; idx += 1) {
//     if (arr[idx] > arr[idx + 1]) {
//       arr.splice(idx, 2, arr[idx + 1], arr[idx]);
//     }
//   }
// }

// // second version
// function bubbleSort(arr) {
//   let swapped = true;
//   while (swapped) {
//     swapped = false;
//     for (let idx = 0; idx < arr.length - 1; idx += 1) {
//       if (arr[idx] > arr[idx + 1]) {
//         swapped = true;
//         arr.splice(idx, 2, arr[idx + 1], arr[idx]);
//       }
//     }
//   }
// }

// // third version
// function bubbleSort(arr) {
//   while (true) {
//     let swapped = false;
//     for (let idx = 0; idx < arr.length - 1; idx += 1) {
//       if (arr[idx] > arr[idx + 1]) {
//         swapped = true;
//         arr.splice(idx, 2, arr[idx + 1], arr[idx]);
//       }
//     }
//     if (!swapped) break;
//   }
// }

// // fourth version
// function bubbleSort(arr) {
//   while (true) {
//     let swapped = false;
//     for (let idx = 0; idx < arr.length - 1; idx += 1) {
//       if (arr[idx] > arr[idx + 1]) {
//         swapped = true;
//         [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
//       }
//     }
//     if (!swapped) break;
//   }
// }

// fifth version
function bubbleSort(arr) {
  while (true) {
    let swapped = false;
    for (let idx = 1; idx < arr.length; idx += 1) {
      if (arr[idx] >= arr[idx - 1]) continue;
      swapped = true;
      [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
    }
    if (!swapped) break;
  }
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]