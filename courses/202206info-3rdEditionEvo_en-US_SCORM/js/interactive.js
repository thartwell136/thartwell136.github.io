// Infographic Interactivity

// Tracks whether interactive secton has been completed or not
var completedClickPopUpSection1 = false;
var completedClickPopUpSection2 = false;


/* Unlock Quiz Button --------------------- */
 function checkClickPopUpSection1() {
    if ($('.clicked').length == 8) {
        completedClickPopUpSection1 = true;
        quizUnlockCheck()
    }
}
function checkClickPopUpSection2() {
    if ($('.clicked2').length == 1) {
        completedClickPopUpSection2 = true;
        quizUnlockCheck()
    }
}

function quizUnlockCheck() { 
    if (completedClickPopUpSection1 == true && completedClickPopUpSection2 == true) {
        unlockQuizButton(); // in default.js
    } 
}

function clickPopup(clicked, num) {
	var popup = "#box_6b .t" + num;
	$(clicked).addClass('clicked');
	hand_stop2.play();
	gsap.to("#box_6b .text", {duration: 0.5, opacity:0, x:"-50%"})   
    gsap.fromTo(popup, {duration: 0.75, opacity:0, x:"50%"}, {opacity:1, x:0, delay:.25, onComplete:checkClickPopUpSection1})
}

$("#box_6 .button_1").click(function() {
	clickPopup(this,"1");	
});

$("#box_6 .button_2").click(function() {
	clickPopup(this,"2");		
});

$("#box_6 .button_3").click(function() {
	clickPopup(this,"3");		
});

$("#box_6 .button_4").click(function() {
	clickPopup(this,"4");		
});

$("#box_6 .button_5").click(function() {
	clickPopup(this,"5");		
});

$("#box_6 .button_6").click(function() {
	clickPopup(this,"6");		
});

$("#box_6 .button_7").click(function() {
	clickPopup(this,"7");		
});

$("#box_6 .button_8").click(function() {
	clickPopup(this,"8");		
});

//SLICK JS Carousel
$('#box_4 .slide_container .slides').slick({
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('#box_4 .leftarrow'),
  nextArrow: $('#box_4 .rightarrow'),
});

$('#box_4 .leftarrow, #box_4 .rightarrow').on('click', function() {
	hand_stop.play();
});

$('#box_4 .slide_container .slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	
	//console.log(slick.$slides.length, nextSlide, slick.options.slidesToScroll, slick.options.slidesToShow);
	if (nextSlide >= slick.$slides.length - slick.options.slidesToShow) {
        //console.log("Last slide");
		$('#box_4 .rightarrow .inner img').addClass("no-drop");
    } else {
		$('#box_4 .rightarrow .inner img').removeClass("no-drop");
	}
	
	if (nextSlide == 0) {
        //console.log("First slide");
		$('#box_4 .leftarrow .inner img').addClass("no-drop");
    } else {
		$('#box_4 .leftarrow .inner img').removeClass("no-drop");
	}									
});

//Resets the cursor on the right when slick moves back to the center on breakpoint changes
$('#box_4 .slide_container .slides').on('breakpoint', function(event, slick, breakpoint){
	$('#box_4 .rightarrow .inner img').removeClass("no-drop");
});

$('#box_4 .slide_container .slides').on('afterChange', function(event, slick, currentSlide) {
  if (slick.$slides.length-1 == currentSlide) {
    $("#box_4 .slide_container").addClass('clicked2');
	checkClickPopUpSection2();
  }
})