$(document).ready(function(){
	function buttonSwap($jqObject, newText){
		if($jqObject.text().indexOf("Show") === 0){
			$jqObject.text("Hide " + newText);
		}
		else{
			$jqObject.text("Show " + newText);
		}	
	}
	$(".savannah, .cawcaw, .hiking, .gear, .bio").hide();
	$("#but1").click(function(){
		if($(".bio").css("display") === "none"){
			$(".bio").show("slow",function(){
				$(".gear").slideDown("slow");
			});			
			buttonSwap($(this),"Info");
		}
		else{
			$(".gear").slideUp("fast",function(){
				$(".bio").hide("slow");
			});			
		}		
	});
	$("#but2").click(function(){
		$(".savannah").slideToggle(1000);
		buttonSwap($(this),"Pics");
	});
	$("#but3").click(function(){
		$(".cawcaw").fadeToggle(1000);
		buttonSwap($(this),"Pics");
	});
	$("#but4").click(function(){
		if($(".hiking").css("display") === "none"){
			$(".hiking").css({"width":"1%","opacity":"0.1"});
			$(".hiking").animate({"width":"100%","opacity":"1"},1000, "linear");
			$(".hiking").css("display","block");
		}
		else{
			$(".hiking").hide(500);				
		}	
		buttonSwap($(this),"Pics");	
	});
});