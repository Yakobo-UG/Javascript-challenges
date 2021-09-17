//Ask for the radius and the depth of a cylinder and work out the total volume (circle area*depth) rounded to three decimal places.

var rad = parseFloat(prompt("Enter radius: "));
    depth = parseFloat(prompt("Enter depth: "));
    area = Math.PI * Math.pow(rad, 2),
    volume = area * depth;
    volumeformat = parseFloat(volume).toFixed(3);
console.log(volumeformat);