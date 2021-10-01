/*Change program 059 so that once the user has completed their list of names, display the 
full list and ask them to type in one of the names on the list. Display the position of that 
name in the list. Ask the user if they still want that person to come to the party. If they 
answer “no”, delete that entry from the list and display the list again.  */

var list = [];
    name1 = prompt("Enter person: ");
list.push(name1);
    name2 = prompt("Enter person: ");
list.push(name2);
    name3 = prompt("Enter person: ");
list.push(name3);
console.log(list);

add = prompt("Do you want to add another person y/n: ");

if (add === "y"){
    name4 = prompt("Enter name: ");
    list.push(name4);
    add = prompt("Do you want to add another person y/n: ");
}else{
    console.log(list);
    console.log(list.length, "people have been invited to the party");
}

var who = prompt("Type in one of the names in the list: ");
console.log(list.indexOf(who));
var indx = list.indexOf(who);
var ask = prompt("Do you still want the person to come to the party: ");
if (ask === "n"){
    var remove = list.splice(indx, 1);
    console.log(list);
}
