// Infographic Animations

/* Match Media Declare */
let mm = gsap.matchMedia();
let mmWidth = "(min-width: 1025px)";

/* Randomizer Function */
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Repeating Clouds Animations */
let repeatClouds = gsap.utils.toArray(".clouds");
repeatClouds.forEach((cloud,i) => {
    
    /* gets random starting value */
    var randomX = randomIntFromInterval(3, 6);
    var randomY = randomIntFromInterval(-2,2);
    /* choise either the negative or position version of randomX */
    var animateX = Math.random() < 0.5 ? randomX : (randomX * -1);
    var animateY = Math.random() < 0.5 ? randomY : (randomY * -1);
    /* gets the inverse of animateX */
	var animateX2 = animateX * -1;
    var animateY2 = animateY * -1;
    
    var duration = randomIntFromInterval(10, 15);
    
    mm.add(mmWidth, () => {
        gsap.fromTo(cloud, {x:(animateX + "%")}, {duration: duration, x:(animateX2 + "%"), ease:"sine.inOut", repeat:-1, yoyo: true});
    });    
    
    var tl = gsap.timeline({
        scrollTrigger: {
        trigger: cloud,
        start: "top center",
        end: "bottom top",
        scrub:3
    }});
    tl
    .to(cloud, {duration:3, y:"-8%"}, "0")
    
});

let wrapper = gsap.utils.toArray(".section .wrapper");
wrapper.forEach((wrapper,i) => {
    
    var tl = gsap.timeline({
        scrollTrigger: {
        trigger: wrapper,
        start: "top center",
        end: "bottom top",
        scrub:5
    }});
    tl
    .to(wrapper, {duration:5, y:"-4%"}, "0")
    
});


/* BOX 1 */
var box1a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_1 .w1",
        start: "top center" // play timeline when top of #box_1 hits center of viewport. Can also use %ages with 0% being top of the viewport
    }});
    box1a_Timeline
    .from("#box_1 .text_box", {duration:1.25, transformOrigin:"bottom center -800px", rotationX:90, opacity:0, ease:"expo.out"})
    .from("#box_1 .w1 .cloud_1", {duration: 1.25, opacity:0, ease:"circ.out"})
    .from("#box_1 .w1 .device", {duration: 1.25, y:"100%", opacity:0, ease:"circ.out", onComplete:function(){
        mm.add(mmWidth, () => {
            gsap.to("#box_1 .w1 .device", {duration:6, scale:.9, transformOrigin:"bottom", ease:"sine.inOut", repeat:-1, yoyo: true});
        });         
    }}, ">-.5")

var box1b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_1 .w2",
        start: "top center"
    }});
    box1b_Timeline
    .from("#box_1 .w2 .text", {duration:1, yPercent:25, opacity:0, ease:"circ.out"})
    .from("#box_1 .w2 .cloud_2", {duration: 1.25, opacity:0, ease:"circ.out"})
    .from("#box_1 .w2 .device", {duration: 1.25, y:"100%", opacity:0, ease:"circ.out", onComplete:function() {
        mm.add(mmWidth, () => {
            gsap.to("#box_1 .w2 .device", {duration:6, scale:.9, transformOrigin:"bottom", ease:"sine.inOut", repeat:-1, yoyo: true});
        });
    }}, ">-.5")

/* BOX 3 */
var box3a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3 .w1",
        start: "top center"
    }});
    box3a_Timeline
    .from("#box_3 .text_box", {duration:1.25, transformOrigin:"bottom center -800px", rotationX:-90, opacity:0, ease:"expo.out"})
    .from("#box_3 .w1 .cloud_1, #box_3 .w1 .cloud_2", {duration: 1.25, stagger:.5, opacity:0, ease:"circ.out"})
    .from("#box_3 .w1 .device", {duration: 1.25, x:"-50%", scale:0, transformOrigin:"left", opacity:0, ease:"circ.out", onComplete:function(){
        mm.add(mmWidth, () => {
            gsap.to("#box_3 .w1 .device", {duration:6, scale:.9, transformOrigin:"left", ease:"sine.inOut", repeat:-1, yoyo: true});
        });
    }}, "<+.75")

var box3b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3 .w2",
        start: "top center"
    }});
    box3b_Timeline
    .from("#box_3 .button", {duration:1.25, stagger:.25, yPercent:50, rotationY:-360, opacity:0, ease:"expo.out", onComplete: function() {
        $("#box_3 .noClick").removeClass("noClick");
    }})
    .from("#box_3 .w2 .cloud_3", {duration: 1.25, opacity:0, ease:"circ.out"})

/* BOX 4 */
var box4_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_4 .wrapper",
        start: "top center"
    }});
    box4_Timeline
    .from("#box_4 .top_text", {duration:1, yPercent:25, opacity:0, ease:"circ.out"})
    .from("#box_4 .text_cont", {duration:1.25, transformOrigin:"bottom center -800px", rotationX:-90, opacity:0, ease:"expo.out", onComplete:function(){
        //Refresh specific scrolltriggers only
        var scrolltriggers = ScrollTrigger.getAll();
        scrolltriggers.forEach((trigger,i) => {
            if ( $(trigger.trigger).hasClass("clouds") && $(trigger.trigger).hasClass("refresh") ) {
                trigger.refresh();
            }            
        });
    }})
    .from("#box_4 .right_side", {duration:1.25, x:"100%", opacity:0, ease:"expo.out"}, "<+1.5")
    .from("#box_4 .cloud_1, #box_4 .cloud_2", {duration: 1.25, stagger:.5, opacity:0, ease:"circ.out"}, "<+.25")

