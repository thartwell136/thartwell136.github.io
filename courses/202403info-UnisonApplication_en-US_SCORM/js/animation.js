// Infographic Animations

/* Box 1 */

/* Offset only needed on the first screen */
/* Calculates the offset so they don't start offscreen */
var offestHeight = $("#box_1").innerHeight();
var offsetPercent = Math.round((offestHeight / windowHeight -1) * -100) + "%";

//Repeat Cloud Background Section 1 only
var repeatBG1 = gsap.fromTo("#box_1 .bg", {xPercent:-2}, {duration: 10, xPercent:2, ease:"sine.inOut", repeat: -1, yoyo: true});

var box1_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_1",
        start: "top center",
        end: "bottom 60%",
        scrub:1.25
        /*onLeave: function(self) {
            self.disable();
            self.animation.progress(1);
        }*/
    }});
    box1_Timeline
    .from("#box_1 .full_img", {scale: 0, opacity:0, y:"25%"})

/* Box 2 */
var box2a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_2",
        start: "top center",
    }});
    box2a_Timeline
    .from("#box_2 .badge", {duration: 1, scale: .75, opacity:0, transformOrigin:"bottom center", rotationY:-360, ease:"back.out(1)"})
    .from("#box_2 h1, #box_2 p", {duration:.75, opacity:0, stagger:.25, yPercent:10, ease:"sine.out"}, ">-.25")

/* Background Repeat Animations */
let repeatClouds = gsap.utils.toArray(".cloud");
repeatClouds.forEach((el,i) => {
    if (i % 2 === 0) { 
        //even
        gsap.fromTo(el, {xPercent:2}, {duration: 10, xPercent:-2, ease:"sine.inOut", repeat: -1, yoyo: true});
    } else {
        gsap.fromTo(el, {xPercent:-2}, {duration: 10, xPercent:2, ease:"sine.inOut", repeat: -1, yoyo: true});
    }
    
});

/* Box 3 */
var box3a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3",
        start: "top bottom",
        end: "top center",
        scrub:1.25
    }});
    box3a_Timeline
    .from("#box_3 .balloon", {scale: 0, opacity:0, y:"25%"})

var box3b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3 .top_text",
        start: "top center",
    }});
    box3b_Timeline
    .from("#box_3 .top_text > h1, #box_3 .top_text > p", {duration:.75, opacity:0, stagger:.25, yPercent:10, ease:"sine.out"})

let flexContainers = gsap.utils.toArray("#box_3 .flex");
flexContainers.forEach(el => {

    var icon = $(el).find('.left_half');
    var text = $(el).find('.right_half h3, .right_half p');

    gsap.set(icon, {transformOrigin: "50% 50%", transformPerspective: 800})

    var tl = gsap.timeline({scrollTrigger: {
        trigger: el,
        start: "top 60%"
    }});
    tl
    .fromTo(icon, {rotationX: 270, opacity: 0}, {duration: 1, rotationX: 0, opacity: 1, ease: "back.out(1.3)"})
    .from(text, {duration: 0.75, yPercent:10, stagger:.15, opacity: 0, ease:"sine.out"}, "<+0.25")

});

/* Box 4 */
var box4a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_4",
        start: "top bottom",
        end: "top center",
        scrub:1.25
    }});
    box4a_Timeline
    .from("#box_4 .balloon", {scale: 0, opacity:0, y:"25%"})

var hand_start = gsap.fromTo("#box_4 .button_cont .click_hand", {scale: 0.75, transformOrigin:"top center"}, {duration:1, scale: 1, yoyo: true, repeat: -1, ease:"sine.inOut", paused: true});
var hand_stop = gsap.to("#box_4 .button_cont .click_hand", {opacity:0, duration:0.35, display:"none", paused: true, onComplete: function() {
    hand_start.pause();
}})

var box4b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_4 .top_text",
        start: "top center"
    }});
    box4b_Timeline
    .from("#box_4 .top_text > h1, #box_4 .top_text > p", {duration:.75, opacity:0, stagger:.25, yPercent:10, ease:"sine.out"})
    .call( function() { hand_start.play(); }, null, "+=0.01")
    .from("#box_4 .button", {duration: 1, x:"100%", opacity:0, rotation:540, stagger:{from:"left",each:.25}, ease:"back.out(.5)", onComplete:function(){
        $("#box_4 .button_cont.noClick").removeClass("noClick");
    }}, ">-.25")
    .from("#box_4 .button_cont .click_hand", {duration: .75, opacity:0, ease:"circ.out"}, ">-.25")


/* Box 5 */
var box5a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_5",
        start: "top bottom",
        end: "top center",
        scrub:1.25
    }});
    box5a_Timeline
    .from("#box_5 .balloon", {scale: 0, opacity:0, y:"25%"})

var box5b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_5 .top_text",
        start: "top center",
    }});
    box5b_Timeline
    .from("#box_5 .top_text > h1, #box_5 .top_text > p", {duration:.75, opacity:0, stagger:.25, yPercent:10, ease:"sine.out"})

var box5c_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_5",
        start: "center center",
        end: "bottom center",
        scrub:1.25
    }});
    box5c_Timeline
    .from("#box_5 .laptop", {scale: 0, opacity:0, y:"25%"})


/* Box 6 */
var box6a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_6",
        start: "top center",
    }});
    box6a_Timeline
    .from("#box_6 .badge", {duration: 1, scale: .75, opacity:0, transformOrigin:"bottom center", rotationY:-360, ease:"back.out(1)"})
    .from("#box_5 .sparkle", {duration: 1, scale: .75, opacity:0, transformOrigin:"bottom center",}, "<")
    .from("#box_6 h1, #box_6 p", {duration:.75, opacity:0, stagger:.25, yPercent:10, ease:"sine.out"}, ">-.25")
        .to("#pause", {duration:.5})
    .from("#quiz_box", {duration:.75, opacity:0, ease:"sine.out"})


// Disable animations so they don't run before preloader vanishes -------------
var stArray = ScrollTrigger.getAll()

stArray.forEach(function(ST) {
  ST.disable()
});

