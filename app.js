$("input").keypress(function (e) {
  if (e.which == 13) {
    e.preventDefault();
    clearResults();
    makeCall();
  	}
});

function makeCall() {
    var searchTerm = $("input").val();
    $.getJSON(
        "https://www.reddit.com/search.json?q=" + searchTerm + "",
        function foo(data) {
            $.each(
                data.data.children.slice(0, 5),
                function(i, post) {
                	var post =
                	"<div class = 'post-item'>"+
                		"<a href='"+post.data.url+
                			"' target='_blank'>"+post.data.title+
                		"</a>"+
                		"<img src='"+ post.data.thumbnail_url + "'>"
                    	"<hr>"
                    "</div>"

                    $(".result-box").append(post);
                })
        }
    )
};

function clearResults() {
	$(".result-box").empty();
};

$(function() {
    $("button").click(function() {
    	clearResults();
        makeCall();
    });

});

/*
	var post =
            	 "<div class='post-item'>" +
            	 	"<h3>" + post.data.title + "</h3>" +
            	 	"<img src='"+ post.data.url + "'>" +
            	 	"<a href='https://reddit.com" + post.data.permalink + "'> Reddit Link <a>" +
            	 	"<hr>" +
            	 "</div>"
*/