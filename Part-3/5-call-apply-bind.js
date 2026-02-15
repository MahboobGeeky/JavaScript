// call apply bind
// function ko call karte waqt aap set kar sakte ho uski this ki value kya hogi

let obj = {
  name: "mahboob",
  age: 23,
};

function abcd(a, b, c) {
    console.log(this, a, b, c);
}
// call
abcd.call(obj, 1, 2, 3);

// apply
abcd.apply(obj, [1, 2, 3]);

