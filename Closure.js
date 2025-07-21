function createCounter() {
  let count = 0; // 'count' is a variable in the outer function's scope

  return function() { // This inner function forms a closure
    count++; // It accesses and modifies 'count' from its lexical environment
    return count;
  };
}

const counter1 = createCounter(); // 'counter1' is a closure
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter(); // 'counter2' is a separate closure
console.log(counter2()); // Output: 1