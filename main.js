const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const appRoutes = require("./router");


app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to XYZ Shop!");
});

app.use("/items", appRoutes);

let port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Server running on port: " + port);
});