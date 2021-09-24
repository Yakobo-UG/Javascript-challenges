//Create a list of two sports. Ask the user what their favourite sport is and add this to the end of the list. Sort the list and display it. 
var lists = ["Pool", "gaming"];
var fav = prompt("Enter your best sport: ");
lists.push(fav);
lists.sort();
console.log(lists);