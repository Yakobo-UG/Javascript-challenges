//Ask for the name of somebody the user wants to invite to a party. After this, display the message “[name] has now been invited” and add 1 to the count. Then ask if they want to invite somebody else. Keep repeating this until they no longer want to invite anyone else to the party and then display how many people they have coming to the party. 
var Name = prompt("Enter name of person you want to invited: ");
    count = 0;
count = count + 1;
console.log(Name, "has been invited to the party");
var ask = prompt("Do you want another person y/n: ");
while(ask === "y"){
    var Name = prompt("Enter name of person you want to invited: ");
    count = count + 1;
    console.log(Name, "has been invited to the party")
    var ask = prompt("Do you want another person y/n: ");
    

}
console.log(count, "peaople have been invited to the party");

