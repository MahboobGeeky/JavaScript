// let inp = document.querySelector("input");
// // inp.addEventListener("input", function (data) {
// //     console.log(data);
// // });


// inp.addEventListener("input", function(details){
//     console.log(details.data);
// })




let user = {
  name: "anisha",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

user.greet(); // Hello, Amisha

user.name = "Mahboob";

user.greet(); // Hello, Mahboob



