/* ----------------------------------

         INTERACTIVE CODE

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
    if ($('.clicked').length == 1) {
        completedClickPopUpSection1 = true;
        $("#next_arrow").removeClass("unclickable");
    }
}

function checkClickPopUpSection2() {
	$("#back_arrow").removeClass("unclickable");
    if ($('.clicked2').length == 1) {
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



// Stores a list of your popups for use in dev tools and nav-bar.js
var click_popup_array = [];

