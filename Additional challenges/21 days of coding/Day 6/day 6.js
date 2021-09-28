//Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();
    date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear();

console.log(date);