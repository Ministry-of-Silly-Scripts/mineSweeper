const Square = require('./Square');

describe('Square', () => {
  it('should be not revealed when initialized', () => {
    const square = new Square();
    expect(square.isRevealed).toBe(false);
  });

  it('should not be a bomb when initialized', () => {
    const square = new Square();
    expect(square.isBomb).toBe(false);
  });
});
