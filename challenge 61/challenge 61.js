//create a list containing the titles of four TV programmes and display them on separate lines. Ask the user to enter another show and a position they want it inserted into the list. Display the list again, showing all five TV programmes in their new positions. 

var list = ["Top", "spot","gini", "game"];
for (var i = 0; i<list.length; i++){
    console.log(list[i]);
}
var tv = prompt("Enter anotehr program: ");
var indx = parseInt(prompt("Enter index you want: "));
list.splice(indx, 0, tv);
console.log(list.join());