function compressString(str) {
  let compressed = ""; // Initialize an empty string to store the compressed result
  let count = 1;       // Initialize a counter for consecutive characters

  // Iterate through the input string, starting from the second character
  for (let i = 0; i < str.length; i++) {
    // If the current character is the same as the next character, increment the count
    if (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
    } else {
      // If the character changes or it's the last character
      // Append the character and its count to the compressed string
      compressed += str[i];
      // Only append the count if it's greater than 1
      if (count > 1) {
        compressed += count;
      }
      // Reset the count for the next sequence of characters
      count = 1;
    }
  }
  return compressed; // Return the compressed string
}

// Example usage:
const originalString1 = "aaabbccc";
const compressedString1 = compressString(originalString1);
console.log(`Original: "${originalString1}", Compressed: "${compressedString1}"`); // Output: Original: "aaabbccc", Compressed: "a3b2c3"

const originalString2 = "heeeeelllllloooooo";
const compressedString2 = compressString(originalString2);
console.log(`Original: "${originalString2}", Compressed: "${compressedString2}"`); // Output: Original: "heeeeelllllloooooo", Compressed: "h1e5l6o6"

const originalString3 = "abc";
const compressedString3 = compressString(originalString3);
console.log(`Original: "${originalString3}", Compressed: "${compressedString3}"`); // Output: Original: "abc", Compressed: "abc"
