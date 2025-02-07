function minseweeperInit() {
    /*  
      let querystring = window.location.search;
      console.log (querystring.match(/icols=\d+/i));
      let iCols = querystring.match(/icols=\d+/i)[0];
      let iRows = querystring.match(/irows=\d+/i)[0];
      let iMines = querystring.match(/imines=\d+/i)[0];
  */
    /*
        let iCols = 10;
        let iRows = 15;
        let iMines = 15;
    */
    let querystring = window.location.search;
    let iCols = window.location.search.match(/icols=\d+/i) == null ? 10 : window.location.search.match(/icols=\d+/i)[0].substring(6);
    let iRows = window.location.search.match(/irows=\d+/i) == null ? 15 : window.location.search.match(/irows=\d+/i)[0].substring(6);
    let iMines = window.location.search.match(/imines=\d+/i) == null ? 10 :  window.location.search.match(/imines=\d+/i)[0].substring(7);

    let a1 = document.querySelector("#mines_a");
    let b1 = document.querySelector("#mines_b");
    let c1 = document.querySelector("#mines_c");
    //Renamed from Number due to interference with globalFiles
    let n1 = new TileNumber(a1, b1, c1);

    let a2 = document.querySelector("#timer_a");
    let b2 = document.querySelector("#timer_b");
    let c2 = document.querySelector("#timer_c");
    //Renamed from Number due to interference with globalFiles
    let n2 = new TileNumber(a2, b2, c2);

    let interface = {
        cols: 10,
        rows: 15,
        mineCount: 10,
        mines: n1,
        timer: n2,
        parent: document.querySelector("#grid")
    }

    let button = document.querySelector("#game_button");

    let minefield = new Minefield();
    minefield.listener = (win) => {
        button.classList.remove(...button.classList);
        if (win) {
            button.classList.add("tile", "face", "thug-life")
        } else {
            button.classList.add("tile", "face", "dead")
			//console.log('I am dead');
        }
    };

    button.addEventListener('click', (e) => {
        button.classList.remove(...button.classList);
        button.classList.add("tile", "face", "smile");
        minefield.initialize(interface);
    });

    let revealbutton = document.querySelector(".button-reveal");
    let flagbutton = document.querySelector(".button-flag");

    revealbutton.addEventListener('click', () => {
        revealbutton.classList.add ('selected');
        flagbutton.classList.remove('selected');
    });
    
    flagbutton.addEventListener('click', () => {
        revealbutton.classList.remove ('selected');
        flagbutton.classList.add('selected');
    });
    
        

    let changeListener = () => {
        let cols = Math.max(7, iCols);
        let rows = Math.max(1, iRows);
        let mineCount = Math.max(1, Math.min(cols * rows - 1, iMines));
        interface.cols = cols;
        interface.rows = rows;
        interface.mineCount = mineCount;
        minefield.initialize(interface); // initialize
    };

    changeListener();

}
