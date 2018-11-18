	

$(".butterfly").click(function(){
	$(".butterfly").hide();
})

$(".glass").click(function(){
	playSound("break");
})

$(".girl").click(function(){
  $(".girl").fadeOut();
});


// var audio = document.getElementsByTagName("audio")[0];
// audio.play();


// var audio = $("audio")[0];
// $(".glass").mouseenter(function() {
//  audio.play();
// });

var audio = document.getElementsByTagName("audio")[0];
audio.play();

audio.video=0.5;

var audio = $("audio")[0];
$(".musicbox").mouseenter(function() {
 audio.play();
});




$(".girl").click(function(){
    $(".movinggirl").animate({left: '1250px'},"slow");
}); 

$(".movinggirl").click(function(){
  $(".movinggirl").fadeOut();
});

$(".hand").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".hand2").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".hand3").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".bloodrop").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".eyeblood").click(function(){
    $(this).animate({opacity: '1'},"slow");
})
	
$(".man").click(function(){
	$(".eyeblood").fadeIn();
})
   
$(".spider").click(function(){
    $(".spider").animate({top: '-100px'});
}); 

$(".bloodspill1").click(function(){
	$(".bloodspill1").hide();
})

$(".rat").click(function(){
    $(".rat").animate({left: '1300px'},"slow");
}); 

$(".skull2").click(function(){
	$(".skull2").fadeOut();

})

$(".girlhead").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".skull2").click(function(){
	$(".skull2").fadeOut();
})

$(".spider2").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".glove").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".foot1").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".foot2").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".foot3").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".foot4").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".cross").click(function(){
	$(".cross").fadeOut();
})

$(".anticross").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".sixsixsix").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".inkspill").click(function(){
    $(this).animate({opacity: '1'},"slow");
})


$(".hand5").click(function(){
    $(this).animate({opacity: '1'},"slow");
})


$(".helpme").click(function(){
    $(this).animate({opacity: '1'},"slow");
})

$(".bloodspill2").click(function(){
    $(this).animate({opacity: '0.5'},"slow");
})























// $('.hand').hover(function(){
//  $('.hand').not(this).toggleClass('toggle');
// })

//$(".eyeblood").click(function(){
//	$(".eyeblood").hide();

//})

//$(".girl").click(function(){
  //  $(".girl").hide(1000);
//});

//<button class="loud-link-click" data-src="audio-name" type="button" name="button">Click me</button>


//$(".man").click(function(){
  //  $(".eyeblood").fadeIn();
//});

//$( ".rat" ).click(function() {
  //$( ".eyeblood" ).fadeIn( "slow", function() {
    // Animation complete
  //});
//});

//$(document).ready(function(){
  //  $(".man").click(function(){
    //    $(".man").fadeOut(1000, function(){
      //      alert("fadeOut() method is finished!");
        //});
   // });
    //$(".man").click(function(){
      //  $(".eyeblood").fadeIn(1000, function(){
        //    alert("fadeIn() method is finished!");
       // });
   // });


//$(".man").hover(function(){

  //  $(this).find("manA3.png").fadeOut();

//}, function() {

  //  $(this).find("girl.png").fadeIn();

//});