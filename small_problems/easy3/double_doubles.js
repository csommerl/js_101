/*
** Double Doubles
** https://launchschool.com/exercises/583b8edb
*/

function twice(int) {
  let str = String(int);
  let midpoint = str.length / 2;
  let firstHalf = str.slice(0, midpoint);
  let secondHalf = str.slice(midpoint);
  return firstHalf === secondHalf ? int : int * 2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
