let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// let sum = 0;
// Object.values(ages).forEach(age => sum += age);
// console.log(sum);

let sum = Object.values(ages).reduce((sum, age) => sum + age, 0);
console.log(sum);