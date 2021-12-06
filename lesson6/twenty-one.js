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

  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function dealHands(cards, players) {
  players.forEach(function(player) {
    cards[player] = [];
  });

  let dealNextIdx = DEAL_FIRST_IDX;

  for (let idx = 0; idx < players.length * INITIAL_HAND_SIZE; idx += 1) {
    let player = PLAYERS[dealNextIdx];
    let playerHand = cards[player];
    let card = drawCard(cards.deck);
    playerHand.push(card);
    dealNextIdx = dealNextIdx === players.length - 1 ? 0 : dealNextIdx + 1; // generalized for more than two players
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

function formatHandDisplay(hand, player) {
  let values = [];

  hand.forEach((card, idx) => {
    if (player === 'Dealer' && idx > 0) {
      values.push('unknown card');
    } else {
      let value = getValue(card);
      values.push(value);
    }
  });

  return joinAnd(values);
}

function displayHands(cards, players) {
  console.log('');
  players.forEach(player => {
    let haveConjugation = player === 'You' ? 'have' : 'has';
    let hand = formatHandDisplay(cards[player], player);
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

function getMaxScore(cards, players) {
  let validScores = players
    .map(player => calculateScore(cards[player]))
    .filter(score => score <= 21);

  return Math.max(...validScores);
}

function getWinners(cards, players, winningScore) {
  return players.filter(player => {
    return calculateScore(cards[player]) === winningScore;
  });
}

function displayWinner(players, winningScore) {}

function busted(hand) {
  return calculateScore(hand) > 21;
}

function playerMove(cards, player) {
  while (true) {
    prompt('hit or stay?');
    let answer = readline.question();

    if (answer === 'stay') {
      break;
    } else if (answer === 'hit') {
      cards[player].push(drawCard(cards.deck));
      displayHands(cards, PLAYERS);
    } else {
      prompt('Invalid input. Enter hit or stay.');
    }

    if (busted(cards[player])) {
      prompt('Busted!');
      break;
    }
  }
}

function playTwentyOne() {
  let cards = {};
  cards.deck = initializeDeck();
  shuffle(cards.deck);

  dealHands(cards, PLAYERS);
  displayHands(cards, PLAYERS);

  playerMove(cards, 'You');

  // // take out after finishing
  // console.log(`Dealer score is ${calculateScore(cards['Dealer'])}`);
  // console.log(`Your score is ${calculateScore(cards['You'])}`);
  // //

  // let maxScore = getMaxScore(cards, PLAYERS);
  // let winners = getWinners(cards, PLAYERS, maxScore)

  // displayWinner(winners, maxScore);
}

// Main Program
prompt('Welcome to Twenty-One!\n');
playTwentyOne();