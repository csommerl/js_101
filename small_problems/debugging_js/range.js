// Range https://launchschool.com/exercises/ca783829

// When only a single argument is provided, that argument should be used as the ending number 
// and the starting number should be 0.

function range(start, end = -1) {
  if (end === -1) {
    end = start;
    start = 0;
  }

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));