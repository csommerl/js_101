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
