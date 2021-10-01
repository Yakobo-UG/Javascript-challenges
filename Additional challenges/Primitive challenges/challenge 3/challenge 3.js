//Create a function which returns a random number in the given range of values both inclusive

function range(min, max){
    return Math.floor(Math.random() * max) + min;
}
console.log(range(2, 10));