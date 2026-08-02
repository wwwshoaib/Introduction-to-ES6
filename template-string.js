
//template-string
/**
 * Importance of Template Strings
Easy variable interpolation – Insert variables using ${}.
Improves readability – Cleaner than string concatenation (+).
Supports multi-line strings – No need for \n.
Can include expressions – Perform calculations inside ${}.
Useful for HTML generation – Makes creating dynamic HTML much easier.
 */

const name = 'Shoaib';
const a = 50;
const b = 50;

const message = `
Hello, ${name},
your payment was successfully. 
Your paid amount is Tk. ${a + b};

`

console.log(message)