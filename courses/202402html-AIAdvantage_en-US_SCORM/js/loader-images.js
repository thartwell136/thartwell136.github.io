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
    loader.addImage('images/10-Icon.png');
 loader.addImage('images/10-Logo_1.png');
 loader.addImage('images/10-Logo_10.png');
 loader.addImage('images/10-Logo_11.png');
 loader.addImage('images/10-Logo_12.png');
 loader.addImage('images/10-Logo_2.png');
 loader.addImage('images/10-Logo_3.png');
 loader.addImage('images/10-Logo_4.png');
 loader.addImage('images/10-Logo_5.png');
 loader.addImage('images/10-Logo_6.png');
 loader.addImage('images/10-Logo_7.png');
 loader.addImage('images/10-Logo_8.png');
 loader.addImage('images/10-Logo_9.png');
 loader.addImage('images/4-BulletPoint.png');
 loader.addImage('images/7-Icon.png');
 loader.addImage('images/8-Icon.png');
 loader.addImage('images/9-Icon.png');
 loader.addImage('images/crosshatch_gray.png');
 loader.addImage('images/instructions_X.svg');
 loader.addImage('images/tiny.gif');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/1-IntelBadge_HD.jpg');
 loader.addImage('images/1-Shape_10_HD.jpg');
 loader.addImage('images/1-Shape_11_HD.jpg');
 loader.addImage('images/1-Shape_12_HD.jpg');
 loader.addImage('images/1-Shape_1_HD.jpg');
 loader.addImage('images/1-Shape_2_HD.jpg');
 loader.addImage('images/1-Shape_3_HD.jpg');
 loader.addImage('images/1-Shape_4_HD.jpg');
 loader.addImage('images/1-Shape_5_HD.jpg');
 loader.addImage('images/1-Shape_6_HD.jpg');
 loader.addImage('images/1-Shape_7_HD.jpg');
 loader.addImage('images/1-Shape_8_HD.jpg');
 loader.addImage('images/1-Shape_9_HD.jpg');
 loader.addImage('images/11-Photo_HD.jpg');
 loader.addImage('images/3-Photo_HD.jpg');
 loader.addImage('images/6-Photo_HD.jpg');
 loader.addImage('images/7-Shape_10_HD.jpg');
 loader.addImage('images/7-Shape_11_HD.jpg');
 loader.addImage('images/7-Shape_12_HD.jpg');
 loader.addImage('images/7-Shape_1_HD.jpg');
 loader.addImage('images/7-Shape_2_HD.jpg');
 loader.addImage('images/7-Shape_3_HD.jpg');
 loader.addImage('images/7-Shape_9_HD.jpg');

    }

    // Mobile images
    else {
    loader.addImage('images/1-IntelBadge_MOB.jpg');
 loader.addImage('images/1-Shape_10_MOB.jpg');
 loader.addImage('images/1-Shape_11_MOB.jpg');
 loader.addImage('images/1-Shape_12_MOB.jpg');
 loader.addImage('images/1-Shape_1_MOB.jpg');
 loader.addImage('images/1-Shape_2_MOB.jpg');
 loader.addImage('images/1-Shape_3_MOB.jpg');
 loader.addImage('images/1-Shape_4_MOB.jpg');
 loader.addImage('images/1-Shape_5_MOB.jpg');
 loader.addImage('images/1-Shape_6_MOB.jpg');
 loader.addImage('images/1-Shape_7_MOB.jpg');
 loader.addImage('images/1-Shape_8_MOB.jpg');
 loader.addImage('images/1-Shape_9_MOB.jpg');
 loader.addImage('images/11-Photo_MOB.jpg');
 loader.addImage('images/3-Photo_MOB.jpg');
 loader.addImage('images/6-Photo_MOB.jpg');
 loader.addImage('images/7-Shape_10_MOB.jpg');
 loader.addImage('images/7-Shape_11_MOB.jpg');
 loader.addImage('images/7-Shape_12_MOB.jpg');
 loader.addImage('images/7-Shape_1_MOB.jpg');
 loader.addImage('images/7-Shape_2_MOB.jpg');
 loader.addImage('images/7-Shape_3_MOB.jpg');
 loader.addImage('images/7-Shape_9_MOB.jpg');

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
