//Ask the user to enter two numbers. Use whole number division to divide the first number by the second and also work out the remainder and display the answer in a user-friendlyway (e.g. if they enter 7 and 2 display “7 divided by 2 is 3 with 1 remaining”). 

var num1 = parseInt(prompt("Enter number one: "));
    num2 = parseInt(prompt("Enter number two: "));
    whole = num1/num2;
    remaider = num1%num2;

console.log(num1 ,"divided by ", num2, "is ", whole, "with a remainder of ", remaider);