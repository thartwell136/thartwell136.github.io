// ----------------------------------------
//  Minesweeper Game Interactivity
// ----------------------------------------

var completed = false;
var CompletionDeferred = $.Deferred();

$(".instructions_close").click(function() {
    intro_tl.play();
});

// Quitting the game ---------------------
$(".course_quit").click(function() {
    //console.log("quitting");
    reportGameClose();
});

// Intro Timeline -----------------------------------
var intro_tl = gsap.timeline({paused: true});
    intro_tl
        .from("#instructions_wrapper .instructions_wrapper_outer", {duration: 0.5, opacity:0, scale:0, transformOrigin:"center center"})
    .addPause()
        .to("#instructions_wrapper", {duration: 0.5, opacity:0, display:"none"})

// Completion Timeline -----------------------------------
var completion_tl = gsap.timeline({paused: true, onStart:function() {
    $(".minesweeper").addClass('blocker');
}});
    completion_tl
        .from("#game_close_wrapper, #game_message_wrapper", {duration: 0.01, display:"none"})
    .from("#game_message_wrapper .message_inner", {duration: 0.5, opacity:0, scale:0, transformOrigin:"center center"})
    .from("#game_close", {duration: 0.5, yPercent:15, opacity:0})


/* -----------------------------------------------------
    Window resize functions
-------------------------------------------------------- */
$(window).resize(function() {
    windowHeight = $(window).height(),
    windowWidth = $(window).width();
    resizeThrottled();
});

var resizeThrottled = debounce(function() {
    //console.log("resize"); 
    //imgSrcReplace();
}, 250)