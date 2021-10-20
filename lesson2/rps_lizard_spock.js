/*
** Rock Paper Scissors: Lizard Spock
** https://launchschool.com/lessons/64655364/assignments/9a13e511
** Scissors cuts Paper covers Rock crushes
** Lizard poisons Spock smashes Scissors
** decapitates Lizard eats Paper disproves
** Spock vaporizes Rock crushes Scissors.
*/

const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors',  'lizard'],
  paper:    ['rock',      'spock'],
  scissors: ['paper',     'lizard'],
  lizard:   ['paper',     'spock'],
  spock:    ['rock',     'scissors'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    prompt('You win!');
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    prompt('Computer wins!');
  } else {
    prompt('It\'s a tie.');
  }
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

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}