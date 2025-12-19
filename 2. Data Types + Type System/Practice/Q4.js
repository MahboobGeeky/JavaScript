/*
4. Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .
*/

function isEmpty(value){
    if(value==null || value==undefined || value== "") return true;
    else return false;
}
console.log(isEmpty(undefined));