let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function printGroceryList(obj) {
  let items = Object.entries(obj);
  items.forEach(keyValue => {
    // let key = keyValue[0];
    // let value = keyValue[1];
    let [ key, value ] = keyValue;
    console.log(`${key[0].toUpperCase() + key.slice(1)} is a ${value}.`);
  });
}

printGroceryList(produce);