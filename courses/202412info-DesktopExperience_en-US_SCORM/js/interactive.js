// Infographic Interactivity

// Tracks whether interactive secton has been completed or not
var completedClickPopUpSection1 = false;


/* Unlock Quiz Button --------------------- */
 function checkClickPopUpSection1() {
    if ($('.clicked').length == 4) {
        completedClickPopUpSection1 = true;
        quizUnlockCheck();
    }
}

function quizUnlockCheck() { 
    if (completedClickPopUpSection1 == true && $(".finished").length == 2) {
        unlockQuizButton(); // in default.js
    } 
}

// SLIDER #1
$('#slider_4').slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows:"#box_4 .arrow_cont",
    responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 809,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 449,
          settings: {
            slidesToShow: 1
          }
        }
    ]
});

// SLIDER #2
$('#slider_7').slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows:"#box_7 .arrow_cont",
    responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 809,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 449,
          settings: {
            slidesToShow: 1
          }
        }
    ]
});

// handles cases where carousel doesn't scroll at desktop size (does at smaller sizes) and need to mark as finished for quizUnlockCheck to work.
$('.slider').on('setPosition', function(event) {
    var length = event.currentTarget.slick.$slides.length,
        slidesToShow = event.currentTarget.slick.options.slidesToShow,
        num = parseInt(event.currentTarget.slick.$slider[0].id.slice(-1));

    if (length == slidesToShow) {
        $("#slider_" + num).addClass("finished");
        //console.log("added finished to #slider_" + num);
    }
})

$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    // get id for slider, save number at the end, & convert to number. note won't work if there are 10+ sliders!
    var num = parseInt(slick.$slider[0].id.slice(-1));
    //console.log(slick, currentSlide, nextSlide, num);

    if (nextSlide >= slick.$slides.length - slick.options.slidesToShow) {
        $("#slider_" + num).addClass("finished");
        //console.log("added finished to #slider_" + num);
    }

    quizUnlockCheck();
    
});

// BOX #3
function createPopupOpen(num) {
    var popupTarget = "#popup_3_" + num;
    var popupBox = popupTarget + " .popup_wrapper";
	var popupImg = popupTarget + " .popup_img";
	var popupText = popupTarget + " .popup_text *";
	var popupClose = popupTarget + " .x_style";

    var popup_3_tl = gsap.timeline();
        popup_3_tl        
        .from(popupTarget, {duration: 0.05, autoAlpha: 0}) 
		.from(popupBox, {duration: 0.75, autoAlpha: 0, scaleX: 0, ease: "back.out"})  
        .from(popupImg, {duration: 0.5, autoAlpha: 0, y: 30, ease: "back.out"}, "-=0.2") 
        .from(popupText, {duration: 0.5, autoAlpha: 0, y: 30, ease: "back.out"}, "<+0.2") 
        .fromTo(popupClose, {scale: 1.5, rotation: 180, autoAlpha: 0}, {duration: 0.8, scale: 1, rotation: 1, autoAlpha: 1, ease: "bounce.out"}, "-=0.65")

    return popup_3_tl
}
	
function createPopupClose(num) {
    var popupTarget = "#popup_3_" + num;

    var popup_3_tl = gsap.timeline();
        popup_3_tl        
        .to(popupTarget, {duration: 0.3, autoAlpha:0})

    return popup_3_tl
}
	
	
	
var click_popup_3_1 = gsap.timeline({paused: true});
click_popup_3_1
.add(createPopupOpen(1))
.addPause()
.add(createPopupClose(1))

var click_popup_3_2 = gsap.timeline({paused: true});
click_popup_3_2
.add(createPopupOpen(2))
.addPause()
.add(createPopupClose(2))

var click_popup_3_3 = gsap.timeline({paused: true});
click_popup_3_3
.add(createPopupOpen(3))
.addPause()
.add(createPopupClose(3))

var click_popup_3_4 = gsap.timeline({paused: true});
click_popup_3_4
.add(createPopupOpen(4))
.addPause()
.add(createPopupClose(4))

	
// Click Functions 
$("#box_3 .button").click(function() {
	// Controls overflow on course
	$('body').addClass('overlay-is-open');
    var target_tl = "click_popup_3_" + $(this).data("num");
    window[target_tl].restart();
})

$(".popup .x_style").click(function() {
	// Controls overflow on course
	$('body').removeClass('overlay-is-open');
    var num = $(this).data("num");
    var target_tl = "click_popup_3_" + num;
    window[target_tl].play();    
    $("#click_3_" + num).addClass("clicked1 clicked");
    checkClickPopUpSection1();
})
