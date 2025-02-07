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
    loader.addImage('images/bankicon_1.png');
 loader.addImage('images/bankicon_1_f.png');
 loader.addImage('images/bankicon_2.png');
 loader.addImage('images/bankicon_2_f.png');
 loader.addImage('images/bankicon_3.png');
 loader.addImage('images/bankicon_3_f.png');
 loader.addImage('images/bankicon_4.png');
 loader.addImage('images/bankicon_4_f.png');
 loader.addImage('images/bankicon_5.png');
 loader.addImage('images/bankicon_5_f.png');
 loader.addImage('images/bankicon_6.png');
 loader.addImage('images/bankicon_6_f.png');
 loader.addImage('images/bankicon_7.png');
 loader.addImage('images/bankicon_7_f.png');
 loader.addImage('images/bankicon_8.png');
 loader.addImage('images/bankicon_8_f.png');
 loader.addImage('images/board.jpg');
 loader.addImage('images/board_code.jpg');
 loader.addImage('images/code_image.png');
 loader.addImage('images/founticon_1.png');
 loader.addImage('images/founticon_2.png');
 loader.addImage('images/founticon_3.png');
 loader.addImage('images/founticon_4.png');
 loader.addImage('images/founticon_5.png');
 loader.addImage('images/founticon_6.png');
 loader.addImage('images/founticon_7.png');
 loader.addImage('images/founticon_8.png');
 loader.addImage('images/global_pattern.jpg');
 loader.addImage('images/magnifying_glass1.png');
 loader.addImage('images/magnifying_glass2.png');
 loader.addImage('images/tiny.gif');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/global_background_HD.jpg');

    }

    // Mobile images
    else {
    loader.addImage('images/global_background_MOB.jpg');

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
