function isPalindrome(str) {
  const normalized = str.toLowerCase(); // Convert to lowercase
  const reversed = normalized.split('').reverse().join(''); // Reverse the string
  return normalized === reversed; // Compare original with reversed
}

console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("Hello"));   // false

function isPalindrome(str) {
  const normalized = str.toLowerCase();
  const len = normalized.length;

  for (let i = 0; i < len / 2; i++) {
    if (normalized[i] !== normalized[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("World"));   // false


unction isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Not a Palindrome"));              // false

