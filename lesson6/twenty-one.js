// Twenty-One https://launchschool.com/lessons/fb4809a8/assignments/62238c60

const readline = require('readline-sync');

const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
const FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
const VALUES = PIP_CARDS.concat(FACE_CARDS);
const DEALT_FIRST = 'H';

function initializeDeck() {
  let deck = [];

  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push([suit[0], value[0]]);
    }
  }

  return deck;
}

function dealCards(deck) {  // has both side effect and return value
  let humanHand = [];
  let computerHand = [];
  let nextToDeal = DEALT_FIRST;

  for (let idx = 0; idx < 4; idx += 1) {  // how to get rid of magic number?
    let randomIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(randomIndex, 1)[0];

    if (nextToDeal === 'H') {
      humanHand.push(card);
      nextToDeal = 'C';
    } else {
      computerHand.push(card);
      nextToDeal = 'H';
    }
  }

  return [humanHand, computerHand];
}

function playTwentyOne() {
  let deck = initializeDeck();
  let [humanHand, computerHand] = dealCards(deck);
  console.log(humanHand);
  console.log(computerHand);
  console.log(deck.length);
}

// Main Program
playTwentyOne();