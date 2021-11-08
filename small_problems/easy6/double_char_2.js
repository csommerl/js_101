// Double Char (Part 2) https://launchschool.com/exercises/560de7d6

function doubleConsonants(str) {
  const VOWELS = [
    'a', 'e', 'i', 'o', 'u'
  ];

  let doubleConsonantArray = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (!VOWELS.includes(char) && /[A-Za-z]/.test(char)) {
      char = char.repeat(2);
    }
    doubleConsonantArray.push(char);
  }

  return doubleConsonantArray.join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
