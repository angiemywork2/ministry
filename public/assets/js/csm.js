console.log("connected")

$(document).ready(function() {
	//optional query string from url
	var url = window.location.search;
	var blogId;
	//flag to see if post is being updated or not
	var updating = false;
	//pulling blog id from url if it exists
	if (url.indexOf("?blog_id=") !== -1) {
		blogId = url.split("=")[1];
		getBlogData(blogId);
	}
	//post references
	var titleInput= $("#postTitle");
	var bodyInput= $("#postBody")
	var submit = $("#postBlog")
	//event listener when submit button is clicked
	$(submit).on('click', function handleSubmit(event) {
		//validate that the post has somthing in he title and body
		if(!titleInput.val().trim() || !bodyInput.val()trim()) {
			return;
		}
		//object to post into database
		var newBlog = {
			title: titleInput.val().trim(),
			body: bodyInput.val().trim()
		};
		//callback function that check if updating of making new post
		if(updating) {
			newPost.id = postId;
			updateBlog(newBlog);
		}else{
			submitBlog(newBlog)
		}
	});

	//function that submits new post and brings user to blog page
	function submitBlog(Blog) {
		$.post('/api/blog/', Blog, function() {
			window.location.hreg = "/blog";
		})
	};
	//function to get post data if editiing
	function getBlogData(id) {
		$.get("/api/blog/" + id, function(data) {
			if(data) {
				titleInput.val(data.title);
				bodyInput.val(data.body);
				updating = true;
			}
		})
	};
	//function to updata given post and bring user to blog page
	function updateBlog(post) {
		$.ajax({
			method: "PUT",
			url: "/api/blog",
			data: post
		}).done(function() {
			window.location.href = "/blog"
		})
	};
});