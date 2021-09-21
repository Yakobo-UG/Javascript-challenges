//Create a variable called compnum and set the value to 50. Ask the user to enter a number. While their guess is not the same as the compnum value, tell them if their guess is too low or too high and ask them to have another guess. If they enter the same value as compnum, display the  “Well done, you took [count] attempts”.
var compnum = 50;
    Num = parseFloat(prompt("Enter number: "));
    count = 0;
while(Num != compnum){
    if(Num > compnum){
        console.log("Your guess is to high");
    }else{
        console.log("YO=or guess is too low");
    }
    count = count + 1;
    Num = parseFloat(prompt("Enter number: "));
    }
    
console.log("Well done, you took", count, "attemps");