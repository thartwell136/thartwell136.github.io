// Dev Tools
/* Used for 2018-04 IREP courses and newer */

var SliderTurnOn = false;
var ReviewerTurnOn = false;
var PopupSliderTurnOn = false;

/* -----------------------------------------------------
    HTML code to be appended
-------------------------------------------------------- */
var langChangerDropDown = '<div id="click_to_change"><form id="Pick_One_From_Here"><select id="click_to_change_drop_down" autocomplete="off" > <option selected="selected" id="en-US">en-US</option> <option id="ru-RU">ru-RU</option> <option id="uk-UA">uk-UA</option> <option id="ro-RO">ro-RO</option> <option id="el-GR">el-GR</option> <option id="cs-CZ">cs-CZ</option> <option id="da-DK">da-DK</option> <option id="de-DE">de-DE</option> <option id="en-GB">en-GB</option> <option id="es-ES">es-ES</option> <option id="fi-FI">fi-FI</option> <option id="fr-FR">fr-FR</option> <option id="hu-HU">hu-HU</option> <option id="it-IT">it-IT</option> <option id="nb-NO">nb-NO</option> <option id="nl-NL">nl-NL</option> <option id="pl-PL">pl-PL</option> <option id="sv-SE">sv-SE</option> <option id="tr-TR">tr-TR</option> <option id="ar-SA">ar-SA</option> <option id="zh-CHS">zh-CHS</option> <option id="ja-JP">ja-JP</option> <option id="id-ID">id-ID</option> <option id="en-AU">en-AU</option> <option id="ko-KR">ko-KR</option> <option id="th-TH">th-TH</option> <option id="vi-VN">vi-VN</option> <option id="zh-TW">zh-TW</option> <option id="es-MX">es-MX</option> <option id="pt-BR">pt-BR</option></select></form><div id="click_to_change_container"><div id="form_expand_click">+</div><div id="click_to_refresh_lang_css">↻</div></div>';

var sliderHTML = '<div id="slider_wrapper"> <div id="slider"></div><div id="slider_bot"> <div id="slider_left" class="slider_button_wrapper"> <div id="minimizeUI" title="Minimize dev tools UI"></div><div id="parkTimelineBtn" title="Park timeline here"></div><div id="gridlinesBtn" title="Toggle gridlines"></div><div id="swapPosBtn" title="Toggle slider position"></div></div><div id="slider_center" class="slider_button_wrapper"> <div id="reverseBtn"></div><div id="playBtn" class="slider_active_btn"></div><div id="pauseBtn"></div></div><div id="slider_right" class="slider_button_wrapper"> <div id="timeScale_wrapper"> <p class="nohover p16">speed:</p><p id="timeScaleSlowBtn" class="p14">½</p><p id="timeScaleNormalBtn" class="p16 slider_active_speed_btn">1</p><p id="timeScale2xBtn" class="p18">2</p><p id="timeScale4xBtn" class="p20">4</p><p id="timeScale10xBtn" class="p22">10</p></div><div id="timer_display"> <input name="go_time" type="textarea" id="go_time" size="5"> <input name="GO" type="button" id="GO" title="GO" value="GO"> <p class="p16">0</p></div></div></div></div><div id="unminimizeUI"></div>';


