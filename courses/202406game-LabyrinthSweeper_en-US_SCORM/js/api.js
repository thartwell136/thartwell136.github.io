/* -----------------------------------------------------
    Get game / POI information
-------------------------------------------------------- */
var retryCount = 0;

function autoResolve(object, fail){
    return new Promise((resolve, reject) => {
        if (fail) {
            reject(object)
        } else {
            resolve(object);
        }        
    });
}

let commandIds = 0;
let commands = [];

function sendCommand(command, args) {
    const commandId = commandIds++;

    // if the window.parent and window are the same, we're not in an iFrame, so lets send ourselves demo data
    if(window.parent !== window) {
        switch(command) {
            case 'miniGameInfo':
                //return autoResolve({}, true)
                return autoResolve({
                    assets: {
                        borderImg: '../images/jungle/borderimage.png',
                        btnBorderImg: '../images/jungle/btn_borderimage.png',
                        btnBorderNone: '../images/jungle/btn_borderimage_none.png',
                        close: '../images/jungle/close.png',
                        cover: '../images/jungle/cover.png',
                        dead: '../images/jungle/dead.png',
                        empty: '../images/jungle/empty.png',
                        flag: '../images/jungle/flag.png',
                        backgroundHD: '../images/jungle/global_background_HD.jpg',
                        backgroundMOB: '../images/jungle/global_background_MOB.jpg',
                        m0: '../images/jungle/m-0.png',
                        m1: '../images/jungle/m-1.png',
                        m2: '../images/jungle/m-2.png',
                        m3: '../images/jungle/m-3.png',
                        m4: '../images/jungle/m-4.png',
                        m5: '../images/jungle/m-5.png',
                        m6: '../images/jungle/m-6.png',
                        m7: '../images/jungle/m-7.png',
                        m8: '../images/jungle/m-8.png',
                        mine: '../images/jungle/mine.png',
                        mineNot: '../images/jungle/mine-not.png',
                        mineRed: '../images/jungle/mine-red.png',
                        minus: '../images/jungle/minus.png',
                        n0: '../images/jungle/n-0.png',
                        n1: '../images/jungle/n-1.png',
                        n2: '../images/jungle/n-2.png',
                        n3: '../images/jungle/n-3.png',
                        n4: '../images/jungle/n-4.png',
                        n5: '../images/jungle/n-5.png',
                        n6: '../images/jungle/n-6.png',
                        n7: '../images/jungle/n-7.png',
                        n8: '../images/jungle/n-8.png',
                        n9: '../images/jungle/n-9.png',
                        question: '../images/jungle/question.png',
                        questionPressed: '../images/jungle/question-pressed.png',
                        scared: '../images/jungle/scared.png',
                        smile: '../images/jungle/smile.png',
                        smilePressed: '../images/jungle/smile-pressed.png',
                        sweeperBg: '../images/jungle/sweeper_bg.png',
                        thugLife: '../images/jungle/thug-life.png', 
                        
                        digitalColor: '#1e3a13',
                        gridColor: '#cc8341',
                        
                        gameClose: '../images/jungle/close_frame.png'
                    }
                }, false);
            case 'miniGameClose':
                return autoResolve({}, false);
        }
    }
    const promise = new Promise((resolve, reject) => {
        window.parent.postMessage({ id: commandId, command: command, args: args}, "*");
        const receiveCommand = (event) => {
            const messageEvent = event;

            if(messageEvent.data.id == commandId) {
                resolve(messageEvent.data.args);
                window.removeEventListener('message', receiveCommand);
            }
        }
        window.addEventListener('message', receiveCommand);
    });

    commands[commandId] = promise;
    return promise;
}



