const Game = require('./index');

describe('Game', () => {
  it('should return hello', () => {
    expect(Game()).toBe('hello');
  });
});
