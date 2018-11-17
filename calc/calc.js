var express = require("express");
var url = require("url");

var prices = {
    "stamped": {
        1: 0.5, 
        2: 0.71,
        3: 0.92,
        3.5: 1.13
        },
    "metered": {
        1: 0.47, 
        2: 0.68,
        3: 0.89,
        3.5: 1.1,
        4: 1.63,
        5: 1.84,
        6: 2.05,
        7: 2.26,
        8: 2.47,
        9: 2.68,
        10: 2.89,
        11: 3.1,
        12: 3.31,
        13: 3.52
        },
    "large": {
        1: 1,
        2: 1.21,
        3: 1.42,
        4: 1.63,
        5: 1.84,
        6: 2.05,
        7: 2.26,
        8: 2.47,
        9: 2.68,
        10: 2.89,
        11: 3.1,
        12: 3.31,
        13: 3.52
        },
    "package": {
        4: 3.5,
        8: 3.75,
        9: 4.1,
        10: 4.45,
        11: 4.8,
        12: 5.15,
        13: 5.5
        }
    };

var app = express();

app .use(express.static("calc/static"))
    .set('views', 'calc/views')
    .set('view engine', 'ejs')
    .get("/payment", function(req, res){
        var price = 0/0; //NaN
        var data = url.parse(req.url, true).query;
        for(var weight in prices[data.type] ){
            if(+weight >= +data.weight){
                price = prices[data.type][weight];
                break;
            }
        }
        res.render("payment", {
            price: price,
            weight: data.weight,
            type: data.type
            });
        res.end();
    });

module.exports = app;