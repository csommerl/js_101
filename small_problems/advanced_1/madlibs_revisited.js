// Madlibs Revisited https://launchschool.com/exercises/55f51106

const REPLACEMENT_TEXTS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
};

function madlibs(template) {
  let keys = Object.keys(REPLACEMENT_TEXTS);
  keys.forEach(key => {
    let re = new RegExp(`\\b${key}\\b`);
    while (re.test(template)) {
      let randomIdx = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
      let replacement = REPLACEMENT_TEXTS[key][randomIdx];
      template = template.replace(re, replacement);
    }
  });

  return template;
}

let template1 =
  'The adjective brown noun adverb ' +
  'verb the adjective yellow ' +
  'noun, who adverb verb his ' +
  'noun and looks around.';

let template2 = 'The noun verb the noun\'s noun.';

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".