const express = require('express');
const axios = require('axios');
const connection = require('../config/connection');
require('dotenv').config();
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const prod = require('../models/userproduct.js');

// Create all our routes and set up logic within those routes where required.
router.post('/api/username', function(req, res) {
  const {username} = req.body;
  prod.all(username, function(data) {
    const hbsObject = {
      prod: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.get('/', function(req, res) {
  prod.get(function(data) {
    const hbsObject = {
      prod: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


router.post('/newApi/product', function(req, res) {
  const { upc } = req.body;
  prod.selectUpc(upc, function(data) {
      if (data.length === 0) {
        axios.get(`https://api.bestbuy.com/v1/products(upc=${upc})?show=upc,source,sku,name,salePrice,active,url&format=json&apiKey=${process.env.APIKey}`)
        .then(function (response) {
          var product = response.data.products;

          var values = [];
          for (var i = 0; i < product.length; i++) {
            values.push([product[i].upc, product[i].source, product[i].sku, product[i].name, product[i].salePrice, product[i].active, product[i].url, 'Amazon', '33.33']);

            //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
          }
          
          connection.query('INSERT INTO product (upc, source1, sku, name, salePrice1, active, url, source2, salePrice2) VALUES ?', [values], function (err, result) {
            if (err) {
              throw err;
            }
            const hbsObject = {
              prod: result
            };
            console.log(hbsObject);
            res.render('index', hbsObject);
            });
          })
          .catch(function (error) {
          console.log(error);
        });
      } else {
      const hbsObject = {
        prod: data
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
      }
    });
});











// router.post('/api/cats', function(req, res) {
//   cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put('/api/cats/:id', function(req, res) {
//   const condition = {id: req.params.id}

//   console.log('condition', condition);

//   // sleepy is sent as a string to our server
//   // convert it to a boolean before passing it to the database
//   let sleepy;
//   if (req.body.sleepy === 'true') {
//     sleepy = true;
//   } else {
//     sleepy = false;
//   }

//   cat.update(
//     {
//       sleepy: sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// router.delete("/api/cats/:id", function(req, res) {
//   const condition = { id: req.params.id }

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
