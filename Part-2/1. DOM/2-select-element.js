let h1 = document.querySelector("h1");
h1.innerText = "sab badhiya hai.";

// create element
// append/prepend kro, jaha bhi element chahiye waha
let h2 = document.createElement("h2");
h2.textContent = "hello ji kaise ho";
document.querySelector("body").prepend(h2);
 