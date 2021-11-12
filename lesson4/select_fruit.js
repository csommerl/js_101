let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// function selectFruit(obj) {
//   let fruit = {};
  
//   for (let item in obj) {
//     if (obj[item] === 'Fruit') fruit[item] = 'Fruit';
//   }

//   return fruit;
// }

// function selectFruit(obj) {
//   let fruit = {};
//   let items = Object.keys(obj);
  
//   for (let idx = 0; idx < items.length; idx += 1) {
//     let item = items[idx];
//     if (obj[item] === 'Fruit') fruit[item] = 'Fruit';
//   }

//   return fruit;
// }

function selectFruit(obj) {
  let fruit = {};
  Object.assign(fruit, obj);
  
  for (let item in fruit) {
    if (fruit[item] !== 'Fruit') delete fruit[item];
  }

  return fruit;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }