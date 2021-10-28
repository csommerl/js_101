// Letter Counter (Part 1) https://launchschool.com/exercises/7e28695d

function wordSizes(str) {
  let counter = {};
  let words = str
    .split(' ')
    .filter(word => word.length > 0);
  for (let word of words) {
    if (counter[word.length]) {
      counter[word.length] += 1;
    } else {
      counter[word.length] = 1;
    }
  }
  return counter;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
