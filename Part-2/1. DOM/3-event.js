// event ka matlab hota h koi action hona
// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function(){
//     h1.style.color = "red";
// })


let h1 = document.querySelector("h1");
h1.style.color = "red";
let body = document.querySelector("body");
body.style.backgroundColor = "black";

function changeColor(){
    h1.style.color = "green";
}

h1.addEventListener("click", changeColor);



