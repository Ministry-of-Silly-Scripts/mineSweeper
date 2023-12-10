const Square = require('./square');

describe('Square', () => {
  it('should be not revealed when initialized', () => {
    const square = new Square();
    expect(square.isRevealed).toBe(false);
  });
});
