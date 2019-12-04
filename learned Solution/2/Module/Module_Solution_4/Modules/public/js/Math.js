// This function takes in an integer, rounds it up, and returns the result
const ceiling = (x) => {
    var number = Math.ceil(x);
    return number;
}

// This function takes in an integer, cubes it, and returns the result
const cube = (x) => {
    var number = x * x * x;
    return number;
}

// This function takes in an integer, rounds it down, and returns the result
const floor = (x) => {
    var number = Math.floor(x);
    return number;
}

// This function takes in x and y (two integers), does x modulus y, and returns the result
const mod = (x, y) => {
    var number = x % y;
    return number;
}

// This function takes in an integer, finds the square root, and returns the result
const squareRoot = (x) => {
    var number = Math.sqrt(x);
    return number;
}

export { ceiling, cube, floor, mod, squareRoot};