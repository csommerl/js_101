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
const playerScore = {wins: 0, losses: 0, ties: 0};
const SHORT_INPUT_LENGTH = 1;
const WIN_SCORE = 3;


function prompt(message) {
  console.log(`=> ${message}`);
}

function getChoice() {
  let choice = readline.question();
  while (!VALID_CHOICES.includes(choice) &&
    !VALID_LETTER_CHOICES.includes(choice)) {
    prompt('That\'s not a valid choice');
    choice = readline.question();
  }

  if (choice.length === SHORT_INPUT_LENGTH) {
    choice = getFullWordChoice(choice);
  }

  return choice;
}

function getFullWordChoice(choice) {
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

function getWinner(choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    return 'player';
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    return 'computer';
  } else {
    return 'tie';
  }
}

function displayWinner(winner) {
  if (winner === 'player') {
    prompt('You win!');
  } else if (winner === 'computer') {
    prompt('Computer wins!');
  } else if (winner === 'tie') {
    prompt('It\'s a tie.');
  }
}

function updateScore(winner) {
  if (winner === 'player') {
    playerScore.wins += 1;
  } else if (winner === 'computer') {
    playerScore.losses += 1;
  } else if (winner === 'tie') {
    playerScore.ties += 1;
  }
}

function resetPlayerScore() {
  playerScore.wins = 0;
  playerScore.losses = 0;
  playerScore.ties = 0;
}

function playMatch() {
  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')} (alternatively: ${VALID_LETTER_CHOICES.join(', ')})`);

    let choice = getChoice();

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    let winner = getWinner(choice, computerChoice);
    displayWinner(winner);

    updateScore(winner);

    prompt(`So far, you have won ${playerScore.wins} times, lost ${playerScore.losses} times, and tied ${playerScore.ties} times.`);

    if (playerScore.wins === WIN_SCORE) {
      prompt('You win the match!');
      break;
    } else if (playerScore.losses === WIN_SCORE) {
      prompt('The computer wins the match!');
      break;
    }
  }
}

prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock! Each match against the computer is best out of 5.');
prompt('----------');
let matchNumber = 0;
while (true) {
  resetPlayerScore();
  matchNumber += 1;
  prompt(`Match #${matchNumber}`);
  playMatch();

  prompt('----------');
  prompt('Do you want to play another match (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
  console.clear();
}