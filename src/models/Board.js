const Square = require('./Square');

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

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
        this.updateNeighboursBombs(i, j);
      }
    }
  }

  updateNeighboursBombs(i, j) {
    directions.forEach(([dx, dy]) => {
      const newRow = i + dx;
      const newCol = j + dy;

      if (newRow >= 0 && newRow < this.size && newCol >= 0 && newCol < this.size) {
        if (!this.grid[newRow][newCol].isBomb) {
          this.grid[newRow][newCol].neighboursBombs += 1;
        }
      }
    });
  }

  mark(i, j) {
    this.grid[i][j].mark();
    if (this.grid[i][j].neighboursBombs === 0) {
      this.revealEmpty(i, j);
    }
  }

  revealEmpty(i, j) {
    directions.forEach(([dx, dy]) => {
      const newRow = i + dx;
      const newCol = j + dy;

      if (newRow >= 0 && newRow < this.size && newCol >= 0 && newCol < this.size) {
        if (this.grid[newRow][newCol].neighboursBombs == 0 && !this.grid[newRow][newCol].isRevealed) {
          this.grid[newRow][newCol].isRevealed = true;
          this.revealEmpty(newRow, newCol);
        }
      }
    });
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
