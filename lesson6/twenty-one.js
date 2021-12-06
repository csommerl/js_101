// Twenty-One https://launchschool.com/lessons/fb4809a8/assignments/62238c60

const readline = require('readline-sync');

const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
const FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
const VALUES = PIP_CARDS.concat(FACE_CARDS);
const PLAYERS = ['Dealer', 'You'];  // this and how data is stored is designed to add potentially other computer players
const DEAL_FIRST_IDX = 1;
const INITIAL_HAND_SIZE = 2;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  let deck = [];

  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push([suit[0], value[0]]);
    }
  }

  shuffle(deck);

  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function dealHands(cardsObj, playersArr) {
  playersArr.forEach(function(player) {
    cardsObj[player] = [];
  });

  let dealNextIdx = DEAL_FIRST_IDX;

  for (let idx = 0; idx < playersArr.length * INITIAL_HAND_SIZE; idx += 1) {
    let player = playersArr[dealNextIdx];
    let playerHand = cardsObj[player];
    let card = drawCard(cardsObj.deck);
    playerHand.push(card);
    dealNextIdx = dealNextIdx === playersArr.length - 1 ? 0 : dealNextIdx + 1; // generalized for more than two players
  }
}

function drawCard(deck) {
  return deck.shift();
}

function getValue(card) {  // needed function since values of face cards are stored with only the first letter
  return VALUES.find(elem => elem[0] === card[1]);
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
    if (player === 'Dealer' && idx > 0 && hidden) {
      values.push('unknown card');
    } else {
      let value = getValue(card);
      values.push(value);
    }
  });

  return joinAnd(values);
}

function displayHands(cardsObj, playersArr, hidden) {
  console.log('');
  playersArr.forEach(player => {
    let haveConjugation = player === 'You' ? 'have' : 'has';
    let hand = formatHandDisplay(cardsObj[player], player, hidden);
    prompt(`${player} ${haveConjugation}: ${hand}`);
  });
}

function calculateScore(hand) {
  let score = 0;

  hand.forEach(card => {
    let cardValue = getValue(card);
    if (FACE_CARDS.slice(0, 3).includes(cardValue)) {
      score += 10;
    } else if (cardValue === FACE_CARDS[3]) {
      score += 11;
    } else {
      score += Number(cardValue);
    }
  });

  hand.filter(card => getValue(card) === FACE_CARDS[3])
    .forEach(_ => {
      if (score > 21) score -= 10;
    });

  return score;
}

function getMaxScore(cardsObj, playersArr) {
  let validScores = playersArr
    .map(player => calculateScore(cardsObj[player]))
    .filter(score => score <= 21);

  return Math.max(...validScores);
}

function getWinners(cardsObj, playersArr, winningScore) {
  return playersArr.filter(player => {
    return calculateScore(cardsObj[player]) === winningScore;
  });
}

function displayWinner(winnersArr) {
  if (winnersArr.length === 1) {
    let winner = winnersArr[0];
    let verb = winner === 'You' ? 'win' : 'wins';
    prompt(`${winnersArr[0]} ${verb}!\n`);
  } else {
    prompt(`${joinAnd(winnersArr)} tie!\n`);
  }
}

function busted(hand) {
  return calculateScore(hand) > 21;
}

function displayScores(cardsObj, playersArr) {
  playersArr.forEach(player => {
    let playerName = player === 'You' ? 'Your' : player;
    prompt(`${playerName} score is ${calculateScore(cardsObj[player])}`);
  });
}

function playerMove(cardsObj, player) {
  while (true) {
    prompt('hit or stay?');
    let answer = readline.question();

    if (answer === 'hit') {
      cardsObj[player].push(drawCard(cardsObj.deck));
    }

    if (answer !== 'hit' && answer !== 'stay') {
      prompt('Invalid input. Enter hit or stay.');
    }

    if (answer === 'stay' || busted(cardsObj[player])) break;

    displayHands(cardsObj, PLAYERS, 'hidden');
  }
}

function dealerMove(cardsObj, player) {
  while (true) {
    if (calculateScore(cardsObj[player]) >= 17) break;
    cardsObj[player].push(drawCard(cardsObj.deck));
  }
}

function playTwentyOne() {
  let cards = {};
  cards.deck = initializeDeck();

  dealHands(cards, PLAYERS);
  displayHands(cards, PLAYERS, 'hidden');

  playerMove(cards, 'You');
  if (busted(cards['You'])) {
    displayHands(cards, PLAYERS);
    prompt('You busted: dealer wins!\n');
    return;
  }

  dealerMove(cards, 'Dealer');

  if (busted(cards['Dealer'])) {
    displayHands(cards, PLAYERS);
    prompt('Dealer busted: you win!\n');
    return;
  }

  displayHands(cards, PLAYERS);

  displayScores(cards, PLAYERS);

  let maxScore = getMaxScore(cards, PLAYERS);
  let winners = getWinners(cards, PLAYERS, maxScore);

  displayWinner(winners);
}

// Main Program
while (true) {
  prompt('Welcome to Twenty-One!\n');
  playTwentyOne();

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

prompt('Thanks for playing Twenty-One!');