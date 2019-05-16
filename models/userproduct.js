// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const prod = {
  all: function(username, cb) {
    orm.all(username, function(res) {
      cb(res);
    });
  },
  selectUpc: function(condition, cb) {
    orm.selectUpc('product', condition, function(res) {
      cb(res);
    });
  },
  get: function(cb) {
    orm.get(function(res) {
      cb(res);
    });
  }
  // // The variables cols and vals are arrays.
  // create: function(cols, vals, cb) {
  //   orm.create('cats', cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // update: function(objColVals, condition, cb) {
  //   orm.update('cats', objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // },
  // delete: function(condition, cb) {
  //   orm.delete('cats', condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (shopSmartController.js).
module.exports = prod;
