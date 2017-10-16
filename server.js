//Dependencis
var express = require("express");
var bodyParser = require("body-parser");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Syncing Models
var db = require ("./models");

//Set up express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Set Handlebars
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");
//Static directory
app.use(express.static("public"));

//Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//Syncing our sequelize models and starting Express app
db.sequelize.sync({}).then(function(){
	app.listen(PORT,function() {
		console.log("App listening on PORT ", PORT);
	});
});