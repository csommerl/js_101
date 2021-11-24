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

# Lessons/Insights
- Use constants for conversions (https://launchschool.com/exercises/91eb6f09)
- write a separate function when using reduce
- use truthy/falsy values in conditionals, without a need for an equality operator
- The technique of using objects to perform conversions is a common idiom that you can use in a wide variety of situations, often resulting in code that is easier to read, understand, and maintain.
- Use slice (rather than substring) to use negative numbers to cut off the end of a string

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

Lesson: "This technique of using objects to perform conversions is a common idiom that you can use in a wide variety of situations, often resulting in code that is easier to read, understand, and maintain.:

Problem
  - inputs: string
  - outputs: integer
  - rule: no special characters or invalid characters
Examples
Data Structures
  - an array, storing the numeric value multiplied by ten for each item
  - then the array's elements will be summed
Algorithm
  1. Create an empty array `numerals` to store a numeric equivalent for each character.
  2. Loop over each character in the string
    1. First, create a variable `num` to store the numeric equivalent.
    2. Second, identify the character with an `if` statement: if `'0'`, then store `0` in `num`.
    3. Third, set `num` equal to the numeric value `num` multiplied by `10` to the power of `str.length - 1 - i`
    4. Push `num` to `numerals`
  3. Add all the numerals in the array
  4. Return

## Convert a String to a Signed Number!
https://launchschool.com/exercises/6974d7f2

## Convert a Number to a String!
https://launchschool.com/exercises/ad60d5e2

## Convert a Signed Number to a String!
https://launchschool.com/exercises/5fb347bd

# Easy 3
https://launchschool.com/exercise_sets/f30c1447

## ddaaiillyy ddoouubbllee
https://launchschool.com/exercises/31e4c035

## Bannerizer
https://launchschool.com/exercises/09fda3fd

## Stringy Strings
https://launchschool.com/exercises/db532919

## Fibonacci Number Location By Length
https://launchschool.com/exercises/6ec7341d
- Lesson: don't store an array if you don't have to
- Lesson: you can't get the length of a number (the number of digits) by converting to a string and getting the string's length

## Right Triangles
https://launchschool.com/exercises/ff51259d

## Madlibs
https://launchschool.com/exercises/fedd1cd6

## Double Doubles
https://launchschool.com/exercises/583b8edb

Create a string representation of the number
Create new strings for each half of the number.
Check whether they are equal.
If equal, return original number
If not equal, return number * 2

## Grade Book
https://launchschool.com/exercises/257a77fb

## Clean up the words
https://launchschool.com/exercises/6ccbdf07

Lessons:
- don't convert data type unnecessarily, e.g., from string to array and then back again
- Instead of using methods, it can sometimes make sense to build a str/arr/obj from an empty one using a loop


## What Century is That?
https://launchschool.com/exercises/394e1c53

1. First get `centuryNumber` by dividing `year` by 100 and rounding up to the nearest integer.
2. Compare to special endings an

# Easy 4
https://launchschool.com/exercise_sets/22ce90b5

## How old is Teddy?
https://launchschool.com/exercises/3043a86a

## Searching 101
https://launchschool.com/exercises/5062a16f

Lesson
- don't store data in a format you don't need

## When will I retire?
https://launchschool.com/exercises/6898c049

## Palindromic Strings (Part 1)
https://launchschool.com/exercises/a0491d16

## Palindromic Strings (Part 2)
https://launchschool.com/exercises/5de57318

## Palindromic Numbers
https://launchschool.com/exercises/c16de937

## Running Totals
https://launchschool.com/exercises/69839f2f

## Letter Counter (Part 1)
https://launchschool.com/exercises/7e28695d

## Letter Counter (Part 2)
https://launchschool.com/exercises/b6496eb8

## Letter Swap
https://launchschool.com/exercises/0d838471

# Easy 5
https://launchschool.com/exercise_sets/14a3a764

## Cute Angles
https://launchschool.com/exercises/45794622

## Combining Arrays
https://launchschool.com/exercises/fc3e7e81

## Halvsies
https://launchschool.com/exercises/c335bef4

## Find the Duplicate

## Combine Two Lists
https://launchschool.com/exercises/5e3b1da6

## Multiplicative Average
https://launchschool.com/exercises/e8b2e578

## Multiply Lists
https://launchschool.com/exercises/f2543bd4

## List of Digits
https://launchschool.com/exercises/6eb89adf

## How Many?
https://launchschool.com/exercises/705ea21f

## Array Average
https://launchschool.com/exercises/23864b58

## After Midnight (Part 1)
https://launchschool.com/exercises/a8ee10fc

## After Midnight (Part 2)
https://launchschool.com/exercises/4533932c

# Easy 6
https://launchschool.com/exercises/b04f40e2

## Double Char (Part 1)
https://launchschool.com/exercises/b04f40e2

## Double Char (Part 2)
https://launchschool.com/exercises/560de7d6

## Reverse Number
https://launchschool.com/exercises/285f9dd6

## Get The Middle Character
https://launchschool.com/exercises/3d371708

## Always Return Negative
https://launchschool.com/exercises/b41e98f9

## Counting Up
https://launchschool.com/exercises/ac8ee7ae

## Name Swapping
https://launchschool.com/exercises/815cc58f

## Sequence Count
https://launchschool.com/exercises/cad01bcb

## Reverse It (Part 1)
https://launchschool.com/exercises/866dd469

Problem
- input: string
- output: string
- explicit requirement: output reverses the order of words
- implicit requiremnt: words are separated by ' '

Examples

Data Structure
- collect words in an array

Algorithm
1. Create words array from string by splitting into words separated by ' '
2. Reverse the order (method)
3. Return the words array joined

## Reverse It (Part 2)
https://launchschool.com/exercises/2ecfaa4e

Problem
- input: string
- output: string with five-or-more letter words reversed
- explicit requirements:
  - if a word has five or more letters, it should be reversed
  - words are separated by a singel space

Examples

Data structure:
- convert to array to process

Algorithm
1. create words array by splitting at spaces
2. create new array to store the new string to output
3. for each word in words array:
  - test if it has five or more letters
* - if so, reverse word
  - add to new array
4. create new string from new array and return it

Reverse word
1. create character array by splitting with ''
2. reverse order of character array and save to new array
3. join and return new array

## Reversed Arrays
https://launchschool.com/exercises/9b855a60

Problem
- input: array
- output: same array object, with elements reversed in place
- Explicit requirements:
  - no new array
  - elements reversed

Examples

Data structures
- preserve original array
- create a new array, but only to store values to then be pushed.

Algorithm
1. Create new array to store reversed values
2. Iterate through the original array, in reverse order
  - Remove the last element of the original array
  - Add last element to new array
  - complete until original array is empty
3. Iterate through new array in order:
  - add each element to original array
4. return original array

## Matching Parentheses?
https://launchschool.com/exercises/541d0500

Problem
- input: string
- output: boolean
- explicit requirement:
  - parentheses are properly balanced when
    - each '(' has *its own* ')' that follows it
    - each ')' has *its own* '(' that precedes it
  - return true if parentheses are properly balanced
  - otherwise return false
- implicit requirements
  - same number of ( and )
  - at any point where there is a ), there are not more ( than )

