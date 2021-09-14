/*Ask the user if it is raining and convert their answer to lower case so it doesn’t matter what case they type it in. If they answer “yes”, ask if it is windy. If they answer “yes” to this second question, display the answer “It is too windy for an umbrella”, otherwise display the message “Take an umbrella”. If they did not answer yes to the first question, display the answer “Enjoy your day”. */
var raining = prompt("Is it raining? answer(yes/no): ");
raining.toLowerCase();
if (raining === "yes") {
    var wind = prompt("Is it windy? answer(yes/no): ");
    if (wind === "yes"){
        console.log("It is too windy for an umbrella");
    } else{
        console.log("Take an umbrella");
    }
} else{
    console.log("Enjoy your day");
}