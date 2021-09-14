/*Ask the user to enter 1, 2 or 3. If they enter a 1, display the message “Thank you”, if they enter a 2, display “Well done”, if they enter a 3, display “Correct”. If they enter anything else, display “Error message”*/
var num = parseFloat(prompt("Enter numbers 1,2,3: "));
if (num === 1){
    console.log("Thank you");
}else if( num === 2){
    console.log("Well done");
}else if (num === 3){
    console.log("Correct");
}else{
    console.log("Error");
}