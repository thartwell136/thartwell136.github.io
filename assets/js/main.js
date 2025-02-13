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
    
                var anim1 = gsap.timeline({scrollTrigger: {
                    trigger: ".anim1",
                    start: "top center"
                }});
                anim1
                .from(".anim1 h2", {duration:.75, y:20, opacity:0})
                .from(".anim1 p", {duration:.75, y:20, opacity:0}, "<+.25")
    
                var anim2 = gsap.timeline({scrollTrigger: {
                    trigger: ".anim2",
                    start: "top center"
                }});
                anim2
                .from(".anim2 h3", {duration:.75, y:20, opacity:0})
                .from(".anim2 li", {duration:.75, stagger:.25, y:20, opacity:0}, "<+.25")
    
                var anim3 = gsap.timeline({scrollTrigger: {
                    trigger: "#two",
                    start: "top center"
                }});
                anim3
                .from("#two .row .work-item a", {duration:.75, stagger:.75, y:20, opacity:0})
                .from("#two .row .work-item h3", {duration:.75, stagger:.75, y:20, opacity:0}, "<+.25")
                .from("#two .row .work-item p", {duration:.75, stagger:.75, y:20, opacity:0}, "<+.25")
    
                var anim4 = gsap.timeline({scrollTrigger: {
                    trigger: "#three",
                    start: "bottom bottom"
                }});
                anim4
                .from("#three .anim4 h2, #three .anim4 p", {duration:.75, y:20, stagger:.25, opacity:0})
                .from("#three .row > .col-12-small", {duration:.75, y:20, stagger:.25, opacity:0})
    

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
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});
                
                const form = document.getElementsByTagName("form")[0];
                form.addEventListener('submit',()=>{
                    const formSubject = form.subject.value;
                    const formBody = form.message.value;
                    location.href = "mailto:taylor@taylorhartwell.com?subject="+encodeURIComponent(formSubject)+"&body="+encodeURIComponent(formBody);
                    return false;
                });
                
                //waypoints();
                
                ScrollTrigger.refresh();
                
                setTimeout(function() {
                    stArray.forEach(function(ST) {
                        ST.enable()
                    });
                }, 500);

			});

})(jQuery);