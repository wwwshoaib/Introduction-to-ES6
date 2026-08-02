
// without default parameter

function greet(name) {
    return "Hello, "+name;
}


console.log(greet());


// with default parameter

function greetNew(namePara = "Kupa Shamsu") {
    return "Hello, "+namePara;
}


console.log(greetNew());

//
function makeCoffee(sugar= 1) {
    return 'Coffee is made with '+sugar+' spoon sugar';
}


console.log(makeCoffee(5));
console.log(makeCoffee());

//
function calculateTotal(price, tax = 5) {
    const payment = price + (price*(tax/100));
    return payment;
}

console.log(calculateTotal(500, 20));
console.log(calculateTotal(500));