/* -----------------------------------------------------
    Check for vars in the URL
-------------------------------------------------------- */
// Updated 11/4/2019 by Gwen
// Merged 2 similar functions together
var getQueryVariable = function (variable) {
    var query = window.location.href;
    var vars = query.split(/&|\#|\?/);   
    
    for (var i = 0; i < vars.length; i++) {

        var pair = vars[i].split("=");
        
        if (pair.length == 2) {     // looks for a pair like culturecode=en-US
            if (pair[0] == variable) {
				return pair[1];
			}
            
        } else if (pair.length == 1) {  // looks for a single var like slider
            if (pair[0] == variable) {
                 return true
             }
        }
    }

    // returns false if variable is not found in variable list.
    return false 
};


if (getQueryVariable("slider")) {
    SliderTurnOn = true;
}

if (getQueryVariable("reviewer")) {
    ReviewerTurnOn = true;
}

if (getQueryVariable("ps")) {
    PopupSliderTurnOn = true;
}


/* -----------------------------------------------------
    Activate slider/dev tools
-------------------------------------------------------- */
if (SliderTurnOn === true) {

	if (courseOptions.coursetype === 'module' || courseOptions.coursetype === 'responsive-module') {
		$("body").append(sliderHTML);
	}

	$("body").append(langChangerDropDown);
	
	courseLanguageChecker();
    
    // Hide preloader on click
    $("#preloader").click(function() {
        $("#preloader").css("display", "none");
    });
	
} 

/* -----------------------------------------------------
    Expand language dropdown list
-------------------------------------------------------- */
$("#form_expand_click").click(function() {

    // if open, close it
	if ($("#form_expand_click").hasClass("slider_active_btn")) {
        TweenMax.to("#click_to_change_drop_down", 0.25, {attr:{size:"0"}, onComplete: function() {
            $("#click_to_change").css("align-items", "center"); 
        }}); 
        $("#click_to_change form select option").css("font-size", "16px");
	} else {
        // if closed, open it
        TweenMax.to("#click_to_change_drop_down", 0.25, {attr:{size:"20"}}); 
        $("#click_to_change form select option").css("font-size", "1em");
        $("#click_to_change").css("align-items", "flex-start"); 
	}

	$("#form_expand_click").toggleClass("slider_active_btn");
});


/* -----------------------------------------------------
    Change locale using language dropdown
-------------------------------------------------------- */
$("#click_to_change_drop_down").change(function () {
	
	$("#Updated-CSS-In-Lang, #Updated-CSS-In-Lang2, #Updated-Font-Type, #Updated-Font-In-Lang, #Intel-Clear-Pro").remove();
    
    //Broken for 2018 mobile video dropdown due to removal of vid slice
	
	//Quiz requires paxUID to load translations
	switch(this.value) {
		case "ar-SA":
			courseOptions.paxUID = "DBC9F706-C466-4986-A9A2-89E4BE05F7B5"
			break;
		case "en-AU":
			courseOptions.paxUID = "92DBF8FF-DC17-4FA7-839D-5545B5C9B220"
			break;
		case "pt-BR":
			courseOptions.paxUID = "D4992CB2-81E5-455B-B8D5-8B60E1818A98"
			break;
		case "zh-CHS":
			courseOptions.paxUID = "201B0257-73A7-4A18-BBAF-EDB479B4E119"
			break;
		case "cs-CZ":
			courseOptions.paxUID = "6F6EC0E7-99EE-4F4B-9B8C-A403E863135B"
			break;
		case "de-DE":
			courseOptions.paxUID = "DEAC14ED-38BD-4BCC-B5F5-676E896F2193"
			break;
		case "da-DK":
			courseOptions.paxUID = "41756058-2221-4ED3-98E8-5CF2C78A4868"
			break;
		case "el-GR":
			courseOptions.paxUID = "F9B8E44B-7C5F-4C52-B819-1E58B990CCD1"
			break;
		case "es-ES":
			courseOptions.paxUID = "87DA8E58-FB33-4334-B17D-E71CF0DA0C70"
			break;
		case "fi-FI":
			courseOptions.paxUID = "0BB4BE4B-B030-4145-AC6F-694AF25086DB"
			break;
		case "fr-FR":
			courseOptions.paxUID = "641C0C81-3C29-45FD-A062-B951BB951BBD"
			break;
		case "hu-HU":
			courseOptions.paxUID = "D4A7E40A-AE41-4CB6-8EAF-B86982BCEDAC"
			break;
		case "id-ID":
			courseOptions.paxUID = "F34CCBED-E94E-48CD-9CF8-684D4CB10B69"
			break;
		case "it-IT":
			courseOptions.paxUID = "293E2F62-AFDC-4384-B825-E809EE5FEF0B"
			break;
		case "ja-JP":
			courseOptions.paxUID = "0E501AF7-FA02-4839-B249-52A2E8552A11"
			break;
		case "ko-KR":
			courseOptions.paxUID = "D24C5721-FAEF-4E2E-A260-CF6CCDA841A9"
			break;
		case "es-MX":
			courseOptions.paxUID = "8D302721-DB94-4043-8165-09F32B592EF4"
			break;
		case "nl-NL":
			courseOptions.paxUID = "EBF8CBC3-91ED-4E39-B05C-74E232D91AEC"
			break;
		case "nb-NO":
			courseOptions.paxUID = "D920643C-431B-45A8-AC45-387F06DB81EE"
			break;
		case "pl-PL":
			courseOptions.paxUID = "421AE1CA-6D6A-4D99-9215-CAEF2B60954A"
			break;
		case "ro-RO":
			courseOptions.paxUID = "66BF3E43-6813-4D76-B2FB-2B6D1727297E"
			break;
		case "ru-RU":
			courseOptions.paxUID = "4ACD9928-81BF-4923-9C35-DA2516CAC7B1"
			break;
		case "uk-UA":
			courseOptions.paxUID = "5377E1F6-01AD-4474-B790-8E0C42FC5623"
			break;
		case "th-TH":
			courseOptions.paxUID = "4EAB8111-0213-4958-900A-40E3CFA3590E"
			break;
		case "tr-TR":
			courseOptions.paxUID = "B6784A02-E379-407F-996A-4FE394221809"
			break;
		case "zh-TW":
			courseOptions.paxUID = "516DC36A-023C-400F-A986-5B70B0068C45"
			break;
		case "en-GB":
			courseOptions.paxUID = "7F6C9561-D619-470A-A855-E040DA9A8099"
			break;
		case "en-US":
			courseOptions.paxUID = "1E7C53AB-B518-4A51-A96E-8F83E19673D8"
			break;
		case "vi-VN":
			courseOptions.paxUID = "1B8C0C9B-3D28-4F2C-838C-7D9A4606DEE7"
			break;
		case "sv-SE":
			courseOptions.paxUID = "DD8F7980-DAB0-4D5C-AEF7-EB5CB59A0188"
			break;
		default:
			break;
	}
	
	$( ".startQuiz" ).off("click"); 
	localize(this.value);
	return false
});


/* -----------------------------------------------------
    Cache buster for language-specific css style
-------------------------------------------------------- */
$("#click_to_refresh_lang_css").click(function() {
	
	var updateThisLangCss = $("#click_to_change_drop_down").find('option:selected').attr('id');
	var refreshCSSFileMain = (Math.random() * 100).toFixed(2);
	$("#Updated-CSS-In-Lang").remove();
	$("#Updated-CSS-In-Lang2").remove();
	$("#Updated-Font-Type, #Updated-Font-In-Lang").remove();
	localize(updateThisLangCss);
	$("#Update-Main-CSS").attr("href", "css/" + courseOptions.coursetype + ".css?v=" + refreshCSSFileMain);

	return false
});

/* -----------------------------------------------------
    Slider setup
-------------------------------------------------------- */
if (SliderTurnOn === true && (courseOptions.coursetype === 'module' || courseOptions.coursetype === 'responsive-module') ) {
	var playBtn = $("#playBtn"),
		pauseBtn = $("#pauseBtn"),
		resumeBtn = $("#resumeBtn"),
		reverseBtn = $("#reverseBtn"),
		timeScaleSlowBtn = $("#timeScaleSlowBtn"),
		timeScaleNormalBtn = $("#timeScaleNormalBtn"),
		timeScale2xBtn = $("#timeScale2xBtn"),
		timeScale4xBtn = $("#timeScale4xBtn"),
		timeScale10xBtn = $("#timeScale10xBtn"),
		playRangeBtn = $("#playRangeBtn"),
		parkTimelineBtn = $("#parkTimelineBtn"),
		totalTimeValue = $("#timer_display p"),
		minimizeUIBtn = $("#minimizeUI"),
		unminimizeUIBtn = $("#unminimizeUI"),
		swapPosBtn = $("#swapPosBtn"),
		gridlinesBtn = $("#gridlinesBtn");
    

    // 11-1-2019 New course progress tracker changed timeline setup code.
    // Old courses need to have dev-only updateSlider function added back
    // via the check below. New courses have the check in timeline.js -Gwen
    var courseDate = courseOptions.activityCode.slice(0,6);    

    if (courseDate < 201911) {
        tl.eventCallback("onUpdate", updateSlider)
    }

    /*	tl = new TimelineMax({
        onUpdate: updateSlider,
        suppressEvents: false
    });*/


	$('input#GO').click(function () {
		var textTime = $('input#go_time').val();
		tl.seek(textTime);
		totalTimeValue.html(tl.totalTime().toFixed(2) + " Sec");
		$("#slider").slider("value", tl.progress() * 100);

		//totalTimeValue.html(tl.totalTime(textTime).toFixed(2));

	});

	$("input#go_time").keyup(function (event) {
		if (event.keyCode == 13) {
			$("input#GO").click();
		}
	});

	playBtn.click(function () {

		$(this).addClass("slider_active_btn");
		$("#pauseBtn, #reverseBtn").removeClass();
		tl.play();

	});

	pauseBtn.click(function () {

		$(this).addClass("slider_active_btn");
		$("#pauseBtn, #reverseBtn, #playBtn").removeClass();
		tl.pause();

	});

	resumeBtn.click(function () {

		//Resume playback in current direction.
		tl.resume();

	});

	reverseBtn.click(function () {

		$(this).addClass("slider_active_btn");
		$("#pauseBtn, #playBtn").removeClass();
		tl.reverse();

	});


	timeScaleSlowBtn.click(function () {

		//timescale of .5 will make the tween play at half-speed (slower).
		//Tween will take 12 seconds to complete if normal duration is 6 seconds.

		$("#timeScale_wrapper .slider_active_speed_btn").removeClass("slider_active_speed_btn");
		$(this).addClass("slider_active_speed_btn");
		tl.timeScale(0.5);
		masterTimescale = 0.5;

	});


	timeScaleNormalBtn.click(function () {

		//timescale of 1 will make tween play at normal speed.
		$("#timeScale_wrapper .slider_active_speed_btn").removeClass("slider_active_speed_btn");
		$(this).addClass("slider_active_speed_btn");
		tl.timeScale(1);
		masterTimescale = 1;

	});

	timeScale2xBtn.click(function () {

		//timescale of 2 will make the tween play at double-speed (faster).
		//Tween will take 3 seconds to complete if normal duration is 6 seconds.
		$("#timeScale_wrapper .slider_active_speed_btn").removeClass("slider_active_speed_btn");
		$(this).addClass("slider_active_speed_btn");
		tl.timeScale(2);
		masterTimescale = 2;

	});

	timeScale4xBtn.click(function () {

		$("#timeScale_wrapper .slider_active_speed_btn").removeClass("slider_active_speed_btn");
		$(this).addClass("slider_active_speed_btn");
		tl.timeScale(4);
		masterTimescale = 4;
	});
    
    timeScale10xBtn.click(function () {
		$("#timeScale_wrapper .slider_active_speed_btn").removeClass("slider_active_speed_btn");
		$(this).addClass("slider_active_speed_btn");
		tl.timeScale(10);
		masterTimescale = 10;
	});
    
	// stopExtraTimelines button was removed on 1/9/2019 -Gwen	
    
    if (getQueryVariable("goup")) {
        $('#slider_wrapper').addClass('goUp');
    }    
    
    swapPosBtn.click(function () {
		$('#slider_wrapper').toggleClass('goUp');
	});
    
    gridlinesBtn.click(function () {
		$(this).toggleClass("slider_active_btn");
        // check if gridlines are already present
        if ($('#gridlines').length === 0) {
            $('<div/>', {id: 'gridlines'}).appendTo('#main_wrapper');
        } else {
            $('#gridlines').remove();
        }
	});
    
    // these icons are added to different spots depending on course type.
	devDoubleText();
    devToggleFont();
    
        
    // Minimize dev tools UI - Gwen 1/9/2019    
    var minimizeTL = new TimelineMax({paused: true});
        minimizeTL
        .to("#slider_wrapper, #click_to_change", 0.25, {opacity:0, display:"none", scale: 0.5})
        .from("#unminimizeUI", 0.1, {display:"none"})
    
    minimizeUIBtn.click(function () {
        minimizeTL.play();
	});
    
    unminimizeUIBtn.click(function () {
        minimizeTL.reverse();
	});
    
	var seekTime = getQueryVariable("TIMELINELOCATION");

	parkTimelineBtn.click(function () {

		var restore = tl.time();

		var queryParameters = {},
			queryString = location.search.substring(1),
			re = /([^&=]+)=([^&]*)/g,
			m;


		while (m = re.exec(queryString)) {
			queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
		}

		queryParameters['TIMELINELOCATION'] = restore;

		var checkTimelineURL = location.search = $.param(queryParameters)

		if (seekTime == restore) {

			location.reload();
		} else {

			location.search = $.param(queryParameters);
		}

	});
    
    var sliderWrapperTween = TweenMax.to($("#slider_wrapper"), 0.15, {opacity: 1, paused: true});
    
    $("#slider_wrapper").hover(function() {
        sliderWrapperTween.timeScale(1).play();
    }, function(){
        sliderWrapperTween.timeScale(0.6).reverse();
    });
    

	$("#slider").slider({
		range: false,
		min: 0,
		max: 100,
		step: .1,
		slide: function (event, ui) {
			tl.progress(ui.value / 100).pause();
		}
	});

	function updateSlider() {
		$("#slider").slider("value", tl.progress() * 100);
		totalTimeValue.html(tl.totalTime().toFixed(2) + " Sec");
	}

} else if (SliderTurnOn === true) {
    
    // dev tools for courses other than modules/ff's
        
    $("#doubleTextBtn2").click(function () {
        
		$(this).toggleClass("slider_active_btn");	
        
		$('#main_wrapper p, #main_wrapper li, #main_wrapper h1, #main_wrapper h2, #main_wrapper h3, #main_wrapper h4').each(function() {
			var text = $(this).html(); // get text from tag
			text += " "; // add a space			
			text += text; //then concatenate it to itself
			$(this).html(text); // put it back in the p tag
		});
        
        if (typeof(Waypoint) !== 'undefined') {
            Waypoint.refreshAll();
        }
		
	});
    
    devDoubleText();
    devToggleFont();
    
}


// Duplicate Text - Gwen 4/11/2018 -----------------------------------

function devDoubleText() {    
    
    var doubleHtml = '<div id="doubleTextBtn" class="motech_icon" title="Double text"></div>'
    
    if (courseOptions.coursetype === 'module' || courseOptions.coursetype === 'responsive-module') {
        // append to slider
        $("#slider_left").append(doubleHtml);
        
    } else {
        // append to dropdown
        $("#click_to_change_container").append(doubleHtml);
    }
    
    $("#doubleTextBtn").click(function () {

		$(this).toggleClass("slider_active_btn");	
        
		$('#main_wrapper p, #main_wrapper li:not(.nav_menu_item), #main_wrapper h1, #main_wrapper h2, #main_wrapper h3, #main_wrapper h4').each(function() {
			var text = $(this).html(); // get text from p/li tag
			text += " "; // add a space			
			text += text; //then concatenate it to itself
			$(this).html(text); // put it back in the p tag
		});
		
	});

    
}


// Disable Intel One - Gwen 5/2021 -----------------------------------

function devToggleFont() {    
    
    var toggleHtml = '<div id="toggleFontBtn" class="motech_icon" title="Toggle fonts"></div>'
    
    if (courseOptions.coursetype === 'module' || courseOptions.coursetype === 'responsive-module') {
        // append to slider
        $("#slider_left").append(toggleHtml);
        
    } else {
        // append to dropdown
        $("#click_to_change_container").append(toggleHtml);
    }
    
    
    $("#toggleFontBtn").click(function () {
		$(this).toggleClass("slider_active_btn");
        forceIntelOne = !forceIntelOne;
        updateLangCSS();
	});
    
    
}



/* -----------------------------------------------------
    Taylor Popup Slider Turn On
    
    Instructions: Turn on via URL, start a popup timeline,
    then click on the slider handle to bind it.
-------------------------------------------------------- */
if (SliderTurnOn === true && PopupSliderTurnOn === true) {
	
	$(document).ajaxStop(function() {
	
		if (typeof click_popup_array !== 'undefined') {
			
			//Binds Popup Timeline to Main Timeline 4/30/18
			$("#slider").bind('mousedown', function(e){
				
				var inprogress = false,
					inprogressArray = [];
                
				$.each(click_popup_array, function (i) {
					if (click_popup_array[i].progress() > 0) {
						inprogressArray.push(click_popup_array[i]);
					}
				});

				if (inprogressArray.length > 0) {
					inprogressArray[0].eventCallback( "onUpdate", function() {
						$("#slider").slider("value", inprogressArray[0].progress() * 100);
					});

					$("#slider").empty();
					$("#slider").slider({
						range: false,
						min: 0,
						max: 100,
						step: 0.1,
						slide: function (event, ui) {
							inprogressArray[0].progress(ui.value / 100).pause();
							if(inprogressArray[0].progress() == 1) {
								inprogressArray[0].pause(0);
							}
						}
					});
					
					inprogress = true;
				}
				
			});
		}
	});
}






/* -----------------------------------------------------
    Taylor Reviewer Turn On
-------------------------------------------------------- */
if (SliderTurnOn === true && ReviewerTurnOn === true) {
    
    // Gwen 1/25/2019: prevent left/right arrow keys from changing
    // the selected language in the lang dropdown
    $('select#click_to_change_drop_down').on('keydown', function(e){
        if (e.keyCode === 39 || e.keyCode === 37) {
            e.preventDefault();
            return false;
        }
    });
    


	$(document).ajaxStop(function() {
        
        $( timeScale10xBtn ).trigger( "click" );
	
		if (typeof click_popup_array === 'undefined') {

			$(document).bind('keydown',function(e){
				if (e.which==39) {
					e.preventDefault();
					$( playBtn ).trigger( "click" );
				} else if (e.which===37) {
					e.preventDefault();
					$( reverseBtn ).trigger( "click" );			
				}
			});

		} else {
			
			$( timeScale10xBtn ).trigger( "click" );
			
			$.each(click_popup_array, function(i) {
				click_popup_array[i].timeScale(10);
			});

			$(document).bind('keyup', function(e){
				
				var inprogress = false,
					inprogressArray = [];
				
				$.each(click_popup_array, function (i) {
					if (click_popup_array[i].progress() > 0) {
						inprogressArray.push(click_popup_array[i]);
					}
				});

				if (inprogressArray.length > 0) {				
					inprogress = true;
				}

				if (e.which===39) {
					e.preventDefault();
					if (inprogress) {
						if (inprogressArray[0].progress() == 1) {
							inprogressArray[0].pause(0);
						} else {
							inprogressArray[0].play();
						}					
					} else {
						$( playBtn ).trigger( "click" ); 
					}							
				} else if (e.which===37) {
					e.preventDefault();
					if (!inprogress) {
						$( reverseBtn ).trigger( "click" );
					}				
				}
			});	

		}
		
	});

}

/* -----------------------------------------------------
    Taylor Course Language Checker
-------------------------------------------------------- */
function courseLanguageChecker() {
		
	var part1 = (window.parent.apiURL || "https://retailedge.intel.com/api/") + "quiz/challengeText?cultureCode=",
		part2 = "&activityCode=",
		courseCodes = ["en-US", "ar-SA", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-GB", "es-ES", "fi-FI", "fr-FR", "hu-HU", "it-IT", "nb-NO", "nl-NL", "pl-PL", "ro-RO", "ru-RU", "sv-SE", "tr-TR", "uk-UA", "en-AU", "id-ID", "ko-KR", "th-TH", "vi-VN", "zh-TW", "ja-JP", "es-MX", "pt-BR", "zh-CHS"],
		part3 = "&format=json",
		courseAvailable = [],
		courseNotAvailable = [];

	function courseCheck() {
	  
		$.each(courseCodes, function(i) {

			// Gwen added Nov 2021
			var textSrc = courseOptions.activityCodeText != '' ? courseOptions.activityCodeText : courseOptions.activityCode;

			if (courseOptions.coursetype == "snack") {
				textSrc = courseOptions.sourceActivityCode;
			}

			var url = part1 + courseCodes[i] + part2 + textSrc + part3;

			$.ajax({
				url: url,
				type: "GET",
				dataType: "json",
				cache:false,
				success: function(data) {
					if (data.cultureCode === courseCodes[i]) {
						courseAvailable.push(courseCodes[i]);
					} else if (data.cultureCode !== courseCodes[i]) {
						courseNotAvailable.push(courseCodes[i]);
					}
				},
				error: function() {
					//console.log("failure");
				}
			});

		});

	} 
	
	courseCheck();
	
	$(document).ajaxStop(function() {
  		$.each(courseNotAvailable, function(i) {
			optionId = document.getElementById(courseNotAvailable[i]);
			$(optionId).attr("disabled", "disabled");
		});
	});
	
}

