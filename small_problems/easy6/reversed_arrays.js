// Reversed Arrays https://launchschool.com/exercises/9b855a60

// mine
function reverse(originalArr) {
  let reversedElems = [];

  while (originalArr.length > 0) {
    reversedElems.push(originalArr.pop());
  }

  reversedElems.forEach(elem => originalArr.push(elem));

  return originalArr;
}

// // theirs
// function reverse(arr) {
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;

//   while (leftIdx < arr.length / 2) {
//     [ arr[leftIdx], arr[rightIdx] ] = [ arr[rightIdx], arr[leftIdx] ];
//     leftIdx += 1;
//     rightIdx -= 1;
//   }

//   return arr;
// }

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true