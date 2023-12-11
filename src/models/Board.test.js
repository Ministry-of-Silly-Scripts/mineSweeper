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

  it('should update a square status when the user marks it', () => {
    board.mark(1, 1);
    expect(board.grid[1][1].isRevealed).toBe(true);
  });

  it('should have N bombs when board is initiated', () => {
    jest
      .spyOn(Math, 'random')
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.6)
      .mockImplementationOnce(() => 0.6)
      .mockImplementationOnce(() => 0.9)
      .mockImplementationOnce(() => 0.9);

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
    Math.random.mockRestore();
  });

  it('should have 2 neighbours bombs in square (1,0) when bombs are in the main diagonal', () => {
    jest
      .spyOn(Math, 'random')
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.6)
      .mockImplementationOnce(() => 0.6)
      .mockImplementationOnce(() => 0.9)
      .mockImplementationOnce(() => 0.9);

    board.placeBombs();

    expect(board.grid[1][0].neighboursBombs).toBe(2);
    Math.random.mockRestore();
  });

  it('should have 3 neighbours bombs in square (1,1) when bombs are in the (0,1), (1,0) and (2,1)', () => {
    jest
      .spyOn(Math, 'random')
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.9)
      .mockImplementationOnce(() => 0.9)
      .mockImplementationOnce(() => 0.0);

    board.placeBombs();

    expect(board.grid[1][1].neighboursBombs).toBe(3);
    Math.random.mockRestore();
  });

  it('should have reveal (2,0) and (2, 1) when (1, 0) is marked bombs are in the main diagonal', () => {
    jest
      .spyOn(Math, 'random')
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.6)
      .mockImplementationOnce(() => 0.0)
      .mockImplementationOnce(() => 0.9);

    board.placeBombs();

    board.mark(2, 0);
    let out = board.show();
    expect(out).toBe('| | | |\n| | | |\n|_|_|_|\n');
    Math.random.mockRestore();
  });
});
