// overall progress = 3 sec
let count = 0;
let progress = document.querySelector(".progress-bar");
let progressText = document.querySelector("#progressText");
let downloadStatus = document.querySelector(".status");
let downloadStatusH2 = document.querySelector("h2")

let interval = setInterval(function () {
    if(count<100){
        count++;
        progress.style.width = `${count}%`;
        progressText.textContent = `${count}%`;
    }
    else{
        downloadStatus.textContent = "Downloaded";
        downloadStatusH2.textContent = "Downloaded";
        clearInterval(interval);
    }
}, 20);













