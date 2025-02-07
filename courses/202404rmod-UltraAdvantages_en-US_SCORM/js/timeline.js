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

//CONINUOUS LOGO ANIMATION
var logoTime = 30;

//Add starting position to 100%
var logoTimeline = gsap.timeline({paused: true, repeat:-1});
    logoTimeline
    .to(("#wrapper_2_1 .img_3 .line_1 .bg"), {duration: logoTime, backgroundPosition:"0% 117%", ease:"none"})

//Subrtract starting position from 100%
var logoTimeline2 = gsap.timeline({paused: true, repeat:-1});
    logoTimeline2
    .to(("#wrapper_2_1 .img_3 .line_2 .bg"), {duration: logoTime, backgroundPosition:"0% -35%", ease:"none"})

var logoTimeline3 = gsap.timeline({paused: true, repeat:-1});
    logoTimeline3
    .to(("#wrapper_4_1 .img_3 .line_1 .bg"), {duration: logoTime, backgroundPosition:"0% -87%", ease:"none"})

var logoTimeline4 = gsap.timeline({paused: true, repeat:-1});
    logoTimeline4
    .to(("#wrapper_4_1 .img_3 .line_2 .bg"), {duration: logoTime, backgroundPosition:"0% 105%", ease:"none"})



//COUNTER FUNTIONALITY
$.fn.countTo = function (options) {
    // merge the default plugin settings with the custom options
    options = $.extend({}, $.fn.countTo.defaults, options || {});

    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;

    return $(this).each(function () {
        var _this = this,
            loopCount = 0,
            value = options.from,
            interval = setInterval(updateTimer, options.refreshInterval);

        function updateTimer() {
            value += increment;
            loopCount++;
            
            //Change decimal to comma for most languages other than english
            if (courseOptions.cultureCode == "en-US" || courseOptions.cultureCode == "en-GB" || courseOptions.cultureCode == "en-AU" || courseOptions.cultureCode == "ar-SA") {
                $(_this).html(value.toFixed(options.decimals));
            } else {
                $(_this).html(value.toFixed(options.decimals).replace(/\./g, ','));
            }

            if (typeof (options.onUpdate) == 'function') {
                options.onUpdate.call(_this, value);
            }

            if (loopCount >= loops) {
                clearInterval(interval);
                value = options.to;

                if (typeof (options.onComplete) == 'function') {
                    options.onComplete.call(_this, value);
                }
            }
        }
    });
};

$.fn.countTo.defaults = {
    from: 0,  // the number the element should start at
    to: 100,  // the number the element should end at
    speed: 400,  // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,  // the number of decimal places to show
    onUpdate: null,  // callback method for every time the element is updated,
    onComplete: null,  // callback method for when the element finishes updating
};

function countUp(target, score, duration, decimal) {
    if (score != 0) {
        $( target ).countTo({
            from: 0,
            to: score,
            speed: duration*1000, // convert to milliseconds
            refreshInterval: 20,
            decimals: decimal
        });   
    }
}
// countUp("#count_5_1", 40, 1.5, 0);

