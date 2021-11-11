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
