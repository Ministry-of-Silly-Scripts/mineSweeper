class Square {
  constructor() {
    this.isRevealed = false;
    this.isBomb = false;
    this.neighboursBombs = 0;
  }

  mark() {
    this.isRevealed = true;
  }

  show() {
    if (!this.isRevealed) {
      return ' ';
    }

    if (this.isBomb) {
      return 'X';
    }

    return '_';
  }
}

module.exports = Square;
