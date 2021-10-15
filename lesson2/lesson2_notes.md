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