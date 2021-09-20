//Ask for a number below 50 and then count down from 50 to that number, making sure you show the number they entered in the output.
num = parseFloat(prompt("Enter number below 50: "));
for (var i = 50; i>num; i= i - 1){
    console.log(i);
}
