// Infographic Animations

/* Box 1 */
var box1_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_1 .bg",
        start: "top center",
        end: "bottom 40%",
        scrub:1.25
    }});
    box1_Timeline
    .from("#box_1 .bg", {y:"10%", scale:1.1, opacity:0})

/* Box 2 */
var box2a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_2 .badge",
        start: "top center",
    }});
    box2a_Timeline
    .from("#box_2 .badge", {duration: 1, xPercent:gsap.utils.wrap([-25,25]), scale:.8, transformOrigin:gsap.utils.wrap(["bottom left", "bottom right"]), stagger:0, opacity:0, ease:"back.out(1)"})
    .from("#box_2 h1, #box_2 p", {duration:.75, opacity:0, stagger:.25, yPercent:10, ease:"sine.out"}, ">-.25")

/* Box 3 */
var boxerTL = gsap.timeline({paused:true, repeat:-1, repeatDelay:2});
        boxerTL    
		.to("#box_3 .boxer_bg", {duration: 5, scale:1.05, ease:"sine.inOut"})
        .to("#box_3 .boxer_bg", {duration: 5, scale:1, ease:"sine.inOut"}, "+=2")

/* Box 3 */
var box3a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3 .splatter.top",
        start: "top bottom",
        end: "bottom top",
        scrub:1.25,
        //https://gsap.com/community/forums/topic/30722-how-to-properly-reverse-a-repeating-hover-animation-on-mouseleave/
        onEnterBack: ({progress, direction, isActive}) => boxerTL.totalTime(boxerTL.rawTime() % 6).reverse()
    }});
    box3a_Timeline
    .from("#box_3 .boxer_bg", {xPercent:-5, yPercent:5, onComplete:function() {
        boxerTL.play();
    }})

/*var box3a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3 .splatter.top",
        start: "top bottom",
        end: "bottom top",
        scrub:1.25
    }});
    box3a_Timeline
    .from("#box_3 .splatter.top", {transformOrigin:"top", scaleY:.5})
    .from("#box_3 .boxer_bg", {xPercent:-5, yPercent:5}, "<")*/

let roundContainers = gsap.utils.toArray("#box_3 .round_cont");
roundContainers.forEach(el => {

    var top_img = $(el).find('.full_img');
    var text = $(el).find('.text_cont h1, .text_cont h2, .text_cont h3, .text_cont p');

    gsap.set(top_img, {transformOrigin: "50% 50%", transformPerspective: 800, backfaceVisibility:"visible"})

    var tl = gsap.timeline({scrollTrigger: {
        trigger: el,
        start: "center center"
    }});
    
    if (top_img.hasClass("laptop")) {
        tl.fromTo(top_img, {scale:.5, rotationX:-360, opacity: 0}, {duration: 1, scale: 1, rotationX:0, opacity: 1, ease: "back.out(1.5)"})
    } else {
        tl.fromTo(top_img, {scale:1.5, rotationY:-360, opacity: 0}, {duration: 1, scale: 1, rotationY:0, opacity: 1, ease: "back.out(1.5)"})
    }
    tl    
    .from(text, {duration: 0.75, yPercent:10, stagger:.25, opacity: 0, ease:"sine.out"}, "<+0.25")

});

let bannerContainers = gsap.utils.toArray("#box_3 .banner");
bannerContainers.forEach(el => {

    var text = $(el).find('.inner p');
    
    gsap.set(el, {transformOrigin: "50% 50%", transformPerspective: 800, backfaceVisibility:"visible"})

    var tl = gsap.timeline({scrollTrigger: {
        trigger: el,
        start: "center center"
    }});
    tl
    .fromTo(el, {scaleX:0, rotationX:-360, opacity: 0}, {duration: 1, scaleX:1, rotationX:0, opacity: 1, ease: "sine.out"})
    .from(text, {duration: 0.75, yPercent:10, stagger:.25, opacity: 0, ease:"sine.out"}, "<+0.65")

});

