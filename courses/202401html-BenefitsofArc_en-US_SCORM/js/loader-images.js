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
    loader.addImage('images/1-BG_HD.jpg');
 loader.addImage('images/1-Box_HD.png');
 loader.addImage('images/10-BG_HD.jpg');
 loader.addImage('images/10-Game1_HD.png');
 loader.addImage('images/10-Game2_HD.png');
 loader.addImage('images/10-Game3_HD.png');
 loader.addImage('images/10-Game4_HD.png');
 loader.addImage('images/10-Game5_HD.png');
 loader.addImage('images/11-Game1_HD.png');
 loader.addImage('images/11-Game2_HD.png');
 loader.addImage('images/11-Game3_HD.png');
 loader.addImage('images/11-Game4_HD.png');
 loader.addImage('images/11-Game5_HD.png');
 loader.addImage('images/12-BG_HD.jpg');
 loader.addImage('images/12-Box_HD.png');
 loader.addImage('images/12-Xess_HD.png');
 loader.addImage('images/13-BG_HD.jpg');
 loader.addImage('images/13-Game1_HD.png');
 loader.addImage('images/13-Game2_HD.png');
 loader.addImage('images/13-Game3_HD.png');
 loader.addImage('images/13-Game4_HD.png');
 loader.addImage('images/13-Game5_HD.png');
 loader.addImage('images/14-Box1_HD.png');
 loader.addImage('images/14-Box2_HD.png');
 loader.addImage('images/14-Box3_HD.png');
 loader.addImage('images/15-Device_HD.png');
 loader.addImage('images/16-Box_HD.png');
 loader.addImage('images/16-Xess_HD.png');
 loader.addImage('images/17-Arc_HD.png');
 loader.addImage('images/17-BG_HD.jpg');
 loader.addImage('images/17-Box_HD.png');
 loader.addImage('images/2-Arc_HD.png');
 loader.addImage('images/3-BG_HD.jpg');
 loader.addImage('images/3-SmBox_HD.png');
 loader.addImage('images/4-Xess_HD.png');
 loader.addImage('images/5-DeepLink_HD.png');
 loader.addImage('images/6-BG_HD.jpg');
 loader.addImage('images/6-HyperCompute_HD.png');
 loader.addImage('images/6-HyperEncode_HD.png');
 loader.addImage('images/6-StreamAssist_HD.png');
 loader.addImage('images/7-LG_HD.png');
 loader.addImage('images/7-Pop-HyperCompute_HD.png');
 loader.addImage('images/7-Pop-HyperEncode_HD.png');
 loader.addImage('images/7-Pop-StreamAssist_HD.png');
 loader.addImage('images/7-XBtn_HD.png');
 loader.addImage('images/8-Arc_HD.png');
 loader.addImage('images/8-BG_HD.jpg');
 loader.addImage('images/8-Nvidia_HD.png');
 loader.addImage('images/9-Badge_HD.png');
 loader.addImage('images/9-Box_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/1-BG_MOB.jpg');
 loader.addImage('images/1-Box_MOB.png');
 loader.addImage('images/10-BG_MOB.jpg');
 loader.addImage('images/10-Game1_MOB.png');
 loader.addImage('images/10-Game2_MOB.png');
 loader.addImage('images/10-Game3_MOB.png');
 loader.addImage('images/10-Game4_MOB.png');
 loader.addImage('images/10-Game5_MOB.png');
 loader.addImage('images/11-Game1_MOB.png');
 loader.addImage('images/11-Game2_MOB.png');
 loader.addImage('images/11-Game3_MOB.png');
 loader.addImage('images/11-Game4_MOB.png');
 loader.addImage('images/11-Game5_MOB.png');
 loader.addImage('images/12-BG_MOB.jpg');
 loader.addImage('images/12-Box_MOB.png');
 loader.addImage('images/12-Xess_MOB.png');
 loader.addImage('images/13-BG_MOB.jpg');
 loader.addImage('images/13-Game1_MOB.png');
 loader.addImage('images/13-Game2_MOB.png');
 loader.addImage('images/13-Game3_MOB.png');
 loader.addImage('images/13-Game4_MOB.png');
 loader.addImage('images/13-Game5_MOB.png');
 loader.addImage('images/14-Box1_MOB.png');
 loader.addImage('images/14-Box2_MOB.png');
 loader.addImage('images/14-Box3_MOB.png');
 loader.addImage('images/15-Device_MOB.png');
 loader.addImage('images/16-Box_MOB.png');
 loader.addImage('images/16-Xess_MOB.png');
 loader.addImage('images/17-Arc_MOB.png');
 loader.addImage('images/17-BG_MOB.jpg');
 loader.addImage('images/17-Box_MOB.png');
 loader.addImage('images/2-Arc_MOB.png');
 loader.addImage('images/3-BG_MOB.jpg');
 loader.addImage('images/3-SmBox_MOB.png');
 loader.addImage('images/4-Xess_MOB.png');
 loader.addImage('images/5-DeepLink_MOB.png');
 loader.addImage('images/6-BG_MOB.jpg');
 loader.addImage('images/6-HyperCompute_MOB.png');
 loader.addImage('images/6-HyperEncode_MOB.png');
 loader.addImage('images/6-StreamAssist_MOB.png');
 loader.addImage('images/7-LG_MOB.png');
 loader.addImage('images/7-Pop-HyperCompute_MOB.png');
 loader.addImage('images/7-Pop-HyperEncode_MOB.png');
 loader.addImage('images/7-Pop-StreamAssist_MOB.png');
 loader.addImage('images/7-XBtn_MOB.png');
 loader.addImage('images/8-Arc_MOB.png');
 loader.addImage('images/8-BG_MOB.jpg');
 loader.addImage('images/8-Nvidia_MOB.png');
 loader.addImage('images/9-Badge_MOB.png');
 loader.addImage('images/9-Box_MOB.png');

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
