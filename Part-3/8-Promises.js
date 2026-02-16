let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res("resolved with " + rn);
    else rej("rejected with " + rn);
  }, 1000);
});

/*
pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
});

*/
async function abcd() {
  try { // all good
    let val = await pr;
    console.log(val);
  } catch (err) { // if got error
    console.log(err);
  }
}

abcd();
