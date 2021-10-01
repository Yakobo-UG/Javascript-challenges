/*
Write a program to reverse a given integer number

- The remainder of the number can be fetched and the number can be divided by 10 to remvoe the the digit in loop till number becomes 0
- A simple approach to reverse a number could also be to convert it in to a string and then reverse it
*/

var num = 123456;
    rev = String(num);
    rev1 = rev.split("").reverse().join("");
    rev2 = parseInt(rev1);
console.log(rev2);