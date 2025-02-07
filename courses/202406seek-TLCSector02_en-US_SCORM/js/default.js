/* -----------------------------------------------------
    Use this function for custom CSS or other course
    styling that doesn't fit anywhere else. It's one of
    the last functions called in.
-------------------------------------------------------- */
function  theFinalFunction() {

    //checkGameStatus();
	
	draggableResize();

    // Enable timelines after preloader vanishes
    setTimeout(function() {
        intro_tl.play();
    }, 500);
}

/* -----------------------------------------------------
    Unlock the quiz button
-------------------------------------------------------- */
function unlockQuizButton() {
    $("#quiz_box").removeClass("locked");
    $("#quiz_locked_message").css("display", "none");
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
    Orphan helper to prevent text widows
-------------------------------------------------------- */

function helpTheOrphans() {
    // removed
}

function draggableResize() {
    
    //stop dragging until function is done
    magDrag[0].disable();
	
	var saveX = magDrag[0].x,
		saveY = magDrag[0].y,
		startX = magDrag[0].startX,
		startY = magDrag[0].startY;
	
	//put drag back to start position
	gsap.set($(magDrag[0].target), {x:0,y:0});
	
	position1 = $(hitTestVar)[0].getBoundingClientRect();
	scroll1 = calculateScroll($(hitTestVar)[0]);
	
	//put drag back to saved drag position
	gsap.set($(magDrag[0].target), {x:saveX,y:saveY});
    
    //scroll screen back to where the draggable is on orientation change
    var wrapper = document.querySelector(".seek_scroll"),
        tBounds = magDrag[0].target.getBoundingClientRect(),
        wBounds = wrapper.getBoundingClientRect(),
        wCenter = wBounds.left + (wBounds.width / 2),
        tCenter = tBounds.left + (tBounds.width / 2),
        scroll = {};
    if (tBounds.right > wBounds.right || tBounds.left < wBounds.left) {
      scroll.x = wrapper.scrollLeft + (tCenter - wCenter);
    }
    if (tBounds.bottom > wBounds.bottom || tBounds.top < wBounds.top) {
      wCenter = wBounds.top + (wBounds.height / 2);
      tCenter = tBounds.top + (tBounds.height / 2);
      scroll.y = wrapper.scrollTop + (tCenter - wCenter);
    }
    gsap.to(wrapper, {duration:.5, scrollTo:scroll});
	
	boundsWidth = Math.round( $(".seek_wrapper").width() - $("#magnifying_glass").width() );
	boundsHeight =  Math.round( $(".seek_wrapper").height() - $("#magnifying_glass").height() );
	magDrag[0].applyBounds({minX:0, minY:0, maxX:boundsWidth, maxY:boundsHeight});
    
    //allow dragging after function is done
    magDrag[0].enable();
	
}

/* -----------------------------------------------------
    Window resize functions
-------------------------------------------------------- */
$(window).resize(function() {
    windowHeight = $(window).height(),
    windowWidth = $(window).width();
    resizeThrottled();
	
	draggableResize();
});



var resizeThrottled = debounce(function() {
    console.log("resize");	
}, 250)


/* -----------------------------------------------------
    Misc functions
-------------------------------------------------------- */

if (courseOptions.quizButtonDisplay == false) {
    $(".startQuiz").css("display", "none");
}
