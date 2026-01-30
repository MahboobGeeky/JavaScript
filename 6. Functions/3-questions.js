// function discountCalculator(discount){
//     return function(price){
//         return price - price * (discount/100);
//     }
// }
// let discounter = discountCalculator(10);
// console.log(discounter(200));

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

