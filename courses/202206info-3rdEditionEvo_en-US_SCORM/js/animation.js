// Infographic Animations

// Remember to add this line to every ScrollTrigger:
// scroller: "#course_wrapper"

/* BOX 1 */
/* Offset only needed on the first screen */
/* Calculates the shape offset so they don't start offscreen */
var offestHeight = $("#box_1").innerHeight(true);
var offsetPercent = Math.round((offestHeight / windowHeight -1) * -100) + "%";
var svg_shapes = document.querySelectorAll('#box_1 .shapes g, #box_1 .pictures');

ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function() {
		
		gsap.to("#box_1 .shapes g", {duration:.01, transformOrigin:"center center", scale:0, opacity:0})
		gsap.to("#box_1 .pictures", {duration:.01, transformOrigin:"center center", scale:0, opacity:0, rotationY:-360})
				
		var box1_Timeline = gsap.timeline({
			scrollTrigger: {
			trigger: "#box_1",
			start: "top center",
			scroller: "#course_wrapper"
		}, onComplete: function() {}});
		box1_Timeline
		.to("#box_1 .shapes g, #box_1 .pictures", {duration:1, stagger:{each:.1, grid:"auto", from:"random"}, opacity:1, rotationY:0, scale:1, ease:"back.out(2)"})
		
		var box1_1_Timeline = gsap.timeline({
			scrollTrigger: {
			trigger: "#box_1",
			start: "top top",
			end: "bottom top",
			scroller: "#course_wrapper",
			scrub:4
		}});
		box1_1_Timeline
		.to("#box_1 .bottom_bg .bg", {backgroundPositionY:"100%"})

    }  
});

svg_shapes.forEach( shape => {

	var animateY = "-50%";	
	if ($(shape).hasClass("medium")) {animateY = "-80%";} else if ($(shape).hasClass("small")) {animateY = "-200%";}
	
	var xArray = ["10%", "-10%"];
	var animateX = xArray[Math.floor(Math.random() * xArray.length)];
	var animateX2 = animateX * -1;
	var delay = (Math.random() * (2.50 - 0.00 + 0.00) + 0.00).toFixed(2);
	
	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {
			var tl = gsap.timeline({
				scrollTrigger: {
				trigger: "#box_1",
				scroller: "#course_wrapper",
				start: "top " +offsetPercent,
				end: "bottom top",
				scrub:3
			}});

			if ($(shape).hasClass("pictures")) {
				tl.to(shape, {duration:1, rotationY:360}, delay)
			}
			tl
			.to(shape, {duration:3, y:animateY}, "0")
			.to(shape, {duration:1.25, x:animateX}, "0")
			.to(shape, {duration:1.25, x:animateX2}, "1.5")
		}
	});
	
});

/* ios Fix for rotationY breaking on badges */
var rotationValue = -360;
if (courseOptions.isIOS) {rotationValue = 0;}

var box1_2_Timeline = gsap.timeline({
	scrollTrigger: {
    trigger: "#box_1",
    start: "top center",
    scroller: "#course_wrapper",
}});
box1_2_Timeline
.from("#box_1 .top_text", {duration:.75, opacity:0, y:50})
.from("#box_1 .badge_cont", {duration:1, scale:.5, opacity:0, y:100, ease:"back.out(1.5)"}, ">-.25")
.from("#box_1 .badge_cont .badge_div", {duration:.75, rotationY:rotationValue, y:50, opacity:0, transformOrigin:"bottom"}, ">-.25")

/* BOX 2 */

var box2_1_Timeline = gsap.timeline({
	scrollTrigger: {
    trigger: "#box_2",
    start: "top center",
    scroller: "#course_wrapper",
}});
box2_1_Timeline
.from("#box_2 .wrapper", {duration:1, y:50, opacity:0})

ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function() {
		
		gsap.to("#box_2b .top_bg", {duration:8, backgroundPositionX:"100%", ease:"none", repeat:-1})
		
		var box2_2_Timeline = gsap.timeline({
			scrollTrigger: {
			trigger: "#box_2b",
			start: "top center",
			scroller: "#course_wrapper",
		}});
		box2_2_Timeline
		.from("#box_2b .bottom_bg", {duration:2, backgroundPositionX:"160%", ease:"back.out(1)"})
		.from("#box_2b .top_bg", {duration:.75, opacity:0}, "<")

    }
});

