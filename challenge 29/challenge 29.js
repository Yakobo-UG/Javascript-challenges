//Ask the user to enter an integer that is over 500. Work out the square root of that number and display it to two decimal places. 
/*
const int = parseInt(prompt("Enter number over 500: "));
    sq = Math.sqrt(int);
    rod = Math.round(sq*100)/100;
    
console.log(rod);
*/
//or
const int = parseInt(prompt("Enter number over 500: "));
sq = Math.sqrt(int);
var sqformated = parseFloat(sq).toFixed(2);
console.log(sqformated);
