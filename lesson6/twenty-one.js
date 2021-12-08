// Twenty-One https://launchschool.com/lessons/fb4809a8/assignments/62238c60

/*
** I have lots of functiond dependent on other functions,
** which are in turn dependent on still other functions.
** I worry that it becomes difficult to track the program's logic.
** Should I not try to create so many functions?
** Maybe instead I should have one main game loop, as in the sample solution?
** Another worry: functions have multiple side effects, since they are nested.
*/

const readline = require('readline-sync');

const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
const FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
const VALUES = PIP_CARDS.concat(FACE_CARDS);
const PLAYERS = ['Dealer', 'You'];  // this and how data is stored is designed to add potentially other computer players, perhaps adding needless complexity for two players!
const DEAL_FIRST_IDX = 1;
const INITIAL_HAND_SIZE = 2;
const DEALER_MINIMUM_PLAY = 17;
const DIVIDER = '--------------------';
const MAX_VALID_SCORE = 21;
const GAME_NAME = 'Twenty-One';
const GAMES_TO_WIN = 5;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function divider() {  /// Question: when should global constants be passed or not to arguments?
  console.log(DIVIDER);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function dealHands(cardsObj, playersArr) {
  playersArr.forEach(function(player) {
    cardsObj[player] = [];
  });

  let dealNextIdx = DEAL_FIRST_IDX; // this and the following simulate how cards are dealt one at a time back-and-forth

  for (let idx = 0; idx < playersArr.length * INITIAL_HAND_SIZE; idx += 1) {
    let player = playersArr[dealNextIdx];
    let playerHand = cardsObj[player];
    let card = drawCard(cardsObj.deck);
    playerHand.push(card);
    dealNextIdx = dealNextIdx === playersArr.length - 1 ? 0 : dealNextIdx + 1; // generalized for more than two players
  }
}

function drawCard(deck) {
  return deck.pop();
}

function joinAnd(arr, delimiter = ', ', finalConnector = 'and') {
  if (arr.length <= 1) {
    return arr.join('');
  } else if (arr.length === 2) {
    return `${arr[0]} ${finalConnector} ${arr[1]}`;
  } else {
    return arr.slice(0, arr.length - 1).join(delimiter) +
      `${delimiter}${finalConnector} ${arr[arr.length - 1]}`;
  }
}

function formatHandDisplay(hand, player, hidden) {
  let values = [];

  hand.forEach((card, idx) => {
    if (player !== 'You' && idx > 0 && hidden) {
      values.push('unknown card');
    } else {
      let value = card[1];
      let suit = card[0];
      values.push(`${value} of ${suit}`);
    }
  });

  return joinAnd(values);
}

function displayHands(cardsObj, playersArr, hidden) {
  divider();
  playersArr.forEach(player => {
    let haveConjugation = player === 'You' ? 'have' : 'has';
    let hand = formatHandDisplay(cardsObj[player], player, hidden);
    let score = hidden && player === 'Dealer' ? '?????' : calculateScore(cardsObj[player]);
    prompt(`${player} ${haveConjugation}: ${hand}, for a score of ${score}`);
  });
}

function calculateScore(hand) {
  let score = 0;

  hand.forEach(card => {
    let cardValue = card[1];  // second card element is the value
    if (FACE_CARDS.slice(0, 3).includes(cardValue)) { // what to do with face cards besides aces
      score += 10;
    } else if (cardValue === FACE_CARDS[3]) { // what do initially with aces
      score += 11;
    } else {
      score += Number(cardValue);
    }
  });

  hand.filter(card => card[1] === FACE_CARDS[3]).forEach(_ => { // what to do with aces
    if (score > MAX_VALID_SCORE) score -= 10;
  });

  return score;
}

function getHighestScore(cardsObj, playersArr) {
  let validScores = playersArr
    .map(player => calculateScore(cardsObj[player]))
    .filter(score => score <= MAX_VALID_SCORE);

  return Math.max(...validScores);
}

function detectWinnersAndBusted(cardsObj, playersArr) { // note that in either case, it returns an array
  let winnerArr;
  let bustedArr = playersArr.filter(player => busted(cardsObj[player]));

  if (bustedArr.length > 0) {
    winnerArr = playersArr.filter(player => !busted(cardsObj[player])); // this would *not* work for more than two players!
  } else {
    let highestScore = getHighestScore(cardsObj, playersArr);
    winnerArr = playersArr.filter(player => {
      return calculateScore(cardsObj[player]) === highestScore;
    });
  }

  return [winnerArr, bustedArr];
}

function displayRoundResult(winnerArr, bustedArr) {
  divider();
  if (bustedArr.length > 0) {
    bustedArr.forEach(bustedPlayer => {
      prompt(`${bustedPlayer} busted!`);
    });
  }

  if (winnerArr.length === 1) {
    prompt(`${winnerArr[0]} won!`);
  } else {
    prompt(`It was a tie between: ${joinAnd(winnerArr).toLowerCase()}.`);
  }
}

function busted(hand) {
  return calculateScore(hand) > MAX_VALID_SCORE;
}

function playerMove(cardsObj, player) {
  while (true) {
    if (busted(cardsObj[player])) break;

    displayHands(cardsObj, PLAYERS, 'hidden');

    prompt('(h)it or (s)tay?');
    let answer = readline.question().toLowerCase();

    if (answer === 'hit' || answer === 'h') {
      cardsObj[player].push(drawCard(cardsObj.deck));
      divider();
      prompt(`${player} hit!`);
    } else if (answer === 'stay' || answer === 's') {
      break;
    } else {
      prompt('Invalid input.');
    }
  }
}

function dealerMove(cardsObj, player) {
  divider();
  prompt('Dealer turn...');

  while (true) {
    if (calculateScore(cardsObj[player]) >= DEALER_MINIMUM_PLAY) break;
    prompt('Dealer hits!');
    cardsObj[player].push(drawCard(cardsObj.deck));
  }
}

function initializeWinsTally(playersArr) {
  let wins = {};

  playersArr.forEach(function(player) {
    wins[player] = 0;
  });

  return wins;
}

function updateWinsTally(wins, winnerArr) {
  if (winnerArr.length > 1) {
    wins['ties'] = wins['ties'] ? wins + 1 : 1;  // do as short-circuit?
  } else {
    wins[winnerArr[0]] += 1;
  }

  return wins;
}

function playMatch() {  // do I need to pass PLAYERS?
  let wins = initializeWinsTally(PLAYERS);

  while (PLAYERS.every(player => wins[player] < GAMES_TO_WIN)) {
    playRound(wins);
    divider();
    PLAYERS.forEach(player => {
      prompt(`${player} has won ${wins[player]} so far.`);  /// fix verb
    });
  }

  let matchWinner = PLAYERS.find(player => wins[player] === GAMES_TO_WIN);
  divider();
  prompt(`${matchWinner} won the match`);
}

function playRound(wins) {
  let cards = {}; /// Question: should I just make this a global constant?
  cards.deck = initializeDeck();

  dealHands(cards, PLAYERS);  /// Question: when should global constants be passed or not to arguments?

  playerMove(cards, 'You'); // if there were additional computer players, this would have to be revised

  if (!busted(cards['You'])) {  // if there were additional computer players, this would have to be revised
    dealerMove(cards, 'Dealer');
  }

  let [winnerArr, bustedArr] = detectWinnersAndBusted(cards, PLAYERS);
  updateWinsTally(wins, winnerArr);

  displayHands(cards, PLAYERS);
  displayRoundResult(winnerArr, bustedArr);

  prompt('Press any key (besides enter) to continue.');
  readline.keyIn();
  console.clear();
}

// Main Program
prompt(`Welcome to ${GAME_NAME}!`);

while (true) {
  prompt(`The player who is the first to win ${GAMES_TO_WIN} rounds wins the match.`);

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

divider();
prompt(`Thanks for playing ${GAME_NAME}!`);