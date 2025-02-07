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
    loader.addImage('images/arrow.svg');
 loader.addImage('images/instructions_X.svg');
 loader.addImage('images/remove-button.svg');
 loader.addImage('images/right-arrow.svg');
 loader.addImage('images/tiny.gif');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/0-BG_HD.jpg');
 loader.addImage('images/1-Cloud_HD.png');
 loader.addImage('images/1-Device_HD.png');
 loader.addImage('images/2-Chip_HD.png');
 loader.addImage('images/2-CloudB_HD.png');
 loader.addImage('images/2-CloudT_HD.png');
 loader.addImage('images/3-Box1_HD.jpg');
 loader.addImage('images/3-Box2_HD.jpg');
 loader.addImage('images/3-Box3_HD.jpg');
 loader.addImage('images/3-Box4_HD.jpg');
 loader.addImage('images/3-CloudB_HD.png');
 loader.addImage('images/3-CloudT_HD.png');
 loader.addImage('images/3-Device_HD.png');
 loader.addImage('images/3-Pop1-Chip_HD.png');
 loader.addImage('images/3-Pop1-PCore_HD.png');
 loader.addImage('images/3-Pop2-Chip_HD.png');
 loader.addImage('images/3-Pop2-ECore_HD.png');
 loader.addImage('images/3-Pop3_HD.jpg');
 loader.addImage('images/3-Pop4-All_HD.png');
 loader.addImage('images/3-Pop4-Cables_HD.png');
 loader.addImage('images/3-Pop4-Wifi_HD.png');
 loader.addImage('images/4-Box1_HD.jpg');
 loader.addImage('images/4-Box2_HD.jpg');
 loader.addImage('images/4-Box3_HD.jpg');
 loader.addImage('images/4-Box4_HD.jpg');
 loader.addImage('images/4-Box5_HD.jpg');
 loader.addImage('images/4-Box6_HD.jpg');
 loader.addImage('images/4-CloudB_HD.png');
 loader.addImage('images/4-CloudT-L_HD.png');
 loader.addImage('images/4-CloudT-R_HD.png');
 loader.addImage('images/5-Box1_HD.jpg');
 loader.addImage('images/5-Box2_HD.jpg');
 loader.addImage('images/5-CloudB_HD.png');
 loader.addImage('images/5-CloudT_HD.png');
 loader.addImage('images/6-CloudB_HD.png');
 loader.addImage('images/6-CloudT_HD.png');
 loader.addImage('images/6-Device_HD.png');
 loader.addImage('images/7-Box1_HD.jpg');
 loader.addImage('images/7-Box2_HD.jpg');
 loader.addImage('images/7-Box3_HD.jpg');
 loader.addImage('images/7-Box4_HD.jpg');
 loader.addImage('images/7-Box5_HD.jpg');
 loader.addImage('images/7-Box6_HD.jpg');
 loader.addImage('images/7-CloudB_HD.png');
 loader.addImage('images/7-CloudT-L_HD.png');
 loader.addImage('images/7-CloudT-R_HD.png');
 loader.addImage('images/8-CloudL_HD.png');
 loader.addImage('images/8-CloudR_HD.png');
 loader.addImage('images/8-Device1_HD.png');
 loader.addImage('images/8-Device2_HD.png');
 loader.addImage('images/8-Device3_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/0-BG_MOB.jpg');
 loader.addImage('images/1-Cloud_MOB.png');
 loader.addImage('images/1-Device_MOB.png');
 loader.addImage('images/2-Chip_MOB.png');
 loader.addImage('images/2-CloudB_MOB.png');
 loader.addImage('images/2-CloudT_MOB.png');
 loader.addImage('images/3-Box1_MOB.jpg');
 loader.addImage('images/3-Box2_MOB.jpg');
 loader.addImage('images/3-Box3_MOB.jpg');
 loader.addImage('images/3-Box4_MOB.jpg');
 loader.addImage('images/3-CloudB_MOB.png');
 loader.addImage('images/3-CloudT_MOB.png');
 loader.addImage('images/3-Device_MOB.png');
 loader.addImage('images/3-Pop1-Chip_MOB.png');
 loader.addImage('images/3-Pop1-PCore_MOB.png');
 loader.addImage('images/3-Pop2-Chip_MOB.png');
 loader.addImage('images/3-Pop2-ECore_MOB.png');
 loader.addImage('images/3-Pop3_MOB.jpg');
 loader.addImage('images/3-Pop4-All_MOB.png');
 loader.addImage('images/3-Pop4-Cables_MOB.png');
 loader.addImage('images/3-Pop4-Wifi_MOB.png');
 loader.addImage('images/4-Box1_MOB.jpg');
 loader.addImage('images/4-Box2_MOB.jpg');
 loader.addImage('images/4-Box3_MOB.jpg');
 loader.addImage('images/4-Box4_MOB.jpg');
 loader.addImage('images/4-Box5_MOB.jpg');
 loader.addImage('images/4-Box6_MOB.jpg');
 loader.addImage('images/4-CloudB_MOB.png');
 loader.addImage('images/4-CloudT-L_MOB.png');
 loader.addImage('images/4-CloudT-R_MOB.png');
 loader.addImage('images/5-Box1_MOB.jpg');
 loader.addImage('images/5-Box2_MOB.jpg');
 loader.addImage('images/5-CloudB_MOB.png');
 loader.addImage('images/5-CloudT_MOB.png');
 loader.addImage('images/6-CloudB_MOB.png');
 loader.addImage('images/6-CloudT_MOB.png');
 loader.addImage('images/6-Device_MOB.png');
 loader.addImage('images/7-Box1_MOB.jpg');
 loader.addImage('images/7-Box2_MOB.jpg');
 loader.addImage('images/7-Box3_MOB.jpg');
 loader.addImage('images/7-Box4_MOB.jpg');
 loader.addImage('images/7-Box5_MOB.jpg');
 loader.addImage('images/7-Box6_MOB.jpg');
 loader.addImage('images/7-CloudB_MOB.png');
 loader.addImage('images/7-CloudT-L_MOB.png');
 loader.addImage('images/7-CloudT-R_MOB.png');
 loader.addImage('images/8-CloudL_MOB.png');
 loader.addImage('images/8-CloudR_MOB.png');
 loader.addImage('images/8-Device1_MOB.png');
 loader.addImage('images/8-Device2_MOB.png');
 loader.addImage('images/8-Device3_MOB.png');

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
