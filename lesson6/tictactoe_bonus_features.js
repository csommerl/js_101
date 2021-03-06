const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];
const MIDDLE_SQUARE = '5';
const PLAYS_FIRST = 'choose';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayInstructions() {
  prompt(`The first player to win ${GAMES_TO_WIN} games wins the overall match.`);
}

function updateScore(board, score) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    score[detectWinner(board)] += 1;
  } else {
    prompt('It\'s a tie!');
    score.Tied += 1;
  }

  prompt(`You have won ${score.Player} games, lost ${score.Computer} games, and tied ${score.Tied} games.`);
  prompt('Press any key to continue.');
  readline.keyIn();
}

function joinOr(arr, delimiter = ', ', finalConnector = 'or') {
  if (arr.length <= 1) {
    return arr.join('');
  } else if (arr.length === 2) {
    return `${arr[0]} ${finalConnector} ${arr[1]}`;
  } else {
    return arr.slice(0, arr.length - 1).join(delimiter) +
      `${delimiter}${finalConnector} ${arr[arr.length - 1]}`;
  }
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----|-----|-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----|-----|-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square from (${joinOr(emptySquares(board))}):`);
    square = readline.question();

    if (emptySquares(board).includes(square)) break;

    prompt('Sorry, that isn\'t a valid choice.');
  }

  board[square] = HUMAN_MARKER;
}

function detectVulnerableSquare(board, marker) {
  let vulnerableSquare = 0;

  emptySquares(board).forEach(emptySquare => {  // returns the last vulnerable square, since there is no break statement
    let testBoard = Object.assign({}, board);
    testBoard[emptySquare] = marker;
    if (someoneWon(testBoard)) vulnerableSquare = emptySquare;
  });

  return vulnerableSquare;
}

function computerChoosesSquare(board) {
  let square;

  // attempt to play middle square
  if (emptySquares(board).includes(MIDDLE_SQUARE)) square = MIDDLE_SQUARE;

  // attempt to play offense
  if (!square) square = detectVulnerableSquare(board, COMPUTER_MARKER);

  // attempt to play defense
  if (!square) square = detectVulnerableSquare(board, HUMAN_MARKER);

  // play random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER) return 'Player';

    if (board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER) return 'Computer';
  }

  return null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function getFirstPlayer() {
  let firstPlayer;
  while (true) {
    prompt('Choose who plays first: \'Player\' or \'Computer\'.');
    firstPlayer = readline.question();

    if (firstPlayer === 'Computer' || firstPlayer === 'Player') break;

    prompt('Sorry, that isn\'t a valid choice.');
  }
  return firstPlayer;
}

function playMatch() {
  let score = {Player: 0, Computer: 0, Tied: 0};

  let firstPlayer = PLAYS_FIRST;
  if (firstPlayer === 'choose') {
    firstPlayer = getFirstPlayer();
  }

  while (score.Player < GAMES_TO_WIN && score.Computer < GAMES_TO_WIN) {
    let board = initializeBoard();

    board = playGame(board, firstPlayer);

    displayBoard(board);
    updateScore(board, score);
  }
  console.clear();
  if (score.Player === GAMES_TO_WIN) {
    prompt('You win the game!');
  } else {
    prompt('You lost to the computer. :-(');
  }
}

function playGame(board, firstPlayer) {
  let currentPlayer = firstPlayer;

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }

  return board;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Player') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'Computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'Player' ? 'Computer' : 'Player';
}

// Main Program
while (true) {
  displayInstructions();
  playMatch();

  let playAgain;
  while (true) {
    prompt('Play again? y/n');
    playAgain = readline.question().toLowerCase();
    if (['y', 'n'].includes(playAgain)) break;
    prompt('Invalid input. Enter one of: "y" or "n".');
  }
  if (playAgain === 'n') break;

  console.clear();
}

prompt('Thanks for playing Tic Tac Toe!');