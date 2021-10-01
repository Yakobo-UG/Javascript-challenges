//Write a function which returns true if given value of number is an integer without using any inbuilt functions
function isInt(num){
    if (Number.isInteger(num)){
        return true;
    }else{
        return false;
    }
}
console.log(isInt(4));
