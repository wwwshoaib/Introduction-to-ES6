//arrow function 

/**
 * Arrow function is a shorter way to write a function in JavaScript. It was introduced in ES6.
 * Basic Syntax
const functionName = (parameters) => {
  // code
};


3. Shorter Version

If there is only one statement, we can omit {} and return:

const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
 */


const add = (a, b) =>  a + b;
console.log(add(4, 6));

/**
 * Normal function has its own this while arrow function inherits this from outer scope
 */ 

const student = {
    name: 'Shoaib Ahmed',
    profession: 'student',
    isMarried: false,
    normalFunction: function () {
        console.log(this.name);
        
    },

   // arrowFunction: () => console.log(this.name)
   
}


student.normalFunction(); 
//student.arrowFunction();