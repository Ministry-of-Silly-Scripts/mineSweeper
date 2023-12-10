class Square {
  constructor() {
    this.isRevealed = false;
    this.isBomb = false;
  }

  mark() {
    this.isRevealed = true;
  }
}

module.exports = Square;
