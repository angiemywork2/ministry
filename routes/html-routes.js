//only handlebar render pages
//Dependencies
var path = require('path');

var Blog = require("../models/blog.js")
//Routes
module.exports = function(app){

	//routes that render handlebars pages
	app.get("/blog", function(req,res){
		render.sendFile(path.join(__dirname, "../public/"))
	})
};