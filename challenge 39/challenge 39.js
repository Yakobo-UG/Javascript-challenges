//Ask the user to enter a number between 1 and 12 and then display the times table for that number.
var num = parseFloat(prompt("Enter number between 1 and 12: "));
for (var i =0; i<=12; i = i +1){
    console.log(num, "x", i, "=" ,num*i);

}