var express = require("express");
var url = require("url");

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static("static"))
   .set('views', 'views')
   .set('view engine', 'ejs')
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));