let originalArray = [1, 2, 3, 4, 5];
originalArray.reverse();
console.log(originalArray); // Output: [5, 4, 3, 2, 1]

let originalArray = [1, 2, 3, 4, 5];
let reversedArray = originalArray.toReversed();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

const myArr = [1, 2, 3, 4, 5];
for (let i = 0; i < Math.floor(myArr.length / 2); i++) {
  let temp = myArr[i];
  myArr[i] = myArr[myArr.length - 1 - i];
  myArr[myArr.length - 1 - i] = temp;
}
console.log(myArr); // Output: [5, 4, 3, 2, 1]

const originalArr = [1, 2, 3];
const newReversedArr = [...originalArr].reverse();
console.log(newReversedArr); // Output: [3, 2, 1]
console.log(originalArr);    // Output: [1, 2, 3]