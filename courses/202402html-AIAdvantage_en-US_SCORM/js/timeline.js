// USER BOOKMARK CODE ------------------------------------------------------------------------------

var lastPerctNumber = 0;

function getProgressFromSite() {

    if (SliderTurnOn === false && courseOptions.scormLocation == false) {
         $.when(IREP.getProgress()).then(function(savedProgress) {             
            if (savedProgress != null) {
                lastPerctNumber = savedProgress;
            }
        });
     }
}

getProgressFromSite();

function recordUserTimeLocation() {
	
    if (SliderTurnOn === false && courseOptions.scormLocation === false) {
        var currentPerctNumber = Math.round(tl.progress() * 100);
        if (!(tl.reversed()) && lastPerctNumber < currentPerctNumber) {
            lastPerctNumber	= currentPerctNumber;
            IREP.setProgress(currentPerctNumber);
        }
     }
}

	



// Gwen 2/13: this function is called at the start of all click sections to determine whether or not the user has completed that specific section. If not, the next arrow is grayed out.
function nextArrowCheck(check) {
    // if function is called while timeline is reversed, always make the next arrow clickable again
    if (tl.reversed()) {
        $("#next_arrow").removeClass("unclickable");
        return
    }
    
    // else run through the checks...
    if (check == "completedClickPopUpSection1") {
        if (!completedClickPopUpSection1) {
            $("#next_arrow").addClass("unclickable");
        }
    }
    else if (check == "completedClickPopUpSection2") {
        if (!completedClickPopUpSection2) {
            $("#next_arrow").addClass("unclickable");
        }
    }
    else if (check == "completedClickPopUpSection3") {
        if (!completedClickPopUpSection3) {
            $("#next_arrow").addClass("unclickable");
        }
    }
    else if (check == "completedClickPopUpSection4") {
        if (!completedClickPopUpSection4) {
            $("#next_arrow").addClass("unclickable");
        }
    }
}



// TIMELINE SETUP ------------------------------------------------------------------------------
var tl = gsap.timeline({onUpdate: tlUpdate});


// EXTRA TIMELINE STUFF ------------------------------------------------------------------------------

function flashingText() {
    if (!tl.reversed()) {
        /*gsap.to("#textbox_1_1_0 .chart td.x", {duration: 0.5, backgroundColor: "#ffe9e9", color: "#ff0000", stagger: {
            each: 0.06, 
            repeat: 1,
            repeatDelay: 1.5,
            yoyo: true
          }})*/

        gsap.to("#textbox_1_1_0 .chart td.check", {duration: 0.5, backgroundColor: "#e9fff9", color: "#0ac500", stagger: {
            each: 0.06, 
            repeat: 1,
            repeatDelay: 1.5,
            yoyo: true
          }, delay: 0})
    }
}


// ALL ANIMATION SCENES TIMELINE - START ------------------------------------------------------------------------------>

