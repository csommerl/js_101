/*
** Rock Paper Scissors
** https://launchschool.com/lessons/64655364/assignments/2ecb7012
*/

const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function getWinner(choice, computerChoice) {
  let winner;

  if (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')
  ) {
    winner = 'player';
  } else if (
    (choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')
  ) {
    winner = 'computer';
  } else {
    winner = 'tie';
  }

  return winner;
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('That\'s not a valid choice');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  let winner = getWinner(choice, computerChoice);
  if (winner === 'player') {
    prompt('You win!');
  } else if (winner === 'computer') {
    prompt('Computer wins!');
  } else if (winner === 'tie') {
    prompt('It\'s a tie');
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}