[Lesson 5](https://launchschool.com/lessons/778acada/assignments)

# 5.1 Introduction
https://launchschool.com/lessons/778acada/assignments/3ce3d7e0

# 5.2 Sorting
https://launchschool.com/lessons/778acada/assignments/6c25df1a

- mainly applies to arrays
- strings can be sorted by first converting to arrays
- sorting for objects is irrelevant

undefined values are a special case when it comes to sorting; They are always placed at the end of the array no matter what the other values are; js101

default behavior of Array.prototype.sort(); it converts all the numbers to strings and compares them by their Unicode character codes; js101

## UTF-16
- Uppercase letters come before lowercase letters (sometimes called ASCIIbetical order, but that is imprecise when talking about UTF-16 code points).
- Digits and most punctuation come before letters.
- There are several punctuation characters between the uppercase and lowercase letters, and several more that come after all of the letters.
- There is an extended ASCII table that contains accented and other characters - this comes after the main ASCII table.
- All other UTF-16 characters come after the extended ASCII table and have a code point of at least 256.

# 5.3 Nested Data Structures
https://launchschool.com/lessons/778acada/assignments/da4eb06c

ways to make a shallow copy of an array; 1) arr.slice() with no arguments, 2) [...arr]; js101
how to make a shallow copy of an obj; let copy = Object.assign({}, obj); js101

JSON.stringify(); method that converts a JavaScript object or value (only having primitives, arrays, and plain objects as elements) to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.; js101
indirect way to make a deep copy of an obj or arr; JSON.parse(JSON.stringify(obj)); js101
limitation of indirect way to make a deep copy; only works with nested arrays and plain objects; js101

Object.isFrozen(); method that determines if an object is frozen.; js101

# 5.4 Working with Callback Functions
https://launchschool.com/lessons/778acada/assignments/a2ba7936
