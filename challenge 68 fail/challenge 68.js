//Ask the user to type in their name and then tell them how many vowels are in their name. 
var ask = prompt("Enter name: ");
    count = 0;
ask.split();
for ( var i = 0; i>ask.length; i++){
    if (ask.charAt[i] === "a" || ask.charAt[i] === "e"|| ask.charAt[i] === "i"|| ask.charAt[i] === "o"|| ask.charAt[i] === "u"){
        count = count + 1;
    console.log("there are ", count, "vowels ");
    
    }else{
        console.log("Ther are no vowels");
    }

}

//failed 