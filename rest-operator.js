
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

function sum(a, b, ...restElements) {
    console.log('Rest Elements: ', restElements)
    return a + b;
}


const result = sum(55, 45, 55550, 99999);
console.log(result);