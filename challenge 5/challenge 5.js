/*Ask the user to enter three numbers. Add together the first two numbers and then multiply this total by the third. Display the answer as The answer is [answer]*/
var num1 = parseInt(prompt("Enter First number: "), 10);
var num2 = parseInt(prompt("Enter second number: "), 10);
var num3 = parseInt(prompt("Enter third number: "), 10);

var Total = (num2 + num1)*num3;
console.log("The answer is ", Total)