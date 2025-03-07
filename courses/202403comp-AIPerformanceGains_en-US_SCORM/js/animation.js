/* ------------------------------
        ANIMATION SETUP
 ------------------------------ */

/*
   * Animations are set up in this file, and controlled by the refresh() function in interactions.js.

   * All animations must have a unique id property
*/


/* ------------------------------
        MAIN PAGE ANIMATION
 ------------------------------ */
var main1_tl = gsap.timeline({scrollTrigger: {
        trigger: "#main_1 .wrapper",
        start: "top bottom",
        id: "main1" // remember to update this
    }});
    main1_tl
    .from("#main_1", {duration: 1.25, backgroundPosition:"100% 100%", ease:"sine.out"})
    .from("#main_1 .wrapper", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<")

var main2a_tl = gsap.timeline({scrollTrigger: {
        trigger: "#main_2 .wrapper",
        start: "top center",
        id: "main2a" // remember to update this
    }});
    main2a_tl
    .from("#main_2 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"})

var main2b_tl = gsap.timeline({scrollTrigger: {
        trigger: "#main_2 .bottom_cont .text",
        start: "top 60%",
        id: "main2b" // remember to update this
    }});
    main2b_tl
    .from("#main_2 .bottom_cont .text", {duration: 1, y:50, opacity:0, stagger:.5, ease:"sine.out"})

var main2c_tl = gsap.timeline({scrollTrigger: {
        trigger: "#main_2 .bottom_cont .img",
        start: "bottom bottom",
        id: "main2c" // remember to update this
    }});
    main2c_tl
    .from("#main_2 .bottom_cont .img", {duration: 1.25, rotationX:100, stagger:.5, autoAlpha:0, transformOrigin:"bottom", ease:"back.out(1.25)"})

var main3_tl = gsap.timeline({scrollTrigger: {
        trigger: "#hub .wrapper",
        start: "top center",
        id: "main3" // remember to update this
    }});
    main3_tl
    .from("#hub", {duration: 1.25, backgroundPosition:"100% 100%", ease:"sine.out"})
    .from("#hub .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<")
    .from("#hub .spoke_button .text", {duration: 1, y:50, opacity:0, stagger:.5, ease:"sine.out"}, ">-.25")
    .from("#hub .spoke_button .img", {duration: 1.25, rotation:-360, scale:0, rotationX:-360, stagger:.5, opacity:0, ease:"back.out(1.25)", onComplete:function() {
        gsap.to("#hub .tappy_hand", {duration: .5, opacity:1});
        $("#hub .spoke_button_wrapper").removeClass("blockClick");
    }}, "<+.25")


/* ------------------------------
    SPOKE 1 ANIMATION
 ------------------------------ */

var spoke1_1_tl = gsap.timeline({scrollTrigger: {
        trigger: "#main_1 .wrapper",
        start: "top bottom",
        id: "spoke1_1" // remember to update this
    }});
    spoke1_1_tl
    .from("#spoke_1_1", {duration: 1.25, backgroundPosition:"100% 100%", ease:"sine.out"})
    .from("#spoke_1_1 .wrapper", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<")

var spoke1_2a_tl = gsap.timeline({scrollTrigger: {
        trigger: "#main_1 .wrapper",
        start: "top center",
        id: "spoke1_2a" // remember to update this
    }});
    spoke1_2a_tl
    .from(["#spoke_1_2 .top_img .badge","#spoke_1_2 .top_img .dots"], {duration: gsap.utils.wrap([1.25,1.5]), scale:0, rotation:-360, rotationX:gsap.utils.wrap([-360,0]), stagger:.25, ease:"back.out(1.5)"})
    .from("#spoke_1_2 .top_text .text", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<+.75")


/*------ SLIDER SETUP -------*/
/* Note if reusing: make sure you update ID # on the .slider divs */
$('.slider').slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<button type="button" class="slick-next">Next<div class="tappy_hand"></div></button>'
});

