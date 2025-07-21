    const myList = [1, "hello", true, { name: "John" }];
    myList.push("new item"); // Adds "new item" to the end
    myList.pop(); // Removes the last item
    myList.unshift("first item"); // Adds "first item" to the beginning
    myList.shift(); // Removes the first item
    myList.splice(1, 0, "inserted item"); // Inserts "inserted item" at index 1
    myList.splice(2, 1); // Removes 1 element starting from index 2
    myList.forEach(item => console.log(item));
