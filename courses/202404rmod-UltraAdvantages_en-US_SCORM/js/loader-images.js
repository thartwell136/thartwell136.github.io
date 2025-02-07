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
    loader.addImage('images/1-MiniBoxes1.png');
 loader.addImage('images/1-MiniBoxes2.png');
 loader.addImage('images/1-MiniBoxes4.png');
 loader.addImage('images/1-MiniBoxes5.png');
 loader.addImage('images/1-MiniBoxes6.png');
 loader.addImage('images/10-1.png');
 loader.addImage('images/10-2.png');
 loader.addImage('images/10-3.png');
 loader.addImage('images/10-minibox1.png');
 loader.addImage('images/10-minibox2.png');
 loader.addImage('images/10-minibox3.png');
 loader.addImage('images/11-badge.png');
 loader.addImage('images/11-burst.jpg');
 loader.addImage('images/11-square1.png');
 loader.addImage('images/11-square2.png');
 loader.addImage('images/12-box1.png');
 loader.addImage('images/12-Corner1.jpg');
 loader.addImage('images/12-Corner2.jpg');
 loader.addImage('images/13-box1.png');
 loader.addImage('images/13-box2.png');
 loader.addImage('images/16-square1.png');
 loader.addImage('images/16-square2.png');
 loader.addImage('images/17-Box1.png');
 loader.addImage('images/17-Box2.png');
 loader.addImage('images/3-minibox1.png');
 loader.addImage('images/3-minibox2.png');
 loader.addImage('images/4-Squares.png');
 loader.addImage('images/5-Icon1.png');
 loader.addImage('images/5-Icon2.png');
 loader.addImage('images/5-Icon3.png');
 loader.addImage('images/5-Icon4.png');
 loader.addImage('images/6-Icon1.png');
 loader.addImage('images/6-squares.png');
 loader.addImage('images/7-Icon1.png');
 loader.addImage('images/8-Icon1.png');
 loader.addImage('images/9-Icon1.png');
 loader.addImage('images/9-minibox1.png');
 loader.addImage('images/9-minibox2.png');
 loader.addImage('images/crosshatch_gray.png');
 loader.addImage('images/instructions_X.svg');
 loader.addImage('images/tiny.gif');
 loader.addImage('images/X-Button.svg');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/1-Badge_HD.jpg');
 loader.addImage('images/1-BoxLine_HD.png');
 loader.addImage('images/1-Box_HD.jpg');
 loader.addImage('images/11-BG_HD.jpg');
 loader.addImage('images/11-Box1_HD.jpg');
 loader.addImage('images/11-Box2_HD.jpg');
 loader.addImage('images/11-Box3_HD.jpg');
 loader.addImage('images/11-Box4_HD.jpg');
 loader.addImage('images/11-Box5_HD.jpg');
 loader.addImage('images/12-Thunder1_HD.png');
 loader.addImage('images/12-Thunder2_HD.png');
 loader.addImage('images/13-burst_HD.jpg');
 loader.addImage('images/13-wifi_HD.png');
 loader.addImage('images/14-Device_HD.png');
 loader.addImage('images/14-Line1_HD.png');
 loader.addImage('images/14-Line2_HD.png');
 loader.addImage('images/15-BG_HD.jpg');
 loader.addImage('images/16-1_HD.png');
 loader.addImage('images/16-2_HD.png');
 loader.addImage('images/16-3_HD.png');
 loader.addImage('images/16-4_HD.png');
 loader.addImage('images/18-BoxLine_HD.png');
 loader.addImage('images/2-BoxLine_HD.png');
 loader.addImage('images/2-Box_HD.jpg');
 loader.addImage('images/2-Device_HD.png');
 loader.addImage('images/2-Line1_HD.png');
 loader.addImage('images/2-Line2_HD.png');
 loader.addImage('images/2-L_HD.jpg');
 loader.addImage('images/2-R_HD.jpg');
 loader.addImage('images/3-BG_HD.jpg');
 loader.addImage('images/3-Box1_HD.png');
 loader.addImage('images/3-Box2Tall_HD.png');
 loader.addImage('images/3-Box2_HD.png');
 loader.addImage('images/3-Box3_HD.png');
 loader.addImage('images/3-Box4_HD.png');
 loader.addImage('images/3-Box5_HD.png');
 loader.addImage('images/3-Box6_HD.png');
 loader.addImage('images/4-Line_HD.png');
 loader.addImage('images/5-BG_HD.jpg');
 loader.addImage('images/6-triangleBG_HD.jpg');
 loader.addImage('images/6-triangle_HD.png');
 loader.addImage('images/6-x_HD.png');
 loader.addImage('images/7-triangle_HD.png');
 loader.addImage('images/8-triangle_HD.png');
 loader.addImage('images/9-triangle_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/1-Badge_MOB.jpg');
 loader.addImage('images/1-BoxLine_MOB.png');
 loader.addImage('images/1-Box_MOB.jpg');
 loader.addImage('images/10-BG_MOB.jpg');
 loader.addImage('images/11-badge_MOB.png');
 loader.addImage('images/11-BG_MOB.jpg');
 loader.addImage('images/11-Box1_MOB.jpg');
 loader.addImage('images/11-Box2_MOB.jpg');
 loader.addImage('images/11-Box3_MOB.jpg');
 loader.addImage('images/11-Box4_MOB.jpg');
 loader.addImage('images/11-Box5_MOB.jpg');
 loader.addImage('images/12-Thunder1_MOB.png');
 loader.addImage('images/12-Thunder2_MOB.png');
 loader.addImage('images/13-burst_MOB.jpg');
 loader.addImage('images/13-wifi_MOB.png');
 loader.addImage('images/14-Device_MOB.png');
 loader.addImage('images/14-Line1_MOB.png');
 loader.addImage('images/14-Line2_MOB.png');
 loader.addImage('images/15-BG_MOB.jpg');
 loader.addImage('images/16-1_MOB.png');
 loader.addImage('images/16-2_MOB.png');
 loader.addImage('images/16-3_MOB.png');
 loader.addImage('images/16-4_MOB.png');
 loader.addImage('images/16-BG_MOB.jpg');
 loader.addImage('images/18-BoxLine_MOB.png');
 loader.addImage('images/2-BoxLine_MOB.png');
 loader.addImage('images/2-Box_MOB.jpg');
 loader.addImage('images/2-Device_MOB.png');
 loader.addImage('images/2-Line1_MOB.png');
 loader.addImage('images/2-Line2_MOB.png');
 loader.addImage('images/2-L_MOB.jpg');
 loader.addImage('images/2-R_MOB.jpg');
 loader.addImage('images/3-BG_MOB.jpg');
 loader.addImage('images/3-Box1_MOB.png');
 loader.addImage('images/3-Box2Tall_MOB.png');
 loader.addImage('images/3-Box2_MOB.png');
 loader.addImage('images/3-Box3_MOB.png');
 loader.addImage('images/3-Box4_MOB.png');
 loader.addImage('images/3-Box5_MOB.png');
 loader.addImage('images/3-Box6_MOB.png');
 loader.addImage('images/4-Line_MOB.png');
 loader.addImage('images/5-BG_MOB.jpg');
 loader.addImage('images/6-triangleBG_MOB.jpg');
 loader.addImage('images/6-triangle_MOB.png');
 loader.addImage('images/6-x_MOB.png');
 loader.addImage('images/7-triangle_MOB.png');
 loader.addImage('images/8-triangle_MOB.png');
 loader.addImage('images/9-triangle_MOB.png');

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
