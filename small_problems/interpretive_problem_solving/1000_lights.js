// 1000 Lights https://launchschool.com/exercises/4dfb6228

// function lightsOn(rounds) {
//   let switches = [];

//   for (let round = 1; round <= rounds; round += 1) {
//     for (let idx = round - 1; idx < rounds; idx += round) {
//       if (switches[idx]) {
//         switches[idx] = 0;
//       } else {
//         switches[idx] = 1;
//       }
//     }
//   }

//   let switchesOn = [];
//   switches.forEach((elem, idx) => {
//     if (elem) switchesOn.push(idx + 1);
//   });
//   return switchesOn;
// }

function lightsOn(rounds) {
  let switches = [];

  for (let round = 1; round <= rounds; round += 1) {
    for (let idx = round - 1; idx < rounds; idx += round) {
      switches[idx] = switches[idx] ? 0 : 1;
    }
  }

  let switchesOn = [];
  switches.forEach((lightSwitch, idx) => {
    if (lightSwitch) switchesOn.push(idx + 1);
  });
  return switchesOn;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]