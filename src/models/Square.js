class Square {
  constructor() {
    this.isRevealed = false;
    this.isBomb = false;
  }

  mark() {
    this.isRevealed = true;
  }

  show() {
    if (!this.isRevealed) {
      return ' ';
    }

    return '_';
  }
}

module.exports = Square;
