// Tracks whether pop-up secton has been completed or not
var completedClickPopUpSection1 = false;


// Use this function to disable the next and back arrows when a click popup starts.
function disableNavArrows() {
    $("#back_arrow, #next_arrow").addClass("unclickable");
}


function checkClickPopUpSection1() {
	$("#back_arrow").removeClass("unclickable");
    if ($('.clicked').length == 3) {
        completedClickPopUpSection1 = true;
        $("#next_arrow").removeClass("unclickable");
    }
}


function popupCreate(num) {
    var popupTarget = "#popup_" + num;
    var popupTargetImage = "#popup_" + num + " .top_img";
    var popupTargetText = "#popup_" + num + " .text";
    var popupTargetClose = "#popup_" + num + " .close_button";

    var popup_tl = gsap.timeline({onStart:disableNavArrows, onReverseComplete:function(){
            $("#textbox_2_0_3 .button_cont.noClick").removeClass("noClick");
            checkClickPopUpSection1();
        }});
        popup_tl
        //block clicks until done playing
        .from(popupTarget, {duration: 1, autoAlpha:0, scale:0, ease:"back.out(1)"})       
        .from(popupTargetImage, {duration: 0.75, scale:0, rotationY:-360, opacity:0, ease:"circ.out"}, ">-.25")    
        .from(popupTargetText, {duration: 0.75, y:50, opacity:0, ease:"sine.out"}, ">-.5")   
        .from(popupTargetClose, {duration: 0.75, scale:0, rotation:-360, ease:"back.out(1)"}, ">-.25")    

    return popup_tl
}

function popupStart(clickNum) {
    
    var popups = [click_popup1,click_popup2,click_popup3];
    var index = parseInt(clickNum) - 1;
    var popup = popups[index];
    
    popup.timeScale(masterTimescale).restart();
}

function popupReverse(clickNum) {
    
    var popups = [click_popup1,click_popup2,click_popup3];
    var index = parseInt(clickNum) - 1;
    var popup = popups[index];
    
    popup.timeScale(1.5).reverse();
}

var hand_start = gsap.fromTo("#button_1 .click_hand", {scale: 0.75, transformOrigin:"top center"}, {duration:1, scale: 1, yoyo: true, repeat: -1, ease:"sine.inOut", paused: true});
var hand_stop = gsap.to("#button_1 .click_hand", {opacity:0, duration:0.35, display:"none", paused: true, onComplete: function() {
    hand_start.pause();
}})

var click_popup1 = gsap.timeline({paused: true});
    click_popup1
    .add(popupCreate(1))

var click_popup2 = gsap.timeline({paused: true});
    click_popup2
    .add(popupCreate(2))

var click_popup3 = gsap.timeline({paused: true});
    click_popup3
    .add(popupCreate(3))

$("#textbox_2_0_3 .button").on("click", function() {
    var clickNum = this.id.replace("button_","");
    $("#textbox_2_0_3 .button_cont").addClass("noClick");
    var self = this;
    setTimeout(function() {
        $(self).addClass("clicked");
    }, 500);
    popupStart(clickNum);
});

$(".popupStyle .close_button").on("click", function() {
  var clickNum = $(this).closest('.popupStyle')[0].id.replace("popup_","");
  popupReverse(clickNum);
});

/*$("#textbox_2_0_1b .button").one("click", function() {
    hand_stop.play();
});*/



// Stores a list of your popups for use in dev tools and nav-bar.js
var click_popup_array = [];
