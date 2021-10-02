//Ask the user to type in a word in upper case. If they type it in lower case, ask them to try again. Keep repeating this until they type in a message all in uppercase
var word = prompt("Enter word in uppercase: ");
    
for (i =0; i<word.length; i++){
    if (word[i] === word[i].toLowerCase()){
        console.log("Try again");
        var word = prompt("Enter word in uppercase: ");

    }else{
        console.log(word, "Is upper now");
    }

}

//failed this one 




