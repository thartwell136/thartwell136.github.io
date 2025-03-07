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
    loader.addImage('images/crosshatch_gray.png');
 loader.addImage('images/instructions_X.svg');
 loader.addImage('images/tiny.gif');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/0_BG2_HD.jpg');
 loader.addImage('images/0_BG_HD.jpg');
 loader.addImage('images/1-Arch_HD.png');
 loader.addImage('images/1-Burst1_HD.png');
 loader.addImage('images/1-Burst2_HD.png');
 loader.addImage('images/1-Burst3_HD.png');
 loader.addImage('images/1-Burst4_HD.png');
 loader.addImage('images/1-Burst5_HD.png');
 loader.addImage('images/1-Burst6_HD.png');
 loader.addImage('images/1-BurstAll-2_HD.png');
 loader.addImage('images/1-BurstAll_HD.png');
 loader.addImage('images/1-Device_HD.png');
 loader.addImage('images/10-Arc_HD.png');
 loader.addImage('images/11-BurstAll2_HD.png');
 loader.addImage('images/11-BurstAll_HD.png');
 loader.addImage('images/11-Device_HD.png');
 loader.addImage('images/12-Arch_HD.png');
 loader.addImage('images/12-Swish_HD.png');
 loader.addImage('images/13-Burst1_HD.png');
 loader.addImage('images/13-Burst2_HD.png');
 loader.addImage('images/13-Burst3_HD.png');
 loader.addImage('images/13-Burst4_HD.png');
 loader.addImage('images/13-Burst5_HD.png');
 loader.addImage('images/13-Burst6_HD.png');
 loader.addImage('images/13-BurstAll2_HD.png');
 loader.addImage('images/13-BurstAll_HD.png');
 loader.addImage('images/13-Ravi_HD.png');
 loader.addImage('images/13-Swish2_HD.png');
 loader.addImage('images/13-Swish_HD.png');
 loader.addImage('images/14-BurstAll2_HD.png');
 loader.addImage('images/14-BurstAll_HD.png');
 loader.addImage('images/14-Ravi_HD.png');
 loader.addImage('images/14-Swish_HD.png');
 loader.addImage('images/15-BurstAll2_HD.png');
 loader.addImage('images/15-BurstAll_HD.png');
 loader.addImage('images/15-Device_HD.png');
 loader.addImage('images/16-Arch_HD.png');
 loader.addImage('images/16-BurstAll2_HD.png');
 loader.addImage('images/16-BurstAll_HD.png');
 loader.addImage('images/17-Arch_HD.png');
 loader.addImage('images/17-Burst1_HD.png');
 loader.addImage('images/17-Burst2_HD.png');
 loader.addImage('images/17-Burst3_HD.png');
 loader.addImage('images/17-Burst4_HD.png');
 loader.addImage('images/17-Burst5_HD.png');
 loader.addImage('images/17-Burst6_HD.png');
 loader.addImage('images/17-BurstAll2_HD.png');
 loader.addImage('images/17-BurstAll_HD.png');
 loader.addImage('images/2-L_HD.png');
 loader.addImage('images/2-R_HD.png');
 loader.addImage('images/2-Swish_HD.png');
 loader.addImage('images/3-Arch_HD.png');
 loader.addImage('images/3-BurstAll2_HD.png');
 loader.addImage('images/3-BurstAll_HD.png');
 loader.addImage('images/4-Burst1_HD.png');
 loader.addImage('images/4-Burst2_HD.png');
 loader.addImage('images/4-Burst3_HD.png');
 loader.addImage('images/4-Burst4_HD.png');
 loader.addImage('images/4-Burst5_HD.png');
 loader.addImage('images/4-Burst6_HD.png');
 loader.addImage('images/4-BurstAll2_HD.png');
 loader.addImage('images/4-BurstAll_HD.png');
 loader.addImage('images/4-Michael_HD.png');
 loader.addImage('images/4-Swish2_HD.png');
 loader.addImage('images/4-Swish_HD.png');
 loader.addImage('images/5-BurstAll2_HD.png');
 loader.addImage('images/5-BurstAll_HD.png');
 loader.addImage('images/5-Michael_HD.png');
 loader.addImage('images/5-Swish_HD.png');
 loader.addImage('images/6-Arch_HD.png');
 loader.addImage('images/6-Swish_HD.png');
 loader.addImage('images/7-Arch_HD.png');
 loader.addImage('images/7-BurstAll2_HD.png');
 loader.addImage('images/7-BurstAll_HD.png');
 loader.addImage('images/7-Device_HD.png');
 loader.addImage('images/8-Burst1_HD.png');
 loader.addImage('images/8-Burst2_HD.png');
 loader.addImage('images/8-Burst3_HD.png');
 loader.addImage('images/8-Burst4_HD.png');
 loader.addImage('images/8-Burst5_HD.png');
 loader.addImage('images/8-Burst6_HD.png');
 loader.addImage('images/8-BurstAll2_HD.png');
 loader.addImage('images/8-BurstAll_HD.png');
 loader.addImage('images/8-Jillian_HD.png');
 loader.addImage('images/8-Swish_HD.png');
 loader.addImage('images/9-BurstAll2_HD.png');
 loader.addImage('images/9-BurstAll_HD.png');
 loader.addImage('images/9-Jillian_HD.png');
 loader.addImage('images/9-Swish_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/0_BG2_MOB.jpg');
 loader.addImage('images/0_BG_MOB.jpg');
 loader.addImage('images/1-Arch_MOB.png');
 loader.addImage('images/1-Burst1_MOB.png');
 loader.addImage('images/1-Burst2_MOB.png');
 loader.addImage('images/1-Burst3_MOB.png');
 loader.addImage('images/1-Burst4_MOB.png');
 loader.addImage('images/1-Burst5_MOB.png');
 loader.addImage('images/1-Burst6_MOB.png');
 loader.addImage('images/1-BurstAll-2_MOB.png');
 loader.addImage('images/1-BurstAll_MOB.png');
 loader.addImage('images/1-Device_MOB.png');
 loader.addImage('images/10-Arc_MOB.png');
 loader.addImage('images/11-BurstAll2_MOB.png');
 loader.addImage('images/11-BurstAll_MOB.png');
 loader.addImage('images/11-Device_MOB.png');
 loader.addImage('images/12-Arch_MOB.png');
 loader.addImage('images/12-Swish_MOB.png');
 loader.addImage('images/13-Burst1_MOB.png');
 loader.addImage('images/13-Burst2_MOB.png');
 loader.addImage('images/13-Burst3_MOB.png');
 loader.addImage('images/13-Burst4_MOB.png');
 loader.addImage('images/13-Burst5_MOB.png');
 loader.addImage('images/13-Burst6_MOB.png');
 loader.addImage('images/13-BurstAll2_MOB.png');
 loader.addImage('images/13-BurstAll_MOB.png');
 loader.addImage('images/13-Ravi_MOB.png');
 loader.addImage('images/13-Swish2_MOB.png');
 loader.addImage('images/13-Swish_MOB.png');
 loader.addImage('images/14-BurstAll2_MOB.png');
 loader.addImage('images/14-BurstAll_MOB.png');
 loader.addImage('images/14-Ravi_MOB.png');
 loader.addImage('images/14-Swish_MOB.png');
 loader.addImage('images/15-BurstAll2_MOB.png');
 loader.addImage('images/15-BurstAll_MOB.png');
 loader.addImage('images/15-Device_MOB.png');
 loader.addImage('images/16-Arch_MOB.png');
 loader.addImage('images/16-BurstAll2_MOB.png');
 loader.addImage('images/16-BurstAll_MOB.png');
 loader.addImage('images/17-Arch_MOB.png');
 loader.addImage('images/17-Burst1_MOB.png');
 loader.addImage('images/17-Burst2_MOB.png');
 loader.addImage('images/17-Burst3_MOB.png');
 loader.addImage('images/17-Burst4_MOB.png');
 loader.addImage('images/17-Burst5_MOB.png');
 loader.addImage('images/17-Burst6_MOB.png');
 loader.addImage('images/17-BurstAll2_MOB.png');
 loader.addImage('images/17-BurstAll_MOB.png');
 loader.addImage('images/2-L_MOB.png');
 loader.addImage('images/2-R_MOB.png');
 loader.addImage('images/2-Swish_MOB.png');
 loader.addImage('images/3-Arch_MOB.png');
 loader.addImage('images/3-BurstAll2_MOB.png');
 loader.addImage('images/3-BurstAll_MOB.png');
 loader.addImage('images/4-Burst1_MOB.png');
 loader.addImage('images/4-Burst2_MOB.png');
 loader.addImage('images/4-Burst3_MOB.png');
 loader.addImage('images/4-Burst4_MOB.png');
 loader.addImage('images/4-Burst5_MOB.png');
 loader.addImage('images/4-Burst6_MOB.png');
 loader.addImage('images/4-BurstAll2_MOB.png');
 loader.addImage('images/4-BurstAll_MOB.png');
 loader.addImage('images/4-Michael_MOB.png');
 loader.addImage('images/4-Swish2_MOB.png');
 loader.addImage('images/4-Swish_MOB.png');
 loader.addImage('images/5-BurstAll2_MOB.png');
 loader.addImage('images/5-BurstAll_MOB.png');
 loader.addImage('images/5-Michael_MOB.png');
 loader.addImage('images/5-Swish_MOB.png');
 loader.addImage('images/6-Arch_MOB.png');
 loader.addImage('images/6-Swish_MOB.png');
 loader.addImage('images/7-Arch_MOB.png');
 loader.addImage('images/7-BurstAll2_MOB.png');
 loader.addImage('images/7-BurstAll_MOB.png');
 loader.addImage('images/7-Device_MOB.png');
 loader.addImage('images/8-Burst1_MOB.png');
 loader.addImage('images/8-Burst2_MOB.png');
 loader.addImage('images/8-Burst3_MOB.png');
 loader.addImage('images/8-Burst4_MOB.png');
 loader.addImage('images/8-Burst5_MOB.png');
 loader.addImage('images/8-Burst6_MOB.png');
 loader.addImage('images/8-BurstAll2_MOB.png');
 loader.addImage('images/8-BurstAll_MOB.png');
 loader.addImage('images/8-Jillian_MOB.png');
 loader.addImage('images/8-Swish_MOB.png');
 loader.addImage('images/9-BurstAll2_MOB.png');
 loader.addImage('images/9-BurstAll_MOB.png');
 loader.addImage('images/9-Jillian_MOB.png');
 loader.addImage('images/9-Swish_MOB.png');

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
