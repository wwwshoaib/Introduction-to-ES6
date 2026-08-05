
//Rest operator
/**
 * The rest operator (...) collects multiple elements or arguments into a single array or object.

Note: The spread operator expands elements, while the rest operator collects elements.
Importance of Rest Operator
Collects multiple function arguments into a single array.
Handles an unknown number of arguments.
Extracts remaining elements from an array.
Extracts remaining properties from an object.
Makes functions more flexible and reusable.
Reduces the need for the arguments object.
 */
//Rest Parameters in a Function
function sum(a, b, ...restElements) {
    console.log('Rest Elements: ', restElements)
    return a + b;
}


const result = sum(55, 45, 55550, 99999);
console.log(result);


//Rest with Array Destructuring
const numbers = [10, 20, 30, 40, 50];

const [first, ...rest] = numbers;

console.log(first); // 10
console.log(rest);  // [20, 30, 40, 50]

//Rest with Object Destructuring
const person = {
  name: "John",
  age: 25,
  country: "USA"
};

const { name, ...details } = person;

console.log(name);    // John
console.log(details); // { age: 25, country: "USA" }