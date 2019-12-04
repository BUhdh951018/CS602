let m = {};

m['ceiling'] = (x) =>{
    return Math.ceil(x);
};

m['floor'] = (x) =>{
    return Math.floor(x);
};

m['cube'] = (x) => {
    return x*x*x;
};

m['mod'] = (x,y) =>{
    return x%y
};
m['squareRoot'] = (x)=>{
    return Math.sqrt(x)
};


export {m};