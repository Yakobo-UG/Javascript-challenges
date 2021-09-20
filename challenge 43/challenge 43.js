//Ask which direction the user wants to count (up or down). If they select up, then ask them for the top number and then count from 1 to that number. If they select down, ask them to enter a number below 20 and then count down from 20 to that number. If they entered something other than up or down, display the message “I don’t understand”. 
var Direction = prompt("What direction do you want up/down?: ");

if(Direction === "up"){
    
    for (var p=1; p<top; p=p +1){
        var top = parseFloat(prompt("Enter top number: "));
        console.log(p);
    }
}

else if(Direction === "down"){
    
    for (var i = 20; i>down; i = i -1){
        var down = parseFloat(prompt("Enter number below 20: "));
        console.log(i);
    }
}

else{
    console.log("I don’t understand");
}

//for some reason it aint working fuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuk