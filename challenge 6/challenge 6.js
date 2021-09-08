/*Ask how many slices of pizza the user started with and ask how many slices they have eaten. Work out how many slices they have left and display the answer in a user-friendly format*/
var Startslices = parseInt(prompt("How many slices did you start with?: "), 10);
var eaten = parseInt(prompt("How many have youu eaten?: "), 10);
var Left = Startslices - eaten;
console.log("You are left with ", Left, "number of slices");