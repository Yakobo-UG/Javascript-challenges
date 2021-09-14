/*Ask the user to enter a number that is under 20. If they enter a number that is 20 or more, display the message “Too high”, otherwise display “Thank you”*/

var num = parseFloat(prompt("Enter number below 20: "));
num >= 20 ? console.log("Too high") : console.log("Thank you");