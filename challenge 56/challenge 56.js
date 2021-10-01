//Ask the user to enter four of their favourite foods and store them in a dictionary so that they are indexed with numbers starting from 1. Display the dictionary in full, showing the index number and the item. Ask them which they want to get rid of and remove it from the list. Sort the remaining data and display the dictionary.  
var Dic = {
    1: "Mango",
    2: "Banana",
    3: "Apple",
    4: "Pizza"
};
console.log(Dic);
var getRid = prompt("what fruit do you want to get rid of: ");
    index = getRid[key];
Dic[index].remove();