/* BOX 3 */
var box3_1_Timeline = gsap.timeline({
	scrollTrigger: {
    trigger: "#box_3",
    start: "top center",
    scroller: "#course_wrapper",
}});
box3_1_Timeline
.from("#box_3 .wrapper", {duration:.75, y:"50", opacity:0})
.from("#box_3 .laptop_cont .laptop", {duration:1, x:"-50%", opacity:0, scale:0, ease:"back.out(1)"}, ">-.5")
.from("#box_3 .laptop_cont svg g", {duration:1, stagger:{each:.15, grid:"auto", from:"random"}, transformOrigin:"center center", opacity:0, scale:0, ease:"back.out(1)"}, "<")
.from("#box_3 .text .box", {duration:.75, x:"25%", stagger:{each:.15, grid:"auto"}, opacity:0, ease:"back.out(1)"}, "<+.5")

var svg_shapes3 = document.querySelectorAll('#box_3 .laptop_cont svg g');
svg_shapes3.forEach( shape => {

	var animateY = "-30%";
	var xArray = ["30%", "-30%"];
	var animateX = xArray[Math.floor(Math.random() * xArray.length)];
	var animateX2 = animateX * -1;

	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {
			var tl = gsap.timeline({
				scrollTrigger: {
				trigger: "#box_3",
				scroller: "#course_wrapper",
				start: "top center",
				end: "bottom top",
				scrub:3
			}});
			tl
			.to(shape, {duration:3, y:animateY}, "0")
			.to(shape, {duration:1.25, x:animateX}, "0")
			.to(shape, {duration:1.25, x:animateX2}, "1.5")
		}
	});
	
});

/* BOX 4 */

var hand_start = gsap.fromTo("#box_4 .click_hand", {scale: 0.5, duration:.5}, {scale: 1, yoyo: true, repeat: -1, ease: Sine.easeInOut, paused: true});
var hand_stop = gsap.to("#box_4 .click_hand", {opacity:0, duration:0.35, display:"none", paused: true, onComplete: function() {
    hand_start.pause();
}})

var box4_Timeline = gsap.timeline({scrollTrigger: {
    trigger: "#box_4",
    start: "top center",
    scroller: "#course_wrapper",
}});
box4_Timeline
.from("#box_4 .top_box", {duration: 0.75, y:"50", opacity:0})
.from("#box_4 .slide_container", {duration: 1, x:"100%", opacity:0, ease:Back.easeOut}, '>-.25')
.from("#box_4 .leftarrow, #box_4 .rightarrow", {duration: 0.75, opacity:0})
.call( function() { hand_start.play(); } )
.from("#box_4 .click_hand", {duration:.5, opacity:0, display:"none"})

/* BOX 5 */
gsap.to("#box_5 .shapes g, #box_5 .wavy", {duration:.01, transformOrigin:"center center", scale:0, opacity:0})
				
var box5_Timeline = gsap.timeline({
    scrollTrigger: {
    trigger: "#box_5",
    start: "top center",
    scroller: "#course_wrapper"
}, onComplete: function() {}});
box5_Timeline
.to("#box_5 .shapes g, #box_5 .wavy", {duration:1, stagger:{each:.1, grid:"auto", from:"random"}, opacity:1, scale:1, ease:"back.out(2)"}, "0")
.from("#box_5 .wrapper img", {duration:1, rotationY:-360, opacity:0, scale:0, ease:"back.out(1)"}, "0")
.from("#box_5 .wrapper p", {duration:.75, opacity:0, y:50}, ">-.5")

