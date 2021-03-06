[Lesson 4](https://launchschool.com/lessons/60e10aa5/assignments)

# Introduction
https://launchschool.com/lessons/60e10aa5/assignments/91b429bc

# Collections Basics
https://launchschool.com/lessons/60e10aa5/assignments/5c7f24f1

## Element Reference

### String Element Reference
What happens when you provide negative arguments to str.slice()?; When given negative numbers as the indices, str.slice() treats them as string length + index.; js101
slice and substring differences; 1. When the start index is greater than the end index, substring swaps the two arguments while slice returns an empty string. 2. When either argument is negative, substring treats them as 0, while, as we saw above, slice treats them as length + index. We recommend using String.prototype.slice. Its behavior is more natural and predictable when dealing with these edge cases.; js101

### Array Element Reference

### Object Element Reference
What happens when an object is initialized with duplicate key/property names?; The first one is overwritten by the next one.; js101

### Element Reference Gotchas
1. Out of Bounds Indices
2. Invalid Object Keys
How to differentiate between a non-existent property vs. a property that has undefined as its value?; 1. Object.prototype.hasOwnProperty, 2. Object.keys along with the array includes method; js101
3. Arrays are Objects!
How are non-element properties handled with arrays?; 1. length property does not change, 2. these properties are ignored by array methods like forEach, map, and filter, 3. these properties are included by object methods like Object.keys; js101

## Conversion

## Element Assignment

### Array Element Assignment

### Object Key Assignment

### String Character Assignment
What happens when you try to reassign a string element?string element reassignment, even though it's syntactically permitted, doesn't affect the string. The reassignment value is returned; js101

# String Methods
https://launchschool.com/lessons/60e10aa5/assignments/13c9f3f6
Difference between str.charAt() and str.[]; when using indices for characters that don't exist, charAt returns an empty string (''), while [] returns undefined; js101
String.prototype.charCodeAt(); method that returns the Unicode code point or character code of the character at that index. A Unicode code point is the number that represents a given character at the machine level. If you don't provide an index, it assumes the index 0.; js101
String.fromCharCode(); method that does the opposite of String.prototype.charCodeAt. It takes a character code (Unicode code point) and returns the character represented by that character code.; js101
What it means to be a static method?; It is a method that operates directly on the class/constructor for the particular data type; js101
String.prototype.trimEnd(); method that removes whitespace from the end of a string. trimRight() is an alias of this method.; js101
String.prototype.startsWith(); mehtod determines whether a string begins with the characters of a specified string, returning true or false as appropriate.; js101

# Iterating with for and while Loops
https://launchschool.com/lessons/60e10aa5/assignments/64a45839
How to iterate with for & while loops over an object?; Use Object.keys() or for/in loop; js101
Difference between iterating over an object using Object.keys or for/in loop?; Object.keys will only iterate over the objects own properties, whereas for/in loop will iterate over the prototype properties as well; js101
How to use for/in loop without iterating over prototype properties?; use hasOwnProperty; js101
How ES6+ guarantee the iteration order for an object's property keys. The order is based on: 1) the types of the property keys (strings come before symbols), 2) the values of the keys (non-negative integers come first), and 3) the order in which the keys were added to the object.; js101
Why use continue as a guard clause in a loop?; Do this in order to: 1) show clearly that the loop has no interest in a particular case and 2) unnest the logic of the loop; js101

# Introduction to the PEDAC Process
https://launchschool.com/lessons/60e10aa5/assignments/73c01de6

## P - [Understand the] Problem
Three steps
1. Read the problem description.
2. Check the test cases, if any.
3. If any part of the problem is unclear, ask the interviewer or problem requester to clarify the matter.

Very important question:
- Do I need to return the same object or an entirely new one?

4. Write down inputs & outputs

## Data Structure / Algorithm

## Testing Frequently

# The PEDAC Problem Solving Process
https://launchschool.com/lessons/60e10aa5/assignments/d70a34e0

## Understanding the Problem
- Assess available information (description & test cases)
- Identify inputs & outputs
- Define the boundaries
- Establish explicit & implicit requirements
- To identify implicit requirements ask 'what does x mean'?

Example
- Sequence of integers
- Sequence begins with two
- Integers are even
- Integers are consecutive
- Sequences are grouped into rows
- Each row incrementally larger than the last
- Row number equals number of elements in the row
  - Row 1 has 1 element
  - Row 2 has 2 elements
  - etc.
- Input: single integer
  - which identifies a row, which is a subset of a sequence of integers
- Output: a single integer
  - sum of integers in the row identified

2
4, 6
8, 10, 12
14, 16, 18, 20

## Examples and Test Cases
- Can confirm/refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

Example:
- row num 1 => 2
- row num 2 => 10
- row num 3 => 30
- row num 4 => 68

## Data Structures
- Help to reason with data logically
- Help to interact with data at an implementation level
- Contributes to problem-solving process
- Help think through what algorithms to use

Example
- Overall structure represents sequence as a whole
- Individual rows within overall structure
  - Individual rows in a set order in context of sequence as a whole
  - Individual rows contain integers
  - Can assume that integers are in a set order in the context of the sequence