// Initial call to get the assets and anything we need to pass back and forth to get the puzzle or memory game running
function getGameInfo() {

    sendCommand('miniGameInfo', {}).then((data) => {
        //console.log(data);
        
        //$(".button-reveal .icon").attr({"src": data.assets.m0});
        //$(".button-flag .icon").attr({"src": data.assets.flag})

        // https://www.w3schools.com/css/css3_variables_javascript.asp
        var r = document.querySelector(':root');
        r.style.setProperty('--borderImg', `url(${data.assets.borderImg})`);
        r.style.setProperty('--btnBorderImg', `url(${data.assets.btnBorderImg})`);
        r.style.setProperty('--btnBorderNone', `url(${data.assets.btnBorderNone})`);
        r.style.setProperty('--close', `url(${data.assets.close})`);
        r.style.setProperty('--cover', `url(${data.assets.cover})`);
        r.style.setProperty('--dead', `url(${data.assets.dead})`);
        r.style.setProperty('--empty', `url(${data.assets.empty})`);
        r.style.setProperty('--flag', `url(${data.assets.flag})`);
        r.style.setProperty('--backgroundHD', `url(${data.assets.backgroundHD})`);
        r.style.setProperty('--backgroundMOB', `url(${data.assets.backgroundMOB})`);
        r.style.setProperty('--m0', `url(${data.assets.m0})`);
        r.style.setProperty('--m1', `url(${data.assets.m1})`);
        r.style.setProperty('--m2', `url(${data.assets.m2})`);
        r.style.setProperty('--m3', `url(${data.assets.m3})`);
        r.style.setProperty('--m4', `url(${data.assets.m4})`);
        r.style.setProperty('--m5', `url(${data.assets.m5})`);
        r.style.setProperty('--m6', `url(${data.assets.m6})`);
        r.style.setProperty('--m7', `url(${data.assets.m7})`);
        r.style.setProperty('--m8', `url(${data.assets.m8})`);
        r.style.setProperty('--mine', `url(${data.assets.mine})`);
        r.style.setProperty('--mineNot', `url(${data.assets.mineNot})`);
        r.style.setProperty('--mineRed', `url(${data.assets.mineRed})`);
        r.style.setProperty('--minus', `url(${data.assets.minus})`);
        r.style.setProperty('--n0', `url(${data.assets.n0})`);
        r.style.setProperty('--n1', `url(${data.assets.n1})`);
        r.style.setProperty('--n2', `url(${data.assets.n2})`);
        r.style.setProperty('--n3', `url(${data.assets.n3})`);
        r.style.setProperty('--n4', `url(${data.assets.n4})`);
        r.style.setProperty('--n5', `url(${data.assets.n5})`);
        r.style.setProperty('--n6', `url(${data.assets.n6})`);
        r.style.setProperty('--n7', `url(${data.assets.n7})`);
        r.style.setProperty('--n8', `url(${data.assets.n8})`); 
        r.style.setProperty('--n9', `url(${data.assets.n9})`); 
        r.style.setProperty('--question', `url(${data.assets.question})`); 
        r.style.setProperty('--questionPressed', `url(${data.assets.questionPressed})`); 
        r.style.setProperty('--scared', `url(${data.assets.scared})`); 
        r.style.setProperty('--smile', `url(${data.assets.smile})`); 
        r.style.setProperty('--smilePressed', `url(${data.assets.smilePressed})`); 
        r.style.setProperty('--sweeperBg', `url(${data.assets.sweeperBg})`); 
        r.style.setProperty('--thugLife', `url(${data.assets.thugLife})`); 
        
        r.style.setProperty('--digitalColor', `${data.assets.digitalColor}`); 
        r.style.setProperty('--gridColor', `${data.assets.gridColor}`); 
        
        r.style.setProperty('--gameClose', `url(${data.assets.gameClose})`); 

        CompletionDeferred.resolve();

    }).catch(function() {
        //console.log("error");
        retryCount++;
        if (retryCount > 4) {
            reportGameClose();            
        } else {
            setTimeout(() => {
                getGameInfo();
            }, 500);
        }
    }); 

}

// init
getGameInfo();

/* -----------------------------------------------------
    Report game close and if it was completed
-------------------------------------------------------- */
function reportGameClose() {
    sendCommand('miniGameClose', { completed: completed }).then(() => {
        //console.log('miniGameClose', completed);
    });
}