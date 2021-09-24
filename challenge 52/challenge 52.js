//Create a tuple containing the names of five countries and display the whole tuple. Ask the user to enter one of the countries that have been shown to them and then display the index number (i.e. position in the list) of that item in the tuple. 
var Names = ["Uganda", "kenye", "Tanzania", "Rwanda", "Congo"];
console.log(Names);
var One = prompt("Enter one of the countries: ");
console.log(typeof Names);
console.log(Names.indexOf(One));