/*Ask the user to enter their favourite colour. If they enter “red”, “RED” or “Red” display the message “I like red too”, otherwise display the message “I don’t like [colour], I prefer red”. */

var color = prompt("Enter your best color: ");
color === "Red" || color === "red" || color === "RED" ? console.log("I like red too") : console.log("I dont color", color, "i prefer red")