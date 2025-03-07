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

var bluePathList = "#imagebox_1_0_0 .blue_path, #textbox_1_0_1 .left_half .blue_path, #textbox_1_0_1 .right_half .blue_path, #imagebox_1_0_1 .blue_path, #imagebox_1_0_4 .blue_path, #imagebox_1_0_5 .blue_path, #imagebox_1_0_7 .blue_path, #imagebox_1_0_8 .blue_path, #imagebox_1_1_1 .blue_path, #imagebox_1_1_2 .blue_path, #imagebox_quiz .blue_path";
var pinkPathList = "#imagebox_1_0_0 .pink_path, #textbox_1_0_1 .left_half .pink_path, #textbox_1_0_1 .right_half .pink_path, #imagebox_1_0_1 .pink_path, #imagebox_1_0_4 .pink_path, #imagebox_1_0_5 .pink_path, #imagebox_1_0_7 .pink_path, #imagebox_1_0_8 .pink_path, #imagebox_1_1_1 .pink_path, #imagebox_1_1_2 .pink_path, #imagebox_quiz .pink_path";

gsap.set(bluePathList, {drawSVG:"100% 110%"});
gsap.set(pinkPathList, {drawSVG:"133% 150%"});

let bluePathArr = gsap.utils.toArray(bluePathList),
    pinkPathArr = gsap.utils.toArray(pinkPathList),
    repeatVar = -1,
    pathDuration = 6;

//Turn off infinite on mobile
if (windowWidth < 1024) {repeatVar = 3;}

bluePathArr.forEach(el => {
    el.anim = gsap.timeline({paused: true, repeat:repeatVar});
    el.anim
    .fromTo(el, {drawSVG:"100% 110%"}, {duration:pathDuration, drawSVG:"0% 10%", ease:"none"})
});

pinkPathArr.forEach(el => {
    el.anim = gsap.timeline({paused: true, repeat:repeatVar});
    el.anim
    .fromTo(el, {drawSVG:"133% 150%"}, {duration:pathDuration, drawSVG:"33% 50%", ease:"none"})
});

//Stop final timeline on quiz click
$("#quizTitleButton").on( "click", function() {
  bluePathArr[10].anim.pause();
  pinkPathArr[10].anim.pause();
});

// ALL ANIMATION SCENES TIMELINE - START ------------------------------------------------------------------------------>

