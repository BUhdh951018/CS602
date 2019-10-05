const express = require('express');
const fs = require('fs');
var session = require('express-session');
var app = express();

// set user session
app.use(
    session({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: true
    })
);

const port = process.env.PORT || 3000;

let guitar = new Array();
let cart = new Array();

// read guitar details fron JSON file
fs.readFile('./guitar_data.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        var guitarJSON = JSON.parse(data);
        guitarJSON.forEach(element => {
            guitar.push({
                id: element.guitar_id,
                name: element.name,
                price: element.price,
                sku: element.sku,
                description: element.description,
                detail: element.features,
                img: `./guitar_images/guitar_0${element.guitar_id}.png`
            });
        });
    }
});

// used to handle cors issues
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");

    next();
    app.options("x", (req, res) => {
        res.header(
            "Access-Control-Allow-Methods",
            "GET, PATCH, PUT, POST, DELETE, OPTIONS"
        );
        res.send();
    });
});

// GET SHOW ALL GUITAR DETAIL
app.get('/crazyzaks/guitars', (req, res) => {
    res.json(guitar);
});

// GET SHOW ONE GUITAR DETAIL
app.get('/crazyzaks/guitars/:id', (req, res) => {
    const guitarID = req.params.id - 1;
    if (guitarID < 0 || guitarID >= guitar.length) {
        res.json("<p>This guitar is not in stock, please add one or search others</p>");
    } else {
        var message = "<img src=" + guitar[guitarID].img
                    + "></img><ul><li> GUITAR_ID: " + guitar[guitarID].id
                    + "</li><li> NAME: " + guitar[guitarID].name
                    + "</li><li> PRICE: " + guitar[guitarID].price
                    + "</li><li> DESCRIPTION: " +guitar[guitarID].description
                    + "</li></ul>";

        res.json(message);
    }
});

// DELETE DELETE ON GUITAR
app.delete('/crazyzaks/guitars/:id', (req, res) => {
    const guitarID = req.params.id;
    var inArray = false;
    var cartIndex;

    if (req.session.userCart) {
        cart = req.session.userCart;
    }
    for (var i = 0; i<cart.length; i++) {
        if (cart[i].id === parseInt(guitarID)){
            inArray = true;
            cartIndex = i;
        }
    }

    if (inArray) {
        cart.splice(cartIndex, 1);

        req.session.userCart = cart;
        res.json("This guitar has been deleted.");
    } else{
        res.json("This guitar can't be deleted.");
    }
});

// PUT ADD GUITAR TO CART
app.put('/crazyzaks/cart/add/:id', (req, res) => {
    const guitarID = req.params.id;
    var cartIndex;

    if (req.session.userCart) {
        cart = req.session.userCart;
    }
    for (var i = 0; i<cart.length; i++) {
        if (cart[i].id === parseInt(guitarID)){
            cartIndex = i;
        }
    }

    cart.push({
        id: guitar[cartIndex].id,
        name: guitar[cartIndex].name,
        price: guitar[cartIndex].price,
        sku: guitar[cartIndex].sku,
        description: guitar[cartIndex].description,
        detail: guitar[cartIndex].features,
        img: `./guitar_images/guitar_o${guitar[cartIndex].id}.png`
    });

    req.session.userCart = cart;
    res.json("Guitar has been added to cart!");
});

// POST SHOW CHECKOUT
app.post('/crazyzaks/checkout', (req, res) => {
    if (req.session.userCart) {
        cart = req.session.userCart;
    }
    req.session.userCart = cart;
    res.json(cart);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});