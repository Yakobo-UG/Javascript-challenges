//add to program 052 to ask the user to enter a number and display the country in that position. 
var Names = ["Uganda", "kenye", "Tanzania", "Rwanda", "Congo"];
console.log(Names);
var One = prompt("Enter one of the countries: ");
console.log(typeof Names);
console.log(Names.indexOf(One));
var num = parseInt(prompt("Enter a number: "));
console.log(Names[num]);