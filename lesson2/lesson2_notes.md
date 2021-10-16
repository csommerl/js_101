[Lesson 2: Small Programs](https://launchschool.com/lessons/64655364/assignments)

# Introduction
https://launchschool.com/lessons/64655364/assignments/53fc0a20

# Style Guide
https://launchschool.com/lessons/64655364/assignments/728c3574

In real code, you wouldn't usually use the true or false values directly in a conditional expression like value === true.

Use case for short-circuit evaluation:
- use a conjunction to test whether something exists && test whether it is not null

Important distinction:
  - returns true or false
  - returns a truthy value or falsy value === evaluates to true or evaluates to false

# Set up a new directory for this lesson
https://launchschool.com/lessons/64655364/assignments/94def649

# Truthiness
https://launchschool.com/lessons/64655364/assignments/e16c1f23

# Walk-through: Calculator
https://launchschool.com/lessons/64655364/assignments/e3733b97

# Pseudocode
https://launchschool.com/lessons/64655364/assignments/fea216fc

Keyword = Meaning
START	= start of the program
SET	= set a variable that we can use for later
GET	= retrieve input from user
PRINT	= display output to user
READ	= retrieve a value from a variable
IF/ELSE = IF/ELSE	show conditional branches in logic
WHILE	= show looping logic
SUBPROCESS = show that some other thing will perform a task
END	= end of the program

Pseudocode Practice 1: a function that returns the sum of two numbers
START
SET sum = addition of the two numbers
RETURN sum
END

Pseudocode Practice 2: a function that takes an array of strings, and returns a string that is all those strings concatenated together
START
SET concatString = ''
SET iterator = 0
WHILE iterator < length of stringArray
  concatString = concatString + string in StringArray at space "iterator"
  iterator = iterator + 1
RETURN concatString
END

Pseudocode Practice 3: a function that takes an array of integers, and returns a new array with every other element
START
SET everyOther = []
SET iterator = 1
WHILE iterator < length of integerArray
  add integer at space 'iterator in integerArray to everyOther
  iterator = iterator + 2
RETURN everyOther
END

# Flowchart
https://launchschool.com/lessons/64655364/assignments/998c996d
the imperative or procedural way to solve a problem; to map out the step-by-step logic our program would need to solve a problem; js101
the declarative way to solve a problem; to use (for example) a method that lets us iterate, instead of looping manually; js101

Interestingly, when we move logic to sub-processes, we use a declarative type of syntax, rather than imperative

# ESLint
https://launchschool.com/lessons/64655364/assignments/825d809e
https://launchschool.com/gists/9ad96eed

How to install ESLint:
`npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev`

Check for version
`npx eslint -v`

How to call ESLint
`npx eslint test.js`

What i did
- create package.json to main folder
- install npm to main folder
- install readline sync to main folder
- create default yaml file for LS style
- create vs code settings for this project to default to lf endings

# Refactoring Calculator
https://launchschool.com/lessons/64655364/assignments/bfb3a9f2

Lesson: use [].includes() to test for valid input

# ESLint Calculator

# Debugging
https://launchschool.com/lessons/64655364/assignments/3b953f14

## Online Resources
1. Search Engine
2. Stack Overflow
3. Documentation (MDN)

## Steps to Debugging
1. Reproduce the Error
2. Determine the Boundaries of the Error
3. Trace the Code
4. Understand the Problem Well
5. Implement a Fix
  - Fix one problem at a time
  - Merely make a note of other problems
6. Test the Fix

## Techniques for Debugging
1. Line by line
2. Rubber Duck
3. Walking Away
4. Inspecting with a Debugger
5. Advanced Debugging

# Errors
https://launchschool.com/lessons/64655364/assignments/1dfdd3ff

# Preventing Errors
https://launchschool.com/lessons/64655364/assignments/4d082822
- Errors typically occur where assumptions are made in code
- guard clause
- edge cases: write out the common use cases of a new function, and check how your function handles them

# Catching Errors
https://launchschool.com/lessons/64655364/assignments/70c23b55

When avoiding errors isn't realistic, use try/catch/finally block

```javascript
try {
  // Do something that might fail here and throw an exception.
} catch (error) {
  // This code only runs if something in the try clause throws an exception.
  // "error" contains the exception object.
} finally {
  // This code always runs even if the above code throws an exception.
}
```

# Precedence
https://launchschool.com/lessons/64655364/assignments/08ba7fc1

# Assignment: Calculator Bonus Features
https://launchschool.com/lessons/64655364/assignments/a6efeb33

Lesson:
- use `while (true)` to have an infinite loop, which can be broken by specified events within the loop