const numbers = [1, 2, 3, 4, 5];
const cubedNumbers = numbers.map(num => num ** 3);

console.log(cubedNumbers); // Output: [1, 8, 27, 64, 125]

const numbers = [1, 2, 3, 4, 5];
const cubedNumbers = numbers.map(num => Math.pow(num, 3));

console.log(cubedNumbers); // Output: [1, 8, 27, 64, 125]

const numbers = [1, 2, 3, 4, 5];
const cubedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  cubedNumbers.push(numbers[i] * numbers[i] * numbers[i]);
}

console.log(cubedNumbers); // Output: [1, 8, 27, 64, 125]


