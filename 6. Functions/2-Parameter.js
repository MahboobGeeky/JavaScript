function greet(name) {
console.log("Hello " + name);
}
greet("Harsh");

// name is a parameter
// "Harsh" is the argument you pass

function dance(v1){
    console.log(v1 + " naach raha hai")
}
dance("ghoda");
dance("gadha");

// DEFAULT parameter
function add(v1=0, v2=0){
    console.log(v1+v2);
}
add();

// REST parameter-> jab arguments kai saare ho to humein utne hi parameter banane padege, issey bachne ke liye hum rest ka use karte hai ...
// agar ... function ke parameter space me lage to wo rest operator hai and agar wo arrays and objects me lage to wo spread hai.
function abcd(...val){
    console.log(val);
}
abcd(1,2,3,4,5,6);

function abc(a,b,c, ...val){
    console.log(a,b,c,val);
}
abc(1,2,3,4,5,6,7);

// use rest parameter to accept any number of score and return the total
function getScore(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}
console.log(getScore(10,12,14,18));

