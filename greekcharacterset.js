const text = "Καλημέρα"; // Greek for "Good morning"
const encoder = new TextEncoder('iso-8859-7');
const encoded = encoder.encode(text);
console.log(encoded); // This will output a Uint8Array

const encodedData = new Uint8Array([0xCA, 0xBB, 0xEB, 0xEC, 0xEE, 0xF1, 0xE2, 0xE5, 0xEB, 0xE1]); // Example byte array
const decoder = new TextDecoder('iso-8859-7');
const decodedText = decoder.decode(encodedData);
console.log(decodedText); // Outputs: Καλημέρα

const text = "Καλημέρα";
const encoded = Buffer.from(text, 'latin1').toString('binary');
console.log(encoded);

const encodedData = "ÎšÎ±Î»Î·Î¼ÎÏ Î±"; // Example encoded string
const decodedText = Buffer.from(encodedData, 'binary').toString('latin1');
console.log(decodedText); // Outputs: Καλημέρα