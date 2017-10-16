console.log("connected");

$(document).ready(function() {
	var blogContainer = $('#blog-entries');
	var blogs;

	function getBlogs() {
		//function grabs post from db and updates view
		$.get("/api/blog", function(data) {
			console.log("Blogs: ", data);
			blogs = data;
			if(!blogs || !blogs.length) {
				displayEmpty();
			}else{
				initializeRows();
			}
		})
	}
	//get initial blogs
	getBlogs();

	//handles appending all of constructed HTML inside
	function initializeRows() {
		blogContainer.empty();
		var blogsToAdd = [];
		for (var i =0; i<blogs.length; i++) {
			blogsToAdd.push(createNewRow(blogs[i]));
		}
		blogContainer.append(blogsToAdd);
	};
	//function to construct Blogs html
	function createNewRow(blog) {
		//create panel that contains everthing
		var newBlogpanel = $("<div>");
		newBlogpanel.addClass("card-panel light-blue lighten-5");
		//section that contails title
		var newTitleSection = $("<div>");
		newTitleSection.addClass("section")
		//contains title
		var newTitle = $("<h4>");
		newTitle.addClass('grey-text');
		newTitle.attr("id","blogtitle");
		newTitle.text(blog.title);
		//div that creates divider
		var newDivider = $("<div>");
		newDivider.addClass("divider");
		//section that containe blog body
		var newBodySection = $("<div>")
		newBodySection.addClass("section")
		//contains blog body
		var newBody= $("<p>");
		newBody.attr("id","blogtext");
		newBody.text(blog.body);
		//creates second divider
		var newDivider2 = $("<div>");
		newDivider2.addClass("divider");
		//section that contains author info
		var newAuthorSection = $("<div>");
		newAuthorSection.addClass("section");
		//contains author name
		var newAuthor = $("<p>");
		newAuthor.attr("id","authortext");
		newAuthor.text("Dale Washington");
		//append title to titlesection
		newTitleSection.append(newTitle);
		//append body to bodysection
		newBodySection.append(newBody);
		//apend author to author section
		newAuthorSection.append(newAuthor);
		//append titlesection to blogpanel
		newBlogpanel.append(newTitleSection);
		newBlogpanel.append(newDivider);
		//append bodysection to blogpanel
		newBlogpanel.append(newBodySection);
		newBlogpanel.append(newDivider2);
		//append author section to blogpanel
		newBlogpanel.append(newAuthorSection);

		newBlogpanel.data("blog", blog);
		return newBlogpanel;
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