var svg_shapes5 = document.querySelectorAll('#box_5 .shapes g, #box_5 .wavy');
svg_shapes5.forEach( shape => {

	var animateY = "-40%";
	var xArray = ["20%", "-20%"];
	var animateX = xArray[Math.floor(Math.random() * xArray.length)];
	var animateX2 = animateX * -1;
	
	if ($(shape).hasClass("wavy")) {
		animateX = 0;
		animateX2 = 0;
	}
	
	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {
			var tl = gsap.timeline({
				scrollTrigger: {
				trigger: "#box_5",
				scroller: "#course_wrapper",
				start: "top center",
				end: "bottom top",
				scrub:3
			}});
			tl
			.to(shape, {duration:3, y:animateY}, "0")
			.to(shape, {duration:1.25, x:animateX}, "0")
			.to(shape, {duration:1.25, x:animateX2}, "1.5")
		}
	});

});

/* BOX 6 */

var hand_start2 = gsap.fromTo("#box_6 .click_hand", {scale: 0.5, duration:.5}, {scale: 1, yoyo: true, repeat: -1, ease: Sine.easeInOut, paused: true});
var hand_stop2 = gsap.to("#box_6 .click_hand", {opacity:0, duration:0.35, display:"none", paused: true, onComplete: function() {
    hand_start2.pause();
}})

gsap.to("#box_6 .click_cont svg g", {duration:.01, transformOrigin:"center center", scale:0, opacity:0})

var box6_Timeline = gsap.timeline({
	scrollTrigger: {
    trigger: "#box_6",
    start: "top center",
    scroller: "#course_wrapper"
}, onComplete: function() {}});
box6_Timeline
.from("#box_6 .top_text", {duration:.75, opacity:0, y:50}, "0")
.from("#box_6 .button", {duration:1, stagger:{each:.25, grid:"auto", from:"random"}, opacity:0, scale:0, ease:"back.out(2)"}, ">-.25")
.to("#box_6 .click_cont svg g", {duration:1, stagger:{each:.25, grid:"auto", from:"random"}, opacity:1, scale:1, ease:"back.out(2)"}, "<")
.call( function() { hand_start2.play(); } )
.from("#box_6 .click_hand", {duration:.5, opacity:0, display:"none"})

/* BOX 7 */

gsap.to("#box_7 svg g", {duration:.01, transformOrigin:"center center", scale:0, opacity:0})

var box7_Timeline = gsap.timeline({
	scrollTrigger: {
    trigger: "#box_7",
    start: "top center",
    scroller: "#course_wrapper"
}, onComplete: function() {}});
box7_Timeline
.from("#box_7 .top_text", {duration:.75, opacity:0, y:50}, "0")
.from("#box_7 .top_cont .text", {duration:.75, y:"25%", opacity:0}, ">-.25")
.from("#box_7 .top_cont img", {duration:.5, stagger:{each:.25}, scale:1.2, opacity:0}, ">-.25")
.to("#box_7 .top_cont svg g", {duration:1, stagger:{each:.25, grid:"auto", from:"random"}, opacity:1, scale:1, ease:"back.out(2)"}, "<")

var box7_2_Timeline = gsap.timeline({
	scrollTrigger: {
    trigger: "#box_7 .middle_cont",
    start: "top center",
    scroller: "#course_wrapper"
}, onComplete: function() {}});
box7_2_Timeline
.from("#box_7 .middle_cont .text", {duration:.75, y:"25%", opacity:0})
.from("#box_7 .middle_cont img", {duration:.5, stagger:{each:.25}, scale:1.2, opacity:0}, ">-.25")
.to("#box_7 .middle_cont svg g", {duration:1, stagger:{each:.25, grid:"auto", from:"random"}, opacity:1, scale:1, ease:"back.out(2)"}, "<")

var box7_3_Timeline = gsap.timeline({
	scrollTrigger: {
    trigger: "#box_7 .bottom_cont",
    start: "top center",
    scroller: "#course_wrapper"
}, onComplete: function() {}});
box7_3_Timeline
.from("#box_7 .bottom_cont .text", {duration:.75, y:"25%", opacity:0})
.from("#box_7 .bottom_cont img", {duration:.5, stagger:{each:.25}, scale:1.2, opacity:0}, ">-.25")
.to("#box_7 .bottom_cont svg g", {duration:1, stagger:{each:.25, grid:"auto", from:"random"}, opacity:1, scale:1, ease:"back.out(2)"}, "<")

