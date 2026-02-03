let body = document.querySelector("body");
body.style.backgroundColor = "grey";

let div = document.querySelector("div");
document.addEventListener("keydown", function(details){
    console.log(details.key);
    div.textContent = details.key;

})

