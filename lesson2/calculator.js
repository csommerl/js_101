const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'de';

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('welcome');

while (true) {
  prompt('num1Prompt');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNum');
    number1 = readline.question();
  }

  prompt('num2Prompt');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNum');
    number2 = readline.question();
  }

  prompt('operationPrompt');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('operationError');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt('result');
  console.log(`${output}`);

  prompt('anotherCalculation');
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}