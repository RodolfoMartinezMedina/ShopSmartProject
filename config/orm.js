// Import MySQL connection.
const connection = require('../config/connection.js');

// Object for all our SQL statement functions.
const orm = {
  all: function(username, cb) {
    console.log(username);
    // connection.query(`select prodname, upccode, vid1, price1, vid2, price2 from siteuser left join product on siteuser.pid=product.upccode where siteuser.username='${username}'`, function(err, result) {
    connection.query(`select name, upc, salePrice1, salePrice2 from product`, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  } ,
  get: function(cb) {
    // connection.query(`select prodname, upccode, vid1, price1, vid2, price2 from siteuser left join product on siteuser.pid=product.upccode where siteuser.username='Sylvester'`, function(err, result) {
    connection.query(`select name, upc, salePrice1, salePrice2 from product`, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  selectUpc: function(table, condition, cb)
  {
     const queryString = 'SELECT * FROM ?? WHERE upc = ?';
     connection.query(queryString, [table, condition], function(err, result)
     {
       if (err) throw err;
       cb(result);
     })
  }

  // create: function(table, cols, vals, cb) {
  //   const queryString = 'INSERT INTO ?? (??) VALUES (?)'

  //   connection.query(queryString, [table, cols, vals], function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },
  // // An example of objColVals would be {name: panther, sleepy: true}
  // update: function(table, objColVals, condition, cb) {
  //   const queryString = 'UPDATE ?? SET ? WHERE ?'

  //   connection.query(queryString, [table, objColVals, condition], function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },
  // delete: function(table, condition, cb) {
  //   var queryString = "DELETE FROM ?? WHERE ?";

  //   connection.query(queryString, [table, condition], function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // }
};

// Export the orm object for the model (cat.js ****).
module.exports = orm;
