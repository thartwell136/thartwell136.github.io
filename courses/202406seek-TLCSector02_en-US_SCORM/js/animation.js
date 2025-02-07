
// Intro and instructions  -----------------------------------

var intro_tl = gsap.timeline({paused: true, delay:0, onComplete: function() {
		magDrag[0].enable();
	}});
    intro_tl    

    .from("#instructions_wrapper", {duration: 0.35, opacity:0, display:"none"})
    .from("#instructions_wrapper .instructions_wrapper_outer", {duration: 0.25, opacity:0, y: 20})

        .addPause()

    .to("#instructions_wrapper .instructions_wrapper_outer", {duration: 0.35, y: 20})
    .to("#instructions_wrapper", {duration: 0.35, opacity:0, display: "none"}, "<")


$(".instructions_close").click(function() {
    intro_tl.play();
});
    



// Show congrats -----------------------------------
var completion_tl = gsap.timeline({paused: true, delay:.5, onComplete:function() {
    $("#congrats_wrapper .instructions_wrapper_outer").addClass("allowScroll");
}});
    completion_tl
    .from("#congrats_wrapper, .seek_wrapper > .base.completed", {duration: 0.5, opacity:0, display:"none"})
        .to("#pause", {duration: 0.5})
    .from("#congrats_wrapper .instructions_text h1, #congrats_wrapper .instructions_text p.p18", {duration: .5, stagger:.25, yPercent:25, opacity:0})
    .from("#congrats_wrapper .instructions_text img", {duration: 1, opacity:0, scale:0, ease:"back.out(1.25)"}, "<+.75")
    .from("#congrats_wrapper .quit_cont", {duration: .5, yPercent:25, opacity:0}, "<+.75")