tl	

    .to("#scene_quiz", {duration: 0.01, display: "none"})     


    .addLabel("start")
    .addPause("start")

    .from("#imagebox_1_0_0 .arch", {duration:1, rotationY:-90, transformOrigin:"left", opacity:0})
    .from("#imagebox_1_0_0 .laptop", {duration:1, y:-600, ease: "expo.out", opacity:0}, ">-.5")
    .from("#textbox_1_0_0", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"}, "<+.25")
    .from("#imagebox_1_0_0 .burst_cont_2 img", {duration: 1, scale:.8, transformOrigin:"bottom left", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_0 .burst_cont_1 img", {duration: 1, scale:.8, transformOrigin:"top left", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_0 .blue_path, #imagebox_1_0_0 .pink_path", {duration:1, opacity:0}, ">-.5")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[0].anim.pause();
            pinkPathArr[0].anim.pause();
		} else {
			bluePathArr[0].anim.play();
            pinkPathArr[0].anim.play();
		}
	}, null, "<+.5")

        // note: this first one is a fromTo with a 'z' to fix a dumb visibility bug in Chrome -Gwen June 2019
        .fromTo("#next_arrow",
            {scale:.9, opacity:0, display:"none", z: 0},
            {scale:1, opacity:1, display:"block", z: 1, duration: 0.25})

        .addLabel("section_1")
        .call(sectionCounter, [1], "+=0.01")

        .addPause("+=0", recordUserTimeLocation)             
        .to("#next_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#imagebox_1_0_0 .burst_cont_1, #imagebox_1_0_0 .burst_cont_2", {duration:.5, opacity:0})
    .to("#textbox_1_0_0", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"}, "<")
    .to("#imagebox_1_0_0 .laptop", {duration:.75, y: 600, ease: "expo.in", opacity:0}, "<+.25")

    .to("#imagebox_1_0_0 .arch", {duration:.75, rotationY:90, transformOrigin:"left", opacity:0})
    .to("#imagebox_1_0_0", {duration:.01, opacity:0, display:"none"}, ">-.01")

    .from("#textbox_1_0_1", {duration:.01, opacity:0, display:"none"})
    .from("#swish_1", {duration:.75, width:0, display:"none"}, "<")

    .from("#textbox_1_0_1 .left_half .arch, #textbox_1_0_1 .right_half .arch", {duration:1, rotationY:gsap.utils.wrap(["-90","90"]), transformOrigin:gsap.utils.wrap(["center left","center right"]), stagger:.25, opacity:0}, ">-.25")
    .from("#textbox_1_0_1 .top_text", {duration:1, y:-600, opacity:0, ease:"expo.out"}, ">-.25")
    .from("#textbox_1_0_1 .left_half .text, #textbox_1_0_1 .right_half .text", {duration:.5, opacity:0}, ">-.25")
    .from("#textbox_1_0_1 .blue_path, #textbox_1_0_1 .pink_path", {duration:1, opacity:0}, ">-.5")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[0].anim.play();
            pinkPathArr[0].anim.play();
            
            bluePathArr[1].anim.pause();
            pinkPathArr[1].anim.pause();
            bluePathArr[2].anim.pause();
            pinkPathArr[2].anim.pause();
		} else {
			bluePathArr[0].anim.pause();
            pinkPathArr[0].anim.pause();
            
            bluePathArr[1].anim.play();
            pinkPathArr[1].anim.play();
            bluePathArr[2].anim.play();
            pinkPathArr[2].anim.play();
		}
	}, null, "<+.5")

        .to("#next_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .from("#back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"}, "<")
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_0_1 .top_text, #textbox_1_0_1 .left_half .text, #textbox_1_0_1 .right_half .text", {duration:.5, opacity:0})

    .to("#textbox_1_0_1 .left_half .arch, #textbox_1_0_1 .right_half .arch", {duration:.75, rotationY:gsap.utils.wrap(["90","-90"]), transformOrigin:gsap.utils.wrap(["center left","center right"]), stagger:.25, opacity:0}, ">-.25")
    .to("#swish_1", {duration:.75, width:0, display:"none"}, ">-.25")

    .to("#textbox_1_0_1", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_0_1, #textbox_1_0_2", {duration:.01, opacity:0, display:"none"}, ">-.01")

    .from("#imagebox_1_0_1 .arch", {duration:1, rotationY:-90, transformOrigin:"left", opacity:0})
    .from("#textbox_1_0_2 .top_text, #textbox_1_0_2 .box", {duration:1, y: -600, stagger:{each:.15, grid:"auto", from:"end"}, ease: "expo.out", opacity:0}, "<+.25")
    .from("#imagebox_1_0_1 .burst_cont_2 img", {duration: 1, scale:.8, transformOrigin:"bottom left", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_1 .burst_cont_1 img", {duration: 1, scale:.8, transformOrigin:"top left", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_1 .blue_path, #imagebox_1_0_1 .pink_path", {duration:1, opacity:0}, ">-.5")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[1].anim.play();
            pinkPathArr[1].anim.play();
            bluePathArr[2].anim.play();
            pinkPathArr[2].anim.play();
            
            bluePathArr[3].anim.pause();
            pinkPathArr[3].anim.pause();
		} else {
			bluePathArr[1].anim.pause();
            pinkPathArr[1].anim.pause();
            bluePathArr[2].anim.pause();
            pinkPathArr[2].anim.pause();
            
            bluePathArr[3].anim.play();
            pinkPathArr[3].anim.play();
		}
	}, null, "<+.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_0_2 .top_text, #textbox_1_0_2 .box", {duration:.75, y: 600, stagger:{each:.15, grid:"auto", from:"end"}, ease: "expo.in", opacity:0})
    .to("#imagebox_1_0_1 .burst_cont_1, #imagebox_1_0_1 .burst_cont_2", {duration:.5, opacity:0}, ">-.25")

    .to("#imagebox_1_0_1 .arch", {duration:.75, rotationY:90, transformOrigin:"left", opacity:0})
    .to("#imagebox_1_0_1, #textbox_1_0_2", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_0_2", {duration:.01, opacity:0, display:"none"}, ">-.01")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[3].anim.play();
            pinkPathArr[3].anim.play();
		} else {
			bluePathArr[3].anim.pause();
            pinkPathArr[3].anim.pause();
		}
	}, null, "+=0.01")

    .from("#imagebox_1_0_2 .person", {duration:1, rotationX:90, transformOrigin:"center bottom", opacity:0, ease:"back.out(2)"})
    .from("#swish_2a", {duration:.2, width:0, display:"none"}, ">-.5")
    .from("#swish_2b", {duration:.8, width:0, display:"none"})
    .from("#imagebox_1_0_2 .burst_cont_1 img", {duration: 1, scale:.8, transformOrigin:"bottom right", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_2 .burst_cont_2 img", {duration: 1, scale:.8, transformOrigin:"top center", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#textbox_1_0_3", {duration:1, y:-600, ease: "expo.out", opacity:0, display:"none"}, "<")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#swish_2b", {duration:.8, width:0, display:"none"})
    .to("#swish_2a", {duration:.2, width:0, display:"none"})
    .to("#imagebox_1_0_2 .burst_cont_1, #imagebox_1_0_2 .burst_cont_2", {duration:.5, opacity:0}, ">-.25")
    .to("#textbox_1_0_3", {duration:.5, opacity:0, display:"none"}, "<")
    .to("#imagebox_1_0_2 .person", {duration:.75, y:600, ease:"expo.in", opacity:0}, ">-.25")

    .to("#imagebox_1_0_2", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_0_3", {duration:.01, opacity:0, display:"none"}, ">-.01")

    .from("#imagebox_1_0_3 .swish_1", {duration:1, width:0, display:"none"})
    .from("#imagebox_1_0_3 .background", {duration:.75, opacity:0}, ">-.25")
    .from("#imagebox_1_0_3 .burst_cont_2", {duration: 1, scale:.8, transformOrigin:"bottom left", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_3 .burst_cont_1", {duration: 1, scale:.8, transformOrigin:"top right", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#textbox_1_0_4", {duration:1, y:-600, ease: "expo.out", opacity:0, display:"none"}, "<")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_0_4", {duration:.75, y:-600, ease: "expo.in", opacity:0, display:"none"})

    .to("#imagebox_1_0_3 .swish_1", {duration:1, width:0,display:"none"})
    .to("#imagebox_1_0_3", {duration:1, y:-380, ease:"back.inOut(1)"}, "<")  
    .from("#imagebox_1_0_3 .swish_2", {duration:1, width:0, display:"none"}, ">-.5")
    .from("#textbox_1_0_5", {duration:1, y:600, ease: "expo.out", opacity:0, display:"none"}, ">-.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_0_5", {duration:.75, y:600, ease: "expo.in", opacity:0, display:"none"})
    .to("#imagebox_1_0_3 .background", {duration:.5, opacity:0}, ">-.25")
    .to("#imagebox_1_0_3 .burst_cont_1, #imagebox_1_0_3 .burst_cont_2", {duration:.5, opacity:0}, "<")
    .to("#imagebox_1_0_3 .swish_2", {duration:.75, width:0,display:"none"},">-.25")

    .to("#imagebox_1_0_3", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_0_4", {duration:.01, opacity:0, display:"none"}, ">-.01")    

    .from("#imagebox_1_0_4 .arch", {duration:1, rotationY:90, transformOrigin:"right", opacity:0})
    .from("#imagebox_1_0_4 .swish", {duration:1, width:0, display:"none"}, ">-.5")
    .from("#textbox_1_0_6", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"}, ">-.5")
    .from("#imagebox_1_0_4 .blue_path, #imagebox_1_0_4 .pink_path", {duration:1, opacity:0}, ">-.5")

    .call(function() {
		if (tl.reversed()) {
            bluePathArr[4].anim.pause();
            pinkPathArr[4].anim.pause();
		} else {
            bluePathArr[4].anim.play();
            pinkPathArr[4].anim.play();
		}
	}, null, "<+.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_0_6", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"})
    .from("#textbox_1_0_7", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"})

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_0_7", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"})
    .to("#imagebox_1_0_4 .swish", {duration:.75, width:0, display:"none"}, ">-.5")
        
    .to("#imagebox_1_0_4 .arch", {duration:.75, rotationY:-90, transformOrigin:"right", opacity:0})
    .to("#imagebox_1_0_4", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_0_5", {duration:.01, opacity:0, display:"none"}, ">-.01")   

    .from("#imagebox_1_0_5 .arch", {duration:1, rotationY:90, transformOrigin:"right", opacity:0})
    .from("#imagebox_1_0_5 .laptop", {duration:1, y: -600, ease: "expo.out", opacity:0}, ">-.5")
    .from("#textbox_1_0_8", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"}, "<+.25")
    .from("#imagebox_1_0_5 .burst_cont_1 img", {duration: 1, scale:.8, transformOrigin:"bottom left", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_5 .burst_cont_2 img", {duration: 1, scale:.8, transformOrigin:"top right", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_5 .blue_path, #imagebox_1_0_5 .pink_path", {duration:1, opacity:0}, ">-.5")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[4].anim.play();
            pinkPathArr[4].anim.play();
            
            bluePathArr[5].anim.pause();
            pinkPathArr[5].anim.pause();
		} else {
			bluePathArr[4].anim.pause();
            pinkPathArr[4].anim.pause();
            
            bluePathArr[5].anim.play();
            pinkPathArr[5].anim.play();
		}
	}, null, "<+.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_0_8", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"})
    .from("#textbox_1_0_9", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"})

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#imagebox_1_0_5 .burst_cont_1, #imagebox_1_0_5 .burst_cont_2", {duration:.5, opacity:0})
    .to("#textbox_1_0_9", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"}, "<")
    .to("#imagebox_1_0_5 .laptop", {duration:.75, y: 600, ease: "expo.in", opacity:0}, "<+.25")

    .to("#imagebox_1_0_5 .arch", {duration:.75, rotationY:-90, transformOrigin:"right", opacity:0})
    .to("#imagebox_1_0_5", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#gamer_1", {duration:.01, opacity:0, display:"none"}, ">-.01")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[5].anim.play();
            pinkPathArr[5].anim.play();
		} else {
			bluePathArr[5].anim.pause();
            pinkPathArr[5].anim.pause();
		}
	}, null, "+=0.01")

    .from("#gamer_1 .person", {duration:1, rotationX:90, transformOrigin:"center bottom", opacity:0, ease:"back.out(2)"})
    .from("#swish_4", {duration:1, width:0, display:"none"}, ">-.5")
    .from("#gamer_1 .burst_cont_1 img", {duration: 1, scale:.8, transformOrigin:"bottom left", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#gamer_1 .burst_cont_2 img", {duration: 1, scale:.8, transformOrigin:"center right", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#textbox_1_1_0", {duration:1, y:-600, ease: "expo.out", opacity:0, display:"none"}, "<")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#swish_4", {duration:1, width:0, display:"none"})
    .to("#gamer_1 .burst_cont_1, #gamer_1 .burst_cont_2", {duration:.5, opacity:0}, ">-.25")
    .to("#textbox_1_1_0", {duration:.5, opacity:0, display:"none"}, "<")
    .to("#gamer_1 .person", {duration:.75, y:600, ease:"expo.in", opacity:0}, ">-.25")

    .to("#gamer_1", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_0_6", {duration:.01, opacity:0, display:"none"}, ">-.01")

    .from("#imagebox_1_0_6 .swish_1", {duration:1, width:0, display:"none"})
    .from("#imagebox_1_0_6 .background", {duration:.75, opacity:0}, ">-.25")
    .from("#imagebox_1_0_6 .burst_cont_2", {duration: 1, scale:.8, transformOrigin:"center right", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_6 .burst_cont_1", {duration: 1, scale:.8, transformOrigin:"center left", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#textbox_1_1_1", {duration:1, y:-600, ease: "expo.out", opacity:0, display:"none"}, "<")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#imagebox_1_0_6 .burst_cont_1, #imagebox_1_0_6 .burst_cont_2", {duration:.5, opacity:0})
    .to("#textbox_1_1_1", {duration:.75, y:-600, ease: "expo.in", opacity:0, display:"none"}, "<")

    .to("#imagebox_1_0_6 .swish_1", {duration:1, width:0,display:"none"})
    .to("#imagebox_1_0_6", {duration:1, y:-420, ease:"back.inOut(1)"}, "<")  
    .from("#imagebox_1_0_6 .swish_2", {duration:1, width:0, display:"none"}, ">-.5")
    .from("#imagebox_1_0_6 .badge", {duration:1, y:-600, ease: "expo.out", opacity:0, display:"none"}, ">-.5")
    .from("#imagebox_1_0_6 .burst_cont_3", {duration: 1, scale:.8, transformOrigin:"center left", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_6 .burst_cont_4", {duration: 1, scale:.8, transformOrigin:"center right", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#textbox_1_1_2", {duration:1, y:600, ease: "expo.out", opacity:0, display:"none"}, "<")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#imagebox_1_0_6 .burst_cont_3, #imagebox_1_0_6 .burst_cont_4", {duration:.5, opacity:0})
    .to("#textbox_1_1_2", {duration:.75, y:600, ease: "expo.in", opacity:0, display:"none"}, "<")    
    .to("#imagebox_1_0_6 .badge", {duration:.75, y:600, ease: "expo.in", opacity:0}, "<+.25")
    .to("#imagebox_1_0_6 .background", {duration:.5, opacity:0}, ">-.25")
    .to("#imagebox_1_0_6 .swish_2", {duration:.75, width:0,display:"none"},">-.25")

    .to("#imagebox_1_0_6", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_0_7", {duration:.01, opacity:0, display:"none"}, ">-.01") 

    .from("#imagebox_1_0_7 .arch", {duration:1, rotationY:90, transformOrigin:"right", opacity:0})    
    .from("#imagebox_1_0_7 .laptop", {duration:1, y: -600, ease: "expo.out", opacity:0}, ">-.5")
    .from("#textbox_1_1_3", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"}, "<+.25")
    .from("#imagebox_1_0_7 .burst_cont_2", {duration: 1, scale:.8, transformOrigin:"bottom right", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_7 .burst_cont_1", {duration: 1, scale:.8, transformOrigin:"top left", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_7 .blue_path, #imagebox_1_0_7 .pink_path", {duration:1, opacity:0}, ">-.5")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[6].anim.pause();
            pinkPathArr[6].anim.pause();
		} else {
			bluePathArr[6].anim.play();
            pinkPathArr[6].anim.play();
		}
	}, null, "<+.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_1_3", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"})
    .from("#textbox_1_1_4", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"})

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#imagebox_1_0_7 .burst_cont_1, #imagebox_1_0_7 .burst_cont_2", {duration:.5, opacity:0})
    .to("#textbox_1_1_4", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"}, "<")
    .to("#imagebox_1_0_7 .laptop", {duration:.75, y: 600, ease: "expo.in", opacity:0}, "<+.25")    

    .to("#imagebox_1_0_7 .arch", {duration:.75, rotationY:-90, transformOrigin:"right", opacity:0})
    .to("#imagebox_1_0_7", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_0_8", {duration:.01, opacity:0, display:"none"}, ">-.01")   

    .from("#imagebox_1_0_8 .arch", {duration:1, rotationY:90, transformOrigin:"right", ease:"expo.out", opacity:0})
    .from("#imagebox_1_0_8 .swish", {duration:1, width:0, display:"none"}, ">-.5")
    .from("#textbox_1_1_5", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"}, ">-.5")
    .from("#imagebox_1_0_8 .blue_path, #imagebox_1_0_8 .pink_path", {duration:1, opacity:0}, ">-.5")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[6].anim.play();
            pinkPathArr[6].anim.play();
            
            bluePathArr[7].anim.pause();
            pinkPathArr[7].anim.pause();
		} else {
			bluePathArr[6].anim.pause();
            pinkPathArr[6].anim.pause();
            
            bluePathArr[7].anim.play();
            pinkPathArr[7].anim.play();
		}
	}, null, "<+.5")
        
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_1_5", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"})
    .from("#textbox_1_1_6", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"})

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_1_6", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"})
    .to("#imagebox_1_0_8 .swish", {duration:.75, width:0, display:"none"}, ">-.5")

    .to("#imagebox_1_0_8 .arch", {duration:.75, rotationY:-90, transformOrigin:"right", opacity:0})
    .to("#imagebox_1_0_8", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_0_9", {duration:.01, opacity:0, display:"none"}, ">-.01")   

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[7].anim.play();
            pinkPathArr[7].anim.play();
		} else {
			bluePathArr[7].anim.pause();
            pinkPathArr[7].anim.pause();
		}
	}, null, "+=0.01")

    .from("#imagebox_1_0_9 .person", {duration:1, rotationX:90, transformOrigin:"center bottom", opacity:0, ease:"back.out(2)"})
    .from("#swish_5a", {duration:.2, width:0, display:"none"}, ">-.5")
    .from("#swish_5b", {duration:.8, width:0, display:"none"})
    .from("#imagebox_1_0_9 .burst_cont_1 img", {duration: 1, scale:.8, transformOrigin:"bottom right", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_0_9 .burst_cont_2 img", {duration: 1, scale:.8, transformOrigin:"top center", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#textbox_1_1_7", {duration:1, y:-600, ease: "expo.out", opacity:0, display:"none"}, "<")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#swish_5b", {duration:.8, width:0, display:"none"})
    .to("#swish_5a", {duration:.2, width:0, display:"none"})
    .to("#imagebox_1_0_9 .burst_cont_1, #imagebox_1_0_9 .burst_cont_2", {duration:.5, opacity:0}, ">-.25")
    .to("#textbox_1_1_7", {duration:.5, opacity:0, display:"none"}, "<")
    .to("#imagebox_1_0_9 .person", {duration:.75, y:600, ease:"expo.in", opacity:0}, ">-.25")

    .to("#imagebox_1_0_9", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_1_0", {duration:.01, opacity:0, display:"none"}, ">-.01")

    .from("#imagebox_1_1_0 .swish_1", {duration:1, width:0, display:"none"})
    .from("#imagebox_1_1_0 .background", {duration:.75, opacity:0}, ">-.25")
    .from("#imagebox_1_1_0 .burst_cont_2", {duration: 1, scale:.8, transformOrigin:"center left", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_1_0 .burst_cont_1", {duration: 1, scale:.8, transformOrigin:"center right", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#textbox_1_1_8", {duration:1, y:-600, ease: "expo.out", opacity:0, display:"none"}, "<")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_1_8", {duration:.75, y:-600, ease: "expo.in", opacity:0, display:"none"})

    .to("#imagebox_1_1_0 .swish_1", {duration:1, width:0,display:"none"})
    .to("#imagebox_1_1_0", {duration:1, y:-380, ease:"back.inOut(1)"}, "<")  
    .from("#imagebox_1_1_0 .swish_2", {duration:1, width:0, display:"none"}, ">-.5")
    .from("#textbox_1_1_9", {duration:1, y:600, ease: "expo.out", opacity:0, display:"none"}, ">-.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_1_9", {duration:.75, y:600, ease: "expo.in", opacity:0, display:"none"})
    .to("#imagebox_1_1_0 .background", {duration:.5, opacity:0}, ">-.25")
    .to("#imagebox_1_1_0 .burst_cont_1, #imagebox_1_1_0 .burst_cont_2", {duration:.5, opacity:0}, "<")
    .to("#imagebox_1_1_0 .swish_2", {duration:.75, width:0,display:"none"},">-.25")

    .to("#imagebox_1_1_0", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_1_1", {duration:.01, opacity:0, display:"none"}, ">-.01")

    .from("#imagebox_1_1_1 .arch", {duration:1, rotationY:90, transformOrigin:"right", opacity:0})
    .from("#imagebox_1_1_1 .laptop", {duration:1, y: -600, ease: "expo.out", opacity:0}, ">-.5")
    .from("#textbox_1_2_0", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"}, "<+.25")
    .from("#imagebox_1_1_1 .burst_cont_1", {duration: 1, scale:.8, transformOrigin:"bottom right", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_1_1 .burst_cont_2", {duration: 1, scale:.8, transformOrigin:"top left", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_1_1 .blue_path, #imagebox_1_1_1 .pink_path", {duration:1, opacity:0}, ">-.5")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[8].anim.pause();
            pinkPathArr[8].anim.pause();
		} else {
			bluePathArr[8].anim.play();
            pinkPathArr[8].anim.play();
		}
	}, null, "<+.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_2_0", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"})
    .from("#textbox_1_2_1", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"})

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#imagebox_1_1_1 .burst_cont_1, #imagebox_1_1_1 .burst_cont_2", {duration:.5, opacity:0})
    .to("#textbox_1_2_1", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"}, "<")
    .to("#imagebox_1_1_1 .laptop", {duration:.75, y: 600, ease: "expo.in", opacity:0}, "<+.25")    

    .to("#imagebox_1_1_1 .arch", {duration:.75, rotationY:-90, transformOrigin:"right", opacity:0})
    .to("#imagebox_1_1_1", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_1_1_2", {duration:.01, opacity:0, display:"none"}, ">-.01")   

    .from("#imagebox_1_1_2 .arch", {duration:1, rotationY:-90, transformOrigin:"left", opacity:0})
    .from("#textbox_1_2_2", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"}, "<+.25")
    .from("#imagebox_1_1_2 .burst_cont_2", {duration: 1, scale:.8, transformOrigin:"bottom right", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_1_2 .burst_cont_1", {duration: 1, scale:.8, transformOrigin:"top left", opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_1_1_2 .blue_path, #imagebox_1_1_2 .pink_path", {duration:1, opacity:0}, ">-.5")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[8].anim.play();
            pinkPathArr[8].anim.play();
            
            bluePathArr[9].anim.pause();
            pinkPathArr[9].anim.pause();
		} else {
			bluePathArr[8].anim.pause();
            pinkPathArr[8].anim.pause();
            
            bluePathArr[9].anim.play();
            pinkPathArr[9].anim.play();
		}
	}, null, "<+.5")

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1, opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation)               
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#textbox_1_2_2", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"})
    .from("#textbox_1_2_3", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"})

        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:1,  opacity:1, display:"block"})
        .addPause("+=0", recordUserTimeLocation) 
        .to("#scene_quiz", {duration: 0.01, display: "block"}, "+=0.01")
        .to("#next_arrow, #back_arrow", {duration: 0.25, scale:.9, opacity:0, display:"none"})

    .to("#imagebox_1_1_2 .burst_cont_1, #imagebox_1_1_2 .burst_cont_2", {duration:.5, opacity:0})
    .to("#textbox_1_2_3", {duration:.75, y: 600, ease: "expo.in", opacity:0, display:"none"}, ">-.25")

    .to("#imagebox_1_1_2 .arch", {duration:.75, rotationY:90, transformOrigin:"left", opacity:0})
    .to("#imagebox_1_1_2", {duration:.01, opacity:0, display:"none"}, ">-.01")
    .from("#imagebox_quiz", {duration:.01, opacity:0, display:"none"}, ">-.01")   


// QUIZ ANIMATION - START ------------------------------------------------------------------------------>

    if (courseOptions.isIOS == false) {
        tl.from("#imagebox_quiz .arch", {duration:1, rotationY:90, transformOrigin:"right", opacity:0})
    } else {
        tl.from("#imagebox_quiz .arch", {duration:1, x:600, ease:"expo.out", opacity:0})
    }
    tl

    .from("#textbox_quiz", {duration:1, y: -600, ease: "expo.out", opacity:0, display:"none"}, "<+.25")
    .from("#imagebox_quiz .burst_cont_2 img", {duration: 1, scale:.8, transformOrigin:"bottom right", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_quiz .burst_cont_1 img", {duration: 1, scale:.8, transformOrigin:"center left", stagger:.15, opacity:0, ease: "back.out(2)"}, "<+.5")
    .from("#imagebox_quiz .blue_path, #imagebox_quiz .pink_path", {duration:1, opacity:0}, ">-.5")
    
    .from("#quiz_box", {duration:1, y: 600, ease: "expo.out", opacity:0}, "<")

    .call(function() {
		if (tl.reversed()) {
			bluePathArr[9].anim.play();
            pinkPathArr[9].anim.play();
            
            bluePathArr[10].anim.pause();
            pinkPathArr[10].anim.pause();
		} else {
			bluePathArr[9].anim.pause();
            pinkPathArr[9].anim.pause();
            
            bluePathArr[10].anim.play();
            pinkPathArr[10].anim.play();
		}
	}, null, "<+.5")

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
