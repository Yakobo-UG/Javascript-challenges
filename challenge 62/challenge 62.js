//Create an empty list called “nums”. Ask the user to enter numbers. After each number is entered, add it to the end of the nums list and display the list. Once they have entered three numbers, ask them if they still want the last number they entered saved. If they say “no”, remove the last item from the list. Display the list of numbers.
var nums = [];
while (nums < 4){
    Num1 = parseInt(prompt("Enter number: "));
    add = nums.push(Num1);
}
ask = prompt("Do you still want the number? y/n: ");
while (ask === "y"){
    Num1 = parseInt(prompt("Enter number: "));
    add = nums.push(Num1);
    ask = prompt("Do you still want the number? y/n: ");
    console.log(nums);
}
if (ask === "n" ){
    remove = nums.splice(2, 1 );
    console.log(nums);

}

//did it tho can be improved 