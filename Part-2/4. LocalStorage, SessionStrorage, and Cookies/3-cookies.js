// cookies
// browser me chhota data store karne ke liye cookies ka use hota h
// data capacity of cookies ~4kb
// localStorage or sessionStorage ~5Mb

// cookies me jo bhi data store kareoge wo data page reload par automatically server pe jayega


// local storage stores item into string:-
localStorage.setItem("friends", JSON.stringify(["mahboob","mustak", "yuvraj"]));

let fr = JSON.parse(localStorage.getItem("friends"));
console.log(fr);