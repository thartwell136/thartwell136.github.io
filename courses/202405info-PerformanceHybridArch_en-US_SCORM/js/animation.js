// Infographic Animations


/* Box 1 */
var box1_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_1 .wrapper",
        start: "top center"
    }});
    box1_Timeline
    .from("#box_1 .text > *", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05})

/* Box 2 */
var box2_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_2 .wrapper",
        start: "top center"
    }});
    box2_Timeline
    .from("#box_2 .text > *", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05})

/* Box 3 */
var box3_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3 .wrapper",
        start: "top center"
    }});
    box3_Timeline
    .from("#box_3 .flex .text .top_text > *", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05})

/* Box 3b */
var box3b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3 .flex .quote",
        start: "top center"
    }});
    box3b_Timeline
    .from("#box_3 .flex .quote", {duration: 0.75, x: -20, opacity:0, ease: "power3", stagger: 0.15})

/* Box 3c */
var box3c_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_3 .flex .right_half",
        start: "top center"
    }});
    box3c_Timeline
    .from("#box_3 .flex .right_half", {duration: 1, xPercent:100, opacity:0, ease: "power3"})
    .from("#box_3 .chip_1, #box_3 .chip_2, #box_3 .chip_3, #box_3 .chip_4", {duration: 3, x:"+=61%", y:"-=56%", ease: "power2", stagger:.5}, "<+.5")

/* Box 4 */
var box4_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_4 .wrapper",
        start: "top center"
    }});
    box4_Timeline
    .set("#box_4 .note_box", {transformOrigin: "50% 50%", transformPerspective: 800, backfaceVisibility:"visible"})

    .from("#box_4 .note_box", {duration: 1, rotationX:-360, opacity:0, ease: "power3"}, ">+.15")

/* Box 5 */
var box5_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_5 .wrapper",
        start: "top center"
    }});
    box5_Timeline
    .set("#box_5 .right_half .text", {transformOrigin: "50% 50%", transformPerspective: 800, backfaceVisibility:"visible"})

    .from("#box_5 .top_text > *", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05})
    .from("#box_5 .left_half", {duration: 1, scale:.5, opacity:0, ease: "power3"})
    .from("#box_5 .truck", {duration: 1, x:"-15%", y:"-15%", opacity:0, ease: "power3"}, ">-.25")
    .from("#box_5 .forklift", {duration: 1, x:"15%", y:"15%", opacity:0, ease: "power3"}, "<+.25")

    .from("#box_5 .right_half .text", {duration: 1, rotationY:-360, opacity:0, ease: "power3"}, "<+.5")

/* Box 5b */
var box5b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_5 .bottom_text",
        start: "top center"
    }});
    box5b_Timeline
    .from("#box_5 .bottom_text > *", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05})

/* Box 6 */
var box6_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_6 .wrapper",
        start: "top center"
    }});
    box6_Timeline
    .set("#box_6 .right_half .text", {transformOrigin: "50% 50%", transformPerspective: 800, backfaceVisibility:"visible"})

    .from("#box_6 .top_text > *", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05})
    .from("#box_6 .left_half", {duration: 1, scale:.5, opacity:0, ease: "power3"})
    .from("#box_6 .forklift", {duration: 1, x:"15%", y:"15%", opacity:0, ease: "power3"}, ">-.25")
    .from("#box_6 .truck_1,#box_6 .truck_2,#box_6 .truck_3", {duration: 1, x:"-20%", y:"15%", opacity:0, ease: "power3", stagger:.25}, "<+.25")

    .from("#box_6 .right_half .text", {duration: 1, rotationY:-360, opacity:0, ease: "power3"}, "<+.5")

/* Box 6b */
var box6b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_6 .bottom_text",
        start: "top center"
    }});
    box6b_Timeline
    .set("#box_6 .badge_cont .badge", {transformOrigin: "50% 50%", transformPerspective: 800, backfaceVisibility:"visible"})

    .from("#box_6 .bottom_text > *:not(.badge_cont)", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05})

    .from("#box_6 .badge_cont .badge", {duration: 1, x: -20, rotationY:-360, opacity:0, ease: "power3"})
    .from("#box_6 .badge_cont .text", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05}, "<+.15")

/* Box 7 */
var box7_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_7 .wrapper",
        start: "top center"
    }});
    box7_Timeline
    .from("#box_7 .top_text > *", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05})

/* Box 7b */
var box7b_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_7 .mid_cont",
        start: "top center"
    }});
    box7b_Timeline
    .set("#box_7 .mid_cont .note", {transformOrigin: "50% 50%", transformPerspective: 800, backfaceVisibility:"visible"})

    .from("#box_7 .mid_cont .note", {duration: 1, rotationX:-360, opacity:0, ease: "power3"}, ">+.01")

/* Box 7c */
var box7c_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_7 .bottom_text",
        start: "top center"
    }});
    box7c_Timeline
    .from("#box_7 .computer", {duration: 1, y:"50%", scale:.5, opacity:0, ease: "power3"})
    .from("#box_7 .bottom_text > p", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05}, ">-.25")


/* Box 8 */
var box8_Timeline = gsap.timeline({scrollTrigger: {
        trigger: "#box_8 .wrapper",
        start: "top center"
    }});
    box8_Timeline
    .set("#box_8 .badge, #quiz_box", {transformOrigin: "50% 50%", transformPerspective: 800, backfaceVisibility:"visible"})
    .from("#box_8 .badge", {duration: 1, y: 20, rotationY:-360, opacity:0, ease: "power3"}, ">+.01")
    .from("#box_8 .top_text > *:not(.badge,#quiz_box)", {duration: 0.75, y: 20, opacity:0, ease: "power3", stagger: 0.05}, "<+.15")
    .from("#quiz_box", {duration: 1, y: 20, rotationY:-360, opacity:0, ease: "power3"})



// Disable animations so they don't run before preloader vanishes -------------
var stArray = ScrollTrigger.getAll()

stArray.forEach(function(ST) {
  ST.disable()
});
