function generateRandomNumbers(count, min, max) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    // Generates a random integer between min (inclusive) and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

const fifteenThousandRandomNumbers = generateRandomNumbers(15000, 1, 100);
console.log(fifteenThousandRandomNumbers);