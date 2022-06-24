var a = prompt("Enter first number:");
var c = prompt("enter operator: + * / -");
var b = prompt("Enter your 2nd number:");

if (c == "+") {
    result = parseInt(a) + parseInt(b);
    alert("The Sum of " + a + " and " + b + " is: " + result);
} else if (c == "-") {
    result = parseInt(a) - parseInt(b);
    alert("The substraction of " + a + " and " + b + " is: " + result);
} else if (c == "/") {
    result = parseInt(a) / parseInt(b);
    alert("The division of " + a + " and " + b + " is: " + result);
} else if (c == "*") {
    result = parseInt(a) * parseInt(b);
    alert("The multiplication of " + a + " and " + b + " is: " + result);
}
