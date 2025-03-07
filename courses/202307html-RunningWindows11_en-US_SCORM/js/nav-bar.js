/* -----------------------------------------------------
    Clean up function called when the user
    changes sections
-------------------------------------------------------- */
function navReset() {

    $("#next_arrow, #back_arrow").removeClass("unclickable");

    // Uncomment to stop any extra timelines from running. Function defined in default.js.
    //stopExtraTimelines();

    //New code automatically does the below step so long as you remember to create an array in click-functions.js
    $.each(click_popup_array, function (i) {
        click_popup_array[i].pause(0);
    });

}

/* -----------------------------------------------------
    Nav Menu Chapter Setup
-------------------------------------------------------- */
//Gwen made updates to all of this 10/31/2019

var currentSection = 1; // tracks the current section the user is on
var visitedChapter = 1; // tracks the highest section user has visited
var tlLabelArray = [];

function navSetup() {
    //Taylor 2/20/19 fix for quick loading content
    $(tl).ready(function() {
                
        // Gwen updated 1/3/20 after GSAP 3 update
        // get all labels, then use Object.keys to convert keys to strings so we can run regex match on them
        var tlLabelArrayTemp = Object.keys(tl.labels);
                
        for (i=0; i < tlLabelArrayTemp.length; i++) {
            var match = tlLabelArrayTemp[i].match( /section_\d/ );
            
            if (match != null || tlLabelArrayTemp[i] == "quiz") {
                tlLabelArray.push(tlLabelArrayTemp[i])
            }
        }

        
        $("#nav_content .nav_item").each(function(i) {

            if (!$(this).hasClass("nav_no_lock")) {

                // lock out chapters
                if (i > 0 && courseOptions.scormLocation === false && SliderTurnOn === false ) {
                    $(this).addClass("youMayNotPass");
                }

                // set up click function for each chapter nav menu
                $( this ).on("click", function() {
                    if (!($(this).hasClass("youMayNotPass")))	{
                        currentSection = i + 1;
                        tl.play(tlLabelArray[i]);
                        $(".active_nav_item").removeClass("active_nav_item");
                        $(this).addClass("active_nav_item");
                        navReset();  
                    }
                });
            }
        });

        unlockChapters();
    });    
}

// Records if a user has completed a chapter.
function postChapterTracking(currentSection) {
    if ( visitedChapter < currentSection && SliderTurnOn === false && courseOptions.scormLocation === false ) {
        visitedChapter = currentSection;
        IREP.setBookmark(currentSection);
    }
}

// Called via timeline when user changes sections/chapters, either going forward or in reverse.
// Remember that the label array and the nav menu list both start at 0, while the section numbers start at 1!
function sectionCounter(section_num) {
        
    if (section_num == "quiz") {
        currentSection = tlLabelArray.length;
    } else {
        currentSection = section_num;
    }
    
    if (tl.reversed()) {
        currentSection = currentSection - 1;
    }
    
    $(".active_nav_item").removeClass("active_nav_item");
    
    $("#nav_content .nav_item").eq(currentSection - 1).addClass("active_nav_item").removeClass("youMayNotPass");
    postChapterTracking(currentSection);
}


/* -----------------------------------------------------
    Unlocks previously visited chapters
-------------------------------------------------------- */
function unlockChapters() {

    if (courseOptions.scormLocation === false && SliderTurnOn === false ) {

        $.when(IREP.getBookmark()).then(function(visitedChapterData) {

            if ( visitedChapterData != 0) {
                visitedChapter = visitedChapterData;

                // Remove blocker class from all chapters the user has already completed.
                for (i = 0; i < visitedChapter; i++) {
                    $("#nav_content .nav_item").eq(i).removeClass("youMayNotPass");
                }
            }
        });
    }
}


/* -----------------------------------------------------
    Nav dropdown menu / arrows
-------------------------------------------------------- */

var $nav_item = $(".nav_item");

var nav_box_tl = gsap.timeline({ paused: true,
    onStart: function() {
        $nav_item.css("will-change", "transform");
    },
    onReverseComplete: function() {
        $nav_item.css("will-change", "auto");
    }});
    nav_box_tl
    .fromTo("#nav_container", {x: "-97.857%"}, {duration: 0.375, x: "0%", ease: "sine.out", force3D: false})
    .fromTo("#nav_icon_wrapper svg", {rotation: 45}, {duration: 0.25, rotation: 0, ease: "back.out(1.7)"}, 0)
    .fromTo("#nav_click_close", {display:"none"}, {duration: 0.05, display:"block"})


$("#nav_icon_wrapper").click(function() {
    if (!nav_box_tl.isActive()) {       
        if (nav_box_tl.progress() == 0) {
            nav_box_tl.restart(); 
        } else {
            nav_box_tl.reverse(); 
        }       
    }
});


$("#nav_click_close").click(function() {    
    if (!nav_box_tl.isActive()) { 
        nav_box_tl.reverse(); 
    }
})



/* -----------------------------------------------------
    Show and hide the legal screen from nav menu
-------------------------------------------------------- */

var legal_show_tl = gsap.timeline({paused:true});
    legal_show_tl    
    .from("#scene_legal", {duration: 0.35, opacity:0, display: "none"})
    .from("#scene_legal_inner", {duration: 0.5, y: 50}, 0)

$("#nav_legal, #legalButton").click(function() {
    if (legal_show_tl.progress() == 0) {
        legal_show_tl.timeScale(1).restart();
    }
});
$("#legal_close").click(function() {
    legal_show_tl.timeScale(1.5).reverse();
});
