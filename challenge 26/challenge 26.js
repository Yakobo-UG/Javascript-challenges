//Pig Latin takes the first consonant of a word, moves it to the end of the word and adds on an “ay”. If a word begins with a vowel you just add “way” to the end. For example, pig becomes igpay, banana becomes ananabay, and aadvark becomes aadvarkway. Create a program that will ask the user to enter a word and change it into Pig Latin. Make sure the new word is displayed in lower case.
var word = prompt("Enter a word: ");
    lower = word.toLowerCase();
    wordlen = lower.length;

if (lower[0] === "a" || lower[0] === "e" || lower[0] === "i" || lower[0] === "o" || lower[0] === "u" ) {
    console.log(lower + "way");
}
else{
    console.log(lower.substr(1, wordlen)+ lower[0] + "ay");
}
