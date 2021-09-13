/*Task the user to enter a number over 100 and then enter a number under 10 and tell them how many times the smaller number goes into the larger number in a user-friendly form*/

over = parseInt(prompt("Enter number over 100: "));
under = parseInt(prompt("Enter number under 10: "));
times = over / under;
console.log("There are ", times, "times in ", over);
