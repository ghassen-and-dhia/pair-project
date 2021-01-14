$(document).ready(function(){
	$(".newgamebtn").click(function(){
		$(".main").slideDown();
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
