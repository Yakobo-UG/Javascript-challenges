/*Ask the user to enter a number between 10 and 20 (inclusive). If they enter a number within this range, display the message “Thank you”, otherwise display the message “Incorrect answer*/
var num = parseFloat(prompt("Enter number between 10 and 20 inclusive"));
num >= 10 && num <= 20 ? console.log("Thank you") : console.log("Incorrect");