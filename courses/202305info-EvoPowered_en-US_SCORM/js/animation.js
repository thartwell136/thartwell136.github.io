// Infographic Animations

/* BOX 1 */
var box1_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_1",
        start: "top center" // play timeline when top of #box_1 hits center of viewport. Can also use %ages with 0% being top of the viewport
    }});
    box1_Timeline
    .from("#box_1 .evo_cont", {duration: 1.5, scale:0, rotation:-360, rotationY:-360, ease:"back.out(.5)"})

var box1b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_1 .text",
        start: "top center"
    }});
    box1b_Timeline
    .from("#box_1 .text", {duration: .75, y:"50%", opacity:0, ease:"circ.out"})

/* BOX 2 */
var box2_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_2",
        start: "top center"
    }});
    box2_Timeline
    .from("#box_2 .img_cont", {duration: 1.25, scale:0, rotationY:-360, ease:"back.out(.5)"})
    .from("#box_2 .text", {duration: .75, x:"-25%", opacity:0, ease:"circ.out"}, ">-.75")

/* BOX 3 */
var box3_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3",
        start: "top center"
    }});
    box3_Timeline
    .from("#box_3 .img_cont", {duration: 1.25, scale:0, transformOrigin:"bottom left", ease:"back.out(.5)"})
    .from("#box_3 .text", {duration: .75, x:"25%", opacity:0, ease:"circ.out"}, ">-.75")

/* BOX 4 */
var hand_start = gsap.fromTo("#slider-nav .click_hand", {scale: 0.5, duration:.5}, {scale: 1, transformOrigin:"top left", yoyo: true, repeat: -1, ease: Sine.easeInOut, paused: true});
var hand_stop = gsap.to("#slider-nav .click_hand", {opacity:0, duration:0.35, display:"none", paused: true, onComplete: function() {
    hand_start.pause();
}})

var box4_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_4",
        start: "top center"
    }});
    box4_Timeline   
        .call( function() {
            $('#slider-nav .slick-slide.slick-current, #slider-nav .slick-slide.middle, #slider-nav .slick-slide.small').addClass("animate");
        }, null, "+=0.01")
    .from("#box_4 .top_box", {duration: 0.75, y:"25%", opacity:0, ease:"circ.out"})
    .from("#slider-nav", {duration: 0.75, opacity:0}, "<")
        .call( function() {
            hand_start.play();
            $('#slider-nav .slick-slide.animate').removeClass("animate");
        }, null, "+=0.01")
    .from("#slider-text", {duration: 0.75, y:"25%", opacity:0, ease:"circ.out"}, ">+.5")
    .from("#slider-nav .click_hand, #slider-nav .leftarrow, #slider-nav .rightarrow", {duration:.5, opacity:0}, ">+.5")

/* BOX 5 */
var box5_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_5",
        start: "top center"
    }});
    box5_Timeline
    .from("#box_5 .img_cont", {duration: 1.25, scaleX:0, transformOrigin:"center left", ease:"back.out(.5)"})
    .from("#box_5 .text", {duration: .75, y:"25%", opacity:0, ease:"circ.out"}, ">-.75")
    .from("#quiz_box", {duration: .5, opacity:0, ease:"circ.out"}, ">-.25")


// Disable animations so they don't run before preloader vanishes -------------
var stArray = ScrollTrigger.getAll()

stArray.forEach(function(ST) {
  ST.disable()
});

