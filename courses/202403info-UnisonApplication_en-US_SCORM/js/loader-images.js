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
    loader.addImage('images/instructions_X.svg');
 loader.addImage('images/tiny.gif');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/01_Background_HD.jpg');
 loader.addImage('images/01_Image_HD.png');
 loader.addImage('images/02_AppBadge_HD.png');
 loader.addImage('images/03_Art_HD.png');
 loader.addImage('images/03_Image_1_HD.png');
 loader.addImage('images/03_Image_2_HD.png');
 loader.addImage('images/03_Image_3_HD.png');
 loader.addImage('images/03_Image_4_HD.png');
 loader.addImage('images/03_Image_5_HD.png');
 loader.addImage('images/03_Image_6_HD.png');
 loader.addImage('images/04_Art_HD.png');
 loader.addImage('images/04_Background_Bottom_HD.png');
 loader.addImage('images/04_Background_Top_HD.png');
 loader.addImage('images/04_Icon_1_HD.png');
 loader.addImage('images/04_Icon_2_HD.png');
 loader.addImage('images/04_Icon_3_HD.png');
 loader.addImage('images/04_TappyHand_HD.png');
 loader.addImage('images/05_Art_HD.png');
 loader.addImage('images/05_Image_HD.png');
 loader.addImage('images/06_Art_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/01_Background_MOB.jpg');
 loader.addImage('images/01_Image_MOB.png');
 loader.addImage('images/02_AppBadge_MOB.png');
 loader.addImage('images/03_Art_MOB.png');
 loader.addImage('images/03_Image_1_MOB.png');
 loader.addImage('images/03_Image_2_MOB.png');
 loader.addImage('images/03_Image_3_MOB.png');
 loader.addImage('images/03_Image_4_MOB.png');
 loader.addImage('images/03_Image_5_MOB.png');
 loader.addImage('images/03_Image_6_MOB.png');
 loader.addImage('images/04_Art_MOB.png');
 loader.addImage('images/04_Background_Bottom_MOB.png');
 loader.addImage('images/04_Background_Top_MOB.png');
 loader.addImage('images/04_Icon_1_MOB.png');
 loader.addImage('images/04_Icon_2_MOB.png');
 loader.addImage('images/04_Icon_3_MOB.png');
 loader.addImage('images/04_TappyHand_MOB.png');
 loader.addImage('images/05_Art_MOB.png');
 loader.addImage('images/05_Image_MOB.png');
 loader.addImage('images/06_Art_MOB.png');

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
