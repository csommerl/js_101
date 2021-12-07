// Twenty-One https://launchschool.com/lessons/fb4809a8/assignments/62238c60

const readline = require('readline-sync');

const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const PIP_CARDS = [...Array(9).keys()].map(idx => String(idx + 2));
const FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
const VALUES = PIP_CARDS.concat(FACE_CARDS);
const PLAYERS = ['Dealer', 'You'];  // this and how data is stored is designed to add potentially other computer players
const DEAL_FIRST_IDX = 1;
const INITIAL_HAND_SIZE = 2;
const AI_BREAKING_POINT = 17;

function prompt(msg) {
  console.log(`=> ${msg}`);
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

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }

  return array;
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
  console.log('--------------------');
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
    let cardValue = card[1];
    if (FACE_CARDS.slice(0, 3).includes(cardValue)) { // what to do with face cards besides aces
      score += 10;
    } else if (cardValue === FACE_CARDS[3]) { // what do initially with aces
      score += 11;
    } else {
      score += Number(cardValue);
    }
  });

  hand.filter(card => card[1] === FACE_CARDS[3]) // what to do with aces
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

function displayWinners(cardsObj, playersArr) {
  let maxScore = getMaxScore(cardsObj, playersArr);
  let winners = getWinners(cardsObj, playersArr, maxScore);

  if (winners.length === 1) {
    let winner = winners[0];
    let verb = winner === 'You' ? 'win' : 'wins';
    prompt(`${winners[0]} ${verb}!\n--------------------`);
  } else {
    prompt(`It was a tie between ${joinAnd(winners).toLowerCase()}!\n--------------------`);
  }
}

function displayResults(cardsObj, playersArr) {
  displayHands(cardsObj, PLAYERS);

  if (playersArr.some(player => busted(cardsObj[player]))) {
    let bustedPlayer = playersArr.find(player => busted(cardsObj[player]));
    let nonBustedPlayer = playersArr.find(player => !busted(cardsObj[player])); // this would *not* work for more than two players!
    let verb = nonBustedPlayer === 'You' ? 'win' : 'wins';
    prompt(`${bustedPlayer} busted: ${nonBustedPlayer.toLowerCase()} ${verb}!\n--------------------`);
  } else {
    displayWinners(cardsObj, playersArr);
  }
}

function busted(hand) {
  return calculateScore(hand) > 21;
}

function playerMove(cardsObj, player) {
  while (true) {
    if (busted(cardsObj[player])) break;

    displayHands(cardsObj, PLAYERS, 'hidden');

    prompt('(h)it or (s)tay?');
    let answer = readline.question();

    if (answer === 'hit' || answer === 'h') {
      cardsObj[player].push(drawCard(cardsObj.deck));
      console.log('--------------------');
      prompt(`${player} hit!`);
    } else if (answer === 'stay' || answer === 's') {
      break;
    } else {
      prompt('Invalid input.');
    }
  }
}

function dealerMove(cardsObj, player) {
  console.log('--------------------');
  prompt('Dealer turn...');

  while (true) {
    if (calculateScore(cardsObj[player]) >= AI_BREAKING_POINT) break;
    prompt('Dealer hits!');
    cardsObj[player].push(drawCard(cardsObj.deck));
  }
}

function playTwentyOne() {
  debugger;
  let cards = {};
  cards.deck = initializeDeck();

  dealHands(cards, PLAYERS);

  playerMove(cards, 'You'); // if there were additional computer players, this would have to be revised

  if (!busted(cards['You'])) {  // if there were additional computer players, this would have to be revised
    dealerMove(cards, 'Dealer');
  }

  displayResults(cards, PLAYERS);
}

// Main Program
prompt('Welcome to Twenty-One!\n');
while (true) {
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
console.log('--------------------');
prompt('Thanks for playing Twenty-One!');