const app = require("./app");

const port = process.env.PORT || 3306;

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "loginDB"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

require("./routes/html-routes")(app);

require("./routes/api-routes")(app, connection);

app.listen(port, function() {
  console.log("Express server listening on port " + port);
});
// module.exports = connection;
