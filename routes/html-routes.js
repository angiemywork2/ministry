//Dependencies
var path = require('path');

//Routes that handle the static HTML pages that the user gets sent to
module.exports = function(app) {
	
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/greaterworks.html"));
	});

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/aboutMe.html"));
	});

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/psalm91.html"));
	});

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/prophetic-message.html"));
	});

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/contact.html"));
	});


};