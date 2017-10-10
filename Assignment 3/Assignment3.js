$("document").ready(function(){
	$(".buttons li button:first").click(function(){
		$(".courses th").addClass("header");
		$(".courses tr:nth-child(odd)").addClass("altrow");
	});
	$(".buttons li:nth-child(2) button").click(function(){
		$("#myImage").append("<img src='jquery_cover.jpg'>");
	});
	$(".buttons li:nth-child(3) button").click(function(){
		$("div").addClass("enclose");
	});
	$("#myImage").on("mouseenter", "img", function(){
		$("img").addClass("resize");
	});	
	$("#myImage").on("mouseleave", "img", function(){
		$("img").removeClass("resize");
	});	
});
