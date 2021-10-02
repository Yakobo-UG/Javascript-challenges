//Ask the user to type in their postcode. Display the first two letters in uppercase.
var code = parseInt(prompt("Enter your code: "));
code.toString();
var cut = code.split();
var up = cut[0].toUpperCase();
    up2 = cut[1].toUpperCase();
    up3 = cut[2];
console.log(up + up2 + up3);