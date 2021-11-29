[Lesson 6](https://launchschool.com/lessons/fb4809a8/assignments)

# 6.1 Introduction
https://launchschool.com/lessons/fb4809a8/assignments/22d66e59

Suggested Approach:
1. Decomposition
2. Flowchart
3. Pseudocode for subprocesses
4. Play around with code
5. Do assignments in sequence
6. Read walk-throughs as guard rails

# 6.2 More Node Debugger Commands
https://launchschool.com/lessons/fb4809a8/assignments/0d73c29b

in Node debugger, repl command; in Node debugger, command that provides a repl that without using exec, you can access variables that are in scope at the point where program execution was paused, and you can evaluate expressions or execute functions; js101
in Node debugger, setBreakpoint() / sb(); in Node debugger, command that can be used without an argument to set a breakpoint on the current line, or with a line number passed as an argument in order to set a breakpoint on the line specified.; js101
in Node debugger, clearBreakpoint() / cb(); in Node debugger, command that takes two arguments, the name of the file and the line number.; js101
in Node debugger, list() command; in Node debugger, command that by default will show 5 lines above & below, and with an argument will show a specified number of lines above & below; js101

in Node debugger, step/s command; in Node debugger, command that lets you go inside a function and see how the function is executing line by line till it returns and you go back to the next line right after the function call.; js101
in Node debugger, out/o; in Node debugger, command that, if you have stepped in a function and now you want to skip seeing how the rest of the function is going to execute, you Step out and the function returns. Then, you go back to the next line, that is the line right after the function call.; js101
in Node debugger, help command; in Node debugger, command that lists all of the commands that are available; js101

# 6.3 Tic Tac Toe Problem Decomposition
https://launchschool.com/lessons/fb4809a8/assignments/7312885e

Steps
1. Welcome, display board
2. Ask user to mark a square
3. If the computer has 1+ open squares, it marks a square.
4. Display updated board
5. If an endstate has been reached
  - if there's a winner, display winner
  - if it's a tie, display tie
6. If endstate is not reached, return to #2
7. Ask to play again
8. If yes, go to #1
9. End

# 6.4 Tic Tac Toe - Step 1 - Set up and display the board
https://launchschool.com/lessons/fb4809a8/assignments/d8db5453

```javascript
let emptyBoard = {
  1: ' ', 2: ' ', 3: ' ',
  4: ' ', 5: ' ', 6: ' ',
  7: ' ', 8: ' ', 9: ' '
};

let testBoard = {
  1: '1', 2: '2', 3: '3',
  4: '4', 5: '5', 6: '6',
  7: '7', 8: '8', 9: '9'
};
```

# 6.5 Tic Tac Toe - Step 2 - Player and Computer Turn
https://launchschool.com/lessons/fb4809a8/assignments/5bf3c690

Lessons:
  - extract and make separate functions anything that is duplicated
  - if an if-else clause has a break, convert it to an if guard clause with the break, with the next statement after it for the other option
  - Symbolic constants with well-chosen names remove the magical element and reveal the purpose of each value
  - How to get a random index of an array?; Math.floor(Math.random() * array.length); js101

# 6.6 Tic Tac Toe - Step 3 - The Main Game Loop
https://launchschool.com/lessons/fb4809a8/assignments/79a4780e

# 6.7 Tic Tac Toe - Step 4 - Determining the Winner
https://launchschool.com/lessons/fb4809a8/assignments/2dd785c1

Lessons: 
  - append `!!` to guarantee that a truthy/falsy value is used when necessary

# 6.8 Assignment: TTT Bonus Features
https://launchschool.com/lessons/fb4809a8/assignments/65e8c82a

## Improved Join

input:
  - arr,
  - optional delimiter, with default ', '
  - optional final connector, with default 'or '
output:
  - delimited list, separated by delimiter and final connector

Implicit Requirements:
  - when arr is empty, ''
  - when arr has one element, just that element
  - when array has two elements, no delimiter

Data Structure:
  - create a new array with map, join with ('')

### Pseudocode

START

Given arr, delimiter, finalConnector

SET delimitedArr;

IF arr length === 0
  delimitedArr = []
ELSE IF arr length === 1
  delimitedArr = arr
ELSE IF arr length === 2
  add first element of arr to delimited Arr with ' ' + finalConnector + ' ' after it
  add second element of arr to delimited Arr
ELSE
  FOR each elem in arr
    IF elem is last
      add finalConnector + ' ' to the front of it, and add to delimitedArr
    ELSE
      add delimiter to the end of it and add to delimitedArr

SET strWithDelimiters = joined delimitedArr

END

## Keep Score
https://launchschool.com/lessons/fb4809a8/assignments/65e8c82a
// add match winner

## Computer AI: Defense

## Computer AI: Offense

## Computer Turn Refinements

## Improve Play-Again Handling

### Improve the game loop

## On Your Own Ideas

### Minimax algorithm

### Bigger Board

### More players