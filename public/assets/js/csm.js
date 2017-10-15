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
		getBlogData(postId);
	}
	//post references
	var titleInput= $("#postTitle");
	var bodyIndput= $("#postBody")

	//event listener when submit button is clicked
	$()
})