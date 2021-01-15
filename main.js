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
$(document).ready(function(){
	$(".hand").click(function(){
		var image1=$(this).attr("src"),
		num=Math.floor((Math.random()*3)+1),
		image2=$(".hand2");
		if(num===1){
			$(image2).attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmTi0_Qkk3aks73xCCQRBa53TiiI7QOrAvQ&usqp=CAU");

		} else if(num===2){
			$(image2).attr("src","https://www.pngkey.com/png/detail/816-8161571_transparent-rock-paper-scissors-png.png");

		}else if(num===3){
			$(image2).attr("src","https://www.pinclipart.com/picdir/big/280-2802170_paper-icon-clipart.png")
		}
		$(".hand1").attr("src",image1);
		
	})
})