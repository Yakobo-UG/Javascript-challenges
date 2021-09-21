//Ask the user to enter a number and then enter another number. Add these two numbers together and then ask if they want to add another number. If they enter “y", ask them to enter another number and keep adding numbers until they do not answer “y”. Once the loop has stopped, display the total.
var Num1 = parseFloat(prompt("Enter number 1: "));
    Num2 = parseFloat(prompt("ENter number two: "));

Total = Num1 + Num2;
var ask = prompt("Enter number y/n: ");
while (ask === "y"){
    Num3 = parseFloat(prompt("Enter another number: "));
    Total = Total + Num3;
    var ask = prompt("Enter number y/n: ");
}
console.log("The total is ", Total);