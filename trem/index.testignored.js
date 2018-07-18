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

  it('getTens 50 should be cinquenta', () => {
    expect(numberApp.getTens(50)).toBe('cinquenta');
  });

  it('getTens 54 should be cinquenta e quatro', () => {
    expect(numberApp.getTens(54)).toBe('cinquenta e quatro');
  });

  it('getTens 22 should be vinte e dois', () => {
    expect(numberApp.getTens(22)).toBe('vinte e dois');
  });

  it('getSpecificNumber 100 should be cento', () => {
    expect(numberApp.getSpecificNumber(100)).toBe('cento');
  });

  it('getSpecificNumber 300 should be trezentos', () => {
    expect(numberApp.getSpecificNumber(300)).toBe('trezentos');
  });

  it('getHundreds 100 should be cem', () => {
    expect(numberApp.getHundreds(100)).toBe('cem');
  });

  it('getHundreds 121 should be cento e vinte e um', () => {
    expect(numberApp.getHundreds(121)).toBe('cento e vinte e um');
  });

  it('getHundreds 123 should be cento e treze', () => {
    expect(numberApp.getHundreds(121)).toBe('cento e treze');
  });

  it('getHundreds 378 should be trezentos e setenta e oito', () => {
    expect(numberApp.getHundreds(378)).toBe('trezentos e setenta e oito');
  });
});
