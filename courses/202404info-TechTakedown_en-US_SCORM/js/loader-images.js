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
    loader.addImage('images/02_Arrow_01_Left.png');
 loader.addImage('images/02_Arrow_02_Right.png');
 loader.addImage('images/instructions_X.svg');
 loader.addImage('images/tappy.png');
 loader.addImage('images/tiny.gif');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/01_Background_Bottom_HD.png');
 loader.addImage('images/01_Background_Image_HD.jpg');
 loader.addImage('images/01_Badge_01_HD.png');
 loader.addImage('images/01_Badge_02_HD.png');
 loader.addImage('images/02_Background_Image_HD.png');
 loader.addImage('images/02_Banner_01_Top_HD.png');
 loader.addImage('images/02_Banner_02_Middle_HD.png');
 loader.addImage('images/02_Banner_03_Bottom_HD.png');
 loader.addImage('images/02_Icon_01_HD.png');
 loader.addImage('images/02_Icon_02_HD.png');
 loader.addImage('images/02_Image_01_HD.png');
 loader.addImage('images/02_Image_02_HD.png');
 loader.addImage('images/02_Image_03_HD.png');
 loader.addImage('images/02_Image_04_HD.png');
 loader.addImage('images/02_Number_01_HD.png');
 loader.addImage('images/02_Number_02_HD.png');
 loader.addImage('images/02_Number_03_HD.png');
 loader.addImage('images/02_Number_04_HD.png');
 loader.addImage('images/03_Background_01_Top_HD.png');
 loader.addImage('images/03_Background_02_Bottom_HD.png');
 loader.addImage('images/03_Image_HD.png');
 loader.addImage('images/04_Background_HD.jpg');

    }

    // Mobile images
    else {
    loader.addImage('images/01_Background_Bottom_MOB.png');
 loader.addImage('images/01_Background_Image_MOB.jpg');
 loader.addImage('images/01_Badge_01_MOB.png');
 loader.addImage('images/01_Badge_02_MOB.png');
 loader.addImage('images/02_Background_Image_MOB.png');
 loader.addImage('images/02_Banner_01_Top_MOB.png');
 loader.addImage('images/02_Banner_02_Middle_MOB.png');
 loader.addImage('images/02_Banner_03_Bottom_MOB.png');
 loader.addImage('images/02_Icon_01_MOB.png');
 loader.addImage('images/02_Icon_02_MOB.png');
 loader.addImage('images/02_Image_01_MOB.png');
 loader.addImage('images/02_Image_02_MOB.png');
 loader.addImage('images/02_Image_03_MOB.png');
 loader.addImage('images/02_Image_04_MOB.png');
 loader.addImage('images/02_Number_01_MOB.png');
 loader.addImage('images/02_Number_02_MOB.png');
 loader.addImage('images/02_Number_03_MOB.png');
 loader.addImage('images/02_Number_04_MOB.png');
 loader.addImage('images/03_Background_01_Top_MOB.png');
 loader.addImage('images/03_Background_02_Bottom_MOB.png');
 loader.addImage('images/03_Image_MOB.png');
 loader.addImage('images/04_Background_MOB.jpg');

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
