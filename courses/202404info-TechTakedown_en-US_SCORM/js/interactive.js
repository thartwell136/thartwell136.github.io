// Infographic Interactivity

/* Ensure the tappy hand animation is only set up once all sliders have initialized */
var sliderTotal = $('.slider_number').length;
var sliderCount = 1;

//Creates Tappy Hand Animation for Sliders
$('.slider_number').on('init', function(slick) {
    if (sliderCount == sliderTotal) {
        // Set up tappy hand anims
        document.querySelectorAll(".tappy_hand").forEach((el) => {
            el.anim = gsap.fromTo(el, {scale: 1, x: 0, y: 0}, {duration: 1, scale: 1.1, x: "8%", y: "8%", transformOrigin: "20% 20%", ease: "sine.inOut", repeat: -1, yoyo: true})
        });
    } else {
        sliderCount ++;
    }   
});

/*------ SLIDER SETUP -------*/
$('.slider_number').slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow:'<button type="button" class="slick-next">Next<div class="tappy_hand"></div></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

// handles cases where carousel doesn't scroll at desktop size (does at smaller sizes) and need to mark as finished for quizUnlockCheck to work.
$('.slider_number').on('setPosition', function(event) {
    var length = event.currentTarget.slick.$slides.length,
        slidesToShow = event.currentTarget.slick.options.slidesToShow,
        num = parseInt(event.currentTarget.slick.$slider[0].id.slice(-1));

    if (length == slidesToShow) {
        $("#slider_number_" + num).addClass("finished");
        //console.log("added finished to #slider_number_" + num);
    }
})

$('.slider_number').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    // get id for slider, save number at the end, & convert to number. note won't work if there are 10+ sliders!
    var num = parseInt(slick.$slider[0].id.slice(-1));
    //console.log(slick, currentSlide, nextSlide, num);

    if (nextSlide >= slick.$slides.length - slick.options.slidesToShow) {
        $("#slider_number_" + num).addClass("finished");
        //console.log("added finished to #slider_number_" + num);
    }

    quizUnlockCheck();

    var taphand_el = $("#slider_number_" + num + " .tappy_hand")[0];

    // turn off hand anim if it exists and it's still running
    if (taphand_el.anim) {
        if (taphand_el.anim.isActive()) {
            gsap.to(taphand_el, {duration: 0.25, opacity: 0, display: "none", onComplete: function() {
                taphand_el.anim.pause();
            }});
        }
    }
    
});

/* Unlock Quiz Button --------------------- */
function quizUnlockCheck() {

    if ($(".finished").length >= 3) {
        unlockQuizButton(); // in default.js
    }
}

