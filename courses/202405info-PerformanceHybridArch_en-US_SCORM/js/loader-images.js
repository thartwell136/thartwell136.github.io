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
    loader.addImage('images/4-Badge.jpg');
 loader.addImage('images/7-Badge.jpg');
 loader.addImage('images/instructions_X.svg');
 loader.addImage('images/tiny.gif');


    // HD images
    if (windowWidth > courseOptions.mobileWidth) {
    loader.addImage('images/1-OrangeBottom_HD.png');
 loader.addImage('images/1-OrangeTop_HD.png');
 loader.addImage('images/2-Arch_HD.png');
 loader.addImage('images/2-Belt_HD.png');
 loader.addImage('images/2-Blue_HD.png');
 loader.addImage('images/2-Chip1_HD.png');
 loader.addImage('images/2-Chip2_HD.png');
 loader.addImage('images/2-Chip3_HD.png');
 loader.addImage('images/2-Chip4_HD.png');
 loader.addImage('images/2-Robot_HD.png');
 loader.addImage('images/3-BlueBottom_HD.png');
 loader.addImage('images/3-BlueTop_HD.png');
 loader.addImage('images/3-Boxes_HD.png');
 loader.addImage('images/3-Building_HD.png');
 loader.addImage('images/3-Forklift_HD.png');
 loader.addImage('images/3-Truck_HD.png');
 loader.addImage('images/4-Box_HD.png');
 loader.addImage('images/4-Building_HD.png');
 loader.addImage('images/4-Forklift_HD.png');
 loader.addImage('images/4-Truck1_HD.png');
 loader.addImage('images/4-Truck2_HD.png');
 loader.addImage('images/4-Truck3_HD.png');
 loader.addImage('images/4-Yellow_HD.png');
 loader.addImage('images/5-Green_HD.png');
 loader.addImage('images/5-Orange_HD.png');
 loader.addImage('images/6-BlueBottom_HD.png');
 loader.addImage('images/6-BrownBottom_HD.png');
 loader.addImage('images/6-Brown_HD.png');
 loader.addImage('images/6-Computer_HD.png');
 loader.addImage('images/6-Green_HD.png');
 loader.addImage('images/6-YellowBottom_HD.png');

    }

    // Mobile images
    else {
    loader.addImage('images/1-OrangeBottom_MOB.png');
 loader.addImage('images/1-OrangeTop_MOB.png');
 loader.addImage('images/2-Arch_MOB.png');
 loader.addImage('images/2-Belt_MOB.png');
 loader.addImage('images/2-Blue_MOB.png');
 loader.addImage('images/2-Chip1_MOB.png');
 loader.addImage('images/2-Chip2_MOB.png');
 loader.addImage('images/2-Chip3_MOB.png');
 loader.addImage('images/2-Chip4_MOB.png');
 loader.addImage('images/2-Robot_MOB.png');
 loader.addImage('images/3-All_MOB.png');
 loader.addImage('images/3-BlueBottom_MOB.png');
 loader.addImage('images/3-BlueTop_MOB.png');
 loader.addImage('images/3-Boxes_MOB.png');
 loader.addImage('images/3-Building_MOB.png');
 loader.addImage('images/3-Forklift_MOB.png');
 loader.addImage('images/3-Truck_MOB.png');
 loader.addImage('images/4-All_MOB.png');
 loader.addImage('images/4-Box_MOB.png');
 loader.addImage('images/4-Building_MOB.png');
 loader.addImage('images/4-Forklift_MOB.png');
 loader.addImage('images/4-Truck1_MOB.png');
 loader.addImage('images/4-Truck2_MOB.png');
 loader.addImage('images/4-Truck3_MOB.png');
 loader.addImage('images/4-Yellow_MOB.png');
 loader.addImage('images/5-Green_MOB.png');
 loader.addImage('images/5-Orange_MOB.png');
 loader.addImage('images/6-BlueBottom_MOB.png');
 loader.addImage('images/6-BrownBottom_MOB.png');
 loader.addImage('images/6-Brown_MOB.png');
 loader.addImage('images/6-Computer_MOB.png');
 loader.addImage('images/6-Green_MOB.png');
 loader.addImage('images/6-YellowBottom_MOB.png');

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
