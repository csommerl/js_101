let readline = require('readline-sync');

while (true) {
  console.log('Continue? (y/n)');
  if (readline.question() === 'n') break;
}