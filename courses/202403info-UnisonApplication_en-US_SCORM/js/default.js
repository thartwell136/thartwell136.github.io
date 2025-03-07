/* -----------------------------------------------------
    Use this function for custom CSS or other course
    styling that doesn't fit anywhere else. It's one of
    the last functions called in.
-------------------------------------------------------- */
function  theFinalFunction() {
    /*if (courseOptions.cultureCode == "tr-TR") {
        // example do something custom
    }*/

    if (courseOptions.scormLocation || courseOptions.mobileOfflineVersion || courseOptions.PRCVersion) { // unlock by default for SCORM, mob offline, and WeChat
        unlockQuizButton();        
    } else {
        $.when(IREP.getProgress()).then(function(savedProgress) {   
            if (savedProgress >= 95) {
                unlockQuizButton();
            }
        });
    }


    //document.getElementById('box_1').scrollIntoView();
    
    // recalculates triggers, needed because document height changes when text gets loaded in.
    ScrollTrigger.refresh();

    // Enable timelines after preloader vanishes
    setTimeout(function() {
        stArray.forEach(function(ST) {
            ST.enable()
        });        
    }, 500);
}


/* -----------------------------------------------------
    Unlock the quiz button
-------------------------------------------------------- */
function unlockQuizButton() {
    $("#quiz_box").removeClass("locked");
}


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

function imgSrcReplace() {
        
    // <img alt="" data-src="images/2-Inset_1_HD.jpg" data-src-mobwidth="-1" src="images/tiny.gif">
    
    // data-src-mobwidth="768" to switch to mob image at different width
    // data-src-mobwidth="-1" to opt out of mobile and use hd image
    // data-src-nomob="true" to eliminate the image on mobile
    
    var images = document.querySelectorAll('[data-src]');
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
        
        
        $(this).attr("src",src);

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
}, 250)


/* -----------------------------------------------------
    Misc functions
-------------------------------------------------------- */

if (courseOptions.quizButtonDisplay == false) {
    $(".startQuiz").css("visibility", "hidden");
}
