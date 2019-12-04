
// Get the arguments passed 
let num = process.argv[2]; 
let convertTo = process.argv[3]; 

// Determines which conversion is taking place based on the arguments and runs the corresponding function
if( convertTo.toLowerCase() === "centimeters" || convertTo.toLowerCase() === "centimeter") { 
    inchesToCentimeters();
} else if( convertTo.toLowerCase() === "meters" || convertTo.toLowerCase() === "meter") { 
    inchesToMeters();
} else if( convertTo.toLowerCase() === "millimeters" || convertTo.toLowerCase() === "millimeter") { 
    inchesToMillimeters();
}

// Function converts inches to centimeters 
function inchesToCentimeters() {
    let res = num * 2.54; 
    if( res === 1 ) { 
        console.log("Converting " + num + " inch(es) to centimeter(s): " + res + " centimeter");
    } else { 
        console.log("Converting " + num + " inch(es) to centimeter(s): " + res + " centimeters");
    }
}

// Function converts inches to meters 
function inchesToMeters() {
    let res = num * 0.0254; 
    if( res === 1 ) { 
        console.log("Converting " + num + " inch(es) to meter(s): " + res + " meter");
    } else { 
        console.log("Converting " + num + " inch(es) to meter(s): " + res + " meters");
    }
}

// Function converts inches to millimeters 
function inchesToMillimeters() {
    let res = num * 25.4; 
    if( res === 1 ) { 
        console.log("Converting " + num + " inch(es) to millimeter(s): " + res + " millimeter");
    } else { 
        console.log("Converting " + num + " inch(es) to millimeter(s): " + res + " millimeters");
    }
}