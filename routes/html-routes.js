//Dependencies
var path = require('path');

//Routes
module.exports = function(app){

	//routes that handle the static HTML pages that the user gets sent to
	app.get("/", function(req,res){
		res.sendFile(path.join(__dirname, "../public/"))
	})
};