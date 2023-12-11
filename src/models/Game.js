class Game {
  constructor(board) {
    this.board = board;
  }

  show() {
    console.log(this.board.show());
  }
}

module.exports = Game;
