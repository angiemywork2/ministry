$(document).ready(function() {
	var blogContainer = $('.#blogContainer');

	function getBlogs() {
		//function grabs post from db and updates view
		$.get("/api/blog", function(data) {
			console.log("Blogs: " data);
			blogs = data;
			if(!blogs || !blogs.length) {
				displayEmpty();
			}else{
				renderRows();
			}
		})
	}
	//get initial blogs
	getBlogs();

	//function to render the posts into html
	renderRows() {
		$.get("/api/blog", function(req, res) {
			db.Blog(function (data) {
				var hbsObject = {
					blogs: data
				};
				console.log(hbsObject);
				res.render("blog", hbsObject)
			})
		})
	}
	//funtion to desplay a message when there are no posts
	function displayEmpty() {
		blogContainer.empty();
		var messageh2 = $("<h2>");
		messageh2.css({ "text-align": "center", "margin-top": "50px"});
		messageh2.html("No posts yet for this page.");
		blogContainer.append(messageh2)
	}

})