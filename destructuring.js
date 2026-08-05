
//Destructuring 

//Array destructuring
//position is mandatory in array function 
const numbers = [10, 40, 20, 80, 90];

//   const ten = numbers[0];
//   const ninety = numbers[4];
//   console.log(ten, ninety)
 
const [ten, , , , ninety] = numbers;
console.log(ten, ninety);

//Object Destructuring
//Position is not mandatory

const student = {
    name: 'Alia Khatun',
    age: 40,
    isMarried: true,
    marks: {
        bangla: 40,
        maths:60,
        chemistry: 80
    }
}

const {age, name:fullName, marks: {chemistry}} = student;
// console.log("Name of Student: ",fullName, ", Age: ",age, ", Obtained marks in Chemistry: ", chemistry);
console.log(fullName, age, chemistry);