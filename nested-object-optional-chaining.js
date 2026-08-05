
const user1 = {
    name: 'Saliar maa',
    profession: 'House wife',
    age: 67,
    company: {
        name: 'SKISC',
        location: {
            country: 'Bangladesh',
            district: 'Sylhet',
        }

    }
}


console.log(user1.company.location);




const user2 = {
    name: 'Saliar maa',
    profession: 'House wife',
    age: 67,
    company: {
        name: 'SKISC',
       
    }
}


//console.log(user2.company.location.country);
//Without errow will be thrown
//Optional chaining
//If object is not present, but optional chaining is used, then there will be no error. but undefined
console.log(user2?.company?.location?.country);