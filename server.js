const app = require("./app");

const express = require('express');

// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the 'public' directory in the application directory.
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.

//These 2 were commented out - 
// const routes = require('./controllers/shopSmartController.js');

// app.use(routes);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //this line will add a header which will enable CORS
  next();
});

require("./routes/html-routes")(app);

require("./routes/api-routes")(app, connection);

app.listen(PORT, function() {
  console.log('App now listening at localhost:' + PORT);
});
