//Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100 
var num = [
    50,
    23
];
function check(num){
    if (num[0] === 100 || num[1] === 100 || (num[0] + num[1]) === 100 ){
        return true;
    }else{
        return "Not there";
    }

}
console.log(check(num));
