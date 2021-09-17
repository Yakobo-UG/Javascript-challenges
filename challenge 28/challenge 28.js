//Update program 027 so that it will display the answer to two decimal places. 

var num = parseFloat(prompt("Enter number with very many decimals: "));
    mult = num * 2;
console.log(Math.round(mult * 100)/100);