var spoke1_2b_tl = gsap.timeline({scrollTrigger: {
        trigger: "#slider_1_2",
        start: "top center",
        id: "spoke1_2b" // remember to update this
    }});
    spoke1_2b_tl
    .from("#slider_1_2", {duration: 1.25, x:1920, opacity:0, ease:"back.out(1)", onComplete:function(){
        gsap.to("#slider_1_2 .tappy_hand", {duration: .5, opacity:1});
    }})

var spoke1_3_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_1_3",
        start: "top center",
        id: "spoke1_3" // remember to update this
    }});
    spoke1_3_tl
    .from("#img_1_3_1", {duration: 1, y:"100%", ease:"sine.inOut"})

/*------ Arch Animation Setup -------*/

ScrollTrigger.create({
    trigger: "#pin_bg_1_3",
    endTrigger: "#spoke_1_5",
    start: "top top",
    end: "bottom bottom",
    pin: "#pin_bg_1_3", // element to pin in place
    pinSpacing: false,
    id:"pinBg1"
});


/* Fade Scrolling Animation */

ScrollTrigger.matchMedia({
    "(min-width: 651px)": function() {
		var spoke1_3a_tl = gsap.timeline({scrollTrigger: {
				trigger: "#spoke_1_3 .wrapper",
				start: "20% bottom",
				end:"80% top",
				scrub:.5,
				id: "spoke1_3a"
			}});
			spoke1_3a_tl
			.from("#spoke_1_3 .wrapper", {opacity:0})
			.to("#spoke_1_3 .wrapper", {opacity:0}, "<+1.5")

		var spoke1_4a_tl = gsap.timeline({scrollTrigger: {
				trigger: "#spoke_1_4 .wrapper",
				start: "20% bottom",
				end:"80% top",
				scrub:.5,
				id: "spoke1_4a"
			}});
			spoke1_4a_tl
			.from("#spoke_1_4 .wrapper", {opacity:0})
			.to("#spoke_1_4 .wrapper", {opacity:0}, "<+1.5")

		var spoke1_5a_tl = gsap.timeline({scrollTrigger: {
				trigger: "#spoke_1_5 .wrapper",
				start: "20% bottom",
				end:"80% top",
				scrub:.5,
				id: "spoke1_5a"
			}});
			spoke1_5a_tl
			.from("#spoke_1_5 .wrapper", {opacity:0})
			.to("#spoke_1_5 .wrapper", {opacity:0}, "<+1.5")
    }
});

ScrollTrigger.matchMedia({
    "(max-width: 650px)": function() {
		var spoke1_3a_tl = gsap.timeline({scrollTrigger: {
				trigger: "#spoke_1_3 .wrapper",
				start: "20% bottom",
				end:"98% top",
				scrub:.5,
				id: "spoke1_3a"
			}});
			spoke1_3a_tl
			.from("#spoke_1_3 .wrapper", {opacity:0})
			.to("#spoke_1_3 .wrapper", {opacity:0}, "<+1.5")

		var spoke1_4a_tl = gsap.timeline({scrollTrigger: {
				trigger: "#spoke_1_4 .wrapper",
				start: "20% bottom",
				end:"98% top",
				scrub:.5,
				id: "spoke1_4a"
			}});
			spoke1_4a_tl
			.from("#spoke_1_4 .wrapper", {opacity:0})
			.to("#spoke_1_4 .wrapper", {opacity:0}, "<+1.5")

		var spoke1_5a_tl = gsap.timeline({scrollTrigger: {
				trigger: "#spoke_1_5 .wrapper",
				start: "20% bottom",
				end:"98% top",
				scrub:.5,
				id: "spoke1_5a"
			}});
			spoke1_5a_tl
			.from("#spoke_1_5 .wrapper", {opacity:0})
			.to("#spoke_1_5 .wrapper", {opacity:0}, "<+1.5")
    }
});


