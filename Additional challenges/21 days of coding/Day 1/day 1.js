//Given an array of volunteer names and an array of neighbourhood names, complete the doorToDoor function so that it returns the number of neighbourhoods each volunteer should visit if the work of going door to door is split evenly amongst them.
//Hint: .length
var volunteer_names = ["James", "Mark", "cindy", "owen"];
neighbourhood_names = ["Kampala", "Gulu", "Nairobi", "Syria"];
function doorTodoor(volunteer_names, neighbourhood_names){
    return (neighbourhood_names.length/volunteer_names.length);
}
console.log(doorTodoor(neighbourhood_names, volunteer_names));
