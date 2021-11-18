// Inventory Item Transactions https://launchschool.com/exercises/1e53cc84

// function transactionsFor(itemID, transactionList) {
//   let transactionsWithID = [];
//   transactionList.forEach(transaction => {
//     if (transaction['id'] === itemID) {
//       transactionsWithID.push(transaction);
//     }
//   });
//   return transactionsWithID;
// }

function transactionsFor(itemID, transactionList) {
  return transactionList
    .filter(transaction => transaction.id === itemID);
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
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]