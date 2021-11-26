// Now I Know My ABCs https://launchschool.com/exercises/d219156d

// const SPELLING_BLOCKS = [
//   ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
//   ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
//   ['V', 'I'], ['L', 'Y'], ['Z', 'M']
// ]

// const SPELLING_BLOCKS = [
//   'BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'
// ];

// function isBlockWord(word) {
//   let blocks = [...SPELLING_BLOCKS];
//   let result = true;
//   word.toUpperCase().split('').forEach(char => {
//     if (!charInBlocks(char, blocks)) result = false;
//   });
//   return result;
// }

// function charInBlocks(char, blocks) {
//   for (let idx = 0; idx < blocks.length; idx += 1) {
//     let block = blocks[idx];
//     if (block.includes(char)) {
//       blocks.splice(idx, 1);
//       return true;
//     }
//   }
//   return false;
// }

function isBlockWord(word) {
  let blocks = [
    'BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'
  ];
  
  let letters = word.toUpperCase().split('');

  for (let idx = 0; idx < letters.length; idx += 1) {
    
  }

}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false




// deep copy
// function getBlocks(arr) {
//   let blocks = [];
//   arr.forEach(subarray => blocks.push([...subarray]));)
//   return blocks;
// }