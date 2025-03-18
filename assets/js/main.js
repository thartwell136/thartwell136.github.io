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
                var split = new SplitText("#header .inner h1", {type: "words, chars"});    
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
                  ease: "back.out(1)",
                  stagger: 0.01,
                  onComplete:function() {
                      logoRepeat.restart();
                  }
                }, "<+.5")
    
                var split2 = new SplitText("#header .inner strong", {type: "words, chars"});
                var logoRepeat = gsap.timeline({repeat:-1, repeatDelay:10, paused:true});
                    logoRepeat
                    .to("#header .image", {duration:.75, y:20, rotationY:-60, ease:"back.inOut(.75)"})
                    .to("#header .image", {duration:1.25, y:-40, rotationY:360, ease:"back.inOut(1.25)"}, ">-=.25")
                    .to("#header .image", {duration:1.25, y:0, rotationY:0, ease:"back.inOut(1.25)"}, ">-=.25")
                    .to(split2.chars, {duration:1.25, rotationX:"+=360", ease:"back.inOut(1)", stagger:{amount:1.25}}, ">-2.25")
    
                var summary_tl = gsap.timeline({scrollTrigger: {
                    trigger: "#one .summary_anim",
                    start: "top center"
                }});
                summary_tl
                .from("#one .summary_anim h2", {duration:1.25, y:40, opacity:0, ease:"back.out(2)"})
                .from("#one .summary_anim p", {duration:1.25, y:40, opacity:0, ease:"back.out(2)"}, "<+.25")
    
                var resume_tl = gsap.timeline({scrollTrigger: {
                    trigger: "#one .resume_anim",
                    start: "top center"
                }});
                resume_tl
                .from("#one .resume_anim h3", {duration:1.25, x:40, opacity:0, ease:"back.out(2)"})
                .from("#one .resume_anim li", {duration:1.25, x:40, stagger:.25, opacity:0, ease:"back.out(2)"}, "<+.25")
    
                var skills_tl = gsap.timeline({scrollTrigger: {
                    trigger: "#one .skills_anim",
                    start: "top center"
                }});
                skills_tl
                .from("#one .skills_anim h3", {duration:1.25, y:40, opacity:0, ease:"back.out(2)"})
                .from("#one .skills_anim li", {duration:1, stagger:.15, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.25")
                .from("#learn_more", {duration:1, x:40, opacity:0, ease:"back.out(1.5)"}, ">-.75")
    
                var esperience_tl = gsap.timeline({scrollTrigger: {
                    trigger: "#one .experience_anim",
                    start: "top center"
                }});
                esperience_tl
                .from("#one .experience_anim h3", {duration:1.25, x:-40, opacity:0, ease:"back.out(2)"})
    
                var education_tl = gsap.timeline({scrollTrigger: {
                    trigger: "#one .education_anim",
                    start: "top center"
                }});
                education_tl
                education_tl
                .from("#one .education_anim h3", {duration:1.25, x:-40, opacity:0, ease:"back.out(2)"})
    
                let experienceLocation = gsap.utils.toArray("#experience_list .workplace");
                let experienceLocationTl = [];
                //Create initial state / tl for work items
                experienceLocation.forEach((item,i) => {
                    var text = $(item).find('p');
                    var timelineId = "experienceTL_1_" + i;

                    var tl = gsap.timeline({id:timelineId, paused:true});
                        tl
                        .from(text, {duration:1, stagger:.25, x:-40, opacity:0, ease:"back.out(1.5)"})

                    experienceLocationTl.push(tl);
                });
                //Create ScrollTrigger for experience items
                let experienceLocationST = ScrollTrigger.batch(experienceLocation, {
                    start:"top center",
                    once:true,
                    onEnter: batch => {
                        batch.forEach((item,i) => { 
                            var delay = i * .5;
                            var index = experienceLocation.indexOf(item);
                            var timelineId = "experienceTL_1_" + index;
                            var tl = gsap.getById(timelineId);
                            //necessary because technically timeline has already started
                            tl.delay(delay).restart(true);
                        })
                    }
                });

                let experienceList = gsap.utils.toArray("#experience_list .workplace li");
                let experienceListTl = [];
                //Create initial state / tl for work items
                experienceList.forEach((item,i) => {
                    var text = $(item);
                    var timelineId = "experienceTL_2_" + i;

                    var tl = gsap.timeline({id:timelineId, paused:true});
                        tl
                        .from(text, {duration:1, x:40, opacity:0, ease:"back.out(1.5)"})

                    experienceListTl.push(tl);
                });
                //Create ScrollTrigger for experience items
                let experienceListST = ScrollTrigger.batch(experienceList, {
                    start:"top center",
                    once:true,
                    onEnter: batch => {
                        batch.forEach((item,i) => { 
                            var delay = i * .5;
                            var index = experienceList.indexOf(item);
                            var timelineId = "experienceTL_2_" + index;
                            var tl = gsap.getById(timelineId);
                            //necessary because technically timeline has already started
                            tl.delay(delay).restart(true);
                        })
                    }
                });

                let educationList = gsap.utils.toArray("#education_list .school");
                let educationListTl = [];
                //Create initial state / tl for work items
                educationList.forEach((item,i) => {
                    var text = $(item).find('p');
                    var timelineId = "educationTL_" + i;

                    var tl = gsap.timeline({id:timelineId, paused:true});
                        tl
                        .from(text, {duration:1, stagger:.25, x:-40, opacity:0, ease:"back.out(1.5)"})

                    educationListTl.push(tl);
                });
                //Create ScrollTrigger for experience items
                let educationListST = ScrollTrigger.batch(educationList, {
                    start:"top center",
                    once:true,
                    onEnter: batch => {
                        batch.forEach((item,i) => { 
                            var delay = i * .5;
                            var index = educationList.indexOf(item);
                            var timelineId = "educationTL_" + index;
                            var tl = gsap.getById(timelineId);
                            //necessary because technically timeline has already started
                            tl.delay(delay).restart(true);
                        })
                    }
                });
    
                var work_button_tl = gsap.timeline({paused:true});
                work_button_tl
                    .from("#two .actions", {duration:1.25, x:-40, opacity:0, ease:"back.out(2)"})

                let workItems1 = gsap.utils.toArray("#two .work_anim_1 .work-item");
                let workItems1Tl = [];
                //Create initial state / tl for work items
                workItems1.forEach((item,i) => {
                    var image = $(item).find('a')[0];
                    var titleText = $(item).find('h3')[0];
                    var descText = $(item).find('p')[0];
                    var authorText = $(item).find('p')[1];
                    var timelineId = "workTL_1_" + i;

                    var tl = gsap.timeline({id:timelineId, paused:true});
                        tl
                        .set(image, {transformPerspective:800})
                        .from(image, {duration:1.25, rotationX:-360, scale:0, opacity:0, ease:"back.out(1.5)"})
                        .from(titleText, {duration:1.25, stagger:1, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.25")
                        .from(descText, {duration:1.25, stagger:1, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.15")
                        .from(authorText, {duration:1.25, stagger:1, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.15")
                    
                    workItems1Tl.push(tl);
                });
                //Create ScrollTrigger for work items
                let workItems1ST = ScrollTrigger.batch(workItems1, {
                    start:"top center",
                    once:true,
                    onEnter: batch => {
                        batch.forEach((item,i) => {
                            var delay = i * .5;
                            var index = workItems1.indexOf(item);
                            var timelineId = "workTL_1_" + index;
                            var tl = gsap.getById(timelineId);                            
                            var last = workItems1Tl.length-1;
                            
                            if (index == last) {
                                //brings in the See More button
                                tl.delay(delay).restart(true).eventCallback('onComplete', function() {
                                    work_button_tl.play();
                                });
                            } else {
                                //necessary because technically timeline has already started
                                tl.delay(delay).restart(true);
                            }
                        })
                    }
                });
    
                let workItems2 = gsap.utils.toArray("#two .work_anim_2 .work-item");
                let workItems2Tl = [];
                //Create initial state / tl for work items
                workItems2.forEach((item,i) => {
                    var image = $(item).find('a')[0];
                    var titleText = $(item).find('h3')[0];
                    var descText = $(item).find('p')[0];
                    var authorText = $(item).find('p')[1];
                    var timelineId = "workTL_2_" + i;

                    var tl = gsap.timeline({id:timelineId, paused:true});
                        tl
                        .set(image, {transformPerspective:800})
                        .from(image, {duration:1.25, rotationX:-360, scale:0, opacity:0, ease:"back.out(1.5)"})
                        .from(titleText, {duration:1.25, stagger:1, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.25")
                        .from(descText, {duration:1.25, stagger:1, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.15")
                        .from(authorText, {duration:1.25, stagger:1, y:40, opacity:0, ease:"back.out(1.5)"}, "<+.15")
                    
                    workItems2Tl.push(tl);
                });
                //Create ScrollTrigger for work items
                let workItems2ST = ScrollTrigger.batch(workItems2, {
                    start:"top center",
                    once:true,
                    onEnter: batch => {
                        batch.forEach((item,i) => {
                            var delay = i * .5;
                            var index = workItems2.indexOf(item);
                            var timelineId = "workTL_2_" + index;
                            var tl = gsap.getById(timelineId);
                            //necessary because technically timeline has already started
                            tl.delay(delay).restart(true);
                        })
                    }
                });
    
                var work_tl = gsap.timeline({scrollTrigger: {
                    trigger: "#three",
                    start: "bottom bottom"
                }});
                work_tl
                .from("#three .anim1 h2, #three .anim1 h3", {duration:1.25, stagger:.25, y:40, opacity:0, ease:"back.out(1.5)"})
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
                setTimeout(function() {
                    stArray.forEach(function(ST) {
                        ST.enable()
                    });
                    //last function to run
                    finalFunction();
                }, 250);

                //Click Section 1
                $("#learn_more").on( "click", function() {

                  if ($("#learn_more").hasClass("closed")) {
                      
                      esperience_tl.scrollTrigger.enable();
                      education_tl.scrollTrigger.enable();
                      experienceLocationST.forEach(st => st.enable());
                      experienceListST.forEach(st => st.enable());
                      educationListST.forEach(st => st.enable());
                      
                      $("#learn_more").removeClass("closed");
                      $("#learn_more").addClass("opened");

                  } else {
                      
                      esperience_tl.scrollTrigger.disable();
                      education_tl.scrollTrigger.disable();
                      experienceLocationST.forEach(st => st.disable());
                      experienceListST.forEach(st => st.disable());
                      educationListST.forEach(st => st.disable());
                      
                      $("#learn_more").addClass("closed");
                      $("#learn_more").removeClass("opened");
                      
                      gsap.to(window, { duration: .5, scrollTo: {y: "#learn_more", offsetY:25} });

                  }
                
                  $("#one .experience_anim, #one .education_anim").toggleClass("hide");
                  ScrollTrigger.refresh();
                    
                });
                
                //Click Section 2
                $("#two .actions").on( "click", function() {

                  if ($("#two .actions").hasClass("closed")) {
                      
                      workItems2ST.forEach(st => st.enable());
                      
                      $("#two .actions").removeClass("closed");
                      $("#two .actions").addClass("opened");

                  } else {
                      
                      workItems2ST.forEach(st => st.enable());
                      
                      $("#two .actions").addClass("closed");
                      $("#two .actions").removeClass("opened");
                      
                      gsap.to(window, { duration: .5, scrollTo: {y: "#two .actions", offsetY:25} });

                  }
                
                  $("#two .work_anim_2").toggleClass("hide");
                  ScrollTrigger.refresh();
                    
                });
                
                //last function to run
                function finalFunction() {
                    
                    //Need to be put here so it doesn't break scrollTrigger
                    
                    //Section 1
                    esperience_tl.scrollTrigger.disable();
                    education_tl.scrollTrigger.disable();
                    experienceLocationST.forEach(st => st.disable());
                    experienceListST.forEach(st => st.disable());
                    educationListST.forEach(st => st.disable());
                    
                    $("#one .experience_anim, #one .education_anim").addClass("hide");
                    
                    //Section 2
                    workItems2ST.forEach(st => st.disable());
                    $("#two .work_anim_2").addClass("hide");
                    
                    ScrollTrigger.refresh();
                }

			});

})(jQuery);