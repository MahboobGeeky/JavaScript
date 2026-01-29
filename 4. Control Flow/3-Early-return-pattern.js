// Used in functions to exit early if some condition fails.
let age = 12;
function checkAge(age) {
if (age < 18) return "Denied";
return "Allowed";
}