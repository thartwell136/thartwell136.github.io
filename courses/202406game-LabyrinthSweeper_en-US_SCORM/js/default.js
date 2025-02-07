/* -----------------------------------------------------
    Use this function for custom CSS or other course
    styling that doesn't fit anywhere else. It's one of
    the last functions called in.
-------------------------------------------------------- */
function theFinalFunction() {

    $.when(CompletionDeferred).then(function() {
        minseweeperInit();

        // Enable timelines after preloader vanishes
        setTimeout(function() {
            intro_tl.play();
        }, 500);
    })
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
