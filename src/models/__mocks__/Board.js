class MockBoard {
  constructor(size) {
    this.size = size;
    this.grid = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.grid[i] = new Array(this.size);
      for (let j = 0; j < this.size; j++) {
        this.grid[i][j] = new {
          isRevealed: false,
          isBomb: false,
          neighboursBombs: 0,
        }();
      }
    }
  }

  show() {
    return '| | | |\n| | | |\n| | | |\n';
  }
}

module.exports = MockBoard;
