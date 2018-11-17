var express = require("express");

const PORT = process.env.PORT || 5000;

var app = express();

app.use("static", express.static("static"))
   .use("calc", require("calc"))
   .set('views', 'views')
   .set('view engine', 'ejs')
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));