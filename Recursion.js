function factorial(n) {
  // Base case: if n is 0 or 1, factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  } 
  // Recursive step: n * factorial of (n-1)
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)