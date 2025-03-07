/* ----------------------------------

    MODULE INTERACTIVE CODE

------------------------------------- */

// Tracks whether pop-up secton has been completed or not
var completedClickPopUpSection1 = false,
    completedClickPopUpSection2 = false,
    completedClickPopUpSection3 = false,
    completedClickPopUpSection4 = false;


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

function checkClickPopUpSection2() {
	$("#back_arrow").removeClass("unclickable");
    if ($('.clicked2').length == 3) {
        completedClickPopUpSection2 = true;
        $("#next_arrow").removeClass("unclickable");
    }
}

function checkClickPopUpSection3() {
    $("#back_arrow").removeClass("unclickable");
    if ($('.clicked3').length == 3) {
        completedClickPopUpSection3 = true;
        $("#next_arrow").removeClass("unclickable");
    }
}


/*
// Example 1 ------------------------------------------------------------------------------------------------------
//    Traditional click section where user clicks an element to open a popup
//    Then they click an "X" button to hide that popup by reversing the timeline

function createPopup(num) {
    var popupTarget = "#popup_" + num;
    var popupX = popupTarget + " .X";

    var tl = gsap.timeline();
        tl
        .from(popupTarget, {duration: 0.4, opacity: 0, display:"none"})
        .from(popupX, {duration: 0.15, opacity:0})

    return tl
}

var click_popup = gsap.timeline({paused: true});
    click_popup
    .add(createPopup("1_1"))

$("#click_1_1").click(function() {
    disableNavArrows(); // disable nav so user can't navigate thru master timeline while in the popup, this would break stuff
    click_popup.restart();
    //click_popup.timeScale(masterTimescale).restart();
});

$("#popup_1_1_1 .X").click(function() {
    $("#click_1_1").addClass("clicked");
    checkClickPopUpSection1();
    click_popup.reverse();
});


// Example 2 ------------------------------------------------------------------------------------------------------
//  Similar to Example 1, but the click_popup timeline is more complex.
//  This is used for multi-page popups, or if you want to close the popup in a different way than how it was shown.

var click_popup2 = gsap.timeline({paused: true});
    click_popup2
    .from(("#popup_2_1_1"), {duration: 0.5, opacity: 0, display: "none"})
    .from(("#popup_2_1_1 .next"), {duration: 0.5, opacity:0, display:"none"})

        .addPause()

    .to(("#popup_2_1_1 .part1"), {duration: 0.5, opacity: 0, display: "none"})
    .from(("#popup_2_1_1 .part2"), {duration: 0.5, opacity: 0, display: "none"})
    .from(("#popup_2_1_1 .X"), {duration: 0.5, opacity:0, display:"none"})

        .addPause()

    .to(("#popup_2_1_1"), 0.5, {scale: 0, opacity: 0, display: "none"})

$("#click_2_1").click(function() {
    disableNavArrows(); // disable nav so user can't navigate thru master timeline while in the popup, this would break stuff
    click_popup2.restart();
});

// element that shows up on first page of popup
$("#popup_2_1_1 .next").click(function() {
    click_popup2.play();
});

// element that shows up on last page of popup
$("#popup_2_1_1 .X").click(function() {
    $("#click_2_1").addClass("clicked2");
    checkClickPopUpSection2();
    click_popup2.play();
});



// Example 3 ------------------------------------------------------------------------------------------------------
//  User clicks element to make something appear permanently
//  Since there's no close or "X" button, these click sections are a bit simpler.

// Note "checkClickPopUpSection3" function being called in the timeline's "onComplete"
var click_popup3 = gsap.timeline({paused: true, onComplete: checkClickPopUpSection3});
    click_popup3
    .from(("#click_3_1 .bar"), {duration: 0.5, opacity:0, display:"none"})

$("#click_3_1").click(function() {
    if ($(this).hasClass("clickable")) {
        $(this).removeClass("clickable");
        $(this).addClass("clicked3");
        click_popup3.restart();
    }
});
*/





// Stores a list of your popups for use in dev tools and nav-bar.js
var click_popup_array = [];