ScrollTrigger.matchMedia({

    "(min-width: 768px)": function() {
        
        //no need for reference because timeline is paused / play in scrolltrigger reference
        var pin_bg_1_Timeline = gsap.timeline({paused: true})
            pin_bg_1_Timeline
            //.to("#img_1_3_1", {duration: 0.75, opacity:0, display:"none"})
            .from("#img_1_3_2", {duration: 1, y:"100%", ease:"sine.inOut", display:"none"})
            .addLabel("switch1")
            .addPause("switch1")
            //.to("#img_1_3_2", {duration: 0.35, opacity:0, display:"none"})
            .from("#img_1_3_3", {duration: 1, y:"100%", ease:"sine.inOut", display:"none"})

        ScrollTrigger.create({
            trigger: "#spoke_1_3",
            start: "top center",
            end: "bottom center",
            onEnterBack: function({progress, direction, isActive}) {
                pin_bg_1_Timeline.reverse("switch1");
            },
            id:"spoke13"
        });

        ScrollTrigger.create({
            trigger: "#spoke_1_4",
            start: "top center",
            end: "bottom center",
            onEnter: function({progress, direction, isActive}) {
                pin_bg_1_Timeline.play(0);
            },
            onEnterBack: function({progress, direction, isActive}) {
                pin_bg_1_Timeline.reverse(0);
            },
            id:"spoke14"
        });

        ScrollTrigger.create({
            trigger: "#spoke_1_5",
            start: "top center",
            end: "bottom center",
            onEnter: function({progress, direction, isActive}) {
                pin_bg_1_Timeline.play("switch1");
            },
            id:"spoke15"
        });
    }
    
});

var spoke1_6a_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_1_6 .wrapper",
        start: "top center",
        id: "spoke1_6a" // remember to update this
    }});
    spoke1_6a_tl
    .from(["#spoke_1_6 .top_img .laptop", "#spoke_1_6 .top_img .dots"], {duration: gsap.utils.wrap([1.25,1.5]), scale:0, transformOrigin:"right bottom", stagger:.25, ease:"back.out(1.5)"})


ScrollTrigger.matchMedia({
    "(min-width: 651px)": function() {
	var spoke1_6b_tl = gsap.timeline({scrollTrigger: {
			trigger: "#spoke_1_6 .wrapper",
			start: "bottom bottom",
			id: "spoke1_6b" // remember to update this
		}});
		spoke1_6b_tl
		.from("#spoke_1_6 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"})
		.from("#spoke_1_6 .top_text .column_cont .col", {duration: .75, x:gsap.utils.wrap(["-50%","50%"]), stagger:0, opacity:0, ease:"sine.out"}, ">-.25")
		.from("#spoke_1_6 .return_button", {duration: .75, top:50, opacity:0, ease:"sine.out"})
    }
});

ScrollTrigger.matchMedia({
    "(max-width: 650px)": function() {
	var spoke1_6b_tl = gsap.timeline({scrollTrigger: {
			trigger: "#spoke_1_6 .wrapper .top_text ",
			start: "top 60%",
			id: "spoke1_6b" // remember to update this
		}});
		spoke1_6b_tl
		.from("#spoke_1_6 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"})
		.from("#spoke_1_6 .top_text .column_cont .col", {duration: .75, x:gsap.utils.wrap(["-50%","50%"]), stagger:0, opacity:0, ease:"sine.out"}, ">-.25")
		.from("#spoke_1_6 .return_button", {duration: .75, top:50, opacity:0, ease:"sine.out"})
    }
});


/* ------------------------------
    SPOKE 2 ANIMATION
 ------------------------------ */

var spoke2_1_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_2_1 .wrapper",
        start: "top bottom",
        id: "spoke2_1" // remember to update this
    }});
    spoke2_1_tl
    .from("#spoke_2_1", {duration: 1.25, backgroundPosition:"100% 100%", ease:"sine.out"})
    .from("#spoke_2_1 .wrapper", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<")

var spoke2_2a_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_2_2 .top_img",
        start: "top center",
        id: "spoke2_2a" // remember to update this
    }});
    spoke2_2a_tl
    .from("#spoke_2_2 .top_img .bg", {duration: 1.5, scale:1.2, opacity:0, ease:"back.out(1.5)"})
    .from("#spoke_2_2 .top_img .badge", {duration: 1.25, scale:0, rotation:-360, rotationX:-360, ease:"back.out(1.5)"}, "<+.25")


ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function() {
	var spoke2_2b_tl = gsap.timeline({scrollTrigger: {
			trigger: "#spoke_2_2 .wrapper",
			start: "bottom bottom",
			id: "spoke2_2b" // remember to update this
		}});
		spoke2_2b_tl
		.from("#spoke_2_2 .top_text .t1", {duration: .75, y:50, opacity:0, ease:"sine.out"})
		.from("#spoke_2_2 .bc1 .col", {duration: .75, x:"-50%", stagger:.25, opacity:0, ease:"sine.out"}, ">-.25")
		.from("#spoke_2_2 .top_text .t2", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<+.75")
		.from("#spoke_2_2 .bc2 .col", {duration: .75, x:"50%", stagger:.25, opacity:0, ease:"sine.out"}, ">-.25")
    }
});

