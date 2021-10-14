[JS101 - Small Problems](https://launchschool.com/exercises#js101_small_problems)

# Resources

## [PEDAC](https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f)

### My Version

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

## [Primer](https://launchschool.com/gists/0791ee5c)
  - Keep track of which exercises give you difficulty or that you have trouble understanding.

# Exercises to return to
- unclear explanation: https://launchschool.com/exercises/c55f9982

# Easy 1
https://launchschool.com/exercise_sets/e4d53458

## Isn't it odd?
https://launchschool.com/exercises/2abe5b37
Write a function that takes one integer argument,
which may be positive, negative, or zero.
This method returns true if the number's absolute value is odd.
You may assume that the argument is a valid integer value.

**Problem**
- inputs
  - one integer argument (positive, negative, or zero)
- outputs
  - boolean

Implicit requirements
1. The "absolute value" (value regardless of whether it is even/odd) must be identified.
2. There is no need to handle arguments that aren't valid integer values.

Mental model
- Take any integer and compute whether its absolute value is odd. Return true or false.

Validation
- Example 1
  - input: 2
  - output: false
- Example 2
  - input: 5
  - output: true
- Example 3
  - input: -17
  - output: true
- Example 4
  - input: -8
  - output: false
- Example 5 **Edge Case**
  - input: 0
  - output: false
- Example 6
  - input: 7
  - output: true

Data Structure
- Number
- Boolean

Algorithm
1. Create a variable `absoluteValue`.
2. Store the absolute value: Test for whether `integer` is negative with the condition `(integer < 0)`
  - If so determine its absolute value with `integer * -1` and store it in `absoluteValue`.
  - If condition isn't met, store the original `integer` in `absoluteValue`.
3. Calculate the remainder of `absoluteValue` with `(absolute Value % 2)` and:
  - if the condition is truthy, then `absoluteValue` is odd and return `true`.
  - if the conidtion is falsy, then `absoluteValue` is even and return `false`.

## Odd Numbers
https://launchschool.com/exercises/e95e7a7d
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

## Even Numbers
https://launchschool.com/exercises/29cee426
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

## How big is the room?
https://launchschool.com/exercises/91eb6f09

P
Inputs: user input of number of length in meters; user input of number of width in meters
Outputs: number of square meters + number of square feet

no unclear terms
no special requirements

Given user input of height & width in meters, return area in both sqaure meters and square feet.

E
Input: 3 length, 4 width
Output: 12 square meters, 129.1668

D: stay with numbers

A
1. Import readline sync.
2. Use `readlineSync.prompt` to ask user for length of room in meters and store in variable `lengthInMeters`.
3. Use `readlineSync.prompt` to ask user for width of room in meters and store in variable `widthInMeters`.
4. Multiply `lengthInMeters` and `widthInMeters` and store in variable `squareMeters`.
5. Multiple `squareMeters` by `10.7639` and store in variable `squareFeet`.
6. Log statement including `squareMeters` and `squareFeet`.

## Tip Calculator
https://launchschool.com/exercises/824a7ad1

## Sum or Product of Consecutive Integers
https://launchschool.com/exercises/64d67f89

## Short Long Short
https://launchschool.com/exercises/c55f9982

## Leap Years (Part 1)
https://launchschool.com/exercises/3a4df048

## Leap Years (Part 2)
https://launchschool.com/exercises/bd767ad6

## Multiples of 3 and 5
https://launchschool.com/exercises/847823f7

Problem
I/O
  - inputs: integer greater than 1
  - outputs: integer that sums all multiples of 3 & 5
Terms
  - multiple = remainder of 0 when dividing by the number
Requirements
  - no duplicates: if a number is a multiple of both 3 & 5, it should not be counted twice in summing

Examples

Data Structures
- array collecting all the multiples

Algorithm
1. Create an empty array `multiples`.
2. Create a for loop that iterates over all numbers between 1 and the input, and then
  - if `i % 3 === 0`, add to multiples (`push()`) and `continue` to the next iteration to avoid duplicates.
  - if `i % 5 === 0`, add to multiples
3. Create a variable `sum` that begins with the value `0`.
4. Iterate over the array and add each value to `sum`. (`reduce`?).
5. Return sum.

## UTF-16 String Value
https://launchschool.com/exercises/b5c52850

# Easy 2

## Welcome Stranger
https://launchschool.com/exercises/1bd6be82

## Greeting a user
https://launchschool.com/exercises/ca8ee74b

## Multiplying Two Numbers
https://launchschool.com/exercises/8532d178

## Squaring an Argument
https://launchschool.com/exercises/5a165802

## Arithmetic Integer
https://launchschool.com/exercises/ca8e844b

## The End Is Near But Not Here
https://launchschool.com/exercises/e05e5eee

## Exclusive Or
https://launchschool.com/exercises/5fbc59a5

## Odd Lists
https://launchschool.com/exercises/23b67c04

## Convert a String to a Number!
https://launchschool.com/exercises/a5d2d50f