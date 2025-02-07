/* -----------------------------------------------------
    Use this function for custom CSS or other course
    styling that doesn't fit anywhere else. It's one of
    the last functions called in.
-------------------------------------------------------- */
function theFinalFunction() {
    var deferred = $.Deferred();

    navSetup();

    // only play if at start of timeline
    if (tl.progress() == 0) {
        // 0.5 sec delay for preloader to vanish
        tl.play().delay(0.5);
    }

    deferred.resolve();
    return deferred.promise();
}


/* -----------------------------------------------------
    Code to initialize Overlay Scrollbar
	https://github.com/KingSora/OverlayScrollbars
-------------------------------------------------------- */
var { 
    OverlayScrollbars, 
    ScrollbarsHidingPlugin, 
    SizeObserverPlugin, 
    ClickScrollPlugin  
  } = OverlayScrollbarsGlobal;

var scrollInstance;

function overlayScrollbarsInit() {
    scrollInstance = OverlayScrollbars({
        target: document.querySelector("#main_wrapper")
    },{
        overflow: {x: "hidden", y:"hidden"},
        scrollbars: {theme: courseOptions.scrollbarTheme}
    });

    // declare a unique scrollbar for legal
    legalScrollbar = OverlayScrollbars({
        target: document.querySelector("#scene_legal .wrapper")
    },{
        overflow: {x: "hidden", y: "scroll"},
        scrollbars: {theme: "os-theme-dark"}
    })
}

overlayScrollbarsInit();


/* -----------------------------------------------------
   https://davidwalsh.name/javascript-debounce-function
   Returns a function, that, as long as it continues to be invoked, will not
   be triggered. The function will be called after it stops being called for
   N milliseconds. If `immediate` is passed, trigger the function on the
   leading edge, instead of the trailing.
-------------------------------------------------------- */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


/* -----------------------------------------------------
    New image source replace function to prevent
    preloading all images.
-------------------------------------------------------- */

// TODO update to have nomob=768/1024? Corresponding update for preloader so HD only imags don't get loaded on mobile?

function imgSrcReplace() {

    // <img alt="" data-src="images/2-Inset_1_HD.jpg" data-src-mobwidth="-1" src="images/tiny.gif">

    // data-src-mobwidth="768" to switch to mob image at different width
    // data-src-mobwidth="-1" to opt out of mobile and use hd image
    // data-src-nomob="true" to eliminate the image on mobile

    var images = document.querySelectorAll('[data-src]');
    var svgImage = document.querySelectorAll('[data-href]');
    var replace = '_HD';
    var regex = new RegExp(replace, 'g');

    $(images).each(function(i) {

        //$(this).removeClass("show_on_MOB show_on_HD");

        var src = $(this).attr("data-src");

        var mobwidth = courseOptions.mobileWidth;

        if ($(this).attr("data-src-mobwidth")) {
            mobwidth = $(this).attr("data-src-mobwidth");
        }

        if (windowWidth <= mobwidth) {

            if ($(this).attr("data-src-nomob")) {
                src = "images/tiny.gif";
            } else {
                src = src.replace(regex, "_MOB");
            }
            //$(this).addClass("show_on_MOB");

        } else {
            src = src.replace(regex, "_HD");
            //$(this).addClass("show_on_HD");
        }

        if ($(this).attr("src") != src) {
            $(this).attr("src", src);
        }

    });
    
    $(svgImage).each(function(i) {
		
        var href = $(this).attr("data-href");
        
        var mobwidth = courseOptions.mobileWidth;

        if (windowWidth <= mobwidth) {
            href = href.replace(regex, "_MOB");
        } else {
            href = href.replace(regex, "_HD");
        }      
        
        if ($(this).attr("href") != href) {
            $(this).attr("href", href);
        }

    });

}

imgSrcReplace();

/* -----------------------------------------------------
    Orphan helper to prevent text widows
-------------------------------------------------------- */

function helpTheOrphans() {

    // To turn it on please add in which culture code you want it turned on.  If you want it for all of them and limit which one you don't want, look at module example.
    if (courseOptions.cultureCode == "xx-XX" || courseOptions.cultureCode == "yy-YY") {

        // If you want to apply this to all languages but a couple use the if statement below:
        //if ( !(courseOptions.cultureCode == "xx-XX" || courseOptions.cultureCode == "yy-YY" ) ) {

        $('.fix-the-orphan').html(function(i, html) {
            //goes through all .fix-the-orphan class and will add a   to the last space.  It will trim down the text if there is a space at the end.
            // if you need text to not have an orphan then add this class and it will fix it: .fix-the-orphan
            if ($(this).children("span").length > 1) {

                $(this).find("span:last-child").each(function() {

                    if (($(this).text().split(' ').length === 1)) {

                        $(this).parent().contents().filter(function() {
                            return this.nodeType == 3;
                        }).remove();
                        $(this).before(" ");

                    }

                });

            } else {
                return $.trim(html).replace(/\s([\S]+)$/, ' $1');
            }
        });
    }
}



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
    imgSrcReplace();
}, 250);


/* ------------------------------------------------------
    USER BOOKMARK CODE
------------------------------------------------------ */
var lastPerctNumber = 0;

function getProgressFromSite() {

    if (SliderTurnOn === false && courseOptions.scormLocation == false) {
         $.when(IREP.getProgress()).then(function(savedProgress) {
            if (savedProgress != null) {
                lastPerctNumber = savedProgress;
                //console.log("get prog lastPerctNumber", lastPerctNumber);
            }
        });
     }
}

getProgressFromSite();

function recordUserTimeLocation() {

    if (SliderTurnOn === false && courseOptions.scormLocation === false) {
        var currentPerctNumber = Math.round(tl.progress() * 100);
        if (!(tl.reversed()) && lastPerctNumber < currentPerctNumber) {
            lastPerctNumber	= currentPerctNumber;
            IREP.setProgress(currentPerctNumber);
            //console.log("set prog currentPerctNumber", currentPerctNumber);
        }
     }
}



/* -----------------------------------------------------
    Misc functions
-------------------------------------------------------- */

if (courseOptions.quizButtonDisplay == false) {
    $(".startQuiz").css("visibility", "hidden");
}

function stopExtraTimelines() {
    // Function can also be called in nav reset.
    // Example: circleSpin_1_1.pause();
}


// Note: This template does not contain any code that supports videos. It would have to be copied over from another template.
