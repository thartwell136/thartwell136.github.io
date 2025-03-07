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



// ALL ANIMATION SCENES TIMELINE - START ------------------------------------------------------------------------------>

tl	

    .to("#scene_2_1, #scene_3_1, #scene_4_1, #scene_quiz", {duration: 0.01, display: "none"})     


    .addLabel("start")
    .addPause("start")

    .from("#textbox_1_0_0", {duration: 0.01, opacity:0, display:"none"})
    .from("#background_1_0", {duration: 0.75, opacity:0, ease:"sine.out", display:"none"}, "<")
    .from("#textbox_1_0_0 > .inner", {duration: 1, y:"20%", scale:.8, opacity:0, ease:"sine.out"}, ">-.25")

        // note: this first one is a fromTo with a 'z' to fix a dumb visibility bug in Chrome -Gwen June 2019
        .fromTo("#next_arrow",
            {scale:.9, opacity:0, display:"none", z: 0},
            {scale:1, opacity:1, display:"block", z: 1, duration: 0.25})

        .addLabel("section_1")
        .call(sectionCounter, [1], "+=0.01")

        .addPause("+=0", recordUserTimeLocation)             
        .to("#next_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_1_0_1", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_1_0_0 > .inner", {duration: 0.75, y:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")
    .from("#textbox_1_0_1 > .inner", {duration: 1, x:"-20%", scale:.8, opacity:0, ease:"sine.out"})
    .from("#textbox_1_0_1 .badge", {duration: 1.25, y:-1080, opacity:0, ease:"expo.out"}, ">-.5")

    .to("#textbox_1_0_0", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

        .to("#next_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .from("#back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"}, "<")
        .addPause("+=0", recordUserTimeLocation)      
        .to("#scene_2_1", {duration: 0.01, display: "block"}, "+=0.01")         
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})
            
            .addLabel("section_2")
            .call(sectionCounter, [2], "+=0.01")

