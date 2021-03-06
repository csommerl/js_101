[Lesson 2: Small Programs](https://launchschool.com/lessons/64655364/assignments)

# Introduction
https://launchschool.com/lessons/64655364/assignments/53fc0a20

# Style Guide
https://launchschool.com/lessons/64655364/assignments/728c3574

# Set up a new directory for this lesson
https://launchschool.com/lessons/64655364/assignments/94def649

# Truthiness
https://launchschool.com/lessons/64655364/assignments/e16c1f23

Use `value` instead of `value === true`.

Use case for short-circuit evaluation:
- use a conjunction to test whether something exists && test whether it is not null
- especially useful in conditionals

Important distinction:
  - returns true or false
  - returns a truthy value or falsy value === evaluates to true or evaluates to false

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
  add integer at space iterator in integerArray to everyOther
  iterator = iterator + 2
RETURN everyOther
END

# Flowchart
https://launchschool.com/lessons/64655364/assignments/998c996d

Shape         =   Meaning
Oval          =   Start/Stop
Rectangle     =   Processing Step
Parallelogram =   Input/Output
Diamond       =   Decision
Circle        =   Connector

the **imperative or procedural way** to solve a problem; to map out the step-by-step logic our program would need to solve a problem; js101
the **declarative way** to solve a problem; to use (for example) a method that lets us iterate, instead of looping manually; js101

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

**What I did**
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

# Explicit Type Coercion
https://launchschool.com/lessons/64655364/assignments/d25ab156

# Implicit Type Coercion
https://launchschool.com/lessons/64655364/assignments/63b6e5e4

# Assignment: Mortgage / Car Loan Calculator
https://launchschool.com/lessons/64655364/assignments/fb1e377c

# Coding Tips
https://launchschool.com/lessons/64655364/assignments/1f79ea39
1. hours debugging imparts lasting lessons
2. use descriptive names
3. use idiomatic names
4. avoid magic numbers
5. when declaring constants, make sure that the meaning is clear
6. don't mutate objects that are declared as constants, even though it is allowed / use freeze()
7. Be careful with side effects
8. Functions should be at the same level of abstraction
9. Function names should tell you what they do (e.g., side effects)
10. Use names with `print`, `say`, or `display` for those that log

Functions have side effects when:
1. changes non-local variables:
  1. reassigns a non-local variable
  2. mutates objects referenced by non-local variables
2. Reads from or writers to a file, network connection, browser, or the system hardware (includes logging)
3. Raises an exception without handling it
4. Calls another function that has side effects

Side effects aren't bad:
- **Most** functions should return a useful value **or** they should have a side effect, but **not both**.
- Exceptions to this rule: relate to #2 above
- use names that indicate side effects

# Variable Scope
https://launchschool.com/lessons/64655364/assignments/7c0087dd

## Rules for function/block scope
1. Outer scope variables can be accessed in the inner scope.
2. Inner scope variables cannot be accessed in the outer scope.
3. Peer scopes do not conflict.
4. Nested functions have their own variable scope.
5. Inner scope variables can shadow outer scope variables.

# Re-read Objects vs. Primitive Values
https://launchschool.com/lessons/64655364/assignments/8d2ccaee

# Pass by Reference vs Pass by Value
https://launchschool.com/lessons/64655364/assignments/33123902

# Walk-through: Rock Paper Scissors
https://launchschool.com/lessons/64655364/assignments/2ecb7012

# Coding Tips 2
https://launchschool.com/lessons/64655364/assignments/1c561f23
1. Using blank lines to organize code
2. Name functions appropriately
  - Don't write a function that does more than one of these things:
    - mutate a value
    - output something
    - return a meaningful value
3. Don't mutate the caller during iteration
  - The behavior may not be what you expect.
4. Try to avoid variable shadowing
5. Don't use assignment in a conditional
  - if you must do this, wrap the assignment in parentheses
6. Use underscore for unused callback paramters
7. Gain experience through struggling

# RPS Bonus Features
https://launchschool.com/lessons/64655364/assignments/9a13e511

Lesson: extract most of a function's logic to a data structure, e.g., RPS winning conditions

# Lesson 2 Quiz 1
https://launchschool.com/lessons/64655364/assignments/358c288b