const app = {};

const simpleNumbers = {
  1: 'um',
  2: 'dois',
  3: 'três',
  4: 'quatro',
  5: 'cinco',
  6: 'seis',
  7: 'sete',
  8: 'oito',
  9: 'nove',
  10: 'dez',
  11: 'onze',
  12: 'doze',
  13: 'treze',
  14: 'quatorze',
  15: 'quinze',
  16: 'dezesseis',
  17: 'dezessete',
  18: 'dezoito',
  19: 'dezenove',
  20: 'vinte',
  30: 'trinta',
  40: 'quarenta',
  50: 'cinquenta',
  60: 'sessenta',
  70: 'setenta',
  80: 'oitenta',
  90: 'noventa',
  100: 'cem',
  1000: 'mil',
};

const specificNumbers = {
  100: 'cento',
  200: 'duzentos',
  300: 'trezentos',
  400: 'quatrocentos',
  500: 'quinhentos',
  600: 'seiscentos',
  700: 'setessentos',
  800: 'oitocentos',
  900: 'novecentos',
};

app.getNumber = (number) => simpleNumbers[number];

app.getTens = (number) => {
  const strNum = number.toString();

  const numArray = [app.getNumber(strNum[0] * 10)];
  if (strNum[1] !== '0') {
    numArray.push(app.getNumber(strNum[1]));
  }

  return numArray.join(' e ');
}

app.getSpecificNumber = (number) =>
  specificNumbers[number];

app.getHundreds = (number) => {
  const strNum = number.toString();

  if (strNum[1] === '0' && strNum[2] === '0') {
    return app.getNumber(strNum[0] * 100);
  };

  const tens = strNum[1] + strNum[2];

  const numArray = [app.getSpecificNumber(strNum[0] * 100), app.getTens(tens)];

  return numArray.join(' e ');
}

module.exports = app;