var svg_shapes7 = document.querySelectorAll('#box_7 svg g');
svg_shapes7.forEach( shape => {

	var animateY = "-50%";	
	if ($(shape).hasClass("medium")) {animateY = "-80%";} else if ($(shape).hasClass("small")) {animateY = "-200%";}
	var xArray = ["20%", "-20%"];
	var animateX = xArray[Math.floor(Math.random() * xArray.length)];
	var animateX2 = animateX * -1;
	
	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {
			var tl = gsap.timeline({
				scrollTrigger: {
				trigger: "#box_7",
				scroller: "#course_wrapper",
				start: "top center",
				end: "bottom top",
				scrub:3
			}});
			tl
			.to(shape, {duration:3, y:animateY}, "0")
			.to(shape, {duration:1.25, x:animateX}, "0")
			.to(shape, {duration:1.25, x:animateX2}, "1.5")
		}
	});

});

/* BOX 8 */

ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function() {
        gsap.to("#box_8 .shapes g, #box_8 .pictures", {duration:.01, transformOrigin:"center center", scale:0, opacity:0})

		var box8_Timeline = gsap.timeline({
			scrollTrigger: {
			trigger: "#box_8",
			start: "top center",
			scroller: "#course_wrapper"
		}, onComplete: function() {}});
		box8_Timeline
		.to("#box_8 .shapes g, #box_8 .pictures", {duration:1, stagger:{each:.1, grid:"auto", from:"random"}, opacity:1, rotationY:0, scale:1, ease:"back.out(2)"})
		
		var box8_1_Timeline = gsap.timeline({
			scrollTrigger: {
			trigger: "#box_1",
			start: "top top",
			end: "bottom top",
			scroller: "#course_wrapper",
			scrub:4
		}});
		box8_1_Timeline
		.to("#box_8 .bottom_bg .bg", {backgroundPositionY:"100%"})
		
    }
});

var svg_shapes8 = document.querySelectorAll('#box_8 .shapes g, #box_8 .pictures');
svg_shapes8.forEach( shape => {

	var animateY = "-50%";	
	if ($(shape).hasClass("medium")) {animateY = "-80%";} else if ($(shape).hasClass("small")) {animateY = "-200%";}
	
	var xArray = ["10%", "-10%"];
	var animateX = xArray[Math.floor(Math.random() * xArray.length)];
	var animateX2 = animateX * -1;
	var delay = (Math.random() * (2.50 - 0.00 + 0.00) + 0.00).toFixed(2);
	
	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {
			var tl = gsap.timeline({
				scrollTrigger: {
				trigger: "#box_8",
				scroller: "#course_wrapper",
				start: "top center",
				end: "bottom top",
				scrub:3
			}});

			if ($(shape).hasClass("pictures")) {
				tl.to(shape, {duration:1, rotationY:360}, delay)
			}
			tl
			.to(shape, {duration:3, y:animateY}, "0")
			.to(shape, {duration:1.25, x:animateX}, "0")
			.to(shape, {duration:1.25, x:animateX2}, "1.5")
		}
	});
	
});

var box8_2_Timeline = gsap.timeline({
	scrollTrigger: {
    trigger: "#box_8",
    start: "top center",
    scroller: "#course_wrapper",
}});
box8_2_Timeline
.from("#box_8 .content", {duration:1, scale:.5, opacity:0, y:100, ease:"back.out(1.5)"})
.from("#box_8 .badge_cont .badge_div", {duration:.75, rotationY:rotationValue, y:50, opacity:0, transformOrigin:"bottom"}, ">-.25")

// Disable animations so they don't run before preloader vanishes -------------
var stArray = ScrollTrigger.getAll()

stArray.forEach(function(ST) {
  ST.disable()
});

