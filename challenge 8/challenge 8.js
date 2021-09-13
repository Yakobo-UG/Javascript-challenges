/*Ask for the total price of the bill, then ask how many diners there are. Divide the total bill by the number of diners and show how much each person must pay.*/

Totalprice = parseInt(prompt("What is the total price?: "));
Dinners = parseInt(prompt("How many dinners there are?: "));
Eachperson = Totalprice / Dinners;
console.log("Each person will be paying", Eachperson);