tl	

    .to("#scene_quiz", {duration: 0.01, display: "none"})     


    .addLabel("start")
    .addPause("start")
    
    .from("#textbox_1_0_0, #background_tiles_1", {duration: .01, display:"none"})
    .from(["#textbox_1_0_0 > .inner *","#background_tiles_1 .tile_8","#background_tiles_1 .tile_6","#background_tiles_1 .tile_4","#background_tiles_1 .tile_12","#background_tiles_1 .tile_3","#background_tiles_1 .tile_11","#background_tiles_1 .tile_2","#background_tiles_1 .tile_10","#background_tiles_1 .tile_7","#background_tiles_1 .tile_5","#background_tiles_1 .tile_1","#background_tiles_1 .tile_9"], {duration: 1, stagger:{each:.1,from:"start"}, x:-1940, opacity:0, ease:"circ.inOut"})
    .from("#background_tiles_1 .intel_badge", {duration: .75, scale:1.2, opacity:0, ease:"back.out(1)"}, ">-.25")

        // note: this first one is a fromTo with a 'z' to fix a dumb visibility bug in Chrome -Gwen June 2019
        .fromTo("#next_arrow",
            {scale:.9, opacity:0, display:"none", z: 0},
            {scale:1, opacity:1, display:"block", z: 1, duration: 0.25})

        .addLabel("section_1")
        .call(sectionCounter, [1], "+=0.01")

        .addPause("+=0", recordUserTimeLocation)             
        .to("#next_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_0_1", {duration: .01, display:"none"})
    .to("#textbox_1_0_0 > .inner *", {duration: .75, stagger:{each:.1,from:"end"}, y:1080, opacity:0, ease:"circ.inOut"}, "<")
    .from("#textbox_1_0_1 > .inner *", {duration: 1, stagger:{each:.1,from:"end"}, y:-1080, opacity:0, ease:"circ.out"})
    .to("#textbox_1_0_0", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .from("#back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"}, "<")
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_0_2, #background_tiles_2", {duration: .01, display:"none"})
    .to(["#textbox_1_0_1 > .inner *","#background_tiles_1 .intel_badge","#background_tiles_1 .tile_8","#background_tiles_1 .tile_6","#background_tiles_1 .tile_4","#background_tiles_1 .tile_12","#background_tiles_1 .tile_3","#background_tiles_1 .tile_11","#background_tiles_1 .tile_2","#background_tiles_1 .tile_10","#background_tiles_1 .tile_7","#background_tiles_1 .tile_5","#background_tiles_1 .tile_1","#background_tiles_1 .tile_9"], {duration: .75, stagger:{each:.1,from:"start"}, x:1940, opacity:0, ease:"circ.inOut"}, "<")

    .from(["#textbox_1_0_2 > .inner *","#background_tiles_2 .tile_4","#background_tiles_2 .tile_1","#background_tiles_2 .tile_5","#background_tiles_2 .tile_2","#background_tiles_2 .tile_3","#background_tiles_2 .tile_6"], {duration: 1, stagger:{each:.1}, x:1940, ease:"circ.inOut"}, ">-.25")
    .from("#background_tiles_2 .photo", {duration: .75, scale:1.2, opacity:0, ease:"back.out(1)"}, ">-.25")
    .to("#textbox_1_0_1,#background_tiles_1", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_0_3", {duration: .01, display:"none"})
    .to("#textbox_1_0_2 > .inner *", {duration: .75, stagger:{each:.1,from:"start"}, y:-1080, opacity:0, ease:"circ.inOut"}, "<")
    .from("#textbox_1_0_3 .top_text, #textbox_1_0_3 .chart", {duration: 1, stagger:{each:.1,from:"start"}, y:1080, opacity:0, ease:"circ.out"})
    .to("#textbox_1_0_2", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_0_4", {duration: .01, display:"none"})
    .to("#textbox_1_0_3 .top_text, #textbox_1_0_3 .chart", {duration: .75, stagger:{each:.1,from:"start"}, y:-1080, opacity:0, ease:"circ.inOut"}, "<")
    .from("#textbox_1_0_4 > .inner *", {duration: 1, y:1080, opacity:0, ease:"circ.out"})
    .to("#textbox_1_0_3", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_0_5, #background_tiles_3", {duration: .01, display:"none"})
    .to(["#textbox_1_0_4 > .inner *","#background_tiles_2 .photo","#background_tiles_2 .tile_4","#background_tiles_2 .tile_1","#background_tiles_2 .tile_5","#background_tiles_2 .tile_2","#background_tiles_2 .tile_3","#background_tiles_2 .tile_6"], {duration: .75, stagger:{each:.1}, x:-1940, ease:"circ.inOut"})

    .from(["#textbox_1_0_5 > .inner *","#background_tiles_3 .tile_3","#background_tiles_3 .tile_6","#background_tiles_3 .tile_2","#background_tiles_3 .tile_5","#background_tiles_3 .tile_1","#background_tiles_3 .tile_4"], {duration: 1, stagger:{each:.1}, x:-1940, ease:"circ.inOut"}, ">-.25")
    .from("#background_tiles_3 .photo", {duration: .75, scale:1.2, opacity:0, ease:"back.out(1)"}, ">-.25")
    .to("#textbox_1_0_4, #background_tiles_2", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_0_6, #background_tiles_4", {duration: .01, display:"none"})
    .to(["#textbox_1_0_5 > .inner *","#background_tiles_3 .photo","#background_tiles_3 .tile_3","#background_tiles_3 .tile_6","#background_tiles_3 .tile_2","#background_tiles_3 .tile_5","#background_tiles_3 .tile_1","#background_tiles_3 .tile_4"], {duration: 1, stagger:{each:.1}, x:1940, ease:"circ.inOut"})
    
    .from("#textbox_1_0_6 .text *", {duration: 1, y:100, stagger:.15, opacity:0, ease:"circ.out"})
    .from("#textbox_1_0_6 .icon", {duration: 1, scale:1.2, opacity:0, ease:"back.out(1.5)"}, ">-.5")
    .from(["#background_tiles_4 .tile_4","#background_tiles_4 .tile_5","#background_tiles_4 .tile_3","#background_tiles_4 .tile_6","#background_tiles_4 .tile_2","#background_tiles_4 .tile_7","#background_tiles_4 .tile_1"], {duration: 1, stagger:{each:.1}, x:gsap.utils.wrap([-1940,1940]), ease:"circ.inOut"}, "<-.75")
    .to("#textbox_1_0_5, #background_tiles_3", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_0_7", {duration: .01, display:"none"})
    .to("#textbox_1_0_6 .text *, #textbox_1_0_6 .icon", {duration: .75, y:-540, stagger:.1, opacity:0, ease:"circ.inOut"}, "<")  

    .from("#textbox_1_0_7 .text *", {duration: 1, y:100, stagger:.15, opacity:0, ease:"circ.out"})
    .from("#textbox_1_0_7 .icon", {duration: 1.2, scale:1.2, opacity:0, ease:"back.out(1.2)"}, ">-.5")
    .to("#textbox_1_0_6", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_0_9", {duration: .01, display:"none"})
    .to("#textbox_1_0_7 .text *, #textbox_1_0_7 .icon", {duration: .75, y:-540, stagger:.1, opacity:0, ease:"circ.inOut"}, "<")    

    .from("#textbox_1_0_9 .text *", {duration: 1, y:100, stagger:.15, opacity:0, ease:"circ.out"})
    .from("#textbox_1_0_9 .icon", {duration: 1.2, scale:1.2, opacity:0, ease:"back.out(1.2)"}, ">-.5")
    //.to("#textbox_1_0_9", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_1_0", {duration: .01, display:"none"})
    .to("#textbox_1_0_9 .text *, #textbox_1_0_9 .icon", {duration: .75, y:-540, stagger:.1, opacity:0, ease:"circ.inOut"}, "<") 
    .to(["#background_tiles_4 .tile_4","#background_tiles_4 .tile_5","#background_tiles_4 .tile_3","#background_tiles_4 .tile_6","#background_tiles_4 .tile_2","#background_tiles_4 .tile_7","#background_tiles_4 .tile_1"], {duration: .75, stagger:{each:.1, from:"end"}, x:gsap.utils.wrap([-1940,1940]), ease:"circ.inOut"}, "<+.25")
    
    .from("#textbox_1_1_0 .top_text > *", {duration: 1, y:100, stagger:.15, opacity:0, ease:"circ.out"})
    .from("#textbox_1_1_0 .text .icon", {duration: 1.2, scale:1.2, opacity:0, ease:"back.out(1.2)"}, ">-.75")
    .from("#textbox_1_1_0 .chart tr", {duration: 1, y:100, stagger:.1, opacity:0, ease:"circ.out"}, ">-1")
    .to("#textbox_1_0_9", {duration: .01, display:"none"}, ">-.01")

    .call(flashingText, null, "+=0.1")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_1_1, #background_tiles_5", {duration: .01, display:"none"})
    .to(["#textbox_1_1_0 .chart","#textbox_1_1_0 .text .icon","#textbox_1_1_0 .top_text *"], {duration: 1, stagger:{each:.1}, x:1940, ease:"circ.inOut"}, "<")
    
    .from(["#textbox_1_1_1 > .inner *","#background_tiles_5 .tile_4","#background_tiles_5 .tile_1","#background_tiles_5 .tile_5","#background_tiles_5 .tile_2","#background_tiles_5 .tile_3","#background_tiles_5 .tile_6"], {duration: 1, stagger:{each:.1}, x:1940, ease:"circ.inOut"}, ">-.25")
    .from("#background_tiles_5 .photo", {duration: .75, scale:1.2, opacity:0, ease:"back.out(1)"}, ">-.25")
    .to("#textbox_1_1_0, #background_tiles_4", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_1_2", {duration: .01, display:"none"})
    .to("#textbox_1_1_1 > .inner *", {duration: .75, stagger:{each:.1,from:"start"}, y:-1080, opacity:0, ease:"circ.inOut"}, "<")
    .from("#textbox_1_1_2 .top_text, #textbox_1_1_2 .chart", {duration: 1, stagger:{each:.1,from:"start"}, y:1080, opacity:0, ease:"circ.out"})
    .to("#textbox_1_1_1", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_1_3", {duration: .01, display:"none"})
    .to("#textbox_1_1_2 .top_text, #textbox_1_1_2 .chart", {duration: .75, stagger:{each:.1,from:"start"}, y:-1080, opacity:0, ease:"circ.inOut"}, "<")
    .from("#textbox_1_1_3 .top_text, #textbox_1_1_3 .chart", {duration: 1, stagger:{each:.1,from:"start"}, y:1080, opacity:0, ease:"circ.out"})
    .to("#textbox_1_1_2", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_1_4", {duration: .01, display:"none"})
    .to("#textbox_1_1_3 .top_text, #textbox_1_1_3 .chart", {duration: .75, stagger:{each:.1,from:"start"}, y:-1080, opacity:0, ease:"circ.inOut"}, "<")
    .from("#textbox_1_1_4 .top_text, #textbox_1_1_4 .chart", {duration: 1, stagger:{each:.1,from:"start"}, y:1080, opacity:0, ease:"circ.out"})
    .to("#textbox_1_1_3", {duration: .01, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1,  opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation) 
        .to("#scene_quiz", {duration: 0.01, display: "block"}, "+=0.01")
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_quiz, #background_tiles_quiz", {duration: .01, display:"none"})
    .to(["#textbox_1_1_4 .top_text, #textbox_1_1_4 .chart","#background_tiles_5 .photo","#background_tiles_5 .tile_4","#background_tiles_5 .tile_1","#background_tiles_5 .tile_5","#background_tiles_5 .tile_2","#background_tiles_5 .tile_3","#background_tiles_5 .tile_6"], {duration: .75, stagger:{each:.1}, x:-1940, ease:"circ.inOut"})


// QUIZ ANIMATION - START ------------------------------------------------------------------------------>
    
    .from(["#textbox_quiz > .inner > *","#background_tiles_quiz .tile_8","#background_tiles_quiz .tile_6","#background_tiles_quiz .tile_4","#background_tiles_quiz .tile_12","#background_tiles_quiz .tile_3","#background_tiles_quiz .tile_11","#background_tiles_quiz .tile_2","#background_tiles_quiz .tile_10","#background_tiles_quiz .tile_7","#background_tiles_quiz .tile_5","#background_tiles_quiz .tile_1","#background_tiles_quiz .tile_9"], {duration: 1, stagger:{each:.1,from:"start"}, x:-1940, opacity:0, ease:"circ.inOut"}, ">-.25")
    .from("#background_tiles_quiz .intel_badge", {duration: .75, scale:1.2, opacity:0, ease:"back.out(1)"}, ">-.25")
    .to("#textbox_1_1_4, #background_tiles_5", {duration: .01, display:"none"}, ">-.01")

            .addLabel("quiz")
            .call(sectionCounter, ["quiz"], "+=0.01")

    .to("#back_arrow", {duration: 0.25, scale:1, opacity: 1, display:"block"}) // note: only show back arrow because it's the end of the course

	
// QUIZ ANIMATION - END ------------------------------------------------------------------------------>


// OTHER TIMELINE CONTROLS ------------------------------------------------------------------------------>	

var masterTimescale = 1;

// Make course play forward when user clicks the next arrow
$("#next_arrow").click(function() {
    if (!$("#next_arrow").hasClass("unclickable")) {
        tl.timeScale(masterTimescale).play();
    }
});

// Make course reverse when user clicks the back arrow
$("#back_arrow").click(function() {
    
    if (!$("#back_arrow").hasClass("unclickable")) {
        if (SliderTurnOn == true) {
            tl.timeScale(masterTimescale).reverse();
        } else {
           tl.timeScale(2).reverse();
        }
    }

});

// Advance course when instruction 'X' is clicked, but don't change timeline direction
$(".instructions_close").click(function() {
    tl.resume();
});


// ARROW HOVERS ------------------------------------------------------------------------------>	
// are now done via CSS


// TIMELINE UPDATE FUNCTIONS ------------------------------------------------------------------------------>

var $nav_tracker_inner = $("#nav_tracker_inner");

function tlUpdate() {
    
    // update course progress bar
    $nav_tracker_inner.css("height",  (tl.progress() * 100) + "%");
    
    if (SliderTurnOn == true) {
        updateSlider();
    }

}


// MISC FUNCTIONS  ------------------------------------------------------------------------------>
if ( SliderTurnOn == true && seekTime != false  ) {
	tl.seek(seekTime);
	updateSlider();
	tl.pause();
}
