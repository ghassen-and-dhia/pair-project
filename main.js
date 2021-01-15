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
		
		$(document).ready(function(){
			var imageattr=$(".hand1").attr("src"),
			 imageattr1=$(image2).attr("src"),
			 player=$(".player-score").html(),
			 computer=$(".computer-score").html(),
			 rock="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmTi0_Qkk3aks73xCCQRBa53TiiI7QOrAvQ&usqp=CAU",
			 paper="https://www.pngkey.com/png/detail/816-8161571_transparent-rock-paper-scissors-png.png",
			 scissor="https://www.pinclipart.com/picdir/big/280-2802170_paper-icon-clipart.png";
		     if(imageattr===rock){
				if(imageattr1===paper){
					$(".result").text("you lose");
					$(".result").addClass("lose");
					$(".result").removeClass("win");
					$(".result").removeClass("draw");
					$(".hand2").addClass("winner");
					$(".hand1").removeClass("winner");
					$(".computer-score").html(++computer);

					
				}else if(imageattr1===scissor){
					$(".result").text("you win");
					$(".result").addClass("win");
					$(".result").removeClass("lose");
					$(".result").removeClass("draw");
					$(".hand1").addClass("winner");
					$(".hand2").removeClass("winner");
					$(".player-score").html(++player)
				}else{
					$(".result").text("draw");
					$(".result").addClass("draw");
					$(".result").removeClass("win");
					$(".result").removeClass("lose");
					$(".hand1").removeClass("winner");
					$(".hand2").removeClass("winner");

				}
			}else if(imageattr===paper){
				if(imageattr1===rock){
					$(".result").text("you win");
					$("result").addClass("winn");
					$(".result").removeClass("lose");
					$(".result").removeClass("draw");
					$(".hand1").addClass("winner");
					$(".hand2").removeClass("winner");
					$(".player-score").html(++player);
				}else if(imageattr1===scissor){
					$(".result").text("you lose");
					$(".result").addClass("lose");
					$(".result").removeClass("win");
					$(".result").removeClass("draw");
					$(".hand2").addClass("winner");
					$(".hand1").removeClass("winner");
					$(".computer-score").html(++computer);
				}else{
                    $(".result").text("Draw");
                    $(".result").addClass("draw");
                    $(".result").removeClass("win");
                    $(".result").removeClass("lose");
                    $(".hand1").removeClass("winner");
                    $(".hand2").removeClass("winner");
                }

				
			} else {
                if (imageattr1 === rock) {
                    $(".result").text("You Lose!");
                    $(".result").addClass("lose");
                    $(".result").removeClass("win");
                    $(".result").removeClass("draw");
                    $(".hand2").addClass("winner");
                    $(".hand1").removeClass("winner");
                    $(".computer-score").html(++computer);
                } else if (imageattr1=== paper) {
                    $(".result").text("You Win!");
                    $(".result").addClass("win");
                    $(".result").removeClass("lose");
                    $(".result").removeClass("draw");
                    $(".hand1").addClass("winner");
                    $(".hand2").removeClass("winner");
                    $(".player-score").html(++player);
                } else {
                    $(".result").text("Draw");
                    $(".result").addClass("draw");
                    $(".result").removeClass("win");
                    $(".result").removeClass("lose");
                    $(".hand1").removeClass("winner");
                    $(".hand2").removeClass("winner");
                }
            }
		});
		$(".hand1").fadeIn();
		$(".hand2").fadeIn();
		$(".result").fadeIn(1200);
		$(".resetbtn").fadeIn(1200);
		$(".hand1").attr("src",image1);

		$(document).ready(function() {
			$(".resetbtn").click(function (){
				$(".hand1").css("display","none");
				$(".hand2").css("display","none");
				$(".result").css("display","none");
				$(".resetbtn").css("display","none");
				$(".computer-score").html("0");
				$(".player-score").html("0");
			})
        })
    });
});

