const express = require("express");
const port = 3000;
const app = express();

/** This declaration listens for any request to the route of http://localhost:3000/ */
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => console.log(`Backend listening on port ${port}!`));