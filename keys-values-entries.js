
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

const properties = Object.keys(student);
const values = Object.values(student);
const properties_values = Object.entries(student);
console.log(properties, values, properties_values);

// for (let property in properties) {
//     console.log(property);
// }
// for (let property of properties) {
//     console.log(property);
// }  