ScrollTrigger.matchMedia({
    "(max-width: 1024px)": function() {
	var spoke2_2b_tl = gsap.timeline({scrollTrigger: {
			trigger: "#spoke_2_2 .wrapper .t1",
			start: "top center",
			id: "spoke2_2b" // remember to update this
		}});
		spoke2_2b_tl
		.from("#spoke_2_2 .top_text .t1", {duration: .75, y:50, opacity:0, ease:"sine.out"})
		.from("#spoke_2_2 .bc1 .col", {duration: .75, x:"-50%", stagger:.25, opacity:0, ease:"sine.out"}, ">-.25")
		.from("#spoke_2_2 .top_text .t2", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<+.75")
		.from("#spoke_2_2 .bc2 .col", {duration: .75, x:"50%", stagger:.25, opacity:0, ease:"sine.out"}, ">-.25")
    }
});



var spoke2_3_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_2_3",
        start: "top center",
        id: "spoke2_3" // remember to update this
    }});
    spoke2_3_tl
    .from("#spoke_2_3 img", {duration: 1, scale:1.2, transformOrigin:"top right", opacity:0, ease:"sine.out"})

var spoke2_4a_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_2_4 .wrapper",
        start: "top center",
        id: "spoke2_4a" // remember to update this
    }});
    spoke2_4a_tl
    .from("#spoke_2_4 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"})

var spoke2_4b_tl = gsap.timeline({scrollTrigger: {
        trigger: "#slider_2_4",
        start: "top center",
        id: "spoke2_4b" // remember to update this
    }});
    spoke2_4b_tl
    .from("#slider_2_4", {duration: 1.25, x:1920, opacity:0, ease:"back.out(1)", onComplete:function(){
        gsap.to("#slider_2_4 .tappy_hand", {duration: .5, opacity:1});
    }})

var spoke2_5_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_2_5 .wrapper",
        start: "top center",
        id: "spoke2_5" // remember to update this
    }});
    spoke2_5_tl
    .from("#spoke_2_5", {duration: 1.25, backgroundPosition:"100% 100%", ease:"sine.out"})
    .from("#spoke_2_5 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<")
    .from("#slider_2_5", {duration: 1.25, x:1920, opacity:0, ease:"back.out(1)", onComplete:function(){
        gsap.to("#slider_2_5 .tappy_hand", {duration: .5, opacity:1});
    }}, ">-.25")

var spoke2_6a_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_2_6 .wrapper",
        start: "top center",
        id: "spoke2_6a" // remember to update this
    }});
    spoke2_6a_tl
    .from(["#spoke_2_6 .top_img .laptop","#spoke_2_6 .top_img .dots"], {duration: gsap.utils.wrap([1.25,1.5]), scale:0, transformOrigin:"left bottom", stagger:.25, ease:"back.out(1.5)"})

ScrollTrigger.matchMedia({
    "(min-width: 651px)": function() {
	var spoke2_6b_tl = gsap.timeline({scrollTrigger: {
			trigger: "#spoke_2_6 .wrapper",
			start: "bottom bottom",
			id: "spoke2_6b" // remember to update this
		}});
		spoke2_6b_tl
		.from("#spoke_2_6 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"})
		.from("#spoke_2_6 .top_text .column_cont .col", {duration: .75, x:gsap.utils.wrap(["-50%","50%"]), stagger:0, opacity:0, ease:"sine.out"}, ">-.25")
		.from("#spoke_2_6 .return_button", {duration: .75, top:50, opacity:0, ease:"sine.out"}, ">-.25")
    }
});

