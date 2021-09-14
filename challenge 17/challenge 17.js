/*Ask the user’s age. If they are 18 or over, display the message “You can vote”, if they are aged 17, display themessage “You can learn to drive”, if they are 16, display the message “You can buy a lottery ticket”, if they are under 16, display the message “You can go Trick-or-Treating”.*/
var age = parseFloat(prompt("Enter age: "));
if (age >= 18){
    console.log("You can vote");
}else if(age === 17){
    console.log("You can learn to drive");
}else if(age === 16) {
    console.log("You can buy a lottery ticket");
}else{
    console.log("You can go Trick-or-Treating");
}