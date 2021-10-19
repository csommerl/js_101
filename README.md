[JS101: Programming Foundations with JavaScript](https://launchschool.com/courses/804d1cae/home)

# Resources
- [SPOT Wiki](https://www.notion.so/SPOT-Wiki-1b4fe53778f34614b28a8e76ce028782)
- [JS101 Exercises](https://www.notion.so/JS101-085f4f55ed5e41cb9003d9f0a3aa48ef)

# My PEDAC
1. Understand the **Problem**
  1. identify expected inputs & outputs
  2. clarify key terms
  3. identify implicit requirements/rules
  4. mental model of the problem (optional)
2. Write **Examples**/Test Cases
  1. validate understanding of the problem
  2. figure out edge cases
3. **Data Structure**
  - how will the data be represented in converting input to output?
4. **Algorithm**
  - what steps are needed to convert input to output?
  - given the data structures (input, output, conversion), are there special methods for these steps? For example, help to avoid conditions & loops?
5. **Code**
  - implement the algorithm

# Pseudocode
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

# Key Lessons/Tips
- Test for whether something is an expression or statement; if it can be logged to the console, it is an expression; if it can't be logged it is a statement; js101
- Use [].includes() to test for valid input
- use `while (true)` to have an infinite loop, which can be broken by specified events within the loop
- Use constants for conversions (https://launchschool.com/exercises/91eb6f09)
- write a separate function when using reduce
- use truthy/falsy values in conditionals, without a need for an equality operator
- The technique of using objects to perform conversions is a common idiom that you can use in a wide variety of situations, often resulting in code that is easier to read, understand, and maintain.
- Use slice (rather than substring) to use negative numbers to cut off the end of a string
- When avoiding errors isn't realistic, use try/catch/finally block
- **Most** functions should return a useful value **or** they should have a side effect, but **not both**.

# Steps to Debugging
1. Reproduce the Error
2. Determine the Boundaries of the Error
3. Trace the Code
4. Understand the Problem Well
5. Implement a Fix
  - Fix one problem at a time
  - Merely make a note of other problems
6. Test the Fix

# Techniques for Debugging
1. Line by line
2. Rubber Duck
3. Walking Away
4. Inspecting with a Debugger
5. Advanced Debugging

# How to set up npm
https://launchschool.com/books/javascript/read/input_output#commandlineinput
1. Use the ls command to see if there is a `package.json` file in the current directory.
2. If there is not one, create one with `npm init -y`.
3. Install what you need, e.g., `npm install readline-sync --save`

# How to set up ESLint
https://launchschool.com/gists/9ad96eed
1. Install: ```npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev```
2. Check version: ```npx eslint -v```
3. Put your default `.eslintrc.yml` file in a directory that contains all of your projects as subdirectories. Alternatively, you can put the file in each project directory and customize it as needed.
4. run eslint: ```npx eslint test.js```

# What I did to set up these things
- create package.json to main folder
- install npm to main folder
- install readline sync to main folder
- create default yaml file for LS style
- create vs code settings for this project to default to lf endings
