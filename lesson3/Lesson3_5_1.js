const NUMBER_OF_LINES = 10;
const str = 'The Flintstones Rock!';

for (let line = 0; line < NUMBER_OF_LINES; line++) {
  // console.log(str.padStart(str.length + line));
  console.log(' '.repeat(line) + str);
}
