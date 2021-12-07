const readline = require('readline-sync');

let answer = readline.prompt('Question?');

console.log(`Your answer is ${answer}.`);

// Difference between readline-sync's question & prompt?; question takes a question as an argument, whereas prompt doesn't. Prompt also begins the input line with '>'; js101