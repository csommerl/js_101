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

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'rock' && computerChoice === 'lizard') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'scissors' && computerChoice === 'lizard') ||
    (choice === 'lizard' && computerChoice === 'spock') ||
    (choice === 'lizard' && computerChoice === 'paper') ||
    (choice === 'spock' && computerChoice === 'scissors') ||
    (choice === 'spock' && computerChoice === 'rock')
  ) {
    prompt('You win!');
  } else if (
    (choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'rock' && computerChoice === 'spock') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'lizard') ||
    (choice === 'scissors' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'spock') ||
    (choice === 'lizard' && computerChoice === 'rock') ||
    (choice === 'lizard' && computerChoice === 'scissors') ||
    (choice === 'spock' && computerChoice === 'lizard') ||
    (choice === 'spock' && computerChoice === 'paper')
  ) {
    prompt('Computer wins!');
  } else {
    prompt('It\'s a tie');
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