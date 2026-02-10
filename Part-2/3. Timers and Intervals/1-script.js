// setTimeout(function(){
//     console.log("this is run after 3 sec");
// }, 3000);

// setInterval(function(){
//     console.log("this is interval")
// }, 3000);

// creating a counter
let count = 10;
let interval = setInterval(function(){
    if(count>0){
        console.log(count);
        count--;
    }
    else clearInterval(interval)
}, 1000);
