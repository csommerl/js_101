// Counting Up https://launchschool.com/exercises/ac8ee7ae

// function sequence(num) {
//   let arr = [];
  
//   for (let idx = 1; idx <= num; idx += 1) {
//     arr.push(idx);
//   }
  
//   return arr;
// }

// attempt with map
function sequence(num) {
  let arr = Array(num);
  return arr.map((slot, idx) => idx + 1)
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
