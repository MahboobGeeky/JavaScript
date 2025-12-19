/*
JavaScript prepares memory before running code.
It moves all declarations to the top —> this is called hoisting. 
*/
console.log(a)
var a = 10;

console.log(b); // Reference Error
let b = 20;
