export function getRandomNumber() {
    const number = Math.floor(Math.random() * (999999999999 - 10000 + 1)) + 10000;
    return number.toString();
  }
  