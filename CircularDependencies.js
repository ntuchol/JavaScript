// moduleA.js
import { b } from './moduleB.js';
export const a = 'Value from A';
console.log('From A:', b);

// moduleB.js
import { a } from './moduleA.js';
export const b = 'Value from B';
console.log('From B:', a);