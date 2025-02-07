/* ----------------------------------

         INTERACTIVE CODE

------------------------------------- */

// Tracks whether pop-up secton has been completed or not
var completedClickPopUpSection1 = false;

// Use this function to disable the next and back arrows when a click popup starts.
function disableNavArrows() {
    $("#back_arrow, #next_arrow").addClass("unclickable");
}

function checkClickPopUpSection1() {
	$("#back_arrow").removeClass("unclickable");
    if ($('.clicked').length == 4) {
        completedClickPopUpSection1 = true;
        $("#next_arrow").removeClass("unclickable");
    }
}


// Click Popup Example -------------------------------------

function popupCreate(num) {
    var popupTarget = "#popup_" + num;
    var popupImages = "#popup_" + num + " .images";
    var popupText = "#popup_" + num + " .wrapper .text > div > *";
    var popupSquares = "#popup_" + num + " .squares";
    
    var xAnimate = -100;
    
    if (num == 2 || num == 4) {
        xAnimate = 100;
    }

    var popup_tl = gsap.timeline({onReverseComplete:function(){
            $("#wrapper_2_3 .click_wrapper").removeClass("noClick");
            checkClickPopUpSection1();
            //need to re-allow scroll after popup has closed
            allowScroll(true);
        }});
        popup_tl
        
        // allowScroll function call explanation: parameter #1 false - don't allow scroll, parameter #2 click_popup1_tl - change scroll behavior based on this timeline moving forward or backward, parameter #3 false - don't scroll to top of the page "under" the popup when popup is opened.
        .call(allowScroll, [false, popup_tl, false], "+=.01")
        
        //block clicks until done playing
        .from(popupTarget, {duration: 0.01, display:"none", opacity:0}) 
        .fromTo("#bg_2_3", {duration: 0.5, display:"none", opacity:0}, {display:"block", opacity:1}, "<")   
        .from(popupImages, {duration: 1.5, xPercent:xAnimate, ease:"expo.out"})   
        .from(popupText, {duration: 1, y:-1080, stagger:{each:.15, from:"end"}, opacity:0, ease:"expo.out"}, "<")  
        .from(popupSquares, {duration: 1, stagger:.25, scale:0, transformOrigin:gsap.utils.wrap(["top center","bottom center"]), ease:"elastic.out(1,0.5)"}, ">-.5")

    return popup_tl
}

/*function popupRewind(clickNum) {
    
    var popups = [click_popup1,click_popup2,click_popup3,click_popup4];
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
}*/

function getPopup(clickNum) {
    var popups = [click_popup1,click_popup2,click_popup3,click_popup4];
    var index = parseInt(clickNum) - 1;
    var popup = popups[index];
    
    return popup;
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

var click_popup4 = gsap.timeline({paused: true});
    click_popup4
    .add(popupCreate(4))


// have to declare a unique scrollbar for each popup
var scrollBarPopups = document.querySelectorAll(".popup_1_style > .scroll");
$.each(scrollBarPopups, function () {
    
    OverlayScrollbars({
        target: this
    },{
        overflow: {x: "hidden", y: "scroll"},
        scrollbars: {theme: courseOptions.scrollbarTheme}
    })
    
});


function clickEvent(e) {
    disableNavArrows();
    var clickNum = e.id.replace("button_","");
    $("#wrapper_2_3 .click_wrapper").addClass("noClick");
    getPopup(clickNum).timeScale(1).restart();
    $(e).addClass("clicked");
}

function closeEvent(e) {
    var clickNum = e.id.replace("close_","");
    getPopup(clickNum).timeScale(2).reverse();
}

$("#wrapper_2_3 .button").on("click", function() {
  clickEvent(this);
});

$(".popup_1_style .close").on("click", function() {
  closeEvent(this);
});

/*$("#box_4 .button").one("click", function() {
  hand_stop.play();
});*/


// Stores a list of your popups for use in dev tools and nav-bar.js
var click_popup_array = [];

