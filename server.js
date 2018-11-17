var express = require("express");

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static("static"))
   .use("/calc", require("calc/calc.js"))
   .set('views', 'views')
   .set('view engine', 'ejs')
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));
