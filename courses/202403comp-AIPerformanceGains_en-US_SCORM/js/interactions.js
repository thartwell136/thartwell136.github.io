/* ------------------------------
             NOTES

  * Search for "DEV-UPDATE" to find code you need to customize for your course. Check this file, animation.js and index.html. 

  * Do not change the following id/class names (or if you do, make sure you know what you're doing):

   #main_page
   #hub
   #summary
   .spoke
   .return_button
 ------------------------------ */


/* ------------------------------
             SETUP
 ------------------------------ */

// main config object for main page and all spokes
// DEV-UPDATE the number of spokes if needed, and the div ID for each spoke if you changed it
// Do not change the spoke property names (eg, spoke1, spoke2)
var pageIndex = {
    main_page: {
        num: 0,
        id: "main_page",
    },
    spoke1: {
        num: 1,
        id: "spoke_1",
        completed: false
    },
    spoke2: {
        num: 2,
        id: "spoke_2",
        completed: false
    },
    spoke3: {
        num: 3,
        id: "spoke_3",
        completed: false
    }
}

var currentPage = "main_page", // current page the user is on
    lastVisitedPage = "", // last page the user viewed
    courseComplete = false, // has user completed all spokes
    numOfSpokes = Object.keys(pageIndex).length - 1; // number of spokes in the course, not counting main page.


// Set up dom references to commonly targeted divs.
var $main_wrapper = document.getElementById('main_wrapper'),
    $hub = document.getElementById('hub');


/* ------------------------------
        NAVIGATING BETWEEN
          HUB AND SPOKES
 ------------------------------ */

// Function can be called with either spoke name or number. code is based on the name.
function spokeSwitch(page) {

    if (typeof page == "number") {
        page = spokeNumToName(page)
    }

    lastVisitedPage = currentPage;
    currentPage = page;

    if (page == "main_page") {

        var tl = gsap.timeline({onComplete: function () {
            if (courseComplete == true) {
                showEnding({scrollDown: true});
            }
            refresh();
        }});
            tl
            .to(".spoke", 0.15, {opacity:0, display:"none"})
            .to("#main_page", 0.05, {display:"block"})
            .call(function() {
                $hub.scrollIntoView();
            })
            .to("#main_page", 0.25, {opacity:1})

    } else {

        var target = "#" + pageIndex[page].id;

        var tl = gsap.timeline({onComplete: refresh});
            tl
            .to("#main_page, .spoke", 0.15, {opacity:0, display:"none"})
            .to(target, 0.05, {display:"block"})
            .call(scrollToTop, null, null, "+=0.06")
            .to(target, 0.25, {opacity:1}, "+=0.05")
    }


    // update nav menu
    $(".nav-current").removeClass("nav-current");

    $("#nav_menu").children().eq( pageIndex[currentPage].num ).addClass("nav-current")

}

// This function is called in spokeSwitch(), and makes sure the content of the active spoke is ready for user interaction.
// DEV-UPDATE with any custom updates or refreshes needed.
function refresh() {
    //console.log("refresh: ", currentPage);

    // disable all anims
    masterSTArray.forEach(function(ST) {
        ST.disable()
    });

    // spoke specific code
    if (currentPage == "main_page") {

        mainSTarray.forEach(function(ST) {
            ST.enable()
        });  

    } else if (currentPage == "spoke1") {

        spoke1STarray.forEach(function(ST) {
            
            //fix for match media
            if (typeof ST === "undefined") {
                return;
            } else {
                ST.enable()
            }            
            
        });  
        
        $("#slider_1_2").slick('setPosition');

    } else if (currentPage == "spoke2") {

        spoke2STarray.forEach(function(ST) {
            ST.enable()
        });  
        
        $("#slider_2_4,#slider_2_5").slick('setPosition');

    } else if (currentPage == "spoke3") {

        spoke3STarray.forEach(function(ST) {
            ST.enable()
        });  
        
        $("#slider_3_2,#slider_3_3,#slider_3_4").slick('setPosition');

    }

    // This part is used to pause looping timelines or do other misc cleanup for the spoke the user just completed. You may not need to put anything here.
    if (lastVisitedPage == currentPage) {
        // do nothing

    } else if (lastVisitedPage == "spoke1") {
        //sample_tl.pause();
    }
    

    ScrollTrigger.refresh();
}


// Reveals the summary panel when the course is complete.
// accepts an object as a parameter, with the "scrollDown" property set to true or false.
function showEnding(param) {

    //console.log(param);

    var tl = gsap.timeline({onComplete: function() {
            if (param.scrollDown == true) {
                
                summarySTarray.forEach(function(ST) {
                    ST.enable()
                }); 
                
                document.getElementById("summary").scrollIntoView({ behavior: 'smooth'});                
            }
        }})
        tl
        .to("#summary", 0.05, {opacity:1, display: "block"})

}


/* ------------------------------
        CLICK EVENTS
 ------------------------------ */

/* Ensure the tappy hand animation is only set up once all sliders have initialized */
var sliderTotal = $('.slider').length;
var sliderCount = 1;

$('.slider').on('init', function(slick) {
    if (sliderCount == sliderTotal) {
        // Set up tappy hand anims
        document.querySelectorAll(".tappy_hand").forEach((el) => {
            el.anim = gsap.fromTo(el, {scale: 1, x: 0, y: 0}, {duration: 1, scale: 1.1, x: "8%", y: "20%", transformOrigin: "20% 20%", ease: "sine.inOut", repeat: -1, yoyo: true})
        });
    } else {
        sliderCount ++;
    }   
});

