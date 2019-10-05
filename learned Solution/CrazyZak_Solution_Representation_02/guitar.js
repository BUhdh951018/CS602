// Define variables 
const express = require("express");
const fs = require("fs");
var session = require("express-session");

let app = express();

// Set the user session
app.use(
  session({
    secret: "dog food",
    resave: false,
    saveUninitialized: true
  })
);

// Set the port to the environment port or default is 3000
const port = process.env.PORT || 3000;

// Define arrays for the Guitar Stock and User Cart
let guitarStock = new Array();
let shoppingCart = new Array();
const price = [299.99, 499.99, 899.99];

// Reads the guitars from the JSON file, adds the price and sets an image string
fs.readFile("guitar_data.json", (err, data) => {
  if (err) throw err;
  let guitar = JSON.parse(data);
  guitar.forEach(element => {
    guitarStock.push({
      id: element.guitar_id,
      name: element.name,
      description: element.caption,
      detail: element.description,
      imgString: `./guitar_images/guitar_0${element.guitar_id}.png`,
      price: price[element.guitar_id - 1]
    });
  });
});

// Used to handle CORS issues
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
  app.options("*", (req, res) => {
    // allowed XHR methods
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    );
    res.send();
  });
});

// GET - Sends the guitarStock array as a response
app.get("/crazyzaks/guitars", (req, res) => {
  res.json(guitarStock);
});

// GET - Checks if the guitar is in stock, sends it if it is or an error message if it's not
app.get("/crazyzaks/guitars/:id", (req, res) => {
  const itemIndex = stockIndex(req.params.id);
  if (itemIndex < 0 || itemIndex >= guitarStock.length) {
    res.json("<h4>This guitar is not in stock</h4>");
  } else {
    let result =
      "<img src=" +
      guitarStock[itemIndex].imgString +
      "></img><ul><li> ID: " +
      guitarStock[itemIndex].id +
      "</li><li> Name: " +
      guitarStock[itemIndex].name +
      "</li><li> Description: " +
      guitarStock[itemIndex].description +
      "</li><li> Price: " +
      guitarStock[itemIndex].price +
      "</li></ul>";

    res.json(result);
  }
});

// DELETE - Deletes from the cart if the guitar is in the cart, otherwise sends an error message
app.delete("/crazyzaks/guitars/:id", (req, res) => {
  const itemIndex = stockIndex(req.params.id);
  let isInCart = false;
  let cartIndex = 0;
  if (req.session.userCart) {
    shoppingCart = req.session.userCart;
  }

  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].id === parseInt(req.params.id)) {
      isInCart = true;
      cartIndex = i;
    }
  }

  // Subtracts from the quantity if the guitar is in the cart
  if (isInCart) {
    if (shoppingCart[cartIndex].qty > 1) {
      shoppingCart[cartIndex].qty--;
    } else {
      shoppingCart.splice(cartIndex, 1);
    }
    req.session.userCart = shoppingCart;
    res.json("This guitar has been deleted.");
  } else {
    res.json("This guitar can't be deleted because it is not in the cart.");
  }
});

// PUT - Adds a guitar to the cart
app.put("/crazyzaks/cart/add/:id", function(req, res) {
  const index = stockIndex(req.params.id);
  let isInCart = false;
  let cartIndex = 0;

  if (req.session.userCart) {
    shoppingCart = req.session.userCart;
  }
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].id === parseInt(req.params.id)) {
      isInCart = true;
      cartIndex = i;
    }
  }

  // Adds to the quantity if the guitar is in the cart
  if (isInCart) {
    shoppingCart[cartIndex].qty++;
  } else {
    shoppingCart.push({
      id: guitarStock[index].id,
      name: guitarStock[index].name,
      description: guitarStock[index].caption,
      detail: guitarStock[index].description,
      imgString: `./guitar_images/guitar_0${guitarStock[index].id}.png`,
      price: guitarStock[index].price,
      qty: 1
    });
  }
  req.session.userCart = shoppingCart;
  res.json("Guitar was added to your cart");
});

// POST - Displays the contents of the user cart
app.post("/crazyzaks/checkout", (req, res) => {
  if (req.session.userCart) {
    shoppingCart = req.session.userCart;
  }
  req.session.userCart = shoppingCart;
  res.json(shoppingCart);
});

// Checks the guitar stock for a guitar and returns the index
const stockIndex = function(id) {
  let index = -1;
  let parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return index;
  } else {
    for (let i = 0; i < guitarStock.length; i++) {
      if (guitarStock[i].id === parsedId) {
        index = i;
      }
    }
    return index;
  }
};

// Set the server to listen
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
