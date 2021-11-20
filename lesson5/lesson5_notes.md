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

term first-class value or first-class object
1. They can be assigned to a variable or an element of a data structure (such as an array or object).
2. They can be passed as an argument to a function.
3. They can be returned as the return value of a function.

What makes the declarative style of programming possible; this is made possible because we can treat functions as values; js101

Higher Order Functions; Functions that take other functions as arguments, as well as functions that return other functions; js101

## Example 1
For each element of the array, do the following:
1. assign it variable name `arr`.
2. log to the console the value of arr[0]

Questions to ask for interpreting / evaluating code:
1. What type of action is being performed?
  - Method call? Callback? Conditional? Something else?
2. On what value is that action performed?
3. What is the side-effect of that action (e.g., output or destructive action)?
4. What is the return value of that action?
5. Is the return value used by whatever instigated the action?

five things to identify when interpreting code;
1. type of action
2. which value (& type of value) the action is performed on
3. what side-effect results
4. what value is returned
5. whether & how the return value is used by what initiated the action

## Example 3

1. Action: method call (map)
2. Performed on: outer arrary [[1, 2], [3, 4]]
3. Side effect: none
4. Return value: new array [1, 3]
5. Is return value used: no, but shown on line 7

1. Action: callback execution
2. performed on: each inner array
3. Side effect: none
4. Return value: number at index 0 of each array
5. Is return value used: yes, used by map for transformation

1. action: element access [0]
2. performed on: each inner array
3. side effect: none
4. return value: the first element of each array
5. is used & how: used by console.log

1. action: method call console.log()
2. performed on: first element of each inner array
3. side effect: logs string representation of integer
4. return: undefined
5. used: no

1. action: element access
2. performed on: each subarray
3. side effect: none
4. return value: element at index 0 of each sub array
5. used & how: yes, for transformation with map

## Example 4
https://launchschool.com/lessons/778acada/assignments/a2ba7936

1. action: variable declaration & intialization (myArr)
2. performed on: (return value of) method invocation on array
3. side effect: none
4. return value: undefined
5. used: return value is not used

1. action: method invocation (forEach)
2. performed on: outer array [[18, 7], [3, 12]]
3. side effect: none
4. return value: undefined
5. return value used: assigned to myArr

1. action: callback function
2. performed on: each subarray
3. side effect: none
4. return value: transformed version of the subarray **[undefined, undefined]**
5. used: **no**

1. action: method invocation: map
2. performed on: each subarray
3. side effect: none
4. return value: transformed version of the subarray **[undefined, undefined]**
5. used: yes, by callback function of forEach

1. action: callback function for map
2. performed on: each number in each subarray
3. side effect: none
4. return value: undefined (from console.log) or undefined if num is not greater than 5 since there is no return value
5. used: yes, for map transformation

1. action: **comparison**
2. performed on: num of subarray
3. side effect: none
4. return value: **boolean**
5. used by: **yes, evaluated by if**

1. action: method invocation (console.log)
2. performed on: number of each subarray
3. side effect: logs string of num to console, when num > 5
4. return value: undefined
5. used: yes, given to callback function of map

## Example 5
https://launchschool.com/lessons/778acada/assignments/a2ba7936

1. action: method invocation (map)
2. performed on: outer array [[1, 2], [3, 4]]
3. side effect: none
4. return value: [[2, 4], [6, 8]]
5. return value used: no

1. action: callback function passed to map
2. perfromed on: each subarray
3. side effect: none
4. return value: [2, 4] and [6, 8]
5. used: new value transformed

1. action: method invocation (map)
2. performed on: each number of each subarray
3. side effect: none
4. return value: 2, 4, 6, 8
5. used: yes, for transforming each subarray

1. inner callback function
2. performed on: each num
3. side effect: none
4. return value: number
5. yes, for map transformation

1. action: multiplication
2. each num
3. side effect: none
4. return value: 2, 4, 6, 8
5. used: yes, **for inner callback**

## Example 6
1. action: method invocation (filter)
2. performed on: on outer array
3. side effect: none
4. return value: array of selected elements
5. used: no

1. callback function of filter
2. performed on: each object in array
3. side effect: none
4. return value: objects that meet the every condition
5. used: yes, for filter

1. action: method invocation (Object.keys)
2. performed on: each object
3. side effect: none
4. return value: array of keys
5. used: yes, by every method

1. action: method invocation: every
2. performed on: each object
3. side effect: no
4. return value: boolean
5. used: yes, for filter to perform selection

1. action: callback function
2. performed on: each key of object
3. side effect: no
4. return value: boolean
5. used: yes, by every for *****

1. action: element selection (object[key][])
...

## Example 7
Lesson:
- when you have a nested array, performing an action on a subarray (e.g., selection), might require an outer transformation (e.g., map)

## Example 8
```javascript
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]]
```

element1
  - [[1], [2], [3], [4]]
  - [['a'], ['b'], ['c']]

element2
  - [1]
  - ...

element 3
  - 1
  - ...


## Example 9
[[[2, 3], [4, 5]], [6, 7]]

# 5.5 Practice Problems
https://launchschool.com/lessons/778acada/assignments/8c5df017

