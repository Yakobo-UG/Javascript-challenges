/*Write a program that will ask for a number of days and then will show how many hours, minutes and seconds are in that number of days*/

numofdays = parseInt(prompt("Enter the number of days: "));
hours = numofdays * 24;
minutes = hours * 60;
seconds = minutes * 60;
console.log("there are ", hours, "Hours", minutes, "minutes and", seconds, "seconds in", numofdays, "days");