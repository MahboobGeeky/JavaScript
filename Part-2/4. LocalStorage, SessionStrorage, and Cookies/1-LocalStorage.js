/*

    localStorage:

    store kaise kre -> setItem
    data fetch kaise kre -> getItem
    remove kaise kre -> removeItem
    update kaise kre -> 

*/



let val = localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.setItem("name", "mahboob");
// update
localStorage.setItem("name", "harsh")

// storing array in localStorage
localStorage.setItem("friends", JSON.stringify(["mahboob","mustak", "yuvraj"]));


