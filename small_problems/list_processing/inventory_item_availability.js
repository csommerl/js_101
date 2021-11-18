// Inventory Item Availability https://launchschool.com/exercises/fa70703d

function transactionsFor(itemID, transactionList) {
  return transactionList
    .filter(transaction => transaction.id === itemID);
}

// function isItemAvailable(itemID, transactionList) {
//   let itemTransactions = transactionsFor(itemID, transactionList);
//   let stock = 0;
//   itemTransactions.forEach(transaction => {
//     if (transaction.movement === 'in') {
//       stock += transaction.quantity;
//     } else {
//       stock -= transaction.quantity;
//     }
//   });
//   return stock > 0;
// }

function isItemAvailable(itemID, transactionList) {
  let quantity = transactionsFor(itemID, transactionList)
    .reduce((sum, transaction) => {
      if (transaction.movement === 'in') {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    });
  return quantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true