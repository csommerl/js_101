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
const VALID_LETTER_CHOICES = VALID_CHOICES.map(choice => choice[0]);

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
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

function getFullChoice(choice) {
  let possibleMatches = [];

  VALID_CHOICES.forEach(option => {
    if (option[0] === choice) possibleMatches.push(option);
  });

  if (possibleMatches.length === 1) {
    return possibleMatches[0];
  } else {
    prompt('More than one possible choice begins with that letter. Type the full word.');
    choice = readline.question();
    choice = validateFullWordChoice(choice);
    return choice;
  }
}

function validateFullWordChoice(choice) {
  while (!VALID_CHOICES.includes(choice)) {
    prompt('That\'s not a valid choice');
    choice = readline.question();
  }
  return choice;
}

function validateChoice(choice) {
  while (!VALID_CHOICES.includes(choice) &&
    !VALID_LETTER_CHOICES.includes(choice)) {
    prompt('That\'s not a valid choice');
    choice = readline.question();
  }
  return choice;
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')} (alternatively: ${VALID_LETTER_CHOICES.join(', ')})`);
  let choice = readline.question();

  choice = validateChoice(choice);

  if (choice.length === 1) {
    choice = getFullChoice(choice);
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