ScrollTrigger.matchMedia({
    "(max-width: 650px)": function() {
	var spoke2_6b_tl = gsap.timeline({scrollTrigger: {
			trigger: "#spoke_2_6 .wrapper .top_text",
			start: "top 60%",
			id: "spoke2_6b" // remember to update this
		}});
		spoke2_6b_tl
		.from("#spoke_2_6 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"})
		.from("#spoke_2_6 .top_text .column_cont .col", {duration: .75, x:gsap.utils.wrap(["-50%","50%"]), stagger:0, opacity:0, ease:"sine.out"}, ">-.25")
		.from("#spoke_2_6 .return_button", {duration: .75, top:50, opacity:0, ease:"sine.out"}, ">-.25")
    }
});


/* ------------------------------
    SPOKE 3 ANIMATION
 ------------------------------ */

var spoke3_1_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_3_1 .wrapper",
        start: "top bottom",
        id: "spoke3_1" // remember to update this
    }});
    spoke3_1_tl
    .from("#spoke_3_1", {duration: 1.25, backgroundPosition:"100% 100%", ease:"sine.out"})
    .from("#spoke_3_1 .wrapper", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<")

var spoke3_2a_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_3_2 .wrapper",
        start: "top center",
        id: "spoke3_2a" // remember to update this
    }});
    spoke3_2a_tl
    .from("#spoke_3_2 .top_img .icon", {duration: 1.5, scale:0, transformOrigin:"left bottom", ease:"back.out(1.5)"})
    .from("#spoke_3_2 .top_img .dots", {duration: 1.25, rotation:-360, scale:0, opacity:0, ease:"back.out(1.5)"}, "<")
    .from("#spoke_3_2 .column_cont .text", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<+.25")

/*var spoke3_2b_tl = gsap.timeline({scrollTrigger: {
        trigger: "#slider_3_2",
        start: "top 60%",
        id: "spoke3_2b" // remember to update this
    }});
    spoke3_2b_tl
    .from("#spoke_3_2 .t2", {duration: .75, y:50, opacity:0, ease:"sine.out"})
    .from("#slider_3_2", {duration: 1.25, x:1920, opacity:0, ease:"back.out(1)", onComplete:function(){
        gsap.to("#slider_3_2 .tappy_hand", {duration: .5, opacity:1});
    }}, ">-.25")*/

gsap.from("#spoke_3_2 .t2", {
  scrollTrigger: {
    trigger: "#spoke_3_2 .column_cont .text",
    start: "bottom center",
	id: "spoke3_2b" // remember to update this
  }, 
	duration: 0.75, y: 50, opacity: 0, ease:"sine.out"
});

gsap.from("#slider_3_2", {
  scrollTrigger: {
    trigger: "#slider_3_2",
    start: "top 55%",
	id: "spoke3_2c" // remember to update this
  }, 
	duration: 1.25, x:1920, opacity:0, ease:"back.out(1)", onComplete:function(){
        gsap.to("#slider_3_2 .tappy_hand", {duration: .5, opacity:1});
    }
});

var spoke3_3_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_3_3 .wrapper",
        start: "top center",
        id: "spoke3_3" // remember to update this
    }});
    spoke3_3_tl
    .from("#spoke_3_3", {duration: 1.25, backgroundPosition:"100% 100%", ease:"sine.out"})
    .from("#spoke_3_3 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<")
    .from("#slider_3_3", {duration: 1.25, x:1920, opacity:0, ease:"back.out(1)", onComplete:function(){
        gsap.to("#slider_3_3 .tappy_hand", {duration: .5, opacity:1});
    }}, ">-.25")

var spoke3_4_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_3_4 .wrapper",
        start: "top center",
        id: "spoke3_4" // remember to update this
    }});
    spoke3_4_tl
    .from("#spoke_3_4 .top_text", {duration: .75, y:50, opacity:0, ease:"sine.out"})
    .from("#slider_3_4", {duration: 1.25, x:-1920, opacity:0, ease:"back.out(1)", onComplete:function(){
        gsap.to("#slider_3_4 .tappy_hand", {duration: .5, opacity:1});
    }}, ">-.25")

