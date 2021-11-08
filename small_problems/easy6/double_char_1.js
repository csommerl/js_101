// Double Char (Part 1) https://launchschool.com/exercises/b04f40e2

function repeater(str) {
  return str
    .split('')
    .map(char => char.repeat(2))
    .join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
