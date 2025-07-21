function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// Example usage:
console.log(countChar("BBC", "B")); // Output: 2
console.log(countChar("kakkerlak", "k")); // Output: 4