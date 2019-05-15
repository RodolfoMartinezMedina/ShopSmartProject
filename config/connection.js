// Set up MySQL connection.
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Apiah#1992",
    database: "bestBuy_product_db"
  });
  app.connection = connection;

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
// Configure MySQL connection


//Establish MySQL connection
