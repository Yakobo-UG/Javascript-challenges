//Create a list of six school subjects. Ask the user which of these subjects they don’t like. Delete the subject they have chosen from the list before you display the list again. 
var lists = ["ENG", "MATH", "BIO", "PYH", "CHEM"];
var dislike = prompt("What subjects dont you like: ");
var index = lists.indexOf(dislike);
if (index > -2){
    lists.splice(index, 1);
    console.log(lists);
}
