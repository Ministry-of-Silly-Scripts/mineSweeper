const Square = require('./Square');

class Board {
  constructor(size) {
    this.size = size;
    this.grid = this.initializeGrid();
  }
  initializeGrid() {
    let grid = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      grid[i] = new Array(this.size).fill(new Square());
    }

    return grid;
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
