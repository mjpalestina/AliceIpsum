// DEPENDENCIES
const request = require('request');
const express = require('express');
const mongojs = require('mongojs');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');

// CREATE INSTANCE OF express APP
const app = express();
app.use(express.static(__dirname + "/public"));

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
