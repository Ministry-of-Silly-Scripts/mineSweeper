const Board = require('./Board');

describe('Board', () => {
  let board;
  beforeEach(() => {
    board = new Board(3);
  });

  it('should create a board with a grid of size 3x3', () => {
    expect(board.grid.length).toBe(3);
    for (let i = 0; i < 3; i++) {
      expect(board.grid[i].length).toBe(3);
    }
  });

  it('should create a board where all squares are unopened', () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        expect(board.grid[i][j].show()).toBe(' ');
      }
    }
  });

  it('should show all squares states when printed', () => {
    let out = board.show();
    expect(out).toBe('| | | |\n| | | |\n| | | |\n');
  });
});
