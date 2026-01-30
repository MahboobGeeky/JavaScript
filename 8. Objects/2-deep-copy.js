let obj = {
    name: "mahboob",
    age: 22,
    email: "test@gamil.com",
    address: {
        city: "Purnea",
    },
};

let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2);