const numberApp = require('./');

describe('number to string', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('getNumber 5 should be cinco', () => {
    expect(numberApp.getNumber(5)).toBe('cinco');
  });

  it('getNumber 2 should be dois', () => {
    expect(numberApp.getNumber(2)).toBe('dois');
  });
});
