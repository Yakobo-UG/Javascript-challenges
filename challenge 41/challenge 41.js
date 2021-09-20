//Ask the user to enter their name and a number. If the number is less than 10, then display their name that number of times; otherwise display the message “Too high” three times. 
var UserName = prompt("Enter your name: ");
    UserNum = parseFloat(prompt("Enter your number: "));


if (UserNum<10){
    for (var i = 1; i<=UserNum; i++){
        console.log(UserName);
    }
}else{
    console.log("Too high");
}