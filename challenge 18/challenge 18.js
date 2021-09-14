/*Ask the user to enter a number. If it is under 10, display the message “Too low”, if their number is between 10 and 20, display “Correct”, otherwise display “Too high”.*/

var num = parseFloat(prompt("Enter number: "));
if (num < 10){
    console.log("Too low");
}else if(num >= 10 && num <= 20){
    console.log("Correct");
}else{
    console.log("Too high");
}