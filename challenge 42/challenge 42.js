//Set a variable called total to 0. Ask the user to enter five numbers and after each input ask them if they want that number included. If they do, then add the number to the total. If they do not want it included, don’t add it to the total. After they have entered all five numbers, display the total. 
var Total = 0;
for (i = 1; i<=5; i++){
    var Num = parseFloat(prompt("Enter number: "));
    var ask  = prompt("Do you want to keep the number: ");
    if(ask === "yes"){
        Total = Total + Num;

    }else{
        console.log("It wont be added");
    }

}
console.log(Total);