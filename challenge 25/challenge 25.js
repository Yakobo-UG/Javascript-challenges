//Ask the user to enter their first name. If the length of their first name is under five characters, ask them to enter their surname and join them together (without a space) and display the name in upper case. If the length of the first name is five or more characters, display their first name in lower case. 
var firstname = prompt("Enter first name: ");
    firstlen = firstname.length;

if (firstlen<5){
    var surname = prompt("Enter your surname: ");
    join = firstname + surname;
    console.log(join.toUpperCase());
}else{
    var surname = prompt("Enter your surname: ");
    console.log(firstname.toUpperCase() + surname);
}