=> nested array is the best choice

[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20],
  ...
]

## Algorithms
algorithm; a logical sequence of steps from input to output to accomplish a task or objective, or a series of steps to structure the data in a way that produces the required output; js101

Stay abstract, high-level
  - avoid implementation detail, since doing so might trap you into thinking about only one approach
  - for now, don't think about efficiency

Example: general level
1. Create an empty 'rows' array to contain all the rows.
2. Create a row array and add it to the rows array.
3. Repeat step 2 until all the required rows have been created.
  - i.e., until the `rows` array's length = input
4. Sum the final row.
5. Return the sum of the final row.

Step 2:
- Problem: create a row
  - row is an array
  - array contains integers
  - integers are consecutive even numbers
  - integers in each row are part of the larger overall sequence
  - rows are of differing lengths
  - input:
    - row number/length
    - last integer of the sequence/first integer of the new row
  - output:
    - row itself
- Examples
  - start = 2, length = 1 --> [2]
  - start = 4, length = 2 --> [4, 6]
  - start = 8, length = 3 --> [8, 10, 12]
- Data structures:
  - array of integers
- Algorithm
  1. Create an empty row to contain the integers
  2. Add the starting integer
  3. Increment the starting integer by two to get the next integer
  4. Repeat Steps 2-3 until the array has reached the correct length
  5. Return the array

## Implementing a Solution in Code
- Translating solution algorithm to code
- Think about the algorithm in the context of the programming language you're using
  - Language features & constraints
  - Characteristics of data structures
  - Built-in functions / methods
  - Syntax / coding patterns
- Create test cases
- Code with intent

General notes
- not a completely linear process: can move back & forth

# Selection and Transformation
https://launchschool.com/lessons/60e10aa5/assignments/159da1eb

- Selection; picking some elements out of a collection depending on one or more criteria; js101
- Transformation; refers to manipulating every element in the collection; js101

## Using Loops to Select and Transform

## Extracting to Functions
identity transformation; a transformation that leaves the original elements unchanged; js101

selection criterion
transformation criterion
Lesson: can avoid hard-coding by adding criterion as a parameter

# Array Methods
https://launchschool.com/lessons/60e10aa5/assignments/6f49a9c1

Array methods for iteration, selection, and transformation; forEach, filter, and map, respectively; js101

## Array.prototype.forEach
callback; a function expression provided to another function/method as an argument; js101
second parameter of forEach; the function also takes a parameter of index; js101
how to call forEach on a string; use String.prototype.split('') to call this array method; js101
how to call forEach on an object's values; use Object.values(obj) to call this array method; js101
how to call forEach on an object's keys/properties; use Object.keys(obj) to call this array method; js101
how to call forEach on an object's key-value pairs; use Object.entries(obj), and then use array destructuring assignment to call this array method; js101

## Array.prototype.filter
What to use to filter an object?; It is best to use forEach with a selection criterion, rather than a combination of filter and forEach; js101

## Array.prototype.map

### filter and map with Strings
How to apply filter & map with strings for selection and transformation?; Use split & join to convert to an array and back again; js101

# More Array Methods
https://launchschool.com/lessons/60e10aa5/assignments/87d7e5d3

## Array.prototype.some
Array.prototype.some(); method that tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true. Otherwise it returns false. It doesn't modify the array.; js101

## Array.prototype.every
Array.prototype.find(); The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.; js101

## Array.prototype.findIndex
Array.prototype.findIndex(); The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.; js101

Difference between indexOf() and findIndex() methods for arrays; indexOf() returns the first index at which a given element can be found in the array, whereas findIndex() returns the index of the first element in the array that satisfies the provided testing function.; js101
Difference between find() and findIndex() methods on arrays; find returns the *value* of the first element that meets the condition, whereas findIndex returns the *index* of the value of the first element that meets the condition; js101

## Array.prototype.reverse

## Array.prototype.includes
Ways to check whether an object contains a key; 1) Object.keys(obj).includes(keyName), 2) obj.hasOwnProperty(keyName); js101

# Arrays: What is an Element?

## Array Keys
How do array methods deal with non-element values / array properties that are not non-negative integers?; All built-in Array methods ignore properties that are not elements; js101
Two meanings of an array being empty; 1) arr.length === 0, 2) Object.keys(arr) returns []; js101

## Sparse Arrays
Ways that an array can be empty; 1) the array contains no elements with non-negative integer indices, 2) the array has no keys, whether non-negative integers or otherwise, 3) the array has no length (no elements at non-integer indices and no empty slots); js101

# Practice Problems
Array.prototype.fill(); destructive method that changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.; js101
Spread syntax (...); syntax that allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected; js101
Math.min(); static function that returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.; js101
When to use short-circuiting?; For example, when you want to update the count of a value for an object key, but the object key might not already exist; js101

# Lesson 4 Quiz 1
https://launchschool.com/lessons/60e10aa5/assignments/cb4e0a29

How many times does forEach iterate?; Usually, this method iterates once per element in the array it is called on, but it will run fewer times if the callback function removes elements from the array; js101