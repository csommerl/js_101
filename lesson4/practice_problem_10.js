let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// let minimumAge = Object.values(ages).sort().shift();

let ageValues = Object.values(ages);
let minimumAge = Math.min(...ageValues);

console.log(minimumAge);  // 10