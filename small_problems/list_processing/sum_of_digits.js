// Sum Of Digits https://launchschool.com/exercises/4a471ab8

function sum(int) {
  return int.toString()
    .split('')
    .map(digit => parseInt(digit))
    .reduce((sum, digit) => sum + digit, 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45