Example

Data structure

Algorithm
1. first test: if number of ( and number of ) are not equal, return false
2. second test: at each substring ending with ), if the number of ) exceeds the number of (, return false
3. otherwise, return true

note that allBalanced doesn't take into account whether they are nested correctly!

# List Processing
https://launchschool.com/exercise_sets/ea72ee67

## Sum Of Digits
https://launchschool.com/exercises/4a471ab8

## Alphabetical Numbers
https://launchschool.com/exercises/6a49d690

Problem
- input: array of integers between 0 and 19
- output: array of integers, sorted
- explicit requirement:
  - sort integers alphabetically based on English word for each number

Exampels

Data Structure
- array of number words
- maybe object correlating

Algorithm
1. create number word array
2. sort number word array alphabetically
3. create dictionary with numbers as keys and number words as values
4. create result array
5. for each number:
  - get word from dictionary
  - lookup index number of word in sorted alphabetically array
  - add number at that index number to the resulting arr
6. return resulting array

## Multiply All Pairs
https://launchschool.com/exercises/2c36b66c

- input: two arrays, each containing a list of numbers
- output: array with products of all combinations, sorted in ascending numberical order.

Algo
1. create result array
2. Nested for loop

## Leading Substrings
https://launchschool.com/exercises/50f14ae3

## All Substrings
https://launchschool.com/exercises/381f7129

- input: str
- output: array of substrings

## Palindromic Substrings
https://launchschool.com/exercises/f75e9198
- input: string
- output: array of substrings
- explicit requirements:
  - each substring reads the same foreward and backwards
  - case matters
  - single characters are not palindromes
- implicit requirements:
  - do palindromes cross over between spaces?
Algo
1. create empty array of palindromes
2. get list of substrings
3. For each substring, test whether it is a palindrome
4. If it is a palindrome, add to palindromes
5. return palindromes

## Sum of Sums
https://launchschool.com/exercises/6187c3ec
- input: arr of numbers
- output: sum of sums

## Grocery List
https://launchschool.com/exercises/a8fc112c
- input: two-dimensional array
- output: 

## Inventory Item Transactions
https://launchschool.com/exercises/1e53cc84
- input: num (inventory item ID), obj (list of transactions)

## Inventory Item Availability
https://launchschool.com/exercises/fa70703d

# String and Text Processing
https://launchschool.com/exercise_sets/f812bd47

## Uppercase Check
https://launchschool.com/exercises/59cd044d

## Delete Vowels
https://launchschool.com/exercises/8249329a

1. create new arr / map
2. for each entry, return 

## Lettercase Counter
https://launchschool.com/exercises/6a9bb11e

## Capitalize Words
https://launchschool.com/exercises/1fd9c225

## Swap Case
https://launchschool.com/exercises/7d7dbbbe

## Staggered Caps (Part 1)
https://launchschool.com/exercises/3b0a4549

## Staggered Caps (Part 2)
https://launchschool.com/exercises/f6b29024

## How long are you?
https://launchschool.com/exercises/82ac0837

lesson:
- arguments reserved keyword

## Search Word (Part 1)
https://launchschool.com/exercises/5a7a40b6

lesson
- use ternary operator to deal with possibility of null result:
  - if it's null, it's falsy, so return 0
  - otherwise, can get a property / perform operation and return a different result
- escape \\b to use regular expression in string

## Search Word (Part 2)
https://launchschool.com/exercises/c5f72b07

# Medium 1
https://launchschool.com/exercise_sets/e46f01e3

## Rotation (Part 1)
https://launchschool.com/exercises/d00dcc58

## Rotation (Part 2)
https://launchschool.com/exercises/38185d87

Problem:
- inputs:
  - number to rotate
  - count of digits to rotates
- Output:
  - rotated number

The function returns the same number, except that for the number of digits at the end number (as specified by count), it performs a rotation, i.e., moves the first of those numbers to the end

Data Structure
- need to convert to string
- then convert to array
- then convert back to a number

Algorithem
1. Convert number to string and then to array.
2. Split the array into two parts
  - the first digits that will be unaffected
  - the last digits that will be affected
3. For the last digits to be affected, perform rotation
4. Join the two arrays
5. return

## Rotation (Part 3)
https://launchschool.com/exercises/3d704505

Problem
735291
0. 352917
1. 329175
2. 321759
3. 321597
4. 321579

input: integer
output: integer that is maximally rotated

explicit rules
1. on first (zero) iteration, rotate first digit to last digit
2. on remaining iterations, keep the first digits in place

Implicit:
3. the number of digits to keep in place is equivalent to the iteration idx, if idx starts from 0

Algo
1. create string of num
2. create a loop for rotating, to rotate a maximum of the times equivalent to the length of the string minus 1
3. on each iteration, split the string in to two halves
  1. first half is from 0 to 0 plus idx
  2. second half is from 0 plus idx to end
4. on each iteration, use rotateString on second hlaf
5. combine both halves
6. return new string

## Stack Machine Interpretation
https://launchschool.com/exercises/026e99f0

Lesson
  - can use conditionals within switch's default statement to cover various cases

## Word to Digit
https://launchschool.com/exercises/9010f84f

Problem
input: string
output: string
rules: transform each instance of a number word to a digit character

Data structure
- use object as dictionary to compare to
- convert string to array to loop over it (alternatively: could loop over object keys and use something like replace on string)

Algo
1. Create dictionary of number words to digits
2. split string into an array of words
3. create result string/array
4. loop over array of words
  1. if word is a dictionary key, replace
  2. otherwise, keep original word
  3. add to result string
5. return result string

Problem case: 'four.'

Could also use replaceAll

## Fibonacci Numbers (Recursion)
https://launchschool.com/exercises/2a0d956d

Three qualities of a good recursive function
1. calls itself at least once
2. has an ending condition
3. results of each recursion are used in each step

## Fibonacci Numbers (Procedural)
https://launchschool.com/exercises/13738ab2

## Fibonacci Numbers (Memoization)
https://launchschool.com/exercises/f3bfa787

memoization; approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed; js101

# Medium 2
https://launchschool.com/exercise_sets/63373094

## Lettercase Percentage Ratio
https://launchschool.com/exercises/71983fb9

## Triangle Sides
https://launchschool.com/exercises/b932118f

Problem
- input: three numbers, for the lengths of three sides
- output: string of the classification
- Explicit rules
  - to be a valid triangle, two conditions:
    1. the sum of the length of the two shortest sides must be greater than the length of the longest side
    2. every side must have a length greater than 0
  - equilater = equal sides
  - isosceles = two equal sides
  - scalene = different lengths

Data
- maybe create array, in order to sort sides

Algorithm
1. create array from three side numbers
2. sort array from smallest to largest
3. if not every element is greater than 0, return invalid
4. if sum of first two sides is not greater than third, return invalid
5. if three sides are equal, return equilateral
6. if two sides are equal, return isoceles
7. else, return scalene

How to access a function in a file using node's terminal; in file: module.exports = { functionName }, and in node: const functionName = require('./filename').functionName; js101

## Tri-Angles
https://launchschool.com/exercises/4a3e10a1

## Unlucky Days
https://launchschool.com/exercises/071f5a1a

input: year
output: integer of the number of Friday the 13ths

assumption: year greater than 1752

1. create count variable and set to 0
2. create date object for January 1
3. for each day in the year, test whether it is both Friday and the 13th day of a month. If so, add to count
4. return count

## Next Featured Number Higher than a Given Value
https://launchschool.com/exercises/135a426a

input: integer
output: integer, which is the next largest number that is a featured integer

featured number
  1. an odd number
  2. a multiple of 7
  3. all of its digits occur exactly once each

NOTE: The largest possible featured number is 9876543201.

1. set variable nextFeatured
2. set candidate = num
2. loop until the next featured number is found
  1. add one to candidate
  1. if not odd, continue
  2. if not multiple of 7, continue
  3. if not all digits occur exactly once, continue *
  4. else: set nextFeatured = candidate and break
3. return nextFeatured

*
1. convert to String, and then to array
2. test whether each array elem is not equal to the remaining elements

Lesson
- Use dictionary to keep track of whether a value already exists, and it will break with first instance

## Sum Square - Square Sum
https://launchschool.com/exercises/68603298

Lesson:
- Don't create a more sophisticated data structure (e.g., array, obj) when you don't have to

## Bubble Sort
https://launchschool.com/exercises/b648e695

input: array
output: same array, sorted

