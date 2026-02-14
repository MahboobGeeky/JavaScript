// this keyword special keyword h, kyunki jaise ki baaki sare keyword ki value ya unka nature same rahta ki this ki value ya nature badal jata ha es baat se ki aap usey kaha use kar rhe ho.

// global scope
console.log(this); // window, 

// method
let obj = {
    name: "harsh",
    age: 26,
    sayName: function () {
        console.log(this.name);
    } 
}

// event handler
document.querySelector("h1").addEventListener("click", function () {
    console.log((this.style.color = "red"));
});


// global - window
// function - window
// method with es5 fnc - object
// method with es6 arrow fnc - window
// arrow function inside es5 method - object
// event handler - element
// class - blank object 