$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

    // get id for slider, save number at the end, & convert to number. note won't work if there are 10+ sliders!
    var num = slick.$slider[0].id.slice(-3);
    var section = slick.$slider[0].id.slice(-3,-2);

    //console.log(slick, currentSlide, nextSlide, num);

    if (nextSlide >= slick.$slides.length - slick.options.slidesToShow) {         
        $("#slider_" + num).addClass("finished" + section);
        returnUnlockCheck();
    }

    //quizUnlockCheck();
    
    var taphand_el = $("#slider_" + num + " .tappy_hand")[0];

    // turn off hand anim if still running
    if (taphand_el.anim.isActive()) {
        gsap.to(taphand_el, {duration: 0.25, opacity: 0, display: "none", onComplete: function() {
            taphand_el.anim.pause();
        }});
    }

});

/* Unlock Return Section Button --------------------- */
function returnUnlockCheck() {
    if ($(".finished1").length >= 1) {
        $("#spoke_1_6 .return_button").removeClass("noClick");
    }    
    if ($(".finished2").length >= 2) {
        $("#spoke_2_6 .return_button").removeClass("noClick");
    }
    if ($(".finished3").length >= 3) {
        $("#spoke_3_5 .return_button").removeClass("noClick");
    }
}

// Set up hub buttons to show correct spoke on click.
$(".spoke_button").click(function() {
    var num = $(this).data("spoke");
    spokeSwitch(num);
})

$('.spoke_button').one('click', function() {
    var taphand_el = $("#hub .tappy_hand")[0];

    // turn off hand anim if still running
    if (taphand_el.anim.isActive()) {
        gsap.to(taphand_el, {duration: 0.25, opacity: 0, display: "none", onComplete: function() {
            taphand_el.anim.pause();
        }});
    }
})


// Set up "return to hub" button functionality
// need a .on because these buttons are always invisible at start of course.
$('#main_wrapper').on('click','.return_button', function() {
    markSpokeComplete();
    spokeSwitch("main_page");
});


/* ------------------------------
        HELPER FUNCTIONS
 ------------------------------ */

// convert spoke number to its actual name.
function spokeNumToName(num) {
    return num == 0 ? "main_page" : "spoke" + num;
}


function scrollToTop() {
    //document.getElementById('course_wrapper').scrollTop = 0;
    //$main_wrapper.scrollTop = 0;
    $main_wrapper.scrollIntoView();
}


// returns the number of spokes that have been completed.
function checkSpokesCompleted() {

    var spokesCompleted = 0;

    for (var prop in pageIndex) {
        if (pageIndex[prop].completed === true) {
            spokesCompleted++;
        }
    }

   // console.log("spokesCompleted: ", spokesCompleted);

    return spokesCompleted

}


/* ------------------------------
        PROGRESSION LOGIC
 ------------------------------ */

// By default, this function will mark current spoke as completed.
// Override parameter is optional. Can be either spoke name or number.
function markSpokeComplete(override) {

    var spokeID;

    if (override) {
        if (typeof override == "number") {
            spokeID = spokeNumToName(override)
        } else {
            spokeID = override;
        }
    } else {
        spokeID = currentPage;
    }

    //console.log(override, currentPage, spokeID);

    pageIndex[spokeID].completed = true;    

    // pageIndex variable stores if each spoke has been completed
    var pageData = JSON.stringify(pageIndex);
    IREP.setBookmark(pageData);

    recordUserProgress();

    // DEV-UPDATE 
    if (spokeID == "spoke1") {
        $("#click_spoke1").addClass("finished");       

    } else if (spokeID == "spoke2") {
        $("#click_spoke2").addClass("finished");

    } else if (spokeID == "spoke3") {
        $("#click_spoke3").addClass("finished");

    }

    // do check for unlocking the final quiz section.
    if (checkSpokesCompleted() == numOfSpokes) {
        courseComplete = true;
    }

}


/* ------------------------------
     BOOKMARK & PROGRESS CODE
 ------------------------------ */

var visitedChapter = 0,
    lastPerctNumber = 0;

// At course load, check to see if user has already completed any spokes.
// called in FinalFunction
function unlockSpokes() {

    if (courseOptions.scormLocation === false && SliderTurnOn === false ) {

        $.when(IREP.getBookmark(), IREP.getProgress()).then(function(pageData, savedProgress) {

            pageData = JSON.parse(pageData)

            //console.log(pageData, savedProgress);

            if (savedProgress != null) {
                lastPerctNumber = savedProgress;
            }

            // mark previously completed spokes as completed
            for (var property in pageData) {

                var completed = pageData[property].completed;
                var num = pageData[property].num;

                if (completed===true) {
                    markSpokeComplete(num);
                }
            }

            if (checkSpokesCompleted() == numOfSpokes) {
                showEnding({scrollDown: false}); // don't force scroll down when user loads the course.
            }
        });
    }
}

// Set user progress value when user has completed a spoke. This is used on the site, not actually used anywhere in the course.
// Called in markSpokeComplete()
function recordUserProgress() {

    if (SliderTurnOn === false && courseOptions.scormLocation === false) {

        var currentPerctNumber = (checkSpokesCompleted() * 100) / numOfSpokes;

        //console.log(currentPerctNumber, lastPerctNumber);

        // make sure we don't overwrite a higher progress value with a lower one.
        if (lastPerctNumber < currentPerctNumber) {
            lastPerctNumber	= currentPerctNumber;
            IREP.setProgress(currentPerctNumber);
        }
     }
}

