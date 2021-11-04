[Lesson 3: Practice Problems](https://launchschool.com/lessons/0206c7f9/assignments)

# Introduction
https://launchschool.com/lessons/0206c7f9/assignments/697c5f27

# Practice Problems: Easy 1
https://launchschool.com/lessons/0206c7f9/assignments/6de38fb9

## Question 1
what happens when an array indices are skipped and an item is added to the array; skipped array indices are empty (different from simply undefined) but will return undefined when accessed, they'll be skipped (e.g., map); js101

## Question 2
String.prototype.endsWith(); method that determines whether a string ends with the characters of a specified string, returning true or false as appropriate; js101

## Question 3
Object.prototype.hasOwnProperty()

## Question 4
String.prototype.charAt()

## Question 5
`false == '0'` evaluates to `true`

## Question 6
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

## Question 7
Ways to tell if str1 includes str2:
1. str1.includes(str2)
2. str1.match(str2) !== null
3. str1.indexOf(str2) > -1
4. /str2/.test(str1)

## Question 8
Ways to add a value to an array:
1. arr.push(value) // (returns new length of array)
2. arr[arr.length] = value // (returns value)
3. arr = arr.concat(value) // (returns new array)

## Question 9
How to add multiple items to an array; arr.push(item1, item2); js101

## Question 10
How to get a part of str1 before str2?; str1.slice(0, str1.indexOf(str2)); js101

# Practice Problems: Easy 2
https://launchschool.com/lessons/0206c7f9/assignments/bb21fab7

## Question 1
how to replace first instance of strPart1 of str with strPart2?; str.replace(strPart1, strPart2); js101
how to replace all instances of strPart1 of str with strPart2?; str.replace(/strPart1/g, strPart2); js101

## Question 2
how to use spread syntax to create a new array from invoking a mutating method on an original array, without changing the original array; let newArr = [...originalArr].mutatingMethod(); js101
how to use slice to create a new array from invoking a mutating method on an original array, without changing the original array; let newArr = originalArr.slice().mutatingMethod; js101

https://pythontutor.com/javascript.html

Ways to reverse an array without changing the original array:
1. Array.from(numbers).reverse()
2. numbers.slice().reverse()
3. [...numbers].sort((num1, num2) => num2 - num1)


what happens when Array.prototype.sort's compareFunction(a, b) returns value > 0; b is sorted before a; js101
what happens when Array.prototype.sort's compareFunction(a, b) returns value < 0; a is sorted before b; js101
what happens when Array.prototype.sort's compareFunction(a, b) returns value === 0; keeps original order of a and b; js101

## Question 3
Array.prototype.includes()

## Question 4

## Question 5
How to delete an element in an array at a particular index?; Use Array.prototype.splice(idx, 1); js101
How to add an element in an array at a particular index?; Use Array.prototype.splice(idx, 0, elem); js101

## Question 6

How to create a new array that contains all values of an array with nested arrays, but in an un-nested format:
1. `flintstones = [].concat(...flintstones)`
2. `flintstones = flintstones.reduce((accum, element) => accum.concat(element), []);`
3. `let newFlintstones = []; flintstones.forEach(element => newFlintstones = newFlintstones.concat(element)});`
4. `let newFlintstones = flintstones.flat();`

What is the result of [].concat(1, [2, 3]); If concat is given multiple argument, then it unnests any arrays within those arguments: so the result is [1, 2, 3]; js101
How to get only the values of an array, regardless of whether they are nested?; newArr = [].concat(...originalArr); js101
Array.prototype.flat(); method that creates a new array with all sub-array elements concatenated into it recursively up to the specified depth; js101

Lesson
- Notice that reduce is basically a forEach with an implicit variable reassignment for accum.

## Question 7

## Question 8

## Question 9

## Question 10
Lesson
- if the right method is not available for strings, it might be that converting to an array with split() will help, if there is an array method that works

# Practice Problems: Easy 3
https://launchschool.com/lessons/0206c7f9/assignments/da7ec933

## Question 1
1. numbers.length = 0
2. while (numbers.length > 0) numbers.shift()
3. numbers.slice(0, 0)

## Question 2
In some languages you can use + to concatenate two arrays, but not in JavaScript.

## Question 3

## Question 4
deep copy of an array or object; makes a duplicate of every item in an existing array or object. In particular, it creates completely new instances of any subarrays or subobjects in the source object.; js101
shallow copy of an array or object; only makes a duplicate of the outermost values in an array or object, i.e., any elements that are themselves arrays or objects will be the same arrays/objects; js101

## Question 5
function isColorValid(color) {
  return color === "blue" || color === "green";
}

const isColorValid = color => color === "blue" || color === "green";

const isColorValid = color => ['blue', 'green'].includes(color);

# Practice Problems: Medium 1
https://launchschool.com/lessons/0206c7f9/assignments/e4fb9aaf

## Question 1

## Question 2

## Question 3

## Question 4

## Question 5

## Question 6

## Question 7

## Question 8

## Question 9

## Question 10

# Practice Problems: Hard 1
https://launchschool.com/lessons/0206c7f9/assignments/59c055ee

## Question 1

## Question 2

## Question 3

## Question 4
/^\d+$/.test(str);
^\d = the first character of str is a digit
\d+ = there are one or more digits in str
\d$ = the last character of str is a digit

When you create a RegExp in this way, every character has to appear in the order and amount that you specify.

For example, let's say that you want to match a string that only includes 3 digits. You could write a regexp like this: /^\d\d\d$/. What ^ and $ do is that they make sure that there is nothing else before or after the three consecutive digits. There can also be nothing else in between since each \d is directly followed by another \d and then the string ends with $.

In your example, /^\d$/, there can only be one digit (one \d) included in the tested string for test to return true.

Our initial example is the same, except instead of hard-coding the number of consecutive digits we use + to indicate that there can be one or more, as you said.

Let me know if that helps or if you have further questions.

