
/**
 * The spread operator (...) expands an array, object, or iterable into individual elements.
 * Importance of Spread Operator
Copies arrays and objects without modifying the original.
Merges arrays and objects easily.
Adds new elements to arrays without changing the original.
Passes array elements as function arguments.
Creates immutable updates, which is very useful in React.
Makes code shorter, cleaner, and more readable.
 */

const spreadMyArray = [45, 67, 90, 68,];
const spreadMyArray1 = [45, 67, 90, 68, 66666];

console.log(...spreadMyArray, 900000, 3333333);
console.log(...spreadMyArray1); 

//copy an array
const numbers = [1, 2, 3];
const copy = [...numbers];

console.log(copy); // [1, 2, 3]


// Merge arrays
const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];

console.log(result); // [1, 2, 3, 4] 


//Add new elements
const fruits = ["Apple", "Banana"];

const newFruits = [...fruits, "Orange"];

console.log(newFruits);
// ["Apple", "Banana", "Orange"]  

//Merge objects
const person = { name: "John" };
const details = { age: 25 };

const user = { ...person, ...details };

console.log(user);
// { name: "John", age: 25 } 

//Function arguments
function add(a, b, c) {
  return a + b + c;
}

const nums = [10, 20, 30];

console.log(add(...nums)); // 60