var spoke3_5_tl = gsap.timeline({scrollTrigger: {
        trigger: "#spoke_3_5 .wrapper",
        start: "top bottom",
        id: "spoke3_5" // remember to update this
    }});
    spoke3_5_tl
    .from("#spoke_3_5", {duration: 1.25, backgroundPosition:"100% 100%", ease:"sine.out"})
    .from("#spoke_3_5 .wrapper", {duration: .75, y:50, opacity:0, ease:"sine.out"}, "<")


/* ------------------------------
    SUMMARY ANIMATION
 ------------------------------ */

var summary1_tl = gsap.timeline({scrollTrigger: {
        trigger: "#summary .w1",
        start: "top center",
        id: "summary1" // remember to update this
    }});
    summary1_tl
    .from("#summary .w1", {duration: .75, y:50, opacity:0, ease:"sine.out"})
    .from("#summary .full_wrapper .bg", {duration: 1.25, backgroundPosition:"100% 100%", ease:"sine.out"}, ">-.25")    
    .from("#summary .full_wrapper img", {duration: 1.5, rotationX:-360, scale:1.1, opacity:0, ease:"back.out(1.5)"}, "<")

var summary2_tl = gsap.timeline({scrollTrigger: {
        trigger: "#summary .w2",
        start: "bottom bottom",
        id: "summary2" // remember to update this
    }});
    summary2_tl
    .from("#summary .w2", {duration: .75, y:50, opacity:0, ease:"sine.out"})
    .from("#quiz_box", {duration: 1.25, rotationX:-360, scale:1.1, opacity:0, ease:"back.out(1.5)"})


/* ------------------------------
        GROUP SCROLLTRIGGER
        ANIMATIONS BY SPOKE
 ------------------------------ */

 // DEV-UPDATE these arrays with your Scrolltrigger tweens. Remember to get by their id.

var mainSTarray = [
    ScrollTrigger.getById("main1"),
    ScrollTrigger.getById("main2a"),
    ScrollTrigger.getById("main2b"),
    ScrollTrigger.getById("main2c"),
    ScrollTrigger.getById("main3")
];

var spoke1STarray = [
    ScrollTrigger.getById("spoke1_1"),
    ScrollTrigger.getById("spoke1_2a"),
    ScrollTrigger.getById("spoke1_2b"),
    ScrollTrigger.getById("spoke1_3"),
    ScrollTrigger.getById("spoke1_6a"),
    ScrollTrigger.getById("spoke1_6b"),
    
    ScrollTrigger.getById("pinBg1"),
    ScrollTrigger.getById("spoke1_3a"),
    ScrollTrigger.getById("spoke1_4a"),
    ScrollTrigger.getById("spoke1_5a"),
    ScrollTrigger.getById("spoke13"),
    ScrollTrigger.getById("spoke14"),
    ScrollTrigger.getById("spoke15")
];

var spoke2STarray = [    
    ScrollTrigger.getById("spoke2_1"),
    ScrollTrigger.getById("spoke2_2a"),
    ScrollTrigger.getById("spoke2_2b"),
    ScrollTrigger.getById("spoke2_3"),
    ScrollTrigger.getById("spoke2_4a"),
    ScrollTrigger.getById("spoke2_4b"),
    ScrollTrigger.getById("spoke2_5"),
    ScrollTrigger.getById("spoke2_6a"),
    ScrollTrigger.getById("spoke2_6b")    
];

var spoke3STarray = [
    ScrollTrigger.getById("spoke3_1"),
    ScrollTrigger.getById("spoke3_2a"),
    ScrollTrigger.getById("spoke3_2b"),
    ScrollTrigger.getById("spoke3_2c"),
    ScrollTrigger.getById("spoke3_3"),
    ScrollTrigger.getById("spoke3_4"),
    ScrollTrigger.getById("spoke3_5")
];

var summarySTarray = [
    ScrollTrigger.getById("summary1"),
    ScrollTrigger.getById("summary2")
];

var masterSTArray = ScrollTrigger.getAll()

// disable all anims immediately. The main_page animations are enabled in theFinalFunction()
masterSTArray.forEach(function(ST) {
  ST.disable()
});
