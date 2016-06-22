

$(function(){

	$("button").click(function(){
		$.getJSON(
        "https://www.reddit.com/search.json?q=cats",
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