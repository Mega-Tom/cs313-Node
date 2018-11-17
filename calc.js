var express = require("express");
var url = require("url");

const PORT = process.env.PORT || 5000;

var app = express();

app.get("/", function(req, res){
    res.write("You made it");
    res.end();
});

module.exports = app;