//CHANGE MOBILE ANIMATION
function changeMobile(defaultValue, mobilelValue) {
	if (windowWidth <= 1024) {
		return mobilelValue;
	} else {
		return defaultValue;
	}
}

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
    
    .fromTo("#wrapper_1_1 .image .img_wrapper", {rotationY:-90, transformPerspective:2000, transformOrigin:"right"}, {duration:1, rotationY:0})
    .from("#wrapper_1_1 .image .img_3", {duration: 1, opacity:0, scale:0, ease:"back.out(1.25)"}, ">-.5")
    .from("#wrapper_1_1 .text .content > *", {duration:1, y:-1080, stagger:{each:.15, from:"end"}, opacity:0, ease:"expo.out"}, "<+.25")
    .from("#wrapper_1_1 .image .squares", {duration: 1, stagger:.25, scale:0, transformOrigin:gsap.utils.wrap(["bottom center","bottom right","top left","top left","top left"]), ease:"elastic.out(1,0.5)"}, ">-.5")
    .from("#wrapper_1_1 .text .img_wrapper .squares", {duration: 1, stagger:.15, scale:0, transformOrigin:"top center", ease:"elastic.out(1,0.5)"}, "<+.5")

        // Special code for the start of the course. Don't delete any of this.
        .addLabel("section_1")
        .call(sectionCounter, [1], "+=0.01")
        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_2_1", {duration: 0.01, display: "block"}, "+=0.01")
        .call(allowScroll, [false], "+=.01")
        .call(enableBackArrow, null, "+=.01")
        .from("#back_arrow", {duration: 0.25, opacity:0})

        .addLabel("section_2")
        .call(sectionCounter, [2], "+=0.01")

    // SECTION 2 ANIMATION - START ------------------------------------------------------>

    .to("#wrapper_1_1", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_2_1", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .fromTo("#wrapper_2_1 .image .img_wrapper", {rotationX:-90, transformPerspective:2000, transformOrigin:"top"}, {duration:1, rotationX:0})
    .from("#wrapper_2_1 .image .img_5", {duration: 1, opacity:0, scale:0, ease:"back.out(1.25)"}, ">-.5")
    .from("#wrapper_2_1 .image .img_3 .line_1, #wrapper_2_1 .image .img_3 .line_2", {duration: 1.25, opacity:0, stagger:0, y:gsap.utils.wrap([1080,-1080]), ease:"sine.out"}, "<+.25")
    .from("#wrapper_2_1 .text .content > *", {duration:1, y:-1080, stagger:{each:.15, from:"end"}, opacity:0, ease:"expo.out"}, ">-.5")
    .from("#wrapper_2_1 .image .img_1, #wrapper_2_1 .image .img_2", {duration: .75, opacity:0, scale:1.2, transformOrigin:"center", ease:"bounce.out"})

        .call(function() {
            if (tl.reversed()) {
                logoTimeline.pause();
                logoTimeline2.pause();
            } else {
                logoTimeline.play();
                logoTimeline2.play();
            }
        }, null, ">-.01")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_1_1", {duration: 0.01, display: "none"})	 
        .call(allowScroll, [false], "+=.01")

        .call(function() {
            if (tl.reversed()) {
                logoTimeline.play();
                logoTimeline2.play();
            } else {
                logoTimeline.pause();
                logoTimeline2.pause();
            }
        })

    .to("#wrapper_2_1", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_2_2", {duration: 0.01, opacity:0, display:"none"}, ">-.01")
    .from("#bg_2", {duration: 1, opacity:0, scale:1.2, transformOrigin:"top right"})
    .from("#wrapper_2_2_1 .top_text > *, #wrapper_2_2_1 .col_wrapper > *", {duration:1, y:1080, stagger:{each:.15}, opacity:0, ease:"expo.inOut"}, ">-.75")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_2_2_1 .top_text > *, #wrapper_2_2_1 .col_wrapper > *", {duration:.75, y:1080, stagger:{each:.15, from:"end"}, opacity:0, ease:"expo.inOut"})
    //.to("#wrapper_2_2_1 .col_wrapper > *", {duration:.75, y:1080, stagger:{each:.15, from:"end"}, opacity:0, ease:"expo.inOut"}, "<")

    .to("#wrapper_2_2_1", {duration: 0.01, display:"none"})
    .from("#wrapper_2_2_2", {duration: 0.01, display:"none"}, "<")

    .from("#wrapper_2_2_2 .content > *", {duration:1, y:1080, stagger:{each:.15}, opacity:0, ease:"expo.out"})
    .from("#wrapper_2_2_2 .num", {duration:.75, stagger:.15, scale:0, opacity:0, ease:"back.out(1)"}, ">-.25")
    .from("#bg_2 .squares", {duration: 1, stagger:.15, scale:0, transformOrigin:"top center", ease:"elastic.out(1,0.5)"}, "<+.5")

    /* call function for counter */  
    .call(function() {
        
        if (!(tl.reversed())) {
            
            //Do not run for these languages
            if (courseOptions.cultureCode != "zh-CHS" && courseOptions.cultureCode != "ja-JP" && courseOptions.cultureCode != "ja-JP" && courseOptions.cultureCode != "ko-KR" && courseOptions.cultureCode != "th-TH" && courseOptions.cultureCode != "zh-TW") {
                countUp("#count_1 b", 176, 2.5, 0);
                countUp("#count_2 b", 38, 1.5, 0);
                countUp("#count_3 b", 32, 1.5, 0);
                countUp("#count_4 b", 0.5, .5, 1);
            }
        }       
    }, null, "-=.01")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_2_2", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_2_3", {duration: 0.01, opacity:0, display:"none"}, ">-.01")
    .from("#wrapper_2_3 .bg", {duration: 1, opacity:0, scale:1.2, transformOrigin:"center left"})
    .from("#wrapper_2_3 .button", {duration:1, stagger:.15, scale:0, rotationY:gsap.utils.wrap([-360,360]), y:gsap.utils.wrap(["100%","-100%"]), ease:"back.out(1)"}, ">-.5")
    
    /* Popup instructions */
    .from("#instructions_2_3", {duration: 0.5, opacity:0, display:"none"})
    .from("#instructions_2_3 .instructions_wrapper_inner", {duration: 0.5, y: 50}, "-=.5")

    /* function for click block */
    .call(function(){
        if (tl.reversed()) {
            $("#wrapper_2_3 .click_wrapper").addClass("noClick");
        } else {
            $("#wrapper_2_3 .click_wrapper").removeClass("noClick");
        }
    }, null, "-=.01")

        .addPause("+=.01", pauseFunc)

    .to("#instructions_2_3", {duration: 0.5, opacity: 0, display:"none"})
    .call(nextArrowCheck, ["completedClickPopUpSection1"])

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_3_1", {duration: 0.01, display: "block"}, "+=0.01")	  
        .call(allowScroll, [false], "+=.01")

        .addLabel("section_3")
        .call(sectionCounter, [3], "+=0.01")

    // SECTION 3 ANIMATION - START ------------------------------------------------------>

    /* function for click block */
    .call(function(){
        if (tl.reversed()) {
            $("#wrapper_2_3 .click_wrapper").removeClass("noClick");
        } else {
            $("#wrapper_2_3 .click_wrapper").addClass("noClick");
        }
    }, null, "-=.01")

    .to("#wrapper_2_3", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_3_1", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .from(["#wrapper_3_1 .img_1","#wrapper_3_1 .img_2","#wrapper_3_1 .img_3"], {duration: 1, stagger:.25, x:"-100%", ease:"sine.out"})
    .from("#wrapper_3_1 .mobile_bg", {duration: 1, opacity:0}, "<")

    .from("#wrapper_3_1 .text .content > *", {duration:1, y:-1080, stagger:{each:.15, from:"end"}, opacity:0, ease:"expo.out"}, ">-.75")
    .from("#wrapper_3_1 .image .squares", {duration: 1, stagger:.25, scale:0, transformOrigin:"top center", ease:"elastic.out(1,0.5)"}, ">-.25")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_2_1", {duration: 0.01, display: "none"})	     
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_3_1", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_3_2", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .from("#wrapper_3_2 .inner > .img_wrapper img", {duration: 1, opacity:0, scale:1.2, transformOrigin:"center left"})
    .from("#wrapper_3_2 .top_wrapper .text div > *", {duration:1, y:1080, stagger:{each:.15}, opacity:0, ease:"expo.out"}, ">-.5")
    .from("#wrapper_3_2 .top_wrapper .img_1", {duration: .75, opacity:0, scale:1.2, transformOrigin:"center", ease:"bounce.out"}, "<+.25")
    .from("#wrapper_3_2 .top_wrapper .img_4", {duration: 1, opacity:0, scale:0, ease:"back.out(1.25)"}, ">-.5")
    .from("#wrapper_3_2 .top_wrapper .squares", {duration: 1, stagger:.25, scale:0, transformOrigin:gsap.utils.wrap(["top center","bottom left"]), ease:"elastic.out(1,0.5)"}, ">-.5")

    .from("#wrapper_3_2 .col_wrapper > *", {duration:1, y:1080, stagger:{each:.15}, opacity:0, ease:"expo.out"}, "<")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_3_2", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_3_3", {duration: 0.01, opacity:0, display:"none"}, ">-.01")
    
    .from("#wrapper_3_3 .img_wrapper_top .img_1, #wrapper_3_3 .img_wrapper_bottom .img_1", {duration: .75, stagger:.5, opacity:0, scale:1.2, transformOrigin:"center", ease:"bounce.out"})
    .from("#wrapper_3_3 .img_wrapper_top .img_2, #wrapper_3_3 .img_wrapper_bottom .img_2", {duration: 1.25, stagger:0, scale:0, transformOrigin:gsap.utils.wrap(["bottom left","top right"]), ease:"sine.out"}, ">-.25")
    .from("#wrapper_3_3 .text .content > *", {duration: 1, stagger:{each:.15}, scale:0, ease:"expo.out"}, ">-.5")

    .from("#wrapper_3_3 .img_wrapper_top .squares, #wrapper_3_3 .img_wrapper_bottom .squares", {duration: 1, stagger:.25, scale:0, transformOrigin:gsap.utils.wrap(["top center","bottom left"]), ease:"elastic.out(1,0.5)"}, ">-.75")


        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_3_3", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_3_4", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .from("#wrapper_3_4 .img_wrapper .img_1", {duration: .75, opacity:0, scale:1.2, transformOrigin:"center", ease:"bounce.out"})
    .from("#wrapper_3_4 .img_wrapper .img_2", {duration: 1, opacity:0, scale:0, transformOrigin:"bottom left", ease:"back.out(1.25)"}, ">-.25")
    .from("#wrapper_3_4 .full, #wrapper_3_4 .col", {duration:1, y:1080, stagger:{each:.15}, opacity:0, ease:"expo.out"}, ">-.5")
    .from("#wrapper_3_4 .square_left img, #wrapper_3_4 .square_right img", {duration: 1, stagger:.25, scale:0, transformOrigin:gsap.utils.wrap(["top right","bottom center"]), ease:"elastic.out(1,0.5)"}, ">-.5")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_4_1", {duration: 0.01, display: "block"}, "+=0.01")         
        .call(allowScroll, [false], "+=.01")


        .addLabel("section_4")
        .call(sectionCounter, [4], "+=0.01")

    // SECTION 4 ANIMATION - START ------------------------------------------------------>

    .to("#wrapper_3_4", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_4_1", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .fromTo("#wrapper_4_1 .image .img_wrapper", {rotationY:-90, transformPerspective:2000, transformOrigin:"right"}, {duration:1, rotationY:0})
    .from("#wrapper_4_1 .image .img_5", {duration: 1, opacity:0, scale:0, ease:"back.out(1.25)"}, ">-.5")
    .from("#wrapper_4_1 .image .img_3 .line_1, #wrapper_4_1 .image .img_3 .line_2", {duration: 1.25, opacity:0, stagger:0, y:gsap.utils.wrap([1080,-1080]), ease:"sine.out"}, "<+.25")
    .from("#wrapper_4_1 .text .content > *", {duration:1, y:-1080, stagger:{each:.15, from:"end"}, opacity:0, ease:"expo.out"}, ">-.5")
    .from("#wrapper_4_1 .img_6", {duration: 1, stagger:.25, scale:0, transformOrigin:"top center", ease:"elastic.out(1,0.5)"}, ">-.25")

    .from("#wrapper_4_1 .image .img_1", {duration: .75, opacity:0, scale:1.2, transformOrigin:"center", ease:"bounce.out"}, ">-.25")

        .call(function() {
            if (tl.reversed()) {
                logoTimeline3.pause();
                logoTimeline4.pause();
            } else {
                logoTimeline3.play();
                logoTimeline4.play();
            }
        }, null, ">-.01")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_3_1", {duration: 0.01, display: "none"})	    
        .call(allowScroll, [false], "+=.01")

        .call(function() {
            if (tl.reversed()) {
                logoTimeline3.play();
                logoTimeline4.play();
            } else {
                logoTimeline3.pause();
                logoTimeline4.pause();
            }
        })
    
    .to("#wrapper_4_1", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_4_2", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .from("#wrapper_4_2 .inner > .img_wrapper img", {duration: 1, opacity:0, scale:.6, transformOrigin:"center bottom"})
    .from("#wrapper_4_2 .top_text > *, #wrapper_4_2 .col, #wrapper_4_2 .bottom_text", {duration:1, y:1080, stagger:{each:.15}, opacity:0, ease:"expo.out"}, ">-.5")
    .from("#wrapper_4_2 .square_left img, #wrapper_4_2 .square_right img", {duration: 1, stagger:.25, scale:0, transformOrigin:gsap.utils.wrap(["top right","bottom center"]), ease:"elastic.out(1,0.5)"}, ">-.5")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .call(allowScroll, [false], "+=.01")

    .to("#wrapper_4_2", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_4_3", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .from(["#wrapper_4_3 .img_1","#wrapper_4_3 .img_2","#wrapper_4_3 .img_3","#wrapper_4_3 .img_4"], {duration: 1, stagger:.25, x:"-100%", ease:"sine.out"})
    .from("#wrapper_4_3 .mobile_bg", {duration: 1.75, opacity:0}, "<")

    .fromTo("#wrapper_4_3 .text_wrapper", {rotationX:90, transformPerspective:2000, transformOrigin:"bottom"}, {duration: 1, rotationX:0})
    .from("#wrapper_4_3 .top_text > *, #wrapper_4_3 .col", {duration:1, y:1080, stagger:{each:.15}, opacity:0, ease:"expo.out"}, ">-.5")
    .from("#wrapper_4_3 .img_5, #wrapper_4_3 .img_6", {duration: 1, stagger:.25, scale:0, transformOrigin:gsap.utils.wrap(["top right","bottom center"]), ease:"elastic.out(1,0.5)"}, ">-.5")

        .call(allowScroll, [true], "+=.01")
        .addPause("+=.01", pauseFunc)
        .to("#scene_quiz", {duration: 0.01, display: "block"}, "+=0.01")
        .call(allowScroll, [false], "+=.01")


    // SECTION QUIZ ANIMATION - START ------------------------------------------------------>

    .to("#wrapper_4_3", {duration: 1, scale:1.2, opacity:0, display:"none", ease:"sine.inOut"})
    .from("#wrapper_quiz", {duration: 0.01, opacity:0, display:"none"}, ">-.01")

    .fromTo("#wrapper_quiz .image .img_wrapper", {rotationY:90, transformPerspective:2000, transformOrigin:"left"}, {duration: 1, rotationY:0})
    .from("#wrapper_quiz .image .img_3", {duration: 1, opacity:0, scale:0, ease:"back.out(1.25)"}, ">-.5")
    .from("#wrapper_quiz .text .content > *", {duration:1, y:-1080, stagger:{each:.15, from:"end"}, opacity:0, ease:"expo.out"}, "<+.25")
    .from("#wrapper_quiz .image .squares", {duration: 1, stagger:.25, scale:0, transformOrigin:gsap.utils.wrap(["top left","top center"]), ease:"elastic.out(1,0.5)"}, ">-.5")

    //.from("#quiz_box", {duration: 0.5, opacity:0})

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
