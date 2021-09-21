//Ask the user to enter a number. Keep asking until they enter a value over 5 and then display the message “The last number you entered was a [number]” and stop the program. 
var ask = parseFloat(prompt("Enter number: "));
while (ask <= 5){
    var ask = parseFloat(prompt("Enter number: "));

}
console.log("The last number you entered is ",ask );
