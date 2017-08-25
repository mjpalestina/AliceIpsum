// DEPENDENCIES
const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');

// CREATE INSTANCE OF express APP
const app = express();

// SET HANDLEBARS
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// SET CONTROLLERS
var routes = require("./controllers/controllers.js");
app.use("/", routes);

// SPECIFY THE PORT
const port = process.env.PORT || 4000;

//PORT CALL
app.listen(port, function() {
	console.log("express app listening on port ", + port);
  });

//EXPORT
module.exports = express;
