/*Ask for two numbers. If the first one is larger than the second, display the second number first and then the first number, otherwise show the first number first and then the second. */
var num1 = parseFloat(prompt("Enter first number: "));
var num2 = parseFloat(prompt("Enter second number: "));
if (num1 > num2){
    console.log(num2);
    console.log(num1);
} 
else{
    console.log(num1);
    console.log(num2);
}

