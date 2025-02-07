/* ------------------------------------------------------
    TIMELINE CONTROLS
------------------------------------------------------ */

var masterTimescale = 1;

// Make course play forward when user clicks the next arrow
$("#next_arrow").click(function() {
    if (!$("#next_arrow").hasClass("unclickable")) {
        toggleNav(true);
        tl.timeScale(masterTimescale).play();
    }
});

// Make course reverse when user clicks the back arrow
$("#back_arrow").click(function() {
    if (!$("#back_arrow").hasClass("unclickable")) {
        toggleNav(true);
        if (SliderTurnOn == true) {
            tl.timeScale(masterTimescale).reverse();
        } else {
           tl.timeScale(2).reverse();
        }
    }
});

// Always advance course when instruction 'X' is clicked
$(".instructions_close").click(function() {
    tl.play();
});



// This function is called at the start of all click sections to determine whether or not the user has completed that specific section. If not, the next arrow is grayed out.
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

// Use this function to disable the back arrow at the start of a course
function disableBackArrow() {
    if (tl.reversed()) {
        $("#back_arrow").removeClass("unclickable");
    } else {
        $("#back_arrow").addClass("unclickable");
    }
}

// Use this function to enable the back arrow at the start of a course
function enableBackArrow() {
    if (tl.reversed()) {
        $("#back_arrow").addClass("unclickable");
    } else {
        $("#back_arrow").removeClass("unclickable");
    }
}

// Use this function to disable the next arrow at the end of a course
function disableNextArrow() {
    if (tl.reversed()) {
        $("#next_arrow").removeClass("unclickable");
    } else {
        $("#next_arrow").addClass("unclickable");
    }
}

// Use these functions to disable or enable both arrows
function disableBothArrows() {
    $(".nav_arrow_style").addClass("unclickable");
}

function enableBothArrows() {
    $(".nav_arrow_style").removeClass("unclickable");
}


/* ------------------------------------------------------
    SCROLLING FUNCTIONS
------------------------------------------------------ */

var main_wrapper_el = document.getElementById("main_wrapper");

/* Can call allowScroll with the following (optional) parameters:
|   -- allow: a true/false boolean for whether to allow or disable scroll
|   -- timeline: any gsap timeline variable as a reference to what timeline you want to check for direction
|       -- will default to main tl
|       -- you can pass "override" as a string to timeline argument to
           not check any timeline and instead force enable/disable scroll
    -- scrollUp: a true/false boolean for whether to scroll the page back to the top.
        -- defaults to true so doesn't have to be declared in every timeline call.
*/
function allowScroll(allow, timeline, scrollUp = true) {

    const { viewport } = scrollInstance.elements();
    const { scrollTop } = viewport; // get scroll offset
    // TODO set scroll duration based on scrollY compared to window height

    if (timeline == "override") {
        //console.log("Allow scroll:", allow, "Timeline or override?", "override", "Scrollup:", scrollUp);
        if (allow) {
            if (!scrollUp || scrollTop == 0) {
                scrollInstance.options({overflow:{y:"scroll"}});
            } else {
                gsap.to(viewport, {duration: 0.25, scrollTo: 0, onComplete: function() {
                    scrollInstance.options({overflow:{y:"scroll"}});
                }});
            }
        } else {
            scrollInstance.options({overflow:{y:"hidden"}});
        }
        return
    } else if (timeline) {
        var tlReference = timeline;
    } else {
        //console.log("use default tl as ref");
        var tlReference = tl;
    }

    //console.log("Allow scroll:", (tlReference.reversed() ? !allow : allow), "Timeline or override?", tlReference, "Scrollup:", scrollUp);

    if (tlReference.reversed()) {
        if (allow) { // tl moving backwards and disable scroll
            if (!scrollUp || scrollTop == 0) {
                scrollInstance.options({overflow:{y:"hidden"}});
            } else {
                gsap.to(viewport, {duration: 0.25, scrollTo: 0, onComplete: function() {
                    scrollInstance.options({overflow:{y:"hidden"}});
                }});
            }
        } else { // tl moving backwards and allow scroll
            scrollInstance.options({overflow:{y:"scroll"}});
        }
    } else {
        if (allow) { // tl moving forward and allow scroll
            scrollInstance.options({overflow:{y:"scroll"}});
        } else { // tl moving forward and disable scroll
            if (!scrollUp || scrollTop == 0) {
                scrollInstance.options({overflow:{y:"hidden"}});
            } else {
                gsap.to(viewport, {duration: 0.25, scrollTo: 0, onComplete: function() {
                    scrollInstance.options({overflow:{y:"hidden"}});
                }});
            }
        }
    }
}


