$.ajax({
	type: "GET",
	url: "https://www.reddit.com/r/funny",
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
	}
});