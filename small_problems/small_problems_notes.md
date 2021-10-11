[JS101 - Small Problems](https://launchschool.com/exercises#js101_small_problems)

# Resources

## [Primer](https://launchschool.com/gists/0791ee5c)
  - Keep track of which exercises give you difficulty or that you have trouble understanding.

## [PEDAC](https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f)

### Simply Put

1. Understand the Problem
  - identify expected inputs & outputs
  - make requirements explicit
  - identify rules
  - mental model of the problem (optional)
2. Write Examples/Test Cases
  - validate understanding of the problem
3. Data Structure
  - how will the data be represented in converting input to output?
4. Algorithm
  - what steps are needed to convert input to output?
5. Code
  - implement the algorithm

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
Odd Numbers
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

