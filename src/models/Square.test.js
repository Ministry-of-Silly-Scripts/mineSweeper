const Square = require('./Square');

describe('Square', () => {
  let square;

  beforeEach(() => {
    square = new Square();
  });

  it('should be not revealed when initialized', () => {
    expect(square.isRevealed).toBe(false);
  });

  it('should not be a bomb when initialized', () => {
    expect(square.isBomb).toBe(false);
  });

  it('should have the number of bombs in the neightbourhood', () => {
    square.neighboursBombs = 3;
    expect(square.neighboursBombs).toBe(3);
  });

  it('should be revealed when marked', () => {
    square.mark();
    expect(square.isRevealed).toBe(true);
  });

  it('should return " " when square is not revealed', () => {
    expect(square.show()).toBe(' ');
  });

  it('should return "_" when square is revealed and not a bomb', () => {
    square.isRevealed = true;
    expect(square.show()).toBe('_');
  });

  it('should return "X" when square is revealed and a bomb', () => {
    square.isRevealed = true;
    square.isBomb = true;
    expect(square.show()).toBe('X');
  });
});
