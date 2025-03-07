// Infographic Interactivity

// Tracks whether interactive secton has been completed or not
var completedClickPopUpSection1 = false;

/* Unlock Quiz Button --------------------- */
function checkClickPopUpSection1() {
    if ($('.clicked').length == 3) {
        completedClickPopUpSection1 = true;
        quizUnlockCheck();
    }
}

function quizUnlockCheck() { 
    if (completedClickPopUpSection1 == true) {
        unlockQuizButton(); // in default.js
    } 
}

/* Unused for now */
function stopScrolling() {	
	if ( $('#course_wrapper_2').hasClass('loading_no_scrolling') ) {
		$('#course_wrapper_2').removeClass('loading_no_scrolling');
		ScrollTrigger.refresh();
	} else {
		$('#course_wrapper_2').addClass('loading_no_scrolling');
	}
}

function popupCreate(num) {
    var popupTarget = "#popup_text_" + num;

    var popup_tl = gsap.timeline({onComplete:function(){
            $("#box_4 .button_cont.noClick").removeClass("noClick");
            checkClickPopUpSection1();
        }});
        popup_tl
        //block clicks until done playing
        .from(popupTarget, {duration: 0.75, autoAlpha:0, scale:0, ease:"back.out(1)"})           

    return popup_tl
}

function popupRewind(clickNum) {
    
    var popups = [click_popup1,click_popup2,click_popup3];
    var index = parseInt(clickNum) - 1;
    var popup = popups[index];
    
    var hasPlayed = $.grep(popups, function (e, i) {
        return e.progress() === 1;
    });
    
    if (hasPlayed.length !== 0) {
        hasPlayed[0].eventCallback("onReverseComplete", function(){
            popup.timeScale(1).restart();
        });
        hasPlayed[0].timeScale(1.5).reverse();
    } else {
        popup.timeScale(1).restart();
    }
}

var click_popup1 = gsap.timeline({paused: true});
    click_popup1
    .add(popupCreate(1))

var click_popup2 = gsap.timeline({paused: true});
    click_popup2
    .add(popupCreate(2))

var click_popup3 = gsap.timeline({paused: true});
    click_popup3
    .add(popupCreate(3))


function clickEvent(e) {
    var clickNum = e.id.replace("button_","");
    $("#box_4 .button_cont").addClass("noClick");
    $("#box_4 .button.highlight").removeClass("highlight");
    $(e).addClass("clicked highlight");
    popupRewind(clickNum);
}

$("#box_4 .button").on("click", function() {
  clickEvent(this);
});

$("#box_4 .button").one("click", function() {
  hand_stop.play();
});