var $pageArray = $(".page");
var activePage = "";

// set the currently active page. Note the activePage variable is currently unused. 
function setActivePage() {
    $pageArray.each(function(i) {
        if ($(this).css('display') != "none" && $(this).css('visibility') != "hidden") {
            activePage = "#" + $(this).attr('id');
            //console.log("current active page is ", activePage);
        }
    });
}

// Catch-all function to run code every time the course pauses.
function pauseFunc() {
    recordUserTimeLocation();
    //setActivePage();
}




/* ------------------------------------------------------
    EXTRA TIMELINE STUFF
------------------------------------------------------ */





/* ------------------------------------------------------
    ALL ANIMATION SCENES TIMELINE
------------------------------------------------------ */

var tl = gsap.timeline({onUpdate: tlUpdate, paused: true});
    tl

        .to("#scene_2_1, #scene_3_1, #scene_4_1, #scene_quiz", {duration: 0.01, display: "none"})   

        .addLabel("start")
        .call(allowScroll, [false], "+=.01")
        .call(disableBackArrow, null, "+=.01") // don't delete

    .from("#wrapper_1_1", {duration: 0.01, opacity:0, display:"none"})
    .fromTo("#wrapper_1_1 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"})
	.to("#wrapper_1_1 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .from("#wrapper_1_1 .img_wrapper img", {duration:1, stagger:.25, transformOrigin:"center center", rotationY:gsap.utils.wrap([0,-540,540,-540]), scale:gsap.utils.wrap([1,0,0,0]), xPercent:gsap.utils.wrap([-50,0,0,0]), yPercent:gsap.utils.wrap([0,-25,25,25]), opacity:0, ease:"back.out", display:"none"}, ">-.35")
    .from("#wrapper_1_1 .content > *", {duration: 0.75, stagger:.15, x:960, opacity:0, ease:"back.out"}, "<+.5")

        // Special code for the start of the course. Don't delete any of this.
        .addLabel("section_1")
        .call(sectionCounter, [1], "+=0.01")
        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .call(allowScroll, [false], "+=.01")
        .call(enableBackArrow, null, "+=.01")
        .from("#back_arrow", {duration: 0.25, opacity:0})

    .to("#wrapper_1_1 .img_wrapper > div, #wrapper_1_1 .img_wrapper > img", {duration: 0.75, stagger:{each:.15}, opacity:0, x:-960, rotation:gsap.utils.wrap([0,0,0,-360,-360,-360]), ease:"circ.inOut"})
    .to("#wrapper_1_1 .content > *", {duration: 0.75, stagger:{each:.15, from:"end"}, opacity:0, x:960, ease:"circ.inOut"}, "<")
    .to("#wrapper_1_1", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .from("#wrapper_1_2", {duration: 0.01, opacity:0, display:"none"})
    .fromTo("#wrapper_1_2 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"})
	.to("#wrapper_1_2 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .from("#wrapper_1_2 .img_wrapper img", {duration:1, stagger:.25, transformOrigin:"center center", rotationY:gsap.utils.wrap([0,-540,540,-540]), scale:gsap.utils.wrap([1,0,0,0]), xPercent:gsap.utils.wrap([50,0,0,0]), yPercent:gsap.utils.wrap([0,-25,25,25]), opacity:0, ease:"back.out", display:"none"}, ">-.35")
    .from("#wrapper_1_2 .content > *", {duration: 0.75, stagger:.15, x:-960, opacity:0, ease:"back.out"}, "<+.5")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_2_1", {duration: 0.01, display: "block"}, "+=0.01")
        .call(allowScroll, [false], "+=.01")

        .addLabel("section_2")
        .call(sectionCounter, [2], "+=0.01")

    .to("#wrapper_1_2 .img_wrapper > div, #wrapper_1_2 .img_wrapper > img", {duration: 0.75, stagger:{each:.15}, opacity:0, x:960, rotation:gsap.utils.wrap([0,0,0,360,360,360]), ease:"circ.inOut"})
    .to("#wrapper_1_2 .content > *", {duration: 0.75, stagger:{each:.15, from:"end"}, opacity:0, x:-960, ease:"circ.inOut"}, "<")
    .to("#wrapper_1_2", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    // SECTION 2 ANIMATION - START ------------------------------------------------------>

    .from("#wrapper_2_1", {duration: 0.01, opacity:0, display:"none"})
    .fromTo("#wrapper_2_1 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"})
	.to("#wrapper_2_1 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .from("#wrapper_2_1 .top_text", {duration: 0.75, yPercent:25, opacity:0}, ">-.25")
    .from(["#wrapper_2_1 .c3","#wrapper_2_1 .c2","#wrapper_2_1 .c1","#wrapper_2_1 .c4","#wrapper_2_1 .c5","#wrapper_2_1 .c6"], {duration: 0.75,  stagger:.15, opacity:0, rotation:gsap.utils.wrap([-1080,-1080,-1080,1080,1080,1080]), x:gsap.utils.wrap(["-=960","-=960","-=960",960,960,960]), ease:"circ.out"}, ">-.25")

    .from("#wrapper_2_1 .img_wrapper_middle .img_1", {duration: 0.75, scale:1.2, rotationX:-360, opacity:0, ease:"circ.out"})

    .from("#wrapper_2_1 .bottom_text .img_cont", {duration: 0.75, yPercent:50, opacity:0, ease:"circ.out"}, ">-.25")
    .from("#wrapper_2_1 .bottom_text .inner_text > *", {duration: 0.75, stagger:.15, xPercent:50, opacity:0, ease:"circ.out"}, ">-.5")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_1_1", {duration: 0.01, display: "none"})	 
        .call(allowScroll, [false], "+=.01")
    
    .to("#wrapper_2_1", {duration: 0.5, opacity:0, display:"none"})
    .from("#wrapper_2_2", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .fromTo("#wrapper_2_2 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"})
	.to("#wrapper_2_2 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .add("label1", "-=.25")

    .from("#wrapper_2_2 .top_cont .bg", {duration: 0.75, scale:0, transformOrigin:"bottom left", opacity:0, ease:"back.out"},"label1")
    .from("#wrapper_2_2 .top_cont .text .content > *", {duration: 0.75, stagger:.15, xPercent:50, opacity:0, ease:"back.out"}, ">-.25")

    .from("#wrapper_2_2 .top_cont .top_line", {duration: 0.5, scaleX:0, transformOrigin:"left", opacity:0},"label1+=.5")
    .from("#wrapper_2_2 .top_cont .side_line", {duration: 0.5, scaleY:0, transformOrigin:"top", opacity:0},">")
    .from("#wrapper_2_2 .bottom_cont .text", {duration: 0.75, scaleX:0, transformOrigin:"center", opacity:0},">")
    .from("#wrapper_2_2 .bottom_cont .text > *", {duration: 0.75, stagger:0, xPercent:gsap.utils.wrap([-25,25]), opacity:0},">")

    .add("coffee1", "+=0")

    .from("#wrapper_2_2 .bottom_cont .line", {duration: 0.5, scaleY:0, transformOrigin:"top", opacity:0},"coffee1")
    .from("#wrapper_2_2 .bottom_cont .bg, #wrapper_2_2 .bottom_cont .box", {duration: 0.75, scale:0, transformOrigin:"top right", opacity:0, ease:"back.out"},">-.25")
    .from("#wrapper_2_2 .bottom_cont .paint", {duration: 0.75, scale:1.2, opacity:0, ease:"back.out"},">-.25")

    .to("#wrapper_2_2 .coffee_1", {duration: 0.5, yPercent:-22, xPercent:16}, "coffee1")
    .to("#wrapper_2_2 .coffee_1", {duration: 0.25, rotation:195}, ">")
    .to("#wrapper_2_2 .coffee_2", {duration: 0.25, rotation:-15}, "<")

    .to("#pause", {duration:.25})
    .to("#wrapper_2_2 .coffee_1", {duration: 0.25, rotation:180}, ">")
    .to("#wrapper_2_2 .coffee_2", {duration: 0.25, rotation:0}, "<")
    .to("#wrapper_2_2 .coffee_1", {duration: 0.5, xPercent:0}, ">")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_2_2", {duration: 0.5, opacity:0, display:"none"})
    .from("#wrapper_2_3", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .add("label2", "+=0")

    .fromTo("#wrapper_2_3 .paint_1 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"}, "label2")
	.to("#wrapper_2_3 .paint_1 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .fromTo("#wrapper_2_3 .paint_2 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"}, "+=.5")
	.to("#wrapper_2_3 .paint_2 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .from("#wrapper_2_3 .chart_wrapper h1", {duration: 0.75, stagger:.5, yPercent:25, opacity:0, ease:"sine.out"}, ">-.25")
    .from("#wrapper_2_3 .chart_wrapper .touchandswipe", {duration: 0.75, stagger:.5, yPercent:25, opacity:0, ease:"sine.out"}, "<")
    .from("#wrapper_2_3 .chart_wrapper .chart", {duration: 1,  stagger:.5, yPercent:25, scale:0, opacity:0, ease:"back.out(1)"}, "<+.75")
    .from("#wrapper_2_3 .chart_wrapper .chart .dot", {duration: .5, stagger:.15, scale:1.2, opacity:0, ease:"back.out"}, "<+1.25")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_3_1", {duration: 0.01, display: "block"}, "+=0.01")	  
        .call(allowScroll, [false], "+=.01")

        .addLabel("section_3")
        .call(sectionCounter, [3], "+=0.01")

    .to("#wrapper_2_3", {duration: 0.5, opacity:0, display:"none"})

    // SECTION 3 ANIMATION - START ------------------------------------------------------>

    .from("#wrapper_3_1", {duration: 0.01, opacity:0, display:"none"})
    .fromTo("#wrapper_3_1 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"})
	.to("#wrapper_3_1 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .from("#wrapper_3_1 .top_text", {duration: 0.75, yPercent:25, opacity:0}, ">-.25")
    .from(["#wrapper_3_1 .c3","#wrapper_3_1 .c2","#wrapper_3_1 .c1","#wrapper_3_1 .c4","#wrapper_3_1 .c5"], {duration: 0.75,  stagger:.15, opacity:0, rotation:gsap.utils.wrap([-1080,-1080,-1080,1080,1080]), x:gsap.utils.wrap(["-=960","-=960","-=960",960,960]), ease:"circ.out"}, ">-.25")

    .from("#wrapper_3_1 .img_wrapper_middle .img_1", {duration: 0.75, scale:1.2, rotationX:-360, opacity:0, ease:"circ.out"})

    .from("#wrapper_3_1 .bottom_text .img_cont", {duration: 0.75, yPercent:50, opacity:0, ease:"circ.out"}, ">-.25")
    .from("#wrapper_3_1 .bottom_text .inner_text > *", {duration: 0.75, stagger:.15, xPercent:50, opacity:0, ease:"circ.out"}, ">-.5")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_2_1", {duration: 0.01, display: "none"})	     
        .call(allowScroll, [false], "+=.01")
    
    .to("#wrapper_3_1", {duration: 0.5, opacity:0, display:"none"})
    .from("#wrapper_3_2", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .fromTo("#wrapper_3_2 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"})
	.to("#wrapper_3_2 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .add("label3", "-=.25")

    .from("#wrapper_3_2 .tc1 .bg", {duration: 0.75, scale:0, transformOrigin:"bottom right", opacity:0, ease:"back.out"},"label3")
    .from("#wrapper_3_2 .tc1 .text .content > *", {duration: 0.75, stagger:.15, xPercent:-50, opacity:0, ease:"back.out"}, ">-.25")

    .from("#wrapper_3_2 .tc1 .line", {duration: 0.75, scaleY:0, transformOrigin:"top", opacity:0},"label3+=.75")
    .from("#wrapper_3_2 .tc2 .top_line", {duration: 0.5, scaleX:0, transformOrigin:"right", opacity:0},">")
    .from("#wrapper_3_2 .tc2 .bg", {duration: 0.75, scale:0, transformOrigin:"top right", opacity:0, ease:"back.out"}, ">")
    .from("#wrapper_3_2 .tc2 .dog", {duration: 0.75, scale:0, transformOrigin:"top left", opacity:0, ease:"back.out"}, ">-.25")
    .from("#wrapper_3_2 .tc2 .paint", {duration: 0.75, scale:1.2, opacity:0, ease:"back.out"}, ">-.25")
    .from("#wrapper_3_2 .tc2 .text .content > *", {duration: 0.75, stagger:.15, xPercent:50, opacity:0, ease:"back.out"}, ">-.25")
    .from("#wrapper_3_2 .tc2 .bottom_line", {duration: 0.5, scaleY:0, transformOrigin:"top", opacity:0}, "<")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_3_2", {duration: 0.5, opacity:0, display:"none"})
    .from("#wrapper_3_3", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .add("label4", "+=0")

    .fromTo("#wrapper_3_3 .paint_1 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"},"label4")
	.to("#wrapper_3_3 .paint_1 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .fromTo("#wrapper_3_3 .paint_2 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"},"label4+=.5")
	.to("#wrapper_3_3 .paint_2 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .from("#wrapper_3_3 .chart_wrapper h1", {duration: 0.75, stagger:.5, yPercent:25, opacity:0, ease:"sine.out"}, ">-.25")
    .from("#wrapper_3_3 .chart_wrapper .touchandswipe", {duration: 0.75, stagger:.5, yPercent:25, opacity:0, ease:"sine.out"}, "<")
    .from("#wrapper_3_3 .chart_wrapper .chart", {duration: 1,  stagger:.5, yPercent:25, scale:0, opacity:0, ease:"back.out(1)"}, "<+.75")
    .from("#wrapper_3_3 .chart_wrapper .chart .dot", {duration: .5, stagger:.15, scale:1.2, opacity:0, ease:"back.out"}, "<+1.25")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_4_1", {duration: 0.01, display: "block"}, "+=0.01")         
        .call(allowScroll, [false], "+=.01")

        .addLabel("section_4")
        .call(sectionCounter, [4], "+=0.01")

    .to("#wrapper_3_3", {duration: 0.5, opacity:0, display:"none"})

    // SECTION 4 ANIMATION - START ------------------------------------------------------>

    .from("#wrapper_4_1", {duration: 0.01, opacity:0, display:"none"})
    .fromTo("#wrapper_4_1 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"})
	.to("#wrapper_4_1 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .from("#wrapper_4_1 .top_text", {duration: 0.75, yPercent:25, opacity:0}, ">-.25")
    .from("#wrapper_4_1 .img_wrapper_middle .img_1", {duration: 0.75, scale:1.2, rotationX:-360, opacity:0, ease:"circ.out"})

    .from("#wrapper_4_1 .bottom_text .img_cont", {duration: 0.75, yPercent:50, opacity:0, ease:"circ.out"}, ">-.25")
    .from("#wrapper_4_1 .bottom_text .inner_text > *", {duration: 0.75, stagger:.15, xPercent:50, opacity:0, ease:"circ.out"}, ">-.5")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_3_1", {duration: 0.01, display: "none"})	    
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_4_1", {duration: 0.5, opacity:0, display:"none"})
    .from("#wrapper_4_2", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .fromTo("#wrapper_4_2 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"})
	.to("#wrapper_4_2 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .add("label5", "-=.25")

    .from("#wrapper_4_2 .tc1 .bg", {duration: 0.75, scale:0, transformOrigin:"bottom left", opacity:0, ease:"back.out"},"label5")
    .from("#wrapper_4_2 .tc1 .text .content > *", {duration: 0.75, stagger:.15, xPercent:50, opacity:0, ease:"back.out"}, ">-.25")

    .from("#wrapper_4_2 .tc1 .bottom_line", {duration: 0.75, scaleX:0, transformOrigin:"left", opacity:0},"label5+=.75")
    .from("#wrapper_4_2 .tc2 .top_line", {duration: 0.5, scaleY:0, transformOrigin:"top", opacity:0},">")
    .from("#wrapper_4_2 .tc2 .bg", {duration: 0.75, scale:0, transformOrigin:"top left", opacity:0, ease:"back.out"}, ">")
    .from("#wrapper_4_2 .tc2 .paint", {duration: 0.75, scale:1.2, opacity:0, ease:"back.out"}, ">-.25")
    .from("#wrapper_4_2 .tc2 .text .content > *", {duration: 0.75, stagger:.15, xPercent:-50, opacity:0, ease:"back.out"}, ">-.25")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_4_2", {duration: 0.5, opacity:0, display:"none"})
    .from("#wrapper_4_3", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .add("label6", "+=0")

    .fromTo("#wrapper_4_3 .paint_1 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"},"label6")
	.to("#wrapper_4_3 .paint_1 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .fromTo("#wrapper_4_3 .paint_2 .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"},"label6+=.5")
	.to("#wrapper_4_3 .paint_2 .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .from("#wrapper_4_3 .chart_wrapper h1", {duration: 0.75, stagger:.5, yPercent:25, opacity:0, ease:"sine.out"}, ">-.25")
    .from("#wrapper_4_3 .chart_wrapper .touchandswipe", {duration: 0.75, stagger:.5, yPercent:25, opacity:0, ease:"sine.out"}, "<")
    .from("#wrapper_4_3 .chart_wrapper .chart", {duration: 1,  stagger:.5, yPercent:25, scale:0, opacity:0, ease:"back.out(1)"}, "<+.75")
    .from("#wrapper_4_3 .chart_wrapper .chart .dot", {duration: .5, stagger:.15, scale:1.2, opacity:0, ease:"back.out"}, "<+1.25")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_quiz", {duration: 0.01, display: "block"}, "+=0.01")
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_4_3", {duration: 0.5, opacity:0, display:"none"})

    // SECTION QUIZ ANIMATION - START ------------------------------------------------------>

    .from("#wrapper_quiz", {duration: 0.01, opacity: 0, display:"none"})
    .fromTo("#wrapper_quiz .clipShape", {y:-1080, opacity:0}, {duration: 0.75, y:0, opacity:1, ease:"back.out"})
	.to("#wrapper_quiz .clipShape", {duration: 0.5, attr:{r:"100%"}}, ">-.1")

    .from("#wrapper_quiz .img_wrapper img", {duration:1, stagger:.25, transformOrigin:"center center", rotationY:gsap.utils.wrap([0,-540,540,-540]), scale:gsap.utils.wrap([1,0,0,0]), xPercent:gsap.utils.wrap([0,-50,50,0]), yPercent:gsap.utils.wrap([25,0,0,25]), opacity:0, ease:"back.out", display:"none"}, ">-.35")
    .from("#wrapper_quiz .bottom_text .inner > h1, #wrapper_quiz .bottom_text .inner > p", {duration: 0.75, stagger:.15, yPercent:50, opacity:0, ease:"back.out"}, "<+.5")

    .from("#quiz_box", {duration: 0.5, opacity: 0})

        // Special code for the very end of the course. Don't delete any of this.
        .to("#next_arrow", {duration: 0.25, opacity:0})
        .addLabel("quiz")
        .call(sectionCounter, ["quiz"], "+=0.01")
        .call(allowScroll, [true], "+=.01")
        .call(disableNextArrow, null, "+=.01")
        .addPause("+=.01", pauseFunc) // don't delete




/* ------------------------------------------------------
    TIMELINE UPDATE FUNCTIONS
------------------------------------------------------ */

var $nav_tracker_inner = $("#nav_tracker_inner");

function tlUpdate() {

    // update course progress bar
    $nav_tracker_inner.css("width",  (tl.progress() * 100) + "%");

    if (SliderTurnOn == true) {
        updateSlider();
    }

}


/* ------------------------------------------------------
    MISC FUNCTIONS
------------------------------------------------------ */
if ( SliderTurnOn == true && seekTime != false ) {
    tl.seek(seekTime);
    updateSlider();
    tl.pause();
    allowScroll(true); // TODO
}
