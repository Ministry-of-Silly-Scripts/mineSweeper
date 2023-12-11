jest.mock('./Board');

const Game = require('./Game');
const Board = require('./Board');

describe('Game', () => {
  it('should initialize a new game', () => {
    const board = new Board();
    const game = new Game(board);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    game.show();

    expect(consoleSpy).toHaveBeenCalledWith('| | | |\n| | | |\n| | | |\n');
  });
});
