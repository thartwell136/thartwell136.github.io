
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
        
    var regexCJK = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\u3131-\uD79D]/g;
    
    // Symbol languages
    if ( courseOptions.cultureCode == "ja-JP" || courseOptions.cultureCode == "ko-KR" || courseOptions.cultureCode == "zh-CHS" || courseOptions.cultureCode == "zh-TW" ) {
        
         $('#main_wrapper .scene p, #main_wrapper .scene li').html(function(i, html) {
             // opt out of symbol helper if class is present or the phrase is 5 chars or shorter
             if ( $(this).hasClass("dont-fix-orphan-ever") || $(this).hasClass("dont-fix-asian-ever") || (html.length < 6) ) {
                // do nothing
            } else {
                // Wraps a special span around the last 3 symbols in the string to prevent orphan symbols.
                
                var characterCount = 0;
                var sliceCount = 0
                
                // Limit the number of characters we can check so the span doesn't become too long.      
                var checkLength = 10;
                
                // If there's a sup tag, let it check additional characters (since the sup tags are 5-6 chars each)
                if ( html.match("<sup>") ) {checkLength = 25}
                
                // starting at the END of the html string, check each character and see if it's a symbol.
                for (var i = html.length; i > (html.length-checkLength); i--) {
                    
                    var test = html.charAt(i);
                    
                    // used for testing what characters come back as a match. null = no match, red symbol in an array = match
                    //console.log(test, test.charCodeAt(0), test.match(regexCJK));
                    
                    if (test.match(regexCJK)) {characterCount++}
                    
                    // once you've found 3 symbols that qualify, break out of the loop.
                    if (characterCount == 3) {                    
                        sliceCount = html.length - i;                                       
                        break
                    } 
                }
                
                // If you found 3 symbols, wrap them in a nowrap span and return to the p tag. Otherwise, no change to the p tag.
                if (characterCount == 3) {
                    return html.slice(0, html.length - sliceCount) + '<span style="white-space:nowrap;">' + html.slice(html.length - sliceCount) + '</span>';
                }
            }
         });
                                                     
    } else {
    // All other languages                                                 
     $('#main_wrapper .scene p, #main_wrapper .scene li').html(function(i, html) {
         if ( $(this).hasClass("dont-fix-orphan-ever") || $(this).hasClass("dont-fix-latin-ever") ) {
            // do nothing
        } else if (
            !(  (courseOptions.cultureCode == "uk-UA" || courseOptions.cultureCode == "cs-CZ" || courseOptions.cultureCode == "de-DE" )
                && ($(this).hasClass("dont-fix-orphan") || $(this).parent().hasClass("dont-fix-orphan") )) ) {

            if ( $(this).children("span").length > 1 ) {
                $(this).find("span:last-child").each(function() {

                    if ( ($(this).text().split(' ').length === 1) ) {
                        $(this).parent().contents().filter(function() { return this.nodeType == 3;}).remove();
                        $(this).before(" ");
                    }
                });

            } else {
                return $.trim(html).replace(/\s([\S]+)$/,' $1');
            }
        }
     });                                         
    }

}

/* -----------------------------------------------------
    Pull in different videos based on culture code
-------------------------------------------------------- */

//Taylor 1/29/19
var videoUrlArray = [];
$("video source").each(function(i) {
    
    var videoSrc = $(this).attr('src');
    videoSrc = videoSrc.slice(0, -9);
    videoUrlArray.push(videoSrc);

});

function updateVideoLang(count) {
    var vidCC = courseOptions.cultureCode;

    if (courseOptions.cultureCode == 'en-US' || courseOptions.cultureCode == 'en-GB' || courseOptions.cultureCode == "en-AU" || courseOptions.cultureCode == "da-DK" || courseOptions.cultureCode == "fi-FI" || courseOptions.cultureCode == "sv-SE") {
        vidCC = 'en-US'
    }

    if (windowWidth <= 1024) {
        var vidCC = vidCC + "_MOBILE";
    }

    $("video source").each(function(i) {

        var videoSrc = videoUrlArray[i] + vidCC + '.mp4';

        $(this).attr('src', videoSrc);
        $(this).parent()[0].load();
        

    }).promise()
    .done( function() {
        videoTrackingCheck();
    });

}


/* -----------------------------------------------------
    Use this function for custom CSS or other course
    styling that doesn't fit anywhere else. It's one of
    the last functions called in.
-------------------------------------------------------- */

function theFinalFunction() {
    var deferred = $.Deferred();
    
    /*if (courseOptions.cultureCode == "tr-TR") {
        // example do something custom
    }*/

    updateVideoLang();
    
    navSetup();

    // only play if at start of timeline
    if (tl.currentLabel() == "start" || tl.progress() == 0) {
        // 0.5 sec delay for preloader to vanish
        setTimeout(function(){tl.play("start"); }, 500);
    }
    
    deferred.resolve();
    return deferred.promise();
}

/* -----------------------------------------------------
    Add styling for making the module expand/shrink
    to fit the window.
-------------------------------------------------------- */
var resizeAnimDuration = SliderTurnOn ? 0.01 : 0.25;

function resizeWindow() {
    
    // normal alignment code
    var scale = Math.min(windowWidth / 1920, windowHeight / 1080);

    gsap.to("#main_wrapper", {duration: resizeAnimDuration, scale: scale, transformOrigin: "0% 0%", force3D: false});

    var marginLeftCalc = (windowWidth - (1920 * scale)) / 2;
    gsap.to("#main_wrapper", {marginLeft: marginLeftCalc});

    var marginTopCalc = (windowHeight - (1080 * scale)) / 2;
    gsap.to("#main_wrapper", {marginTop: marginTopCalc});

}

// Run once on course load.
resizeWindow();


/* -----------------------------------------------------
    Window resize functions
-------------------------------------------------------- */

$(window).resize(function(evt) {
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    resizeThrottled();
});

var debounceTime = SliderTurnOn ? 10 : 250;

var resizeThrottled = debounce(function() {
    //console.log("resize");    
    imgSrcReplace();
    resizeWindow();
}, debounceTime);


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
