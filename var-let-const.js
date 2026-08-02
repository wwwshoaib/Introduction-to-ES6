// var
var a = 10;
var a = 20;   // ✅ Allowed
a = 30;       // ✅ Allowed


// let
let b = 10;
// let b = 20; // ❌ Error
b = 30;        // ✅ Allowed

const c = 10;
// c = 20;      // ❌ Error  

/**
 * Short Definitions
var → Function-scoped variable that can be redeclared and reassigned.
let → Block-scoped variable that can be reassigned but not redeclared.
const → Block-scoped variable that cannot be reassigned or redeclared.
 */

/**
 * Best Practice
Use const by default.
Use let when the value needs to change.
Avoid var in modern JavaScript (ES6+).
 */