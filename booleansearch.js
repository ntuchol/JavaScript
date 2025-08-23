const condition1 = true;
        const condition2 = true;
        if (condition1 && condition2) {
            console.log("Both conditions are true.");
        }
        
const conditionA = true;
        const conditionB = false;
        if (conditionA || conditionB) {
            console.log("At least one condition is true.");
        }
const isRaining = false;
        if (!isRaining) {
            console.log("It is not raining.");
        }
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0); // Filters for even numbers
console.log(evenNumbers); // Output: [2, 4]

const myString = "hello";
    if (myString) { // myString is truthy
        console.log("String has content.");
    }