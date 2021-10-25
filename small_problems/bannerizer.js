/*
** Bannerizer
** https://launchschool.com/exercises/09fda3fd
** Write a function that will take a short line of text,
** and write it to the console log within a box.

Example:
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

// // mine
// function logInBox(str) {
//   console.log(`+${'-'.repeat(str.length + 2)}+`);
//   console.log(`|${' '.repeat(str.length + 2)}|`);
//   console.log(`| ${str} |`);
//   console.log(`|${' '.repeat(str.length + 2)}|`);
//   console.log(`+${'-'.repeat(str.length + 2)}+`);
// }

// // revised
// function logInBox(str) {
//   let horizontalLine = `+${'-'.repeat(str.length + 2)}+`;
//   let emptyLine = `|${' '.repeat(str.length + 2)}|`;

//   console.log(horizontalLine);
//   console.log(emptyLine);
//   console.log(`| ${str} |`);
//   console.log(emptyLine);
//   console.log(horizontalLine);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// further exploration
function logInBox(str, maxWidth) {
  let horizontalLine = `+${'-'.repeat(str.length + 2)}+`;
  let emptyLine = `|${' '.repeat(str.length + 2)}|`;

  if (str.length + 4 > maxWidth) {
    horizontalLine = `+${'-'.repeat(maxWidth - 2)}+`;
    emptyLine = `|${' '.repeat(maxWidth - 2)}|`;
    str = str.slice(0, maxWidth - 4);
  }

  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(`| ${str} |`);
  console.log(emptyLine);
  console.log(horizontalLine);
}

logInBox('To boldly go where no one has gone before.', 10);
logInBox('', 10);

// further exploration
function logInBoxWordWrap(str, maxWidth) {
  if (str.length + 4 > maxWidth) {
    let horizontalLine = `+${'-'.repeat(maxWidth - 2)}+`;
    let emptyLine = `|${' '.repeat(maxWidth - 2)}|`;
    
    console.log(horizontalLine);
    console.log(emptyLine);
    
    let numberOfStrLines = Math.ceil(str.length / maxWidth);
    let lengthOfStrLines = maxWidth - 4;
    let numOfExtraSpaces = (numberOfStrLines * lengthOfStrLines) - str.length;
    str = str + ' '.repeat(numOfExtraSpaces);

    for (let i = 0; i < numberOfStrLines; i++) {
      console.log(`| ${str.slice(0, lengthOfStrLines)} |`);
      str = str.slice(lengthOfStrLines);
    }

    console.log(emptyLine);
    console.log(horizontalLine);
  } else {
    let horizontalLine = `+${'-'.repeat(str.length + 2)}+`;
    let emptyLine = `|${' '.repeat(str.length + 2)}|`;

    console.log(horizontalLine);
    console.log(emptyLine);
    console.log(`| ${str} |`);
    console.log(emptyLine);
    console.log(horizontalLine);
  }
}

logInBoxWordWrap('To boldly go where no one has gone before.', 20);
