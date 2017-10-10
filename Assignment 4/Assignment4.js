$("document").ready(function(){
	$("#area1").offset({left: 200,top: 200});
	$("#area2").offset({left: 350,top: 210});
	$("#area3").offset({left: 290,top: 280});
	$("#area4").offset({left: 700,top: 325});
	$("#area5").offset({left: 700,top: 350});
	$("#area6").offset({left: 700,top: 450});
	$("button").css({
		"color": "#FFFFFF",
		"background-color":"blue"
	});
	var p = 0;
	$("#moveDown").click(function(){
		$("#area3").scrollTop(p+=50);
	});
	$("#moveUp").click(function(){
		$("#area3").scrollTop(p-=50);
	});
	$("#changeText").click(function(){
		$("#area3").toggleClass("newFont");
	})
	 $("#changeText").click(function () {
      $(this).text(function(i, text){
          return text === "Larger Text" ? "Smaller Text" : "Larger Text";
      })
   });
});