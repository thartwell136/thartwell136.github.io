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
 loader.addImage('images/SVGS/1-BottomMask.svg');
 loader.addImage('images/SVGS/1-TopMask.svg');
 loader.addImage('images/SVGS/1_Vectors.svg');
 loader.addImage('images/SVGS/3-Vectors.svg');
 loader.addImage('images/SVGS/5-Vectors.svg');
 loader.addImage('images/SVGS/5-WavyLines.svg');
 loader.addImage('images/SVGS/6-Vectors.svg');
 loader.addImage('images/SVGS/7A-Vectors.svg');
 loader.addImage('images/SVGS/7B-Vectors.svg');
 loader.addImage('images/SVGS/7C-Vectors.svg');
 loader.addImage('images/SVGS/8-TopMask.svg');
 loader.addImage('images/SVGS/8-Vectors.svg');


    // HD images
    if (windowWidth > 1024) {
    loader.addImage('images/1-Background_HD.jpg');
 loader.addImage('images/1-Evo_badge_HD.png');
 loader.addImage('images/1-Image_1_HD.png');
 loader.addImage('images/1-Image_2_HD.png');
 loader.addImage('images/1-Image_3_HD.png');
 loader.addImage('images/1-Image_4_HD.png');
 loader.addImage('images/2-Photo_Edge_HD.jpg');
 loader.addImage('images/2-Photo_Strip_HD.jpg');
 loader.addImage('images/3-Laptop_HD.png');
 loader.addImage('images/4-A-Icon_HD.png');
 loader.addImage('images/4-A-Image_1_HD.png');
 loader.addImage('images/4-A-Image_2_HD.png');
 loader.addImage('images/4-Arrow_1_HD.png');
 loader.addImage('images/4-Arrow_2_HD.png');
 loader.addImage('images/4-B-Icon_HD.png');
 loader.addImage('images/4-B-Image_1_HD.png');
 loader.addImage('images/4-B-Image_2_HD.png');
 loader.addImage('images/4-Background_HD.jpg');
 loader.addImage('images/4-C-Icon_HD.png');
 loader.addImage('images/4-C-Image_1_HD.png');
 loader.addImage('images/4-C-Image_2_HD.png');
 loader.addImage('images/4-Pointer_HD.png');
 loader.addImage('images/5-Intel_Badges_HD.png');
 loader.addImage('images/6-Background_HD.jpg');
 loader.addImage('images/6-Icon_1_HD.png');
 loader.addImage('images/6-Icon_2_HD.png');
 loader.addImage('images/6-Icon_3_HD.png');
 loader.addImage('images/6-Icon_4_HD.png');
 loader.addImage('images/6-Icon_5_HD.png');
 loader.addImage('images/6-Icon_6_HD.png');
 loader.addImage('images/6-Icon_7_HD.png');
 loader.addImage('images/6-Icon_8_HD.png');
 loader.addImage('images/7-A_Computer_1_HD.png');
 loader.addImage('images/7-A_Computer_2_HD.png');
 loader.addImage('images/7-B_Image_1_HD.png');
 loader.addImage('images/7-B_Image_2_HD.png');
 loader.addImage('images/7-B_Image_3_HD.png');
 loader.addImage('images/7-C_Image_1_HD.png');
 loader.addImage('images/7-C_Image_2_HD.png');
 loader.addImage('images/8-Evo_Badge_HD.png');
 loader.addImage('images/8-Image_1_HD.png');
 loader.addImage('images/8-Image_2_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/1-Background_MOB.jpg');
 loader.addImage('images/1-Evo_badge_MOB.png');
 loader.addImage('images/1-Image_1_MOB.jpg');
 loader.addImage('images/1-Image_2_MOB.jpg');
 loader.addImage('images/2-Photo_Strip_MOB.jpg');
 loader.addImage('images/3-Laptop_MOB.png');
 loader.addImage('images/4-A-Icon_MOB.png');
 loader.addImage('images/4-A-Image_1_MOB.png');
 loader.addImage('images/4-A-Image_2_MOB.png');
 loader.addImage('images/4-Arrow_1_MOB.png');
 loader.addImage('images/4-Arrow_2_MOB.png');
 loader.addImage('images/4-B-Icon_MOB.png');
 loader.addImage('images/4-B-Image_1_MOB.png');
 loader.addImage('images/4-B-Image_2_MOB.png');
 loader.addImage('images/4-Background_MOB.jpg');
 loader.addImage('images/4-C-Icon_MOB.png');
 loader.addImage('images/4-C-Image_1_MOB.png');
 loader.addImage('images/4-C-Image_2_MOB.png');
 loader.addImage('images/4-Pointer_MOB.png');
 loader.addImage('images/5-Intel_Badges_MOB.png');
 loader.addImage('images/6-Background_MOB.jpg');
 loader.addImage('images/6-Icon_1_MOB.png');
 loader.addImage('images/6-Icon_2_MOB.png');
 loader.addImage('images/6-Icon_3_MOB.png');
 loader.addImage('images/6-Icon_4_MOB.png');
 loader.addImage('images/6-Icon_5_MOB.png');
 loader.addImage('images/6-Icon_6_MOB.png');
 loader.addImage('images/6-Icon_7_MOB.png');
 loader.addImage('images/6-Icon_8_MOB.png');
 loader.addImage('images/7-A_Image_MOB.jpg');
 loader.addImage('images/7-B_Image_MOB.jpg');
 loader.addImage('images/7-C_Image_MOB.jpg');
 loader.addImage('images/8-Evo_Badge_MOB.png');
 loader.addImage('images/8-Image_MOB.jpg');

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
