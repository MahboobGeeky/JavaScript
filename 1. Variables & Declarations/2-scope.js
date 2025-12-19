/* Block Scope → Code inside {} like in loops, if , etc.
Function Scope → Code inside a functinon
*/
{
    var x = 5;
    let y = 10;
    const z = 15;
}
console.log(x); // 5
console.log(y); // Reference Error
console.log(z); // Reference Error