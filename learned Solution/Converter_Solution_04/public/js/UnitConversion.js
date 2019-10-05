// This function takes in a quantity of inches, converts it to centimeters, and returns the result
const centimeters = (x) => {
    var number = x * 2.54;
    return number + ' cm';
}

// This function takes in a quantity of inches, converts it to meters, and returns the result
const meters = (x) => {
    var number = x * 0.0254;
    return number + ' m';
}

// This function takes in a quantity of inches, converts it to millimeters, and returns the result
const millimeters = (x) => {
    var number = x * 25.4;
    return number + ' mm';
}

export { centimeters, meters, millimeters};