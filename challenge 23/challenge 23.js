//Ask the user to type in the first line of a nursery rhyme and display the length of the string. Ask for a starting number and an ending number and then display just that section of the text 

var nursery = prompt("Enter the first line of a nusery rhyme: ");
    length_rhyme = nursery.length;
    console.log(length_rhyme);
    num1 = parseFloat(prompt("Enter a starting number: "));
    num2 = parseFloat(prompt("Enter an end number: "));

console.log(nursery.substr(num1, num2));