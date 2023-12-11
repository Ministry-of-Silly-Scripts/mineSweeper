const Square = require('./Square');

class Board {
  constructor(size) {
    this.size = size;
    this.grid = this.initializeGrid();
  }
  initializeGrid() {
    let grid = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      grid[i] = new Array(this.size);
      for (let j = 0; j < this.size; j++) {
        grid[i][j] = new Square();
      }
    }

    return grid;
  }

  placeBombs() {
    let countBombs = 0;
    while (countBombs < this.size) {
      const i = Math.floor(Math.random() * this.size);
      const j = Math.floor(Math.random() * this.size);

      if (!this.grid[i][j].isBomb) {
        this.grid[i][j].isBomb = true;
        countBombs += 1;
      }
    }
  }

  show() {
    let out = '';
    for (let i = 0; i < this.size; i++) {
      out += '|';
      for (let j = 0; j < this.size; j++) {
        out += this.grid[i][j].show() + '|';
      }
      out += '\n';
    }
    return out;
  }
}

module.exports = Board;
