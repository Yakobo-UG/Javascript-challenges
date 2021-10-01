//Create a list of four three-digit numbers. Display the list to the user, showing each item from the list on a separate line. Ask the user to enter a three-digit number. If the number they have typed in matches one in the list, display the position of that number in the list, otherwise display the message “That is not in the list”. 

var List = [234,454,564,675,132];
for (var i = 0; i<List.length; i++){
    console.log(List[i]);
}
var ask = parseInt(prompt("Enter a 3 digit number: "));
while (ask === List[i]) {
    position = List.indexOf(i);
    console.log(position);
}
if (ask != List[i])

// failed this badly