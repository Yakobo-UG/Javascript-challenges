/* Display the following message: If the user enters 1, then it should ask them for the length of one of its sides and display the area. Enter number
1 ---> Squre
2  ---> Triangel
If they select 2, it should ask for the base 
and height of the triangle and display the area. If 
they type in anything else, it should give them a 
suitable error message.*/

var num = parseFloat(prompt("Enter number: ")); 

if (num == 1){
    length = parseFloat(prompt("Enter the length:"));
    area1 = Math.pow(length,4);
    console.log(area1);
}else if (num == 2){
    base = parseFloat(prompt("Enter the base: "));
    height = parseFloat(prompt("Enter height: "));
    area2 = 0.5*base*height;
    console.log(area2);
} else{
    console.log("error");
}
