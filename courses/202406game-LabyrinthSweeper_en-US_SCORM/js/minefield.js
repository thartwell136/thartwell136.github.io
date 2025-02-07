/* 2021 - Sergio Soriano */

"use strict";
const COVERED = 0;
const WITH_FLAG = 1;
const DISCOVERED = 2;

class Minefield {

  constructor() {
    this.listener = null;
    this.anyRevealed = false;
  }

  toIndex(i, j) {
    return j * this.cfg.cols + i;
  }

  initialize = function (cfg) {
    this.anyRevealed = false;

    this.cfg = cfg;
    // data instance
    this.data = [];
    // clear parent
    cfg.parent.innerHTML = '';
    // create grid
    let grid = document.createElement('div');
    grid.classList.add('grid'); // add style
    grid.style.gridTemplateColumns = `repeat(${cfg.cols}, 42px)`; // configure columns
    grid.style.gridTemplateRows = `repeat(${cfg.rows}, 42px)`; // configure rows
    cfg.parent.appendChild(grid); // append to parent
    // initialize counters
    cfg.mines.set(cfg.mineCount, 0, cfg.mineCount); // mine counter
    cfg.timer.setValue(0); // timer
    if (this.interval) { // stop clock
      clearInterval(this.interval);
      this.interval = null;
    }
    // initialize grid
    for (let j = 0; j < cfg.rows; j++) {
      for (let i = 0; i < cfg.cols; i++) {

        let index = this.toIndex(i, j);
        let button = document.createElement("div");
        let cell = {
          info: 0,
          state: COVERED,
          button: button,
        };

        button.addEventListener("mouseup", (e) => {
          let revealbutton = document.querySelector(".button-reveal");
          let flagbutton = document.querySelector(".button-flag");
          //console.log('triggered');
          if (this.running) {
            if (flagbutton.classList.contains("selected")) {
              e.preventDefault();
              if (this.running) {
                //console.log(cell.state);
                if (cell.state === COVERED) {
                  cell.state = WITH_FLAG;
                  setStyle(button, ["tile", "flag"])
                  cfg.mines.sub(1);
                } else if (cell.state === WITH_FLAG) {
                  //console.log('b');
                  cell.state = COVERED;
                  setStyle(button, ["tile", "cover"]);
                  cfg.mines.add(1);
                }
              }
            }
            else if (e.button === 0 && cell.state === COVERED) {
              if (this.anyRevealed == false) {
                while (cell.info !== 0) {
                  this.randomizeMines();
                  cell = this.data[index];
                }
                this.anyRevealed = true;
              }
              if (!this.interval) {
                this.interval = setInterval(() => {
                  cfg.timer.add(1);
                  if (cfg.timer.value === 999) {
                    this.gameOver(false);
                  }
                }, 1000);
              }

              if (cell.info === -1) { // has mine
                cell.state = DISCOVERED;
                setStyle(button, ["tile", "mine-red"]);
                this.discoverAll();
                this.gameOver(false);
              } else if (cell.info === 0) { // spread empty zone
                this.floodFill(i, j);
                this.checkWin();
              } else { // single cell
                cell.state = DISCOVERED;
                setStyle(button, ["tile", "m-" + cell.info]);
                this.checkWin();
              }
            }
          }

        });

        button.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          if (this.running) {
            if (cell.state === COVERED) {
              cell.state = WITH_FLAG;
              setStyle(button, ["tile", "flag"])
              cfg.mines.sub(1);
            } else if (cell.state === WITH_FLAG) {
              cell.state = COVERED;
              setStyle(button, ["tile", "cover"]);
              cfg.mines.add(1);
            }
          }
        });

        this.data[index] = cell;
        button.classList.add("tile", "cover");
        grid.appendChild(button);
      }
    }
    this.randomizeMines();

    this.running = true;

  }



  randomizeMines() {
    //Clear all existing mines
    for (let j = 0; j < this.cfg.rows; j++) {
      for (let i = 0; i < this.cfg.cols; i++) {
        let index = this.toIndex(i, j);
        let cell2 = this.data[index];
        cell2.info = 0;
      }
    }

    // Randomize mines
    let n = this.cfg.mineCount;
    while (n > 0) {
      let index = Math.floor(Math.random() * this.data.length);
      let cell2 = this.data[index];
      if (!cell2.info) {
        cell2.info = -1; // set mine
        n--;
      }
    }

    for (let j, i = 0; i < this.cfg.cols; i++) {
      for (j = 0; j < this.cfg.rows; j++) {
        let index = this.toIndex(i, j);
        let cell2 = this.data[index];
        if (cell2.info === 0) { // no has mine
          // count neighboring mines
          for (let j1, i1 = Math.max(0, i - 1); i1 < Math.min(i + 2, this.cfg.cols); i1++) {
            for (j1 = Math.max(0, j - 1); j1 < Math.min(j + 2, this.cfg.rows); j1++) {
              if (this.data[this.toIndex(i1, j1)].info === -1) {
                cell2.info++;
              }
            }
          }
        }
      }
    }
  }

  floodFill(x, y) {

    let queue = [{ x, y }];
    let cell, c;
    do {

      c = queue.shift();
      cell = this.data[this.toIndex(c.x, c.y)];
      if (cell.info > -1 && cell.state != DISCOVERED) { // check visibility

        if (cell.state === WITH_FLAG) {
          this.cfg.mines.add(1);
        }

        cell.state = DISCOVERED;
        setStyle(cell.button, ["tile", "m-" + cell.info])

        if (cell.info === 0) { // is empty cell

          for (let i1 = Math.max(0, c.x - 1); i1 < Math.min(c.x + 2, this.cfg.cols); i1++) {
            for (let j1 = Math.max(0, c.y - 1); j1 < Math.min(c.y + 2, this.cfg.rows); j1++) {
              if (i1 != c.x || j1 != c.y) {
                queue.push({
                  x: i1,
                  y: j1
                });
              }
            }
          }

        }

      }

    } while (queue.length > 0);
  }

  discoverAll() {
    let n = this.cfg.cols * this.cfg.rows;
    for (let i = 0; i < n; i++) {
      let cell = this.data[i];
        //console.log(cell);
      if (cell.state === COVERED || cell.state === WITH_FLAG || cell.info > 0) {
        cell.state = DISCOVERED;
        let button = cell.button;
        if (cell.info === -1) { // has mine            
          setStyle(cell.button, ["tile", "mine"])
        } else {
          if (cell.button.classList.contains("flag")) { // wrong flag
              setStyle(cell.button, ["tile", "mine-not"])
          } else {
              setStyle(cell.button, ["tile", "m-0"])
          }        
        }
      }
    }
  }

  checkWin() {
    let n = this.cfg.cols * this.cfg.rows;
    for (let i = 0; i < n; i++) {
      if ((this.data[i].state === COVERED || this.data[i].state === WITH_FLAG) && this.data[i].info > -1) {
        return;
      }
    }
    this.gameOver(true);
  }

  gameOver(win) {
    this.running = false;
    clearInterval(this.interval);
    this.listener(win);
    if (win) {
      //window.alert('you win. An ajax call to record your winning will happen here, as well as a stylized victory message.')
        completed = true;
        $("#game_message_wrapper").addClass("win");
        completion_tl.play();
    }
    else {
      //window.alert('You lost. Sorry message.');
        $("#game_message_wrapper").addClass("lose");
        completion_tl.play();
    }
  }

}

const setStyle = function (el, style) {
  el.classList.remove(...el.classList);
  el.classList.add(...style);
}

//Renamed from Number due to interference with globalFiles
class TileNumber {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    this.set(0, 0, 9999);
  }

  add(value) {
    this.setValue(this.value + value);
  }

  sub(value) {
    this.setValue(this.value - value);
  }

  setValue(value) {
    value = Math.max(this.minValue, Math.min(this.maxValue, value))
    this.value = value;

    let s = String(value).padStart(3, "0");
    setStyle(this.a, ["tile", "number", `n-${s.charAt(0)}`]);
    setStyle(this.b, ["tile", "number", `n-${s.charAt(1)}`]);
    setStyle(this.c, ["tile", "number", `n-${s.charAt(2)}`]);
  }

  set(value, minValue, maxValue) {
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.setValue(value);
    return this;
  }

}