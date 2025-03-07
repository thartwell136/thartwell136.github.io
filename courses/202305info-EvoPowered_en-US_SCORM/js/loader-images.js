// JavaScript Document - Pre loader

if (courseOptions.usePreloader || courseOptions.coursetype == "module") {

    // Append html for the preloader
    var loadingBarHtml = '<div id="loading_bar_full_wrapper"> <div id="loading_bar_full_bar"> <div id="loading_bar_full_inner"></div></div><div id="loading_bar_full-progress" class="white p20">0%</div></div>';

    $("#preloader_wrapper").append(loadingBarHtml);
    gsap.to("#loading_bar_full_wrapper", {duration: 0.15, opacity:1})

    // Variable setup
    var $progress = $('#loading_bar_full-progress').text('0%'),
        loader = new PxLoader(),
        $box = $('#loading_bar_full_inner');

    // example
    loader.addImage('images/instructions_X.svg');

    // Images used for all screen sizes
    loader.addImage('images/hand_white_tap.png');
 loader.addImage('images/instructions_X.svg');
 loader.addImage('images/tiny.gif');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/1-Background_HD.jpg');
 loader.addImage('images/1-Image_HD.png');
 loader.addImage('images/2-Image_HD.png');
 loader.addImage('images/3-Image_HD.png');
 loader.addImage('images/4-Icon_01_HD.png');
 loader.addImage('images/4-Icon_02_HD.png');
 loader.addImage('images/4-Icon_03_HD.png');
 loader.addImage('images/4-Icon_04_HD.png');
 loader.addImage('images/4-Icon_05_HD.png');
 loader.addImage('images/4-Icon_06_HD.png');
 loader.addImage('images/4-Icon_07_HD.png');
 loader.addImage('images/4-Icon_08_HD.png');
 loader.addImage('images/4-Icon_09_HD.png');
 loader.addImage('images/4-Icon_10_HD.png');
 loader.addImage('images/4_Arrow-Left_HD.png');
 loader.addImage('images/4_Arrow-Right_HD.png');
 loader.addImage('images/5-Image_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/1-Background_MOB.jpg');
 loader.addImage('images/4_Arrow-Left_MOB.png');
 loader.addImage('images/4_Arrow-Right_MOB.png');

    }

    // callback that runs every time an image loads
    loader.addProgressListener(function(e) {

        // some debugging tools for dev mode
        if (SliderTurnOn) {
            if (e.loaded == false) {
                console.error(e.resource.getName() + ' DID NOT LOAD!');
            } else {
                //console.log(e.resource.getName() + ' Loaded');
            }
        }

        // the event provides stats on the number of completed items
        var percentDoneNow =  ((e.completedCount/e.totalCount) * 100).toFixed(0) - 1 + "%";
        $progress.text(percentDoneNow);
        gsap.set($box,{width:percentDoneNow});

    });

    // log when all resources have completed
    loader.addCompletionListener(function(e) {
        //console.log('Ready to go!');
        ImageLoadedDeferred.resolve();
    });

    loader.start();
}
