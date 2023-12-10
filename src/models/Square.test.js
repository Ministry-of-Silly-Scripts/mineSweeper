const Square = require('./Square');

describe('Square', () => {
  let square;

  beforeAll(() => {
    square = new Square();
  });

  it('should be not revealed when initialized', () => {
    expect(square.isRevealed).toBe(false);
  });

  it('should not be a bomb when initialized', () => {
    expect(square.isBomb).toBe(false);
  });

  it('should be revealed when marked', () => {
    square.mark();
    expect(square.isRevealed).toBe(true);
  });

  it('should return " " when square is not revealed', () => {
    expect(square.show()).toBe(' ');
  });
});
