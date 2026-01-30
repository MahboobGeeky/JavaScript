let arr = [1, 2, 3, 4, 5, 6];
// copying arr in arr2
let arr2 = [...arr];
console.log(...arr2)

// for ...of loop->
for (let n of arr2) {
    console.log(n);
}