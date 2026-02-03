let inp = document.querySelector("#inpu");
let span = document.querySelector("span");
inp.addEventListener("input", function(dets){
    span.textContent = inp.value.length;
});