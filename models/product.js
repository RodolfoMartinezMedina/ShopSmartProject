// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const product = {
  all: function(cb) {
    orm.all('products', function(res) {
      cb(res);
    });
  },
  selectUpc: function(condition, cb) {
    orm.selectUpc('products', condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create('products', cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update('products', objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete('products', condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (productsController.js).
module.exports = product;