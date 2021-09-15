//Ask the user to enter their first name and surname in lower case. Change the case to title case and join them together. Display the finished result. 
var firstname = prompt("Enter your first name: ");
    Surname = prompt("Enter your surname: ");
    firstnamelen = firstname.length;
    Surnamelen = Surname.length;

    up = firstname[0].toUpperCase();
    up2 = Surname[0].toUpperCase();


console.log(up + firstname.substr(1, firstnamelen) + " " + up2 + Surname.substr(1, Surnamelen));
