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

  it('should have N bombs when board is initiated', () => {
    jest
      .spyOn(Math, 'random')
      .mockImplementationOnce(() => 0.1)
      .mockImplementationOnce(() => 0.1)
      .mockImplementationOnce(() => 0.2)
      .mockImplementationOnce(() => 0.2)
      .mockImplementationOnce(() => 0.3)
      .mockImplementationOnce(() => 0.3);

    board.placeBombs();
    let bombCount = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board.grid[i][j].isBomb) {
          bombCount += 1;
        }
      }
    }
    expect(bombCount).toBe(3);
  });

  it('should have 2 neighbours bombs in square (2,1) when bombs are in the main diagonal', () => {
    jest
      .spyOn(Math, 'random')
      .mockImplementationOnce(() => 0.1)
      .mockImplementationOnce(() => 0.1)
      .mockImplementationOnce(() => 0.2)
      .mockImplementationOnce(() => 0.2)
      .mockImplementationOnce(() => 0.3)
      .mockImplementationOnce(() => 0.3);

    board.placeBombs();
    expect(board.grid[1][0].neighboursBombs).toBe(2);
  });
});
