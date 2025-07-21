let a = 5; // Binary: 0101
let b = 3; // Binary: 0011
let result = a ^ b; // Binary: 0110 (Decimal: 6)
console.log(result); // Output: 6
const uniqueId1 = Symbol('id');
const uniqueId2 = Symbol('id');
console.log(uniqueId1 === uniqueId2); // Output: false