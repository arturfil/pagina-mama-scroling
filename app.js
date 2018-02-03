const express = require('express');
var app = express();

//set port 
var port = process.env.PORT || 3333;

app.use(express.static(__dirname));

//routes
app.get("/", (req, res, next) => {
    res.render("index");
})

app.listen(port, () => {
    console.log("portfolio app running...")
})