// SECTION 2 ANIMATION - START ------------------------------------------------------------------------------>
    
    .from("#textbox_2_0_0", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_1_0_1 > .inner", {duration: 0.75, x:"20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#background_2_0", {duration: 0.75, opacity:0, ease:"sine.out", display:"none"})
    .from("#textbox_2_0_0 .top_cont", {duration: 1, y:"20%", scale:.8, opacity:0, ease:"sine.out"}, ">-.25")
    .from("#textbox_2_0_0 .bottom_cont .row", {duration: 1, x:1080, stagger:.15, opacity:0, ease:"sine.out"}, "<+.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)     
        .to("#scene_1_1", {duration: 0.01, display: "none"})	         
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_2_0_0 .bottom_cont", {duration: 1.25, x:"-20%", ease:"circ.inOut"})

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})
    
    .from("#textbox_2_0_1", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_2_0_0 .bottom_cont .row", {duration: .75, x:-1080, stagger:.15, opacity:0, ease:"sine.in"})
    .to("#textbox_2_0_0 .top_cont", {duration: .75, y:"20%", scale:.8, opacity:0, ease:"sine.out"}, ">-.5")

    .from("#textbox_2_0_1 > .inner", {duration: 1, x:"20%", scale:.8, opacity:0, ease:"sine.out"})
    .from("#textbox_2_0_1 .badge", {duration: 1.25, y:-1080, opacity:0, ease:"expo.out"}, ">-.5")
    .to("#textbox_2_0_0", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_2_0_2", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_2_0_1 > .inner", {duration: 0.75, x:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#textbox_2_0_2 > .inner", {duration: 1, y:"20%", scale:.8, opacity:0, ease:"sine.out"})
    .from("#textbox_2_0_2 .badge", {duration: 1.25, y:-540, opacity:0, ease:"expo.out"}, ">-.5")
    .to("#textbox_2_0_1", {duration: 0.01, opacity:0, display:"none"}, ">-.01")  

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_2_0_3", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_2_0_2 > .inner", {duration: 0.75, y:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#background_2_1", {duration: 0.75, opacity:0, ease:"sine.out", display:"none"})
    .from("#textbox_2_0_3 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"}, ">-.25")
    .from("#textbox_2_0_3 .button", {duration: 1.25, scale:0, rotation:-720, stagger:.15, opacity:0, ease:"back.out(1)"}, ">-.5")
    .to("#textbox_2_0_2", {duration: 0.01, opacity:0, display:"none"}, ">-.01")  

    .from("#instructions_2_1", {duration: 0.5, opacity:0, display:"none"})
    .from("#instructions_2_1 .instructions_wrapper_outer", {duration: 0.5, y: 50}, "-=.5")

    .to("#background_2_0", {duration: 0.01, opacity:0, display:"none"}, ">-.01") 

        .addPause("+=0", recordUserTimeLocation)    

    .call(function() {
        if (tl.reversed()) {
            $("#textbox_2_0_3 .button_cont").addClass("noClick");
        } else {
            $("#textbox_2_0_3 .button_cont.noClick").removeClass("noClick");
        }
    })
    .to("#instructions_2_1", {duration: 0.5, opacity:0, display:"none"})
    .call(nextArrowCheck, ["completedClickPopUpSection1"])

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1,  opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)     
        .to("#scene_3_1", {duration: 0.01, display: "block"}, "+=0.01")	         
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

            .addLabel("section_3")
            .call(sectionCounter, [3], "+=0.01")

// SECTION 3 ANIMATION - START ------------------------------------------------------------------------------>

    .from("#textbox_3_0_0", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_2_0_3 > .inner", {duration: .75, y:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")
    
    .from("#background_3_0", {duration: 0.75, opacity:0, ease:"sine.out", display:"none"})
    .from("#textbox_3_0_0 > .inner", {duration: 1, x:"20%", scale:.8, opacity:0, ease:"sine.out"})
    .from("#textbox_3_0_0 .badge_cont img", {duration: 1.25, y:-1080, stagger:{each:.25,from:"end"}, opacity:0, ease:"expo.out"}, ">-.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)     
        .to("#scene_2_1", {duration: 0.01, display: "none"})	         
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})
    
    .from("#textbox_3_0_1", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_3_0_0 > .inner", {duration: .75, x:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#textbox_3_0_1 > .inner", {duration: 1, y:"20%", scale:.8, opacity:0, ease:"sine.out"})
    .from("#textbox_3_0_1 .badge_cont img", {duration: 1.25, y:-540, stagger:{each:.25,from:"end"}, opacity:0, ease:"expo.out"}, ">-.5")
    .to("#textbox_3_0_0", {duration: 0.01, opacity:0, display:"none"}, ">-.01")  

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)             
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_3_0_2", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_3_0_1 > .inner", {duration: .75, y:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#background_3_1", {duration: 0.75, opacity:0, ease:"sine.out", display:"none"})
    .from("#textbox_3_0_2 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"}, ">-.25")
    .from("#textbox_3_0_2 .game", {duration: 1.25, x:1080, stagger:.15, opacity:0, ease:"sine.out"}, ">-.5")

    .to("#textbox_3_0_1, #background_3_0", {duration: 0.01, opacity:0, display:"none"}, ">-.01")  

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)             
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_3_0_3", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_3_0_2 > .inner", {duration: .75, x:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#textbox_3_0_3 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"})
    .from(["#textbox_3_0_3 .g3","#textbox_3_0_3 .g2","#textbox_3_0_3 .g1","#textbox_3_0_3 .g5","#textbox_3_0_3 .g4"], {duration: 1.25, x:-1080, stagger:.15, opacity:0, ease:"sine.out"}, ">-.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)             
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_3_0_4", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_3_0_3 > .inner", {duration: .75, x:"20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#background_3_2", {duration: 0.75, opacity:0, ease:"sine.out", display:"none"})
    .from("#textbox_3_0_4 > .inner", {duration: 1, x:"20%", scale:.8, opacity:0, ease:"sine.out"})
    .from("#textbox_3_0_4 .badge_cont img", {duration: 1.25, y:-1080, stagger:{each:.15,from:"end"}, opacity:0, ease:"expo.out"}, ">-.5")

    .to("#textbox_3_0_3, #background_3_1", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)             
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_3_0_5", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_3_0_4 > .inner", {duration: .75, x:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#background_3_3", {duration: 0.75, opacity:0, ease:"sine.out", display:"none"})
    .from("#textbox_3_0_5 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"}, ">-.25")
    .from("#textbox_3_0_5 .game", {duration: 1.25, x:1080, stagger:.15, opacity:0, ease:"sine.out"}, ">-.5")

    .to("#textbox_3_0_4", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1,  opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation) 
        .to("#scene_4_1", {duration: 0.01, display: "block"}, "+=0.01")         
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

            .addLabel("section_4")
            .call(sectionCounter, [4], "+=0.01")

// SECTION 4 ANIMATION - START ------------------------------------------------------------------------------>

    .from("#textbox_4_0_0", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_3_0_5 > .inner", {duration: .75, x:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .to("#background_3_3", {duration: 0.75, opacity:0, ease:"sine.in", display:"none"})

    .from("#textbox_4_0_0 > .inner", {duration: 1, y:"20%", scale:.8, opacity:0, ease:"sine.out"}, ">-.25")
    .from(["#textbox_4_0_0 .badge_cont .icon_2","#textbox_4_0_0 .badge_cont .icon_3","#textbox_4_0_0 .badge_cont .icon_1"], {duration: 1.25, y:-1080, stagger:.25, opacity:0, ease:"expo.out"}, ">-.5")

    .from("#background_4_0", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation) 
        .to("#scene_3_1", {duration: 0.01, display: "none"})	      
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .from("#textbox_4_0_1", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_4_0_0 > .inner", {duration: .75, y:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#textbox_4_0_1 > .inner", {duration: 1, x:"20%", scale:.8, opacity:0, ease:"sine.out"})
    .from("#textbox_4_0_1 .badge", {duration: 1.25, y:-1080, opacity:0, ease:"expo.out"}, ">-.5")

    .to("#textbox_4_0_0", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)             
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})
    
    .from("#textbox_4_0_2", {duration: 0.01, opacity:0, display:"none"})
    .to("#textbox_4_0_1 > .inner", {duration: .75, x:"-20%", scale:.8, opacity:0, ease:"sine.in"}, "<")

    .from("#textbox_4_0_2 .top_cont", {duration: 1, y:"20%", scale:.8, opacity:0, ease:"sine.out"})
    .from("#textbox_4_0_2 .badge", {duration: 1.25, y:-1080, opacity:0, ease:"expo.out"}, ">-.5")
    .from("#textbox_4_0_2 .bottom_cont .row", {duration: 1, x:1080, stagger:.15, opacity:0, ease:"sine.out"}, "<+.25")

    .to("#textbox_4_0_1", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1,  opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation) 
        .to("#scene_quiz", {duration: 0.01, display: "block"}, "+=0.01")
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})


// QUIZ ANIMATION - START ------------------------------------------------------------------------------>

    .to("#textbox_4_0_2 > .inner", {duration: .75, y:"-20%", scale:.8, opacity:0, ease:"sine.in"})

    .from("#background_quiz", {duration: 0.75, opacity:0, ease:"sine.out", display:"none"})
    .from("#textbox_quiz", {duration: 1, x:"20%", opacity:0, display:"none", ease:"sine.out"}, ">-.25")
    .from("#textbox_quiz .badge", {duration: 1.25, y:-1080, opacity:0, ease:"expo.out"}, ">-.5")

    .from("#quiz_box", {duration: 0.5, y:50, opacity:0})	


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