/* BOX 5 */
var box5_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_5 .wrapper",
        start: "top center"
    }});
    box5_Timeline
    .from("#box_5 .text_box", {duration:1.25, transformOrigin:"bottom center -800px", rotationX:90, opacity:0, ease:"expo.out"})
    .from("#box_5 .cloud_1, #box_5 .cloud_2", {duration: 1.25, stagger:.5, opacity:0, ease:"circ.out"})
    .from("#box_5 .text_box_2", {duration: 1.25, stagger:0, x:gsap.utils.wrap(["-50%", "50%"]), opacity:0, ease:"circ.out"}, "<+.25")
    .from("#box_5 .cloud_3", {duration: 1.25, stagger:.5, opacity:0, ease:"circ.out"}, ">-.5")


/* BOX 6 */
/* pulled from 202210html-SeeTheDifference */
function cubeSwitchAnim(targetOut, targetIn) {
    // Gwen Note: updated Nov 2023 because original 3D cube anim was crashing for some versions of iOS
    if (courseOptions.isIOS || windowWidth <= 450) {
        var tl = gsap.timeline()
        tl
        //.to(targetOut, {duration: 0.65, xPercent: -100, ease: "sine.out"}, 0)
        //.from(targetIn, {duration: 0.65, xPercent: 100, ease: "sine.out"}, 0)

        return tl

    } else {
        var tl = gsap.timeline({defaults: {duration: 1.5, ease: "none"}})
        tl
        .set(targetOut, {transformOrigin: "100% 50%"})
        .set(targetIn, {transformOrigin: "0% 50%", opacity: 0})
        .to(targetOut, {duration: 0.5, xPercent: -50, z: "-200px", rotationY: -45, ease: "sine.in"}, 0)
        .to(targetOut, {duration: 0.5, xPercent: -100, rotationY: -90, ease: "sine.out"}, 0.5)
    
        .fromTo(targetIn,
            {xPercent: 100, z: "0px", rotationY: 90, ease: "sine.in"},
            {duration: 0.5, xPercent: 50, z: "-200px", rotationY: 45, ease: "sine.in"}, 0)
        .to(targetIn, {duration: 0.5, xPercent: 0, z: "0px", rotationY: 0, ease: "sine.out"}, 0.5)

        .set(targetIn, {opacity: 1}, 0.325) // workaround for FF bug with backface-visibilty

        return tl
    }
}

var box_6_tl = gsap.timeline({paused: true, onReverseComplete: function() {}
    });

    box_6_tl       

        .addPause("label_start")

    .add(cubeSwitchAnim("#box_6a","#box_6b"))

        .addPause("label_end")


mm.add("(min-width: 500px)", () => {
    
    ScrollTrigger.create({
        trigger: "#box_6",
        start: "center center",
        onEnter: function(data) {
            box_6_tl.play("label_start");
        },
        onLeaveBack: function(data) {
            box_6_tl.reverse("label_end");
        }
    });
    
});

mm.add("(max-width: 500px)", () => {
    
    var box6a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_6a .wrapper",
        start: "top center"
    }});
    box6a_Timeline
    .from("#box_6a", {duration:1, xPercent: 100, opacity:0, ease: "sine.out"})
    
    var box6b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_6b .wrapper",
        start: "top center"
    }});
    box6b_Timeline
    .from("#box_6b", {duration:1, xPercent: -100, opacity:0, ease: "sine.out"})
    
});

/* BOX 7 */
var box7_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_7 .wrapper",
        start: "top 60%"
    }});
    box7_Timeline
    .from("#box_7 .text_cont", {duration:1.25, transformOrigin:"bottom center -800px", rotationX:-90, opacity:0, ease:"expo.out", onComplete:function() {
        //Refresh specific scrolltriggers only
        var scrolltriggers = ScrollTrigger.getAll();
        scrolltriggers.forEach((trigger,i) => {
            if ( $(trigger.trigger).hasClass("clouds") && $(trigger.trigger).hasClass("refresh") ) {
                trigger.refresh();
            }            
        });
    }})
    .from("#box_7 .left_side", {duration:1.25, x:"-100%", opacity:0, ease:"expo.out"}, "<+1.5")
    .from("#box_7 .cloud_3, #box_7 .cloud_4", {duration: 1.25, stagger:.5, opacity:0, ease:"circ.out"}, "<+.25")

/* BOX 8 */
var box8_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_8 .wrapper",
        start: "top center"
    }});
    box8_Timeline
    .from("#box_8 .cloud_2, #box_8 .cloud_3", {duration: 1.25, stagger:.5, opacity:0, ease:"circ.out"})
    .from("#box_8 .device_1, #box_8 .device_2, #box_8 .device_3", {duration: 1.25, stagger:.25, y: "50%", opacity:0, ease:"circ.out", onComplete:function(){
        mm.add(mmWidth, () => {
            gsap.to("#box_8 .device_2", {duration:6, scale:.9, transformOrigin:"bottom", ease:"sine.inOut", repeat:-1, yoyo: true});
            gsap.to("#box_8 .device_3", {duration:7, scale:.9, transformOrigin:"bottom", delay:.5, ease:"sine.inOut", repeat:-1, yoyo: true});
            gsap.to("#box_8 .device_1", {duration:8, scale:.9, transformOrigin:"bottom", delay:1, ease:"sine.inOut", repeat:-1, yoyo: true});
        });        
    }}, ">-.5")
    .from("#box_8 .cloud_1", {duration: 1.25, stagger:.5, opacity:0, ease:"circ.out"}, ">-.75")
    .from("#box_8 .text_box", {duration:1.25, transformOrigin:"bottom center -800px", rotationX:-90, opacity:0, ease:"expo.out"}, "<")


// Disable animations so they don't run before preloader vanishes -------------
var stArray = ScrollTrigger.getAll()

stArray.forEach(function(ST) {
  ST.disable()
});
