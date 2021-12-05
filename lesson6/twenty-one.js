// Twenty-One https://launchschool.com/lessons/fb4809a8/assignments/62238c60

const readline = require('readline-sync');

const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
const FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
const VALUES = PIP_CARDS.concat(FACE_CARDS);
const PLAYERS = ['Dealer', 'You'];
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

function getValue(value) {
  return VALUES.find(elem => elem[0] === value[0]);
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

function formatHandDisplay(cards, player) {
  let values = [];

  cards[player].forEach((card, idx) => {
    if (player === 'Dealer' && idx > 0) {
      values.push('unknown card');
    } else {
      let value = getValue(card[1]);
      values.push(value);
    }
  });

  return joinAnd(values);
}

function displayHands(cards, players) {
  players.forEach(player => {
    let haveConjugation = player === 'You' ? 'have' : 'has';
    prompt(`${player} ${haveConjugation}: ${formatHandDisplay(cards, player)}`);
  });
}

function playTwentyOne() {
  let cards = {};
  cards.deck = initializeDeck();
  shuffle(cards.deck);

  dealHands(cards, PLAYERS);

  displayHands(cards, PLAYERS);
}

// Main Program
prompt('Welcome to Twenty-One!');
playTwentyOne();