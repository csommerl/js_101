// Word Ladder https://launchschool.com/exercises/681d8f05

let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
});

console.log(ladder);  // expect: head-heal-teal-tell-tall-tail