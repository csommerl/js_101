// Letter Counter (Part 2) https://launchschool.com/exercises/b6496eb8

function wordSizes(str) {
  let counter = {};
  let words = str.split(' ');
  for (let word of words) {
    let filteredWord = word.replace(/[^a-zA-Z]/g, '');

    let wordSize = filteredWord.length;

    if (wordSize === 0) continue;

    if (!counter[wordSize]) {
      counter[wordSize] = 1;
    } else {
      counter[wordSize] += 1;
    }
  }
  return counter;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
