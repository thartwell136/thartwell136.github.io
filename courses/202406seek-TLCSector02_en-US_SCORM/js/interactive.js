
//Don't save browser scroll position
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

//Refresh Function is inside default.js

//Get scroll of ALL parents
const calculateScroll = (e) => {
    if (e) {
        const [scrollTop, scrollLeft] = calculateScroll(e.parentNode);
        return [(e.scrollTop || 0) + scrollTop, (e.scrollLeft || 0) + scrollLeft];
    }else {
        return [0, 0];
    }
};

// ------------ DRAG SECTION ------------

/* Calculate bounds, no idea why this is needed but it is */
/* 20 is for the border */
var boundsWidth = Math.round( $(".seek_wrapper").width() - $("#magnifying_glass").width() ),
	boundsHeight =  Math.round( $(".seek_wrapper").height() - $("#magnifying_glass").height() );

var hitTestVar = $("#magnifying_glass .glass .background"),
	overlapThreshold = courseOptions.overlapThreashold,
	hitTestVariables = $('.find_cont .find'),
	divScroll = $(".seek_scroll"),
	position1 = $(hitTestVar)[0].getBoundingClientRect(),
	scroll1 = calculateScroll($(hitTestVar)[0]);

var magDrag = Draggable.create("#magnifying_glass", {
    type: "x,y",
	cursor:"grab",
	activeCursor:"grabbing",
    edgeResistance: .65,
	bounds:{minX:0, minY:0, maxX:boundsWidth, maxY:boundsHeight},
    inertia: false,
	zIndexBoost: false,
    autoScroll: 1,
	onRelease:onRelease,
	onDrag: onDrag,
	onDragEnd: onDragEnd
});

gsap.set($(magDrag[0].target), {x:30,y:30});
magDrag[0].update(true);
magDrag[0].disable();


//This function will scroll the screen to better keep up with the draggable
function onRelease() {		
    //this.tween is null if no inertia plugin
    if (this.tween) {
        this.tween.progress(1); //put the element at the END of where it's thrown so we can calculate bounds accordingly
    }
    var wrapper = document.querySelector(".seek_scroll"),
        tBounds = this.target.getBoundingClientRect(),
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
    //this.tween is null if no inertia plugin
    var tweenDur = 0.5;
    if (this.tween) {
        tweenDur = this.tween.duration();
    }
    gsap.to(wrapper, {duration:tweenDur, scrollTo:scroll});
    //this.tween is null if no inertia plugin
    if (this.tween) {
        this.tween.progress(0); //now return the element to where it was thrown from.
    }
}

function onDrag() {
	
	for ( i=0; i < hitTestVariables.length; i++ ) {
		if (Draggable.hitTest(hitTestVar, hitTestVariables[i], overlapThreshold)) {
            $(hitTestVariables[i]).addClass("hover");
        } else {
            $(hitTestVariables[i]).removeClass("hover");
        } 
    }
	
}

function onDragEnd() {
	
	for ( i=0; i < hitTestVariables.length; i++ ) {
		if (Draggable.hitTest(hitTestVar, hitTestVariables[i], overlapThreshold)) {
			if ( ($(hitTestVariables[i]).hasClass("hover")) && !($(hitTestVariables[i]).hasClass("disabled")) ) {
				magDrag[0].disable();
				$(hitTestVariables[i]).addClass("disabled");
				onDrop($(this.target), hitTestVariables[i], i);
			}
        }
    }

}

//Game Completion Deferred
var CompletionDeferred = $.Deferred();
function endGame() {   
    reportGameCompletion();
    $.when(CompletionDeferred).then(function() {
        // Show congrats message
        completion_tl.play();
    })
}

gsap.registerPlugin(RoughEase);
var roughEase = "rough({clamp:true, points:20, randomize:false, strength:1.5, template:none, taper:out})";

function onDrop(dragged,dropped,num) {
	
	var position2 = $(dropped)[0].getBoundingClientRect(),
		scroll2 = calculateScroll($(dropped)[0]),
		position1Top = position1.top + (position1.height / 2) + scroll1[0],
		position2Top = position2.top + (position2.height / 2)  + scroll2[0],
		position1Left = position1.left + (position1.width / 2) + scroll1[1],
		position2Left = position2.left + (position2.width / 2) + scroll2[1];
	
		gsap.to($(dragged)[0], {duration:.25, x:(position2Left - position1Left), y:(position2Top - position1Top), onComplete: function() {
			
			//Popup stuff
			var findReveal = ".find_cont .find_" + (num+1);
			var iconShow = ".icon_wrapper .icon_" + (num+1)  + " .found";
			
			var popup_tl = gsap.timeline({onComplete:function() {
				if ($('.disabled').length == hitTestVariables.length) {
					//Drag Section Complete
					if (SliderTurnOn == false) {
						// call api to report completion
        				endGame();
					} else {
						completion_tl.play();
					}
				} else {
					magDrag[0].enable();
				}
			}});
				popup_tl        

				.fromTo(findReveal, {opacity:0},{duration:.75, opacity:1, ease:roughEase})
				//rough ease tween
				.to(iconShow, {duration:.75, opacity:1, ease:roughEase}, "<")
				.to(findReveal, {duration:.01, zIndex:0})
			
		}});
	
}

/* Code to show a Hint */
var runOnce = false;
function getHint() {
    
    if (runOnce == true) {
        return;
    }
    //ensures function only runs once
    runOnce = true;
    
    //get icons that have not been triggered yet
    var availNum = [];
    $.each(hitTestVariables, function (i,e) {
        if (!($(e).hasClass("disabled"))) {
            var className = $(e).attr('class');
            var num = className.charAt(className.length-1);
            availNum.push(num);
        }
    });
    
    var num = gsap.utils.random(availNum);
    console.log(num);
    var bankIcon = ".icon_wrapper .icon_" + (num);
    var bankFound = ".icon_wrapper .icon_" + (num) + " .found";
    var foundIcon = ".find_cont .find_" + (num)
    
    var hint_tl = gsap.timeline({onStart:function() {
            magDrag[0].disable();
        }, onComplete:function() {
            magDrag[0].enable();
            
            gsap.set(bankIcon, {clearProps: 'scale'});
            gsap.set(bankFound, {clearProps: 'opacity'});
            gsap.set(foundIcon, {clearProps: 'opacity'});
        }});
        hint_tl  
        
        .to("#magnifying_glass", {duration:1, opacity:0})
            .to("#pause", {duration:.5})
        //repeat 3 times = 1 with yoyo
        .fromTo(bankIcon, {scale:1},{duration:.75, scale:1.2, ease:"power2", yoyo:true, repeat:5, repeatDelay:.25})
        .fromTo(bankFound, {opacity:0},{duration:.75, opacity:1, ease:"power2", yoyo:true, repeat:5, repeatDelay:.25}, "<")
            .to("#pause", {duration:.5})
        .fromTo(foundIcon, {opacity:0},{duration:.75, opacity:1, ease:"power2", yoyo:true, repeat:3, repeatDelay:.25})    
            .to("#pause", {duration:.5})
        .to("#magnifying_glass", {duration:1, opacity:1})
    
}

$( ".icon_wrapper" ).one( "click", function() {
    $(this).addClass("noCursor");
    getHint();
});

