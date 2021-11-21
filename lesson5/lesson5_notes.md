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

## Practice Problem 1
```javascript
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));
```

## Practice Problem 2
```javascript
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));

```

## Practice Problem 3
```javascript
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

arr1[2][1][3]

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

arr2[1].third[0]

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

arr3[2].third[0][0]

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

obj1.b[1]

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

Object.keys(obj2.third)[0]

```

## Practice Problem 4
```javascript
let arr1 = [1, [2, 3], 4];

arr1[1][1] = 4

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

arr2[2] = 4

let obj1 = { first: [1, 2, [3]] };

obj1['first'][2][0] = 4

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

obj2['a']['a'][2] = 4

```

## Practice Problem 5
https://launchschool.com/lessons/778acada/assignments/8c5df017

```javascript
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Solution 1
let totalAge = 0;
let names = Object.keys(munsters);
for (let idx = 0; idx < names.length; idx += 1) {
  totalAge += munsters[names[idx]]['age'];
}
console.log(totalAge);  // 497

// Solution 2
let totalAge = 0;
for (let name in munsters) {
  totalAge += munsters[name]['age'];
}
console.log(totalAge) // 497

// Solution 3
let totalAge = 0;
let members = Object.keys(munsters)
members.forEach(member => {
  totalAge += munsters[member]['age'];
})

// Solution 4
let totalAge = 0;
let memberData = Object.values(munsters)
memberData.forEach(member => {
  totalAge += member['age'];
})

```

## Practice Problem 6

```javascript
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// solution 1
for (let name in munsters) {
  console.log(`${name[0].toUpperCase() + name.slice(1)} is a ${munsters[name]['age']}-year-old ${munsters[name]['gender']}.`);
}

// solution 2
Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1]['gender'];
  console.log(`${name} is a ${age}-year-old ${gender}.`)
})

```

## Practice Problem 7
```javascript
a = 2
b = [5, 8]
arr = [2, [5, 8]]

a = 2
b = [5, 8]
arr = [4, [5, 8]]

a = 2
b = [3, 8]
arr = [4, [3, 8]]

```

## Practice Problem 8
https://launchschool.com/lessons/778acada/assignments/8c5df017
```javascript

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (VOWELS.includes(char.toLowerCase())) {
        console.log(char);
      }
    })
  })
})

```

## Practice Problem 9
```javascript

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subarr => {
  if (Number.isInteger(subarr[0])) {
    return subarr.slice().sort((a, b) => {
      return a - b;
    });
  } else {
    return subarr.slice().sort();
  }
});

arr.map(subarr => {
  if (typeof subarr[0] === 'string') {
    return subarr.slice().sort();
  } else {
    return subarr.slice().sort((a, b) => a - b);
  }
});

```

## Practice Problem 10
https://launchschool.com/lessons/778acada/assignments/8c5df017
```javascript

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subarr => {
  if (typeof subarr[0] === 'string') {
    return subarr.slice().sort().reverse();
  } else {
    return subarr.slice().sort((a, b) => b - a);
  }
})

```

## Practice Problem 11
```javascript

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  let entries = Object.entries(obj);
  entries = entries.map(entry => {
    entry[1] += 1;
    return entry;
  });
  return Object.fromEntries(entries);
});

// theirs
arr.map(obj => {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }
  return newObj;
})

```

## Practice Problem 12
https://launchschool.com/lessons/778acada/assignments/8c5df017

```javascript
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(subarr => {
  return subarr.filter(num => (num % 3) === 0);
});

```

## Practice Problem 13
```javascript

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

[...arr].sort((a, b) => {
  let sumOfOddInA = getSumOfOddInArray(a);
  let sumOfOddinB = getSumOfOddInArray(b);
  return sumOfOddInA - sumOfOddinB;
});

function getSumOfOddInArray(arr) {
  return arr
    .filter(num => (num % 2) === 1)
    .reduce((accum, num) => accum + num, 0);
}

```

## Practice Problem 14
```javascript

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];
for (let key in obj) {
  if (obj[key]['type'] === 'fruit') {
    let colors = obj[key]['colors'];
    colors = colors.map(color => color[0].toUpperCase() + color.slice(1));
    arr.push(colors);
  } else if (obj[key]['type'] === 'vegetable') {
    let size = obj[key]['size'];
    size = size.toUpperCase();
    arr.push(size);
  }
}
console.log(arr);


let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(color => capitalize(color));
  } else if (attributes['type'] === 'vegetable') {
    return attributes['size'].toUpperCase();
  }
});

```

## Practice Problem 15
```javascript

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter(obj => {
  return Object.values(obj).every(numArray => {
    return numArray.every(num => num % 2 === 0);
  });
});

```

## Practice Problem 16

```javascript

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

Object.fromEntries(arr);

let obj = {};

arr.forEach(subarr => {
  let key = subarr[0];
  let val = subarr[1];
  obj[key] = val;
});

```

## Practice Problem 17

# 5.6 Summary
https://launchschool.com/lessons/778acada/assignments/b5397b47

# Lesson 5 Quiz 1
https://launchschool.com/lessons/778acada/assignments/96cdcf45
