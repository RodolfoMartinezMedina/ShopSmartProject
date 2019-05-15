const express = require("express");
const app = express();
const mysql = require('mysql');
const axios = require("axios");
const unirest = require("unirest");

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const upc = "012236110446";
//$('#input').val();
const APIKey = '9meb8xuge2ua3355aph7t7ej';

// Configure MySQL connection
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Apiah#1992",
  database: "bestbuy_product_db"
});
app.connection = connection;

//Establish MySQL connection
connection.connect(function (err) {
  if (err) throw err;
  // require("./routes/api-routes.js")(app);
  app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
  });
});
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


app.use(bodyParser.json());


axios.get(`https://api.bestbuy.com/v1/products(upc=${upc})?show=upc,source,sku,name,salePrice,active,url&format=json&apiKey=${APIKey}`)
  .then(function (response) {
    console.log("working");

    var product = response.data.products;
    var values = [];
    console.log(product);
    // console.log(product);
    // app.get('/', function (req, res) {
    //     // res.sendFile(path.join(__dirname + '/app.html'));
    // });
    app.get('/', function (req, res) {
      res.send("hello world");
      console.log("hello world");
    });
    //app.post('/newApi/product', function (req, res) {
    console.log("I did it!!");

    for (var i = 0; i < product.length; i++) {
      values.push([product[i].upc, product[i].source, product[i].sku, product[i].name, product[i].salePrice, product[i].active, product[i].url]);
      console.log("post product loop");
      //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
    }

    connection.query('INSERT INTO bestBuy_products (upc, source, sku, name, salePrice, active, url) VALUES ?', [values], function (err, result) {
      if (err) {
        throw err;
      }
      else {
        // res.send('Success');
        console.log(product);
      }
    });
    //});

  })
  .catch(function (error) {
    console.log(error);
  });


