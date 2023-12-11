const Board = require('./Board');

describe('Board', () => {
  it('should create a board with a grid of size 3x3', () => {
    let board = new Board(3);
    expect(board.grid.length).toBe(3);
    for (let i = 0; i < 3; i++) {
      expect(board.grid[i].length).toBe(3);
    }
  });
});
