// Grocery List https://launchschool.com/exercises/a8fc112c

// function buyFruit(arr) {
//   let list = [];

//   arr.forEach(item => {
//     let fruit = item[0];
//     let num = item[1];
//     let fruitlist = getFruitlist(fruit, num);
//     list = list.concat(fruitlist);
//   })

//   return list;
// }

// function getFruitlist(fruit, num) {
//   let list = [];
//   for (let idx = 0; idx < num; idx += 1) {
//     list.push(fruit);
//   }
//   return list;
// }

function buyFruit(arr) {
  return arr
    .map(fruit => repeat(fruit))
    .reduce((list, fruit) => list.concat(fruit), []);
}

function repeat(fruitAndQuantity) {
  let result = []
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];
  for (let idx = 0; idx < quantity; idx += 1) {
    result.push(fruit);
  }
  return result;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]