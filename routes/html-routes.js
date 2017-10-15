//Dependencies
var path = require('path');

//Routes that handle the static HTML pages that the user gets sent to
module.exports = function(app) {
	
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/assets/greaterworks.html"));
	});

	app.get("/aboutMe", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/assets/aboutMe.html"));
	});

	app.get("/psalm91", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/assets/psalm91.html"));
	});

	app.get("/contact", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/assets/contact.html"));
	});


};