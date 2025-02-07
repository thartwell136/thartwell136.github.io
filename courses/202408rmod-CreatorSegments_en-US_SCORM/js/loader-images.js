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
    loader.addImage('images/3-Mug.svg');
 loader.addImage('images/3-Time.svg');
 loader.addImage('images/6-surf.svg');
 loader.addImage('images/9-caps.svg');
 loader.addImage('images/9-music.svg');
 loader.addImage('images/crosshatch_gray.png');
 loader.addImage('images/instructions_X.svg');
 loader.addImage('images/tiny.gif');
 loader.addImage('images/X-Button.svg');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/0-BG-Repeatable_HD.jpg');
 loader.addImage('images/1-1_HD.png');
 loader.addImage('images/1-2_HD.png');
 loader.addImage('images/1-3_HD.png');
 loader.addImage('images/1-Paint_HD.png');
 loader.addImage('images/1-UI_HD.png');
 loader.addImage('images/10-Paint_HD.png');
 loader.addImage('images/11-Paint_HD.png');
 loader.addImage('images/11-UI_HD.png');
 loader.addImage('images/2-Band_HD.jpg');
 loader.addImage('images/2-Chart_HD.png');
 loader.addImage('images/2-Device_HD.png');
 loader.addImage('images/2-Paint_HD.png');
 loader.addImage('images/3-Img1_HD.jpg');
 loader.addImage('images/3-Img2_HD.jpg');
 loader.addImage('images/4-PaintL_HD.png');
 loader.addImage('images/4-PaintR_HD.png');
 loader.addImage('images/5-Band_HD.jpg');
 loader.addImage('images/5-Chart_HD.png');
 loader.addImage('images/5-Device_HD.png');
 loader.addImage('images/5-Paint_HD.png');
 loader.addImage('images/6-Dog_HD.png');
 loader.addImage('images/6-Img1_HD.jpg');
 loader.addImage('images/6-Img2_HD.png');
 loader.addImage('images/7-PaintL_HD.png');
 loader.addImage('images/7-PaintR_HD.png');
 loader.addImage('images/8-Band_HD.jpg');
 loader.addImage('images/8-Chart_HD.png');
 loader.addImage('images/8-Device_HD.png');
 loader.addImage('images/8-Paint_HD.png');
 loader.addImage('images/9-Img1_HD.jpg');
 loader.addImage('images/9-Img2_HD.png');
 loader.addImage('images/9-Paint_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/0-BG-Repeatable_MOB.jpg');
 loader.addImage('images/1-1_MOB.png');
 loader.addImage('images/1-2_MOB.png');
 loader.addImage('images/1-3_MOB.png');
 loader.addImage('images/1-Paint_MOB.png');
 loader.addImage('images/1-UI_MOB.png');
 loader.addImage('images/10-Paint_MOB.png');
 loader.addImage('images/11-Paint_MOB.png');
 loader.addImage('images/11-UI_MOB.png');
 loader.addImage('images/2-Band_MOB.jpg');
 loader.addImage('images/2-Chart_MOB.png');
 loader.addImage('images/2-Device_MOB.png');
 loader.addImage('images/2-Paint_MOB.png');
 loader.addImage('images/3-Img1_MOB.jpg');
 loader.addImage('images/3-Img2_MOB.jpg');
 loader.addImage('images/4-PaintL_MOB.png');
 loader.addImage('images/4-PaintR_MOB.png');
 loader.addImage('images/5-Band_MOB.jpg');
 loader.addImage('images/5-Chart_MOB.png');
 loader.addImage('images/5-Device_MOB.png');
 loader.addImage('images/5-Paint_MOB.png');
 loader.addImage('images/6-Dog_MOB.png');
 loader.addImage('images/6-Img1_MOB.jpg');
 loader.addImage('images/6-Img2_MOB.png');
 loader.addImage('images/7-PaintL_MOB.png');
 loader.addImage('images/7-PaintR_MOB.png');
 loader.addImage('images/8-Band_MOB.jpg');
 loader.addImage('images/8-Chart_MOB.png');
 loader.addImage('images/8-Device_MOB.png');
 loader.addImage('images/8-Paint_MOB.png');
 loader.addImage('images/9-Img1_MOB.jpg');
 loader.addImage('images/9-Img2_MOB.png');
 loader.addImage('images/9-Paint_MOB.png');

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
