/* --------------------------

    GLOBAL COURSE CONFIG

--------------------------- */

/* Used for 2018-04 IREP courses and newer */

var courseOptions = {
    activityCode: '',
    activityCodeText: '', // if course text comes from a different activity than quiz questions, used for special projects
    databaseLocation: true,
    coursetype: '',
    courseUID: '',
    cultureCode: '',
    cultureCodeUntrans: ["da-DK", "fi-FI", "nb-NO", "sv-SE"],
    isIOS: (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)), // used to circumvent iOS iframe issues
    isMobile: false, // still used in quiz-2, remove when possilbe
    isMobileApp: (navigator.userAgent.indexOf("IREP.App") !== -1), // new mobile app detection only used in quiz-3
    isIE11: checkForIE(),
    moduleChapterTrack: false, // lots of testing needed if this is ever turned on
    mobileOfflineVersion: false,
    paxUID: '',
    PRCVersion: false, // for PRC mobile app specifically
    quizButtonDisplay: true,
    scormLocation: false,
    showedgeProMessage: false,
    sitecollection: '',
    sendTextToQuiz: false, // sends course locale text to the quiz, used for special projects
    usePreloader: false,
    rotate90: false, // when true, rotates modules/fast facts 90 deg CCW. PRC specific fix.
    timeDivisor: 1000
}

var IREP_CurrentUser = IREP_CurrentUser || {};

var screenHeight = window.screen.height,
    screenWidth =  window.screen.width,
    windowHeight = $(window).height(),
    windowWidth = $(window).width();

/*
5-1-2019 Adding this class is used to hide scrolling mouse anims on curtain and infographics, but it causes title screen to look weird. Decide how to handle.
if (courseOptions.isMobileApp) {
    $("html").addClass("user_on_mobile_app");
}
*/

if (courseOptions.isIOS) {
    $('html').addClass("ios");
} 

if (courseOptions.isIE11) {
    $('body').addClass("ie11");
} 

function checkForIE() {
    var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    var msie = ua.indexOf('MSIE '); // IE 10 or older
    var trident = ua.indexOf('Trident/'); //IE 11

    return (msie > 0 || trident > 0);
}

// Read data from URL to update global settings
function getSettings() {
    var q = window.location.href.split('#')[0];
    var vars = [],
        hash;
    var q = q.split('?')[1];

    if (q != undefined) {
        q = q.split('&');

        for (var i = 0; i < q.length; i++) {
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0].toLowerCase()] = hash[1];
        }
    }

    courseOptions.cultureCode = vars["culturecode"];
    courseOptions.paxUID = vars["paxuid"];
    courseOptions.sitecollection = vars["geocode"];

    if (window.location.href.indexOf("directselleredge") > -1) {
        courseOptions.sitecollection = "DMR";
    }
}

getSettings();
