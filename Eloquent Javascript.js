//Chapter 1
function loopy(num) {
  let pound = "#";
  for (i = 0; i < num; i++) {
  	console.log(pound);
  	pound += "#"
  }
}
console.log(loopy(7));

//Chapter 2
function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FizzBuzz");
    } else if ((i % 3 !== 0) && (i % 5 === 0)) {
      console.log("Buzz");
    } else if ((i % 3 === 0) && (i % 5 !== 0)) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(10)

//Chapter 3
function checkMate() {
  var grid = "# # # #";
  for (i = 0; i < 8; i++) {
    if (i % 2 === 0) {
      console.log(" " + grid);
    } else {
      console.log(grid);
    }
  }
}

checkMate(8);
