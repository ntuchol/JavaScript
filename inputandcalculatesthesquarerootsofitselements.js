function calculateSquareRoots(numbers) {
  // Check if the input is an array
  if (!Array.isArray(numbers)) {
    console.error("Input must be an array.");
    return []; // Return an empty array or handle the error as appropriate
  }

  // Use map to create a new array where each element is the square root of the original
  const squareRoots = numbers.map(number => Math.sqrt(number));
  return squareRoots;
}

// Example usage:
const myNumbers = [4, 9, 16, 25, 36];
const result = calculateSquareRoots(myNumbers);
console.log(result); // Output: [2, 3, 4, 5, 6]

const negativeNumbers = [1, -4, 9];
const resultNegative = calculateSquareRoots(negativeNumbers);
console.log(resultNegative); // Output: [1, NaN, 3] (Math.sqrt returns NaN for negative numbers)

const mixedData = [100, "abc", 81];
const resultMixed = calculateSquareRoots(mixedData);
console.log(resultMixed); // Output: [10, NaN, 9] (Math.sqrt returns NaN for non-numeric values)
