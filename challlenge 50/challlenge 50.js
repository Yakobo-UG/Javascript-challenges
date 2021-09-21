//Ask the user to enter a number between 10 and 20. If they enter a value under 10, display the message “Too low” and ask them to try again. If they enter a value above 20, display the message “Too high” and ask them to try again. Keep repeating this until they enter a value that is between 10 and 20 and then display the message “Thank you”. 
var Num = parseFloat(prompt("ENter number between 10 and 20: "));
while(Num < 10 || Num > 20){
    if (Num < 10){
        console.log("Too low");
        console.log("Try agina");
        var Num = parseFloat(prompt("ENter number between 10 and 20: "));
    }else if (Num > 20){
        console.log("Too high");
        console.log("Try agina");
        var Num = parseFloat(prompt("ENter number between 10 and 20: "));
        
    
    }
   
   
  
}

console.log("Thank you");     