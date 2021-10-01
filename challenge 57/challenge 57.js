//Enter a list of ten colours. Ask the user for a starting number between 0 and 4 and an end number between 5 and 9. Display the list for those colours between the start and end numbers the user input.

var list = ["Yellow", "red", "pink", "blue", "orange", "cyan", "black", "violet", "marron", "magenta"];
    start = parseInt(prompt("Enter a starting number: "));
    end = parseInt(prompt("Enter an end number: "));
    cut = list.slice(start, end);
console.log(cut);



