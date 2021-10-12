// Mine
// let rlSync = require('readline-sync');
// console.log('Enter the length of the room in meters:');
// let lengthInMeters = rlSync.prompt();
// console.log('Enter the width of the room in meters:');
// let widthInMeters = rlSync.prompt();

// let squareMeters = lengthInMeters * widthInMeters;
// let squareFeet = squareMeters * 10.7639;

// console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).
// `);


// // Theirs
// const SQMETERS_TO_SQFEET = 10.7639;
// let rlSync = require('readline-sync');

// console.log('Enter the length of the room in meters:');
// let lengthInMeters = parseFloat(rlSync.prompt());

// console.log('Enter the width of the room in meters:');
// let widthInMeters = parseFloat(rlSync.prompt());

// let squareMeters = lengthInMeters * widthInMeters;
// let squareFeet = squareMeters * SQMETERS_TO_SQFEET;

// console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).
// `);

// Further exploration
const SQMETERS_TO_SQFEET = 10.7639;
let readlineSync = require('readline-sync');

console.log('Enter the measurment unit: meters or feet:')
let measurementUnit = readlineSync.prompt();

console.log('Enter the length of the room in your chosen measurement unit:');
let length = parseFloat(readlineSync.prompt());

console.log('Enter the width of the room in your chosen measurement unit:');
let width = parseFloat(readlineSync.prompt());

let squareMeters;
let squareFeet;

if (measurementUnit === 'meters') {
  squareMeters = length * width;
  squareFeet = squareMeters * SQMETERS_TO_SQFEET;
  console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`);
} else {
  squareFeet = length * width;
  squareMeters = squareFeet / SQMETERS_TO_SQFEET;
  alternativeMeasurement = 'meters';
  console.log(`The area of the room is ${squareFeet.toFixed(2)} square feet (${squareMeters.toFixed(2)} square meters).`);
}