let slideContainers = gsap.utils.toArray("#box_3 .slider_outer");
slideContainers.forEach((el,i) => {

    var tl = gsap.timeline({scrollTrigger: {
        trigger: el,
        start: "center center"
    }});
    
    if (i % 2 === 0) { 
        //even
        tl.from(el, {duration: 1, xPercent:100, opacity:0, ease: "back.out(1.25)", onComplete: function() {
            var tappyHand = $(el).find('.tappy_hand');
            gsap.to(tappyHand, {duration: .5, opacity:1});
        }})
    } else {
        tl.from(el, {duration: 1, xPercent:-100, opacity:0, ease: "back.out(1.25)", onComplete: function() {
            var tappyHand = $(el).find('.tappy_hand');
            gsap.to(tappyHand, {duration: .5, opacity:1});
        }})
    }
    
    if (i == 2) { 
        tl.from("#box_3 .legal_callout", {duration: 0.75, yPercent:10, stagger:.25, opacity: 0, ease:"sine.out"})
    }
});

let flexContainers = gsap.utils.toArray("#box_3 .flex");
flexContainers.forEach(el => {

    var icon = $(el).find('.full_img');
    var text = $(el).find('.text h4, .text p, .full_width p');
    var start = "center center";
    
    //Fix for mobile when they stack
    if (screenWidth <= 768) {
        start = "top center";
    }

    gsap.set(icon, {transformOrigin: "50% 50%", transformPerspective: 800})

    var tl = gsap.timeline({scrollTrigger: {
        trigger: el,
        start: start
    }});
    tl
    .fromTo(icon, {scale:1.5, opacity: 0}, {duration: 1, scale:1, opacity: 1, stagger:.25, ease: "back.out(1.5)"})
    .from(text, {duration: 0.75, yPercent:10, stagger:.15, opacity: 0, ease:"sine.out"}, "<+0.25")

});


/* Box 4 */
var box4a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3 .splatter.bottom",
        start: "top bottom",
        end: "bottom top",
        scrub:1.25
    }});
    box4a_Timeline
    .from("#box_3 .splatter.bottom", {transformOrigin:"bottom", scaleY:.5})

var box4b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_4 .top_text",
        start: "top center"
    }});
    box4b_Timeline
    .from("#box_4 .top_text *", {duration: 0.75, yPercent:10, stagger:.15, opacity: 0, ease:"sine.out"})

var boxer2TL = gsap.timeline({paused:true, repeat:-1, repeatDelay:2});
        boxer2TL    
		.to("#box_4 .flex .left_half", {duration: .5, yPercent:3, ease:"sine.in"})
        .to("#box_4 .flex .left_half", {duration: 1.5, yPercent:-6, ease:"sine.Out"})
        .to("#box_4 .flex .left_half", {duration: 1.25, yPercent:0, ease:"sine.inOut"})

var box4c_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_4 .flex",
        start: "top 60%",
        end: "60% center",
        scrub:.75,
        //https://gsap.com/community/forums/topic/30722-how-to-properly-reverse-a-repeating-hover-animation-on-mouseleave/
        onEnterBack: ({progress, direction, isActive}) => boxer2TL.totalTime(boxer2TL.rawTime() % 3.25).reverse()
    }});
    box4c_Timeline
    .from("#box_4 .flex .left_half img", {xPercent:-10, yPercent:5, opacity: 0, onComplete:function() {
        boxer2TL.play();
    }})

/*var box4c_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_4 .flex",
        start: "top center",
        end: "bottom center",
        scrub:.75
    }});
    box4c_Timeline
    .from("#box_4 .flex .left_half img", {xPercent:-10, yPercent:5, opacity: 0})*/

var box4d_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_4 .flex",
        start: "top center",
    }});
    box4d_Timeline
    .from("#box_4 .quote p", {duration: 0.75, xPercent:10, stagger:.15, opacity: 0, ease:"sine.out"})


/* Box 5 */
var box5a_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_5 .splatter.top",
        start: "top bottom",
        end: "bottom top",
        scrub:1.25
    }});
    box5a_Timeline
    .from("#box_5 .splatter.top", {transformOrigin:"top", scaleY:.5})

var box5b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_5",
        start: "top center",
    }});
    box5b_Timeline
    .from("#box_5 .badge", {duration: 1, xPercent:gsap.utils.wrap([-25,25]), scale:.8, transformOrigin:gsap.utils.wrap(["bottom left", "bottom right"]), stagger:0, opacity:0, ease:"back.out(1)"})
    .from("#box_5 h1, #box_5 p", {duration:.75, opacity:0, stagger:.25, yPercent:10, ease:"sine.out"}, ">-.25")
    .from("#quiz_box", {duration:.75, opacity:0, ease:"sine.out"}, "+=0.5")


// Disable animations so they don't run before preloader vanishes -------------
var stArray = ScrollTrigger.getAll()

stArray.forEach(function(ST) {
  ST.disable()
});

