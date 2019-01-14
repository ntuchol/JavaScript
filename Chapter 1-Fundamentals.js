//1- Countdown
function countdown(num) {
    var myArray = [];
    for (var i = num; i >= 0; i--) {
        myArray.push(i);
    }
    // console.log(myArray);
    console.log(myArray.length);
    return myArray;
}
countdown(5);

//This array is 6 characters long

//2-Print and Return 
function printAndReturn(arr) {
    console.log(arr[0]);
    return (arr[1]);
}
printAndReturn([1,3]);

//3-First Plus Length
function firstPlusLength(someArr) {
    console.log(arr[0] + arr.length);
    return (arr[0] + arr.length);
}
var arr = [1,2,3,4];
firstPlusLength(arr);


//Values Greater than Second 
var arr = [1,3,5,7,9,13];
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
        count++;
    }
}
console.log(count);

// This Length, That Value 
function thisLengthThatValue(first,second) {
    if (first == second) {
        console.log("Jinx");
        
    } else {
        for (var i = 0; i < first; i++) {
        
            arr.push(second)
        }
        console.log(arr);
        return arr
    }
}

thisLengthThatValue(2,2)
thisLengthThatValue(3,1)

//Fit the First Value 
function fitTheFirstValue(inputArr) {
    // check to see if given input is of type Array or not.
    if (!Array.isArray(inputArr)) {
        console.log("Input is not an array.");
        return false;
    } else {
        if (inputArr[0] > inputArr.length) {
            console.log("Too big");
        } else if (inputArr[0] < inputArr.length) {
            console.log("Too small");
        } else {
            console.log("Just right");
        }
    }
}

fitTheFirstValue([5,2,3,4,1])
fitTheFirstValue("Chicken")

//23- Fahrenheit to Celsius
// set up variable cDegrees
var cDegrees;
// set up function with an input of fDegrees
function fahrenheitToCelcius(fDegrees) {
    // change value of cDegrees to the converted fDegrees value
    cDegrees = ((fDegrees - 32) * (5/9))
    // print the cDegrees value (optional)
    console.log(`${cDegrees} degrees celcius.`);
    // return cDegrees value
    return cDegrees
}
// call the function and give it an input number (fDegrees).
fahrenheitToCelcius(34)

//23- Fahrenheit to Celsius
// set up variable cDegrees
var cDegrees;
// set up function with an input of fDegrees
function fahrenheitToCelcius(fDegrees) {
    // change value of cDegrees to the converted fDegrees value
    cDegrees = ((fDegrees - 32) * (5/9))
    // print the cDegrees value (optional)
    console.log(`${cDegrees} degrees celcius.`);
    // return cDegrees value
    return cDegrees
}
// call the function and give it an input number (fDegrees).
fahrenheitToCelcius(34)


//24- Celsius to Fahrenheit 
// declare fDegrees variable
var fDegrees;
// set up function to convert C to F, and give it an input of cDegrees
function celsiusToFahrenheit(cDegrees) {
    // change value of fDegrees to cDegrees converted
    fDegrees = ((9/5) * cDegrees) + 32;
    // log the converted degrees in F (optional)
    console.log(`${fDegrees} degrees Fahrenheit`);
    // rerturn fDegrees
    return fDegrees;
}
// call the function and give it an Int value
celsiusToFahrenheit(15)


