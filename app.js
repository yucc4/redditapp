

$(function(){

	$("button").click(function(){
		var searchTerm = $("input").val();
		$.getJSON(
        "https://www.reddit.com/search.json?q="+searchTerm+"",
        function foo(data)
        	{
          		$.each(
            	data.data.children.slice(0, 5),
            	function (i, post) {
             	 $(".result-box").append( '<br>' + post.data.title );
             	 $(".result-box").append( '<br>' + post.data.url );
             	 $(".result-box").append( '<br>' + post.data.permalink );
             	 $(".result-box").append( '<hr>' );
            	})
            }	
        )
    });
});