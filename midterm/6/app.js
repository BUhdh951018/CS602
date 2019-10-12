const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/bookstore");
const methodOverride = require("method-override");
const port = 3000;
const sessionConfig = {
	secret: "betty's secret",
	resave: true,
	saveUninitialized: true,
	cookie: { maxAge: 300000 }
};
const corsConfig = {
	credentials: true,
	origin: "http://localhost:5000"
};
const app = express();

app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.options("*", cors());
app.use(cors(corsConfig));
app.use(methodOverride());

//API routes
app.use("/books", bookRoutes);

app.listen(port, () => console.log(`Backend listening on port ${port}!`));
