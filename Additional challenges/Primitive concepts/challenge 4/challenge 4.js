//Write a code to operate on integer numbers outside the range of numbers in JavaScript
//- `BigInt` is a datatype in JavaScript which facilitates the mathematical opertions on huge value of integer number
//- It is represented by a suffix 'n' for number value
let Bignum = 11111111111111111n;
    Bignum2 = 333333n;
    Bignum3 = 2345n;

console.log(Bignum + Bignum2);
console.log(Bignum + BigInt(Bignum3));
