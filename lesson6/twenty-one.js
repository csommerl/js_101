// Twenty-One https://launchschool.com/lessons/fb4809a8/assignments/62238c60

const readline = require('readline-sync');

const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
const FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
const VALUES = PIP_CARDS.concat(FACE_CARDS);
const PLAYERS = ['Dealer', 'You'];
const DEAL_FIRST = PLAYERS[1];
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

function drawCard(deck) {
  return deck.shift();
}

function dealHands(deck, players) {  // has both side effect (changes deck) and return value (hands)
  let hands = {};

  players.forEach(function(player) {
    hands[player] = [];
  });

  let dealNext = DEAL_FIRST;

  for (let idx = 0; idx < players.length * INITIAL_HAND_SIZE; idx += 1) {
    let card = drawCard(deck);
    hands[dealNext].push(card);
    dealNext = dealNext === PLAYERS[1] ? PLAYERS[0] : PLAYERS[1]; // how to get rid of hard-coding?
  }

  return hands;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
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

function formatHandDisplay(hands, player) {
  let values = [];

  hands[player].forEach((card, idx) => {
    if (player === PLAYERS[0] && idx > 0) {
      values.push('unknown card');
    } else {
      let value = getValue(card[1]);
      values.push(value);
    }
  });

  return joinAnd(values);
}

function playTwentyOne() {
  prompt('Welcome to Twenty-One!');
  let deck = initializeDeck();
  shuffle(deck);

  let hands = dealHands(deck, PLAYERS);

  prompt(`${PLAYERS[0]} has: ${formatHandDisplay(hands, PLAYERS[0])}`);
  prompt(`${PLAYERS[1]} have: ${formatHandDisplay(hands, PLAYERS[1])}`);

}

// Main Program
playTwentyOne();