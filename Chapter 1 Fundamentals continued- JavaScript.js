//Chapter 1 Fundamentals 
//1-Biggie Size


function makeItBig(myArr) {
      for(let i = 0; i < myArr.length; i++) {
        if(myArr[i] > 0) {
          myArr[i] = "big";
        }
      }
       return(myArr);
}

console.log(makeItBig([-1,3,5,-5]));


//2-Print Low, Return High

function print_Low_Return_High(myArray) {
    console.log(Math.min.apply(null, myArray));
    return(Math.max.apply(null, myArray));
}

console.log(print_Low_Return_High([1,2,3,4]));


//3-Print One, Return Another
function array_numbers(input) {
  //Returning all odd and then all even values sorted in the array
    var result = input.filter (x => x%2).sort().concat(input.filter (x => x%2 === 0).sort());
    
    return result;

  //Printing the second to last value in the array
    console.log([input.length-1]);
}

array_numbers([1,2,3,4,5]);

// Double Vision
function doubleVision(myArr) {
    let newArr = myArr.map((a) => a*2);
    return newArr;
}
console.log(doubleVision([1, 2, 3]));


// Count Positives
function countPositives(myArr) {
    let posCount = 0;
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] > 0) {
            posCount++;
        }
    }
    myArr[myArr.length - 1] = posCount;
    return myArr;
}
console.log(countPositives([-1, 1, 1, 1]));

// Evens and Odds
function evensOdds(myArr) {
    let eCount = 0;
    let oCount = 0;
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] % 2 == 0) {
            eCount++;
            oCount = 0;
            if (eCount >= 3) {
                console.log("Even more so!");
            }
        } else {
            oCount++;
            eCount = 0
            if (oCount >= 3) {
                console.log("That’s odd!");
            }
        }
    }
}
evensOdds([1, 2, 3, 57, 93, 2, 1, 2, 24, 36, 48, 25, 23, 21, 19, ]);

// Previous Lengths
function previousLengths(myArr) {
    for (let i = myArr.length - 1; i > 0; i--) { 
        myArr[i] = (myArr[i - 1]).length;
    }
    return myArr;
}
previousLengths(["string01", "string000001", "string000000000001", "string", ])

//  Add Seven to Most
function addSevenToMost(myArr) {
    for (let i = 1; i < myArr.length; i++) {
        myArr[i] = myArr[i] + 7;
    }
    return myArr;
}
console.log(addSevenToMost([2, 3, 6, 8, 14, 27, 1]));

//Always Hungry 
function alwaysHungry(myArr) {
    let foodCount = 0;
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] == "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if (foodCount == 0) {
        console.log("I'm hungry");
    }
}
console.log(alwaysHungry(["food", "not", "food", "not"]));

// Scale the Array
function scaleArr(myArr, mult) {
    for (let i = 0; i < myArr.length; i++) {
        myArr[i] = myArr[i] * 3;
    }
    return myArr;
}
console.log(scaleArr([1, 2, 3, 4, 5, 6], 3));

//Print 1-255
function Print1To255() {
  for (var i = 0; i <= 255; i++) {
    console.log(i);
  }
}

//Print Ints and Sum 0-255
function PrintIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    sum = sum + i;
    console.log(i + ' | CURRENT SUM: ' + sum);
  }
}

//Find and Print Max 
function PrintMaxOfArray(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max)
}
