/* Primitives -> aisi saari values jinko copy karne par tumhe ek real copy mil jaye.
eg- string, number, boolean, null, undefined, symbol, bigInt

Reference -> inko copy karne par real copy nahi milegi but aapko reference melega parent ka
eg- arrays, objects, functions
    []    ,  {}    ,  ()


*/
let a = 12;
let b = a; // copy
console.log(a);
console.log(b);

a = a+2;
console.log(a);

let x = [1,2,3];
let y = x; // reference, change in y, will change in x

/*
method to form string:-
'' -> single quotes
"" -> double quotes
`` -> backticks

null -> humne jaan boojh kar koi value nhi di

undefined -> aapne ek variable banaya aur usey value nahi di to jo valuw dafault mili wo hai undefined

symbol -> unique immutable value
    future me hum koi libraries use karenge av is case me un libraries mein kai baar kuchh fields hoti h jinse similar hum bhi bana dete h aur galti se hamari banai hui fields us library ki original fields ko change kr dete h.
*/

/*
let sheryjs = {
    uid: 12,
    model: "mahboob"
}
sheryjs.uid = 1;

// symbol :-
let u1 = Symbol("uid");
console.log(u1); // Symbol(uid) 
let u2 = Symbol("uid");
console.log(u2);

*/
// u1===u2 -> false
// u1 and u2 both are unique


let obj = {
    uid: 1,
    name: "mahboob",
    age: 12,
    email: "mahboob9184@gmail.com",
}
let u1 = Symbol("uid");
obj(u1) = "001";

let arr = [1,2,3];
let arrB = arr;

