const randomNumbersArray = Array.from({ length: 10 }, () => Math.random());
console.log(randomNumbersArray);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

const randomIntegersArray = Array.from({ length: 10 }, () => getRandomIntInclusive(1, 100));
console.log(randomIntegersArray);

