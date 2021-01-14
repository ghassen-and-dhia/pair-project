$(document).ready(function(){
	$(".start").hide()
	$(".newgamebtn").click(function(){
		$(".game").slideDown();
		$(".start").show();

	})
});
$(document).ready(function(){
	$(".start").click(function(){
		var nameplayer=$(".name").val()
		if(nameplayer!==""){
			$(".first").css("display","none")
			$(".user").text(nameplayer)
			$(".second").css("display","block")
		}
	})
});
