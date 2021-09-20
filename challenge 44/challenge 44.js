//Ask how many people the user wants to invite to a party. If they enter a number below 10, ask for the names and after each name display “[name] has been invited”. If they enter a number which is 10 or higher, display the message “Too many people”. 
var people = parseFloat(prompt("How many people do you want to be invited: "));
if(people <10){
    for(var i = 1; i<10; i++){
        UserName = prompt("Enter name: ");
        console.log(UserName, "has been invited");
    }
}else{
    console.log("Too many people");
}
