const express = require('express');

const router = express.Router();

// Import the public (app.js) to use its database functions.
//const product = require('../public/app.js/index.js.js');
// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
    product.all(function(data) {
      const hbsObject = {
        product: data
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post('/api/product', function(req, res) {
    product.selectUpc(function(data) {
        const hbsObject = {
          product: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
      });
  });

  router.put('/api/product', function(req, res) {
      
});