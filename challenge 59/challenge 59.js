//Ask the user to enter the names of three people they want to invite to a party and store them in a list. After they have entered all three names, ask them if they want to add another. If they do, allow them to add more names until they answer “no”. When they answer “no”, display how many people they have invited to the party.
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


