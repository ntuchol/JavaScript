function sumRange(start, end) {
  let sum = 0;
  // Ensure 'start' is the smaller number and 'end' is the larger
  const lower = Math.min(start, end);
  const upper = Math.max(start, end);

  for (let i = lower; i <= upper; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 5)); // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log(sumRange(5, 1)); // Output: 15 (handles reversed range)

function sumRangeReduce(start, end) {
  const numbers = [];
  const lower = Math.min(start, end);
  const upper = Math.max(start, end);

  for (let i = lower; i <= upper; i++) {
    numbers.push(i);
  }

  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumRangeReduce(1, 5)); // Output: 15

function sumRangeFormula(start, end) {
  const lower = Math.min(start, end);
  const upper = Math.max(start, end);
  const count = upper - lower + 1; // Number of integers in the range

  return (count / 2) * (lower + upper);
}

console.log(sumRangeFormula(1, 100)); // Output: 5050