console.log("connected");
 $(document).ready(function() {
 	var blogContainer = $("#blog-entries")

	$(document).on('click',"a.delete", handleBlogDelete);
	$(document).on('click',"a.update", handleBlogUpdate);	

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
	};
	//ajax call to delete blog
	function deleteBlog(id) {
		$.ajax({
			method: "DELETE",
			url: "/api/blog/" + id
		}).done(function() {
				getBlogs();
		})
	};
	//get initial list of blogs
	getBlogs();
	//handles appendind contructed html
	function initializeRows() {
		blogContainer.empty();
		var blogsToAdd = [];
		for (var i =0; i<blogs.length; i++) {
			blogsToAdd.push(createNewRow(blogs[i]));
		}
		blogContainer.append(blogsToAdd);
	};
	//constructs new blog's html
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
		//create button section
		var newButtonRow = $("<div>")
		newButtonRow.addClass("row");
		//create edit button
		var newUpdateBtn = $("<a>")
		newUpdateBtn.addClass("btn-floating waves-effect green lighten-2 btn update");
		//materialize icon
		var newUpdateIcon = $("<i>");
		newUpdateIcon.addClass("material-icons");
		newUpdateIcon.text("edit");
		//create delete button
		var newDeleteBtn = $("<a>");
		newDeleteBtn.addClass("btn-floating waves-effect pink darken-2 btn delete");
		//materialize icon
		var newDeleteIcon = $("<i>");
		newDeleteIcon.addClass("material-icons");
		newDeleteIcon.text("close");

		//append title to titlesection
		newTitleSection.append(newTitle);
		//append body to bodysection
		newBodySection.append(newBody);
		//apend author to author section
		newAuthorSection.append(newAuthor);
		//append icons to btns
		newDeleteBtn.append(newDeleteIcon);
		newUpdateBtn.append(newUpdateIcon);
		//apend buttons to btn row
		newButtonRow.append(newUpdateBtn);
		newButtonRow.append(newDeleteBtn);
		//append titlesection to blogpanel
		newBlogpanel.append(newTitleSection);
		newBlogpanel.append(newDivider);
		//append bodysection to blogpanel
		newBlogpanel.append(newBodySection);
		newBlogpanel.append(newDivider2)
		//append author section to blogpanel
		newBlogpanel.append(newAuthorSection);
		//append btnrow to blogpane
		newBlogpanel.append(newButtonRow);

		newBlogpanel.data("blog", blog);
		return newBlogpanel;
	}
	//function to handles which blog to delete and calls deleteBlog
	function handleBlogDelete(){
		var currentBlog = $(this)
		.parent()
		.parent()
		.data("blog");
		deleteBlog(currentBlog.id);
	}
	//function to handle blog updats and sends appropriate 
	function handleBlogUpdate() {
		var currentBlog = $(this)
		.parent()
		.parent()
		.data("blog");
		window.location.href = "/csm?blog_id="+ currentBlog.id;
	}
	//funtion to desplay a message when there are no posts
	function displayEmpty() {
		blogContainer.empty();
		var messageh2 = $("<h2>");
		messageh2.css({ "text-align": "center", "margin-top": "50px"});
		messageh2.html("No posts yet for this page.");
		blogContainer.append(messageh2)
	};

});