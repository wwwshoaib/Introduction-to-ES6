
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

//console.log(student);
delete student.marks;
//console.log(student); 


//seal:
//seal: can add and delete but can edit

const person = {
    name: 'Salia Khatun',
    age: 20,
    isMarried: false,
    marks: {
        bangla: 40,
        maths:60,
        chemistry: 80
    }
}    

//console.log(person)
//seal: can add and delete but can edit
Object.seal(person)
delete person.name;
console.log(person)

person.age = 100;

person.hasBlackEye = true;
console.log(person) 


//freeze
//freeze: nothing can be done

const man = {
    name: 'sodor uddin',
    age: 20,
    isMarried: false,
   
}    
Object.freeze(man);

delete man.name;
man.isExiled = false;

man.age = 800;

console.log(man);


