/* Welcome Stranger: https://launchschool.com/exercises/1bd6be82
** Create a function that takes 2 arguments, an array and an object.
** The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name.
** The object will contain two keys, "title" and "occupation", and the appropriate values.
** Your function should return a greeting that uses the person's full name, and mentions the person's title.
*/

// // mine
// function greetings(arr, obj) {
//   let name = '';
//   for (let i = 0; i < arr.length; ++i) {
//     if (i === 0) {
//       name += arr[i];
//     } else {
//       name += ' ' + arr[i];
//     }
//   }

//   let fullTitle = obj.title + ' ' + obj.occupation;

//   return `Hello, ${name}! Nice to have a ${fullTitle} around.`;
// }

function greetings(nameArray, titleObj) {
  return `Hello, ${nameArray.join(' ')}! Nice to have a ${titleObj.title} ${titleObj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.