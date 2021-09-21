//Using the song “10 green bottles”, display the lines “There are [num] green bottles hanging on the wall, [num] green bottles hanging on the wall, and if 1 green bottle should accidentally fall”. Then ask the question “how many green bottles will be hanging on the wall?” If the user answers correctly, display the message “There will be [num] green bottles hanging on the wall". If they answer incorrectly, display the message “No, try again” until they get it right. When the number of green bottles gets down to 0, display the message “There are no more green bottles hanging on the wall”. 
var Num = 10;
while(Num > 0 ){
    console.log("There are", Num, "green bottles on the wall");
    Num = Num - 1;
    var Left = prompt("How many bottles left: ");
    if(Left == Num){
        console.log("There will be, ", Num,  "green bottles hanging on the wall");
    }else{
        while Left!=Num{
            console.log("Try agian");

        }
        

    }
}
console.log("There are no more green bottles hanging on the wall")

//not sure about this one not going to lie
