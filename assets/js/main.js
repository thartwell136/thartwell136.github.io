/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				/*if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}*/
    
                var parallaxBg = gsap.timeline({scrollTrigger: {
                    trigger: "#main",
                    start: "top 5%",
                    end: "bottom 95%", 
                    scrub:2
                }});
                parallaxBg
                .fromTo("#header", {backgroundPosition: "0% 50%"}, {backgroundPosition:"100% 50%", ease: "none"})
    
                if (browser.name == 'ie' ||	browser.mobile) {
                    parallaxBg.disable;
                }
    
                breakpoints.on('<=medium', function() {
					parallaxBg.disable;
				});
    
                breakpoints.on('>medium', function() {
					parallaxBg.enable;
				});
                
                //Left side text
                var split = new SplitText("#header .inner h1", {type: "chars"});    
                var headerAnim = gsap.timeline({scrollTrigger: {
                    trigger: "#header",
                    start: "top center"
                }});
                headerAnim
                .from("#header .image", {duration:1.25, y:20, rotationY:-360, opacity:0, ease:"back.out(2)"})
                .from(split.chars, {
                  duration: 1,
                  opacity: 0,
                  scale: 0,
                  y: 80,
                  rotationX: 180,
                  transformOrigin: "0% 50% -50",
                  ease: "back",
                  stagger: 0.01,
                  onComplete:function() {
                      logoRepeat.restart();
                  }
                }, "<+.5")
    
                var logoRepeat = gsap.timeline({repeat:-1, repeatDelay:10, paused:true});
                    logoRepeat
                    .to("#header .image", {duration:.75, y:20, rotationY:-60, ease:"back.inOut(.75)"})
                    .to("#header .image", {duration:1.25, y:-40, rotationY:360, ease:"back.inOut(1.25)"}, ">-=.25")
                    .to("#header .image", {duration:1.25, y:0, rotationY:0, ease:"back.inOut(1.25)"}, ">-=.25")
    
                var anim1 = gsap.timeline({scrollTrigger: {
                    trigger: ".anim1",
                    start: "top center"
                }});
                anim1
                .from(".anim1 h2", {duration:1.25, y:40, opacity:0, ease:"back.out(2)"})
                .from(".anim1 p", {duration:1.25, y:40, opacity:0, ease:"back.out(2)"}, "<+.25")
    
                var anim2 = gsap.timeline({scrollTrigger: {
                    trigger: ".anim2",
                    start: "top center"
                }});
                anim2
                .from(".anim2 h3", {duration:1.25, y:40, opacity:0, ease:"back.out(2)"})
                .from(".anim2 li", {duration:1, stagger:.15, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.25")
                  
                let workItems = gsap.utils.toArray("#two .work-item");
                let workItemsTl = [];
                //Create initial state / tl for work items
                workItems.forEach((item,i) => {
                    var image = $(item).find('a')[0];
                    var topText = $(item).find('h3')[0];
                    var bottomText = $(item).find('p')[0];
                    var timelineId = "timeline_" + i;

                    var tl = gsap.timeline({id:timelineId, paused:true});
                        tl
                        .set(image, {transformPerspective:800})
                        .from(image, {duration:1.25, rotationX:-360, scale:0, opacity:0, ease:"back.out(1.5)"})
                        .from(topText, {duration:1.25, stagger:1, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.25")
                        .from(bottomText, {duration:1.25, stagger:1, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.15")
                    
                    workItemsTl.push(tl);
                });
                //Create ScrollTrigger for work items
                ScrollTrigger.batch(workItems, {
                    start:"top center",
                    onEnter: batch => {
                        batch.forEach((item,i) => {                            
                            var delay = i * .5;
                            var index = workItems.indexOf(item);
                            var timelineId = "timeline_" + index;
                            var tl = gsap.getById(timelineId);
                            //necessary because technically timeline has already started
                            tl.delay(delay).restart(true);
                        });
                    }
                });
    
                var anim4 = gsap.timeline({scrollTrigger: {
                    trigger: "#three",
                    start: "bottom bottom"
                }});
                anim4
                .from("#three .anim4 h2, #three .anim4 p", {duration:1.25, stagger:.25, y:40, opacity:0, ease:"back.out(1.5)"})
                .from("#three .row > .col-12-small", {duration:1.25, stagger:.25, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.75")
    
    
                //Get all scrolltriggers and disable them so they don't launch immediately
                var stArray = ScrollTrigger.getAll()
                stArray.forEach(function(ST) {
                  ST.disable()
                });
    

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=xsmall') ? 25 : 40)
				});
                
                const form = document.getElementsByTagName("form")[0];
                form.addEventListener('submit',()=>{
                    const formSubject = form.subject.value;
                    const formBody = form.message.value;
                    location.href = "mailto:taylor@taylorhartwell.com?subject="+encodeURIComponent(formSubject)+"&body="+encodeURIComponent(formBody);
                    return false;
                });
                
                //waypoints();
                
                //Get all scrolltriggers and enable them after 500ms so they don't launch immediately
                ScrollTrigger.refresh();
                setTimeout(function() {
                    stArray.forEach(function(ST) {
                        ST.enable()
                    });
                }, 250);

			});

})(jQuery);