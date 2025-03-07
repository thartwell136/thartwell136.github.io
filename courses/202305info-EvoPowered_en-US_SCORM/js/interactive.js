// Infographic Interactivity

// Tracks whether interactive secton has been completed or not
//var completedClickPopUpSection1 = false;

//SLICK JS Carousel
$('#slider-text .slides').slick({
  arrows:false,
  draggable:false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll:1,
  centerMode:true,
  centerPadding:0,
  asNavFor: '#slider-nav .slides'
});
$('#slider-nav .slides').slick({
  draggable:false,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll:1,  
  centerMode:true,
  centerPadding:0,
  asNavFor: '#slider-text .slides',
  prevArrow: $('#slider-nav .leftarrow'),
  nextArrow: $('#slider-nav .rightarrow'),
  responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          draggable:true,
          arrows:false
        }
      }
   ]
});

$('#slider-nav .leftarrow, #slider-nav .rightarrow').on('click', function() {
	hand_stop.play();
});

var beforeCount = 0;
$('#slider-nav .slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    
	//console.log(slick.$slides.length, nextSlide, slick.options.slidesToScroll, slick.options.slidesToShow);
	if (nextSlide >= slick.$slides.length - slick.options.slidesToScroll) {
        //console.log("Last slide");
		$('#slider-nav .rightarrow .inner img').addClass("no-drop");
    } else {
		$('#slider-nav .rightarrow .inner img').removeClass("no-drop");
	}
	
	if (nextSlide == 0) {
        //console.log("First slide");
		$('#slider-nav .leftarrow .inner img').addClass("no-drop");
    } else {
		$('#slider-nav .leftarrow .inner img').removeClass("no-drop");
	}
    
    var target;
    if (currentSlide == nextSlide) {
        //first slide
        target = $('#slider-nav .slick-slide.slick-current');
    } else if (currentSlide > nextSlide) {
        //direction = backward
        target = $('#slider-nav .slick-slide.slick-current').prev();
    } else {
        //direction = forward
        target = $('#slider-nav .slick-slide.slick-current').next();
    }
    
    //remove classes
    $('#slider-nav .slick-slide.small, #slider-nav .slick-slide.middle').removeClass("small middle left right");
    
    //add classes
    target.prev().prev().addClass("small left");
    target.prev().addClass("middle left");
    target.next().addClass("middle right");
    target.next().next().addClass("small right");
    
});

//Resets the cursor on the right when slick moves back to the center on breakpoint changes
$('#slider-nav .slides').on('breakpoint', function(event, slick, breakpoint){
	$('#slider-nav .rightarrow .inner img').removeClass("no-drop");
});

$('#slider-nav .slides').on('afterChange', function(event, slick, currentSlide) {
  if (slick.$slides.length-1 == currentSlide) {
    unlockQuizButton();
  } 
})


/* Unlock Quiz Button --------------------- */
/* function checkClickPopUpSection1() {
    if ($('.clicked').length == 4) {
        completedClickPopUpSection1 = true;
        quizUnlockCheck()
    }
}
function checkClickPopUpSection2() {
    if ($('.clicked').length == 4) {
        completedClickPopUpSection2 = true;
        quizUnlockCheck()
    }
}

function quizUnlockCheck() { 
    if (completedClickPopUpSection1 == true && completedClickPopUpSection2 == true) {
        unlockQuizButton(); // in default.js
    } 
}*/
 