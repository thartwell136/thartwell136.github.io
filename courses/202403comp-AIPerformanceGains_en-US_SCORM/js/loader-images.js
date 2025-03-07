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
    loader.addImage('images/0_hand.png');
 loader.addImage('images/hand_gray.png');
 loader.addImage('images/instructions_X.svg');
 loader.addImage('images/left-arrow-white.svg');
 loader.addImage('images/left-arrow.svg');
 loader.addImage('images/right-arrow-white.svg');
 loader.addImage('images/right-arrow.svg');
 loader.addImage('images/tap.svg');
 loader.addImage('images/tappy_hand.png');
 loader.addImage('images/tiny.gif');
 loader.addImage('images/RepeatingPatterns/Pattern-1.jpg');
 loader.addImage('images/RepeatingPatterns/Pattern-2.jpg');
 loader.addImage('images/RepeatingPatterns/Pattern-3.jpg');
 loader.addImage('images/RepeatingPatterns/Pattern-4.jpg');
 loader.addImage('images/RepeatingPatterns/Pattern-5.jpg');
 loader.addImage('images/RepeatingPatterns/Pattern-6.jpg');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/Hub/1-Arch1_HD.png');
 loader.addImage('images/Hub/1-Arch2_HD.png');
 loader.addImage('images/Hub/1-Arch3_HD.png');
 loader.addImage('images/Hub/1-BatteryLife-BW_HD.png');
 loader.addImage('images/Hub/1-BatteryLife_HD.png');
 loader.addImage('images/Hub/1-Blob_HD.png');
 loader.addImage('images/Hub/1-ContentCreator-BW_HD.png');
 loader.addImage('images/Hub/1-ContentCreator_HD.png');
 loader.addImage('images/Hub/1-Device_HD.png');
 loader.addImage('images/Hub/1-Gaming-BW_HD.png');
 loader.addImage('images/Hub/1-Gaming_HD.png');
 loader.addImage('images/Hub/1-Mug_HD.png');
 loader.addImage('images/Hub/1-Plant_HD.png');
 loader.addImage('images/Spoke-1/2-Arch1_HD.png');
 loader.addImage('images/Spoke-1/2-Arch2_HD.png');
 loader.addImage('images/Spoke-1/2-Arch3_HD.png');
 loader.addImage('images/Spoke-1/2-Badge_HD.jpg');
 loader.addImage('images/Spoke-1/2-Device_HD.png');
 loader.addImage('images/Spoke-1/2-Dots1_HD.png');
 loader.addImage('images/Spoke-1/2-DotsLG_HD.png');
 loader.addImage('images/Spoke-1/2-Slider1_HD.png');
 loader.addImage('images/Spoke-1/2-Slider2_HD.png');
 loader.addImage('images/Spoke-1/2-Slider3_HD.png');
 loader.addImage('images/Spoke-1/2-Slider4_HD.png');
 loader.addImage('images/Spoke-2/3-1-Slider1_HD.png');
 loader.addImage('images/Spoke-2/3-1-Slider2_HD.png');
 loader.addImage('images/Spoke-2/3-1-Slider3_HD.png');
 loader.addImage('images/Spoke-2/3-1-Slider4_HD.png');
 loader.addImage('images/Spoke-2/3-2-Slider1_HD.png');
 loader.addImage('images/Spoke-2/3-2-Slider2_HD.png');
 loader.addImage('images/Spoke-2/3-2-Slider3_HD.png');
 loader.addImage('images/Spoke-2/3-2-Slider4_HD.png');
 loader.addImage('images/Spoke-2/3-Badge_HD.jpg');
 loader.addImage('images/Spoke-2/3-Band_HD.jpg');
 loader.addImage('images/Spoke-2/3-Device_HD.png');
 loader.addImage('images/Spoke-2/3-DotsLG_HD.png');
 loader.addImage('images/Spoke-2/3-Main_HD.png');
 loader.addImage('images/Spoke-3/4-1-Slider1_HD.png');
 loader.addImage('images/Spoke-3/4-1-Slider2_HD.png');
 loader.addImage('images/Spoke-3/4-1-Slider3_HD.png');
 loader.addImage('images/Spoke-3/4-1-Slider4_HD.png');
 loader.addImage('images/Spoke-3/4-1-Slider5_HD.png');
 loader.addImage('images/Spoke-3/4-1-Slider6_HD.png');
 loader.addImage('images/Spoke-3/4-1-Slider7_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider10_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider11_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider1_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider2_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider3_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider4_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider5_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider6_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider7_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider8_HD.png');
 loader.addImage('images/Spoke-3/4-2-Slider9_HD.png');
 loader.addImage('images/Spoke-3/4-3-Slider1_HD.png');
 loader.addImage('images/Spoke-3/4-3-Slider2_HD.png');
 loader.addImage('images/Spoke-3/4-3-Slider3_HD.png');
 loader.addImage('images/Spoke-3/4-3-Slider4_HD.png');
 loader.addImage('images/Spoke-3/4-3-Slider5_HD.png');
 loader.addImage('images/Spoke-3/4-Main2_HD.png');
 loader.addImage('images/Spoke-3/4-Main_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/Hub/1-Arch1_MOB.png');
 loader.addImage('images/Hub/1-Arch2_MOB.png');
 loader.addImage('images/Hub/1-Arch3_MOB.png');
 loader.addImage('images/Hub/1-BatteryLife-BW_MOB.png');
 loader.addImage('images/Hub/1-BatteryLife_MOB.png');
 loader.addImage('images/Hub/1-Blob_MOB.png');
 loader.addImage('images/Hub/1-ContentCreator-BW_MOB.png');
 loader.addImage('images/Hub/1-ContentCreator_MOB.png');
 loader.addImage('images/Hub/1-Device_MOB.png');
 loader.addImage('images/Hub/1-Gaming-BW_MOB.png');
 loader.addImage('images/Hub/1-Gaming_MOB.png');
 loader.addImage('images/Hub/1-Mug_MOB.png');
 loader.addImage('images/Hub/1-Plant_MOB.png');
 loader.addImage('images/Spoke-1/2-Arch1_MOB.png');
 loader.addImage('images/Spoke-1/2-Arch2_MOB.png');
 loader.addImage('images/Spoke-1/2-Arch3_MOB.png');
 loader.addImage('images/Spoke-1/2-Badge_MOB.jpg');
 loader.addImage('images/Spoke-1/2-Device_MOB.png');
 loader.addImage('images/Spoke-1/2-Dots1_MOB.png');
 loader.addImage('images/Spoke-1/2-DotsLG_MOB.png');
 loader.addImage('images/Spoke-1/2-Slider1_MOB.png');
 loader.addImage('images/Spoke-1/2-Slider2_MOB.png');
 loader.addImage('images/Spoke-1/2-Slider3_MOB.png');
 loader.addImage('images/Spoke-1/2-Slider4_MOB.png');
 loader.addImage('images/Spoke-2/3-1-Slider1_MOB.png');
 loader.addImage('images/Spoke-2/3-1-Slider2_MOB.png');
 loader.addImage('images/Spoke-2/3-1-Slider3_MOB.png');
 loader.addImage('images/Spoke-2/3-1-Slider4_MOB.png');
 loader.addImage('images/Spoke-2/3-2-Slider1_MOB.png');
 loader.addImage('images/Spoke-2/3-2-Slider2_MOB.png');
 loader.addImage('images/Spoke-2/3-2-Slider3_MOB.png');
 loader.addImage('images/Spoke-2/3-2-Slider4_MOB.png');
 loader.addImage('images/Spoke-2/3-Badge_MOB.jpg');
 loader.addImage('images/Spoke-2/3-Band_MOB.jpg');
 loader.addImage('images/Spoke-2/3-Device_MOB.png');
 loader.addImage('images/Spoke-2/3-DotsLG_MOB.png');
 loader.addImage('images/Spoke-2/3-Main_MOB.png');
 loader.addImage('images/Spoke-3/4-1-Slider1_MOB.png');
 loader.addImage('images/Spoke-3/4-1-Slider2_MOB.png');
 loader.addImage('images/Spoke-3/4-1-Slider3_MOB.png');
 loader.addImage('images/Spoke-3/4-1-Slider4_MOB.png');
 loader.addImage('images/Spoke-3/4-1-Slider5_MOB.png');
 loader.addImage('images/Spoke-3/4-1-Slider6_MOB.png');
 loader.addImage('images/Spoke-3/4-1-Slider7_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider10_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider11_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider1_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider2_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider3_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider4_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider5_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider6_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider7_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider8_MOB.png');
 loader.addImage('images/Spoke-3/4-2-Slider9_MOB.png');
 loader.addImage('images/Spoke-3/4-3-Slider1_MOB.png');
 loader.addImage('images/Spoke-3/4-3-Slider2_MOB.png');
 loader.addImage('images/Spoke-3/4-3-Slider3_MOB.png');
 loader.addImage('images/Spoke-3/4-3-Slider4_MOB.png');
 loader.addImage('images/Spoke-3/4-3-Slider5_MOB.png');
 loader.addImage('images/Spoke-3/4-Main2_MOB.png');
 loader.addImage('images/Spoke-3/4-Main_MOB.png');

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
