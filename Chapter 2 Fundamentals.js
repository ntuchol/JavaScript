// Algorithm Challenges
// The Dojo Collection
// Chapter_02_Fundamentals_Part_II


// Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
function sigma(myNum) {
    let newNum = 0;
    for (let i = 1; i <= myNum; i++) {
        newNum = i + newNum;
    }
    return newNum;
}
sigma(5);

//  Factorial
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
function factorial(myNum) {
    let newNum = 1;
    for (let i = 0; i < myNum; i++) {
        newNum = i * newNum + newNum;
    }
    return newNum;
}
factorial(5);

//  Star Art
// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (first star would be very first char in the text field), or right-justified (last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one).
function starArt(stars, justify) {
    let outPut = "";
    if (justify == "left") {
        for (let i = 0; i < stars; i++) {
            outPut = outPut + "*";
        }
    } else if (justify == "center") {
        let spaces = (75 - stars) / 2;
        for (let i = 0; i < spaces; i++) {
            outPut = outPut + " ";
        }
        for (let i = 0; i < stars; i++) {
            outPut = outPut + "*";
        }
    } else if (justify == "right") {
        let spaces = 75 - stars;
        for (let i = 0; i < spaces; i++) {
            outPut = outPut + " ";
        }
        for (let i = 0; i < stars; i++) {
            outPut = outPut + "*";
        }
    }
    return outPut;
}

starArt(16, "left");
starArt(6, "center");
starArt(46, "right");

// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.

// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.

// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.

// (optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.

function starArt(stars, justify) {
    let outPut = "";
    if (justify == "left") {
        for (let i = 0; i < stars; i++) {
            outPut = outPut + "(=*=)";
        }
        for (let i = 0; i < 75 - stars; i++) {
            outPut = outPut + ">o<";
        }
    } else if (justify == "center") {
        let spaces = (75 - stars) / 2;
        for (let i = 0; i < spaces; i++) {
            outPut = outPut + ">o<";
        }
        for (let i = 0; i < stars; i++) {
            outPut = outPut + "(=*=)";
        }
        for (let i = 0; i < spaces; i++) {
            outPut = outPut + ">o<";
        }
    } else if (justify == "right") {
        let spaces = 75 - stars;
        for (let i = 0; i < spaces; i++) {
            outPut = outPut + ">o<";
        }
        for (let i = 0; i < stars; i++) {
            outPut = outPut + "(=*=)";
        }
    }
    return outPut;
}

//starArt(16, "left");
// starArt(6, "center");
starArt(46, "right");

//  Character Art
// From the above, derive the following that accept and draw the given characters, not just asterisks:

// drawLeftChars(num,char) // For all three of these, you
// drawRightChars(num,char) // can safely assume that 'char'
// drawCenteredChars(num,char) // is a string with length 1
function starArt(stars, justify, char) {
    let outPut = "";
    if (justify == "left") {
        for (let i = 0; i < stars; i++) {
            outPut = outPut + char;
        }
    } else if (justify == "center") {
        let spaces = (75 - stars) / 2;
        for (let i = 0; i < spaces; i++) {
            outPut = outPut + " ";
        }
        for (let i = 0; i < stars; i++) {
            outPut = outPut + char;
        }
    } else if (justify == "right") {
        let spaces = 75 - stars;
        for (let i = 0; i < spaces; i++) {
            outPut = outPut + " ";
        }
        for (let i = 0; i < stars; i++) {
            outPut = outPut + char;
        }
    }
    return outPut;
}

//starArt(16, "left", "#" );
//starArt(6, "center", "^");
starArt(46, "right", "@");

//  Threes and Fives
// Create threesFives() that adds values from 100 and 4000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
function threesFives() {
    let finalSum = 0;
    for (let i = 100; i < 4000; i++) {
        if (i % 15 !== 0 && (i % 5 === 0 || i % 3 === 0)) {
            finalSum += i;
        }
    }
    return finalSum;
}
threesFives();

// Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives()as betterThreesFives(100,4000000).
function betterThreesFives(start, end) {
    let finalSum = 0;
    for (let i = start; i < end; i++) {
        if (i % 15 !== 0 && (i % 5 === 0 || i % 3 === 0)) {
            finalSum += i;
        }
    }
    return finalSum;
}
betterThreesFives(25, 200);

//  Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

function generateCoinChange(cents) {
    let newCents = cents;
    let Q = Math.trunc(newCents / 25);
    newCents = newCents % 25;
    let D = Math.trunc(newCents / 10);
    newCents = newCents % 10;
    let N = Math.trunc(newCents / 5);
    newCents = newCents % 5;
    let P = newCents % 5;
    console.log(`you have ${Q} quarters, ${D} dimes, ${N} nickles and ${P} pennies`);
}
generateCoinChange(69);

// Second: can you simplify/shorten your code?  // started short

// Example output, given (94):
// 94 cents can be represented by:
// quarters:3
// dimes:1
// nickels:1
// pennies:4

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

function generateCoinChange(cents) {
    let Cs = cents;
    let DL = Math.trunc(Cs / 100);
    Cs = Cs % 100;
    let HD = Math.trunc(Cs / 50);
    Cs = Cs % 50;
    let Q = Math.trunc(Cs / 25);
    Cs = Cs % 25;
    let D = Math.trunc(Cs / 10);
    Cs = Cs % 10;
    let N = Math.trunc(Cs / 5);
    Cs = Cs % 5;
    let P = Cs % 5;
    console.log(`you have ${DL} dollars, ${HD} half-dollars, ${Q} quarters, ${D} dimes, ${N} nickles and ${P} pennies`);
}
generateCoinChange(1569);

//  Messy Math Mashup
// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

// If current count (not num) is evenly divisible by 3, don’t add to sum; skip to the next count;

// Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;

// Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately.

// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.  // 
function messyMath(myNum) {
    let sum = 0;
    for (let i = 1; i <= myNum; i++) {
        if (i * 3 == myNum) {
            sum = -1;
            break;
        } else if (i % 3 == 0) {
            continue;
        } else if (i % 7 == 0) {
            sum = sum + i + i;
        } else {
            sum = sum + i;
        }

    }
    return sum;
}
messyMath(15);

//  Twelve-Bar Blues
// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.
function twelveBars() {
    for (let i = 1; i <= 12; i++) {
        console.log(`${i}, chick, boom, chick`);
    }
}
twelveBars();

//  Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.
function fibonacci(num) {
    var a = 1;
    var b = 0;
    var temp;

    while (num > 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}

fibonacci(17);

//  Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
function oneDigitizer(num) {
    let myNum = num;
    while (myNum > 10) {
        let numArr = myNum.toString().split("");
        myNum = numArr.reduce((a, b) => Number(a) + Number(b), 0);
    }
    return myNum;
}

oneDigitizer(99981);
oneDigitizer(378);
oneDigitizer(7);
oneDigitizer(123);

//  Clock Hand Angles
// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.
function clockHandAngles(numSecs) {
    let newSeconds = numSecs;
    let hours = newSeconds / 3600; // no Math.trunc as i want a the clock handle to hang over a bit.
    newSeconds = newSeconds % 3600;
    let minutes = newSeconds / 60;
    newSeconds = newSeconds % 60;
    let seconds = newSeconds;

    // CLOCK HANDLES:
    let hourHandle = hours * 30;
    let minuteHandle = minutes * 6;
    let secondHandle = seconds * 6;
    console.log(`${Math.trunc(hours)} hours\n${Math.trunc(minutes)} minutes\n${seconds} seconds\n`);

    console.log(`Hour handle = ${hourHandle} degrees\nMinute handle = ${minuteHandle} degrees\nSecond handle = ${secondHandle} degrees`);
}
clockHandAngles(4589);

// Second: also calculate and print degrees for an additional “week hand” that rotates once each week.
function clockHandAngles(numSecs) {
    let newSeconds = numSecs;
    let days = newSeconds / 86400;
    newSeconds = newSeconds % 86400;
    let hours = newSeconds / 3600;
    newSeconds = newSeconds % 3600;
    let minutes = newSeconds / 60;
    newSeconds = newSeconds % 60;
    let seconds = newSeconds;

    // CLOCK HANDLES:
    let weekHandle = days * 51.42;
    let hourHandle = hours * 30;
    let minuteHandle = minutes * 6;
    let secondHandle = seconds * 6;

    console.log(`Week handle = ${weekHandle} degrees\nHour handle = ${hourHandle} degrees\nMinute handle = ${minuteHandle} degrees\nSecond handle = ${secondHandle} degrees`);
}
clockHandAngles(563214);

//  Is Prime
// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.
function isPrime(myNum) {
    let answer = false;
    for (let i = 2; i < myNum; i++) { // start at 2 for prime check
        if (myNum % i == 0) {
            answer = true;
            break;
        }
    }
    return answer;
}

isPrime(16);
isPrime(23);

//  Rockin’ the Dojo Sweatshirt
// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – maybe even more than one. Let’s say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn’t have coins, so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.
function sweatshirtPricing(num) {
    if (num >= 4) {
        return Math.ceil(num * 13);
    } else if (num == 3) {
        return Math.ceil(num * 16.2);
    } else if (num == 2) {
        return Math.ceil(num * 18.2);
    } else {
        return Math.ceil(num * 20);
    }
}

sweatshirtPricing(3);

//  Clock Hand Angles, Revisited
// Return to your previous clockHandAngles solution. Allow fractional values for input seconds, but change your implementation to print only integer values for angles (in degrees) of the various hands.
function clockHandAngles(numSecs) {
    let newSeconds = numSecs;
    let days = newSeconds / 86400;
    newSeconds = newSeconds % 86400;
    let hours = newSeconds / 3600;
    newSeconds = newSeconds % 3600;
    let minutes = newSeconds / 60;
    newSeconds = newSeconds % 60;
    let seconds = newSeconds;

    // CLOCK HANDLES:
    let weekHandle = days * 51.42;
    let hourHandle = hours * 30;
    let minuteHandle = minutes * 6;
    let secondHandle = seconds * 6;

    console.log(`Week handle = ${Math.ceil(weekHandle)} degrees\nHour handle = ${Math.ceil(hourHandle)} degrees\nMinute handle = ${Math.ceil(minuteHandle)} degrees\nSecond handle = ${secondHandle} degrees`);
}
clockHandAngles(563214);

//  Extract-o-matic
// Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.
function extractDigit(num, digitNum) {
    let newNum = num.toString().split("");
    return newNum[newNum.length - digitNum - 1];
}
extractDigit(18253463563544, 2);

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1), return 4.

// Third: handle negative num values as well, doing what you think is appropriate.

//  Most Significant Digit
// If you already know who Ada Lovelace is, that’s great! In a History of Science, she is significant. Given number of any size, return the most significant digit. If you already know what strings are, that’s great! However, don’t use them here . Hint: use WHILE to bring the most significant digit into range where you can use the friendly modulus operator (%). The most significant digit is the leftmost non-zero digit of a number. Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9.
function mostSigDig(myNum) {
    if (myNum >= 1) {
        let newNum = myNum.toString().split("");
        return newNum[0];
    } else {
        let newNum = myNum.toString().split("");
        for (let i = 0; i < newNum.length; i++) {
            if (newNum[i] > 0) {
                return newNum[i];
                break;
            }
        }
    }
}
mostSigDig(0.0007860012356789);

// Second: handle negative num values as well, doing what you think is appropriate.

//  Gaming Fun(damentals)
// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?

// 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).
function rollOne() {
    return (Math.ceil(Math.random() * 6));
}

// 2) Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”
function playFives(num) {
    for (let i = num; i > 0; i--) {
        let myRoll = rollOne();
        if (myRoll == 5) {
            console.log("5, That's good luck!")
        } else {
            console.log(myRoll);
        }
    }
}
playFives(6);

// 3) Third, create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.

//function playStatistics(num){
//   let i = num;
//   let myArr = [];
//   while(i > 0){
//     let myRoll = rollOne();
//     i--;
//     myArr[i] = myRoll;
//   }
//   console.log(myArr);
//   let low = myArr[i];
//   let high = myArr[i];
//   for(let j = 0 ; j < myArr.length ; j++){
//     if(myArr[j] > high){
//       high = myArr[j];
//     } else if(myArr[j] < low){
//       low = myArr[j];
//     }
//   }
//   console.log(`low is ${low}`)
//   console.log(`high is ${high}`)
// }
// playStatistics(8);

// 4) Fourth, make a copy of playStatistics and add code to make playStatistics2(), so that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.

// function playStatistics2(num){
//   let i = num;
//   let myArr = [];
//   while(i > 0){
//     let myRoll = rollOne();
//     i--;
//     myArr[i] = myRoll;
//   }
//   console.log(`rolls are ${myArr}`);
//   let low = myArr[i];
//   let high = myArr[i];
//   for(let j = 0 ; j < myArr.length ; j++){
//     if(myArr[j] > high){
//       high = myArr[j];
//     } else if(myArr[j] < low){
//       low = myArr[j];
//     }
//   }
//   let sum = 0;
// for(let k = 0 ; k < myArr.length ; k++){
//   sum+=myArr[k];
// }

//   console.log(`low is ${low}`)
//   console.log(`high is ${high}`)
//   console.log(`sum is ${sum}`)
// }
// playStatistics2(12);


// 5) Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that it will roll as many times as you want, instead of always doing this eight times.
// --> HOW I INITIALLY SETUP

// 6) Finally, make a copy of playStatistics3 and change it to create playStatistics4(num), so that at the end instead of the total sum, it prints the average roll.
function playStatistics4(num) {
    let i = num;
    let myArr = [];
    while (i > 0) {
        let myRoll = rollOne();
        i--;
        myArr[i] = myRoll;
    }
    console.log(`rolls are ${myArr}`);
    let low = myArr[i];
    let high = myArr[i];
    for (let j = 0; j < myArr.length; j++) {
        if (myArr[j] > high) {
            high = myArr[j];
        } else if (myArr[j] < low) {
            low = myArr[j];
        }
    }
    let sum = 0;
    for (let k = 0; k < myArr.length; k++) {
        sum += myArr[k];
    }

    console.log(`low is ${low}`)
    console.log(`high is ${high}`)
    console.log(`average is ${Math.round(sum/num)}`)
}
playStatistics4(12);

//  Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls, min, max, and average.
function myRoll() {
    let myRoll = Math.ceil(Math.random() * 3);
    return myRoll;
}

function untilDoubles() {
    let rollA = myRoll();
    let rollB = myRoll();
    let rollCount = 1;
    let rollArr = [];
    do {
        let rollA = myRoll();
        let rollB = myRoll();
        rollCount++;
        rollArr.push(rollA);
        rollArr.push(rollB);
    } while (rollA != rollB);
    console.log(`roll A of ${rollA} matched roll b of ${rollB} after ${rollCount} rolls of ${rollArr}`);
}
untilDoubles();
// DID UP TO 3 AS KEPT GETTING INFINITE WARNINGS

//  Claire is Where?
// On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions (reset, moveBy, xLocation and yLocation) to track the travels of Claire, a wanderer. Calling reset() moves Claire home to the origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions. Finally, xLocation() and yLocation()return how far Claire is from home, in X and Y directions respectively. After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.
let xLoc = 0;
let yLoc = 0;

function reset() {
    xLoc = 0;
    yLoc = 0;
}

function moveBy(xOffset, yOffset) {
    xLoc = xLoc + xOffset;
    yLoc = yLoc + yOffset;
}

function xLocation() {
    return xLoc;
}

function yLocation() {
    return yLoc;
}

reset();
moveBy(1, -2);
moveBy(3, 1);
xLocation();
yLocation();


//  Date, on a Deserted Island
// After a particularly fabulous New Year’s Eve party to end 2016, Eduardo wakes to find himself stranded on a deserted island. He misses his home in Burbank, but at least now he can spend plenty of time outdoors – and you can’t beat the commute! To pass the time until he is rescued, he counts sunrises.

// 1) Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum) function that, given a number between 1 and 7, will console.log a string containing the day of the week for that number (given 1, log "Sunday"). Use a SWITCH statement.
function weekdayName(num) {
    switch (num) {
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            return "Tuesday";
            break;
        case 4:
            return "Wednesday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6:
            return "Friday";
            break;
        case 7:
            return "Saturday";
            break;
        default:
            return "not a day"

    }

}
weekdayName(5);


// 2) Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365. Return weekday as before, given number of days total. "Sunday" still corresponds to 1.
function weekdayName2(dayNum) {
    if (dayNum % 7 == 6) {
        return "Saturday"
    } else if (dayNum % 7 == 5) {
        return "Friday";
    } else if (dayNum % 7 == 4) {
        return "Thursday";
    } else if (dayNum % 7 == 3) {
        return "Wednesday";
    } else if (dayNum % 7 == 2) {
        return "Tuesday";
    } else if (dayNum % 7 == 1) {
        return "Monday";
    } else if (dayNum % 7 == 0) {
        return "Sunday";
    } else {
        return "not a day"
    }
}
weekdayName2(22);

// 3) Create a new function someDays() that calls weekDayName2() seventeen times, with randomly generated integers as high as 365. Log each result string. If it is a weekday, add the phrase "Work hard!", and if it is a weekend day, add "Enjoy your day off!"
function someDays(num) {
    for (let i = 0; i < num; i++) {
        let randNum = Math.ceil(Math.random() * 365);
        let actualDay = weekdayName2(randNum)
        if (actualDay == "Saturday" || actualDay == "Sunday") {
            console.log(`it's ${actualDay} enjoy your day off`)
        } else {
            console.log(`it's ${actualDay} work hard`)
        }
    }

}
someDays(17);

// 4) Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number ("May" corresponds to 5). Use an array, without loops.
function monthName(monthNum) {
    let myMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let actualMonth = myMonths[monthNum - 1];
    return actualMonth;
}
monthName(2);

// 5) Now expand monthName() to create monthToDays(monthNum), returning the number of days in that month, in the year 2017. Hint: use a SWITCH statement for the days in each month.
function monthToDays(monthNum) {
    switch (monthNum) {
        case 1:
            return "Januray has 31 Days";
            break;
        case 2:
            return "February has 28 Days";
            break;
        case 3:
            return "March has 31 Days";
            break;
        case 4:
            return "April has 30 Days";
            break;
        case 5:
            return "May has 31 Days";
            break;
        case 6:
            return "June has 30 Days";
            break;
        case 7:
            return "July has 31 Days";
            break;
        case 8:
            return "August has 31 Days";
            break;
        case 9:
            return "September has 30 Days";
            break;
        case 10:
            return "October has 31 Days";
            break;
        case 11:
            return "November has 30 Days";
            break;
        case 12:
            return "December has 31 Days";
            break;
    }
}
monthToDays(2);

// 6) Despite using his ember expertise to create a glowing SOS visible from space, the days go by and sadly Eduardo is still not rescued. Is it spring yet? It might as well be. Build on monthName() to create dayToMonth(dayNum). If given a day number since the year began, return the current month (assume it is not a Leap Year). Given 75, return "March".
function monthName(monthNum) {
    switch (true) {
        case (monthNum <= 31):
            return "Januray";
            break;
        case (monthNum <= 59):
            return "February";
            break;
        case (monthNum <= 90):
            return "March";
            break;
        case (monthNum <= 120):
            return "April";
            break;
        case (monthNum <= 151):
            return "May";
            break;
        case (monthNum <= 181):
            return "June";
            break;
        case (monthNum <= 212):
            return "July";
            break;
        case (monthNum <= 243):
            return "August";
            break;
        case (monthNum <= 273):
            return "September";
            break;
        case (monthNum <= 304):
            return "October";
            break;
        case (monthNum <= 335):
            return "November";
            break;
        case (monthNum <= 365):
            return "December";
            break;
    }
}
monthName(228);

// 7) Eduardo builds a Dojo bootcamp on the island. Initially his students only find Ninja Gold in caves, but eventually even his tree sloths can write code quickly! Dojo classes meet Monday thru Friday, so let’s reincorporate weekday to our calculations. Construct fullDate(dayNum) to accept number of days so far in 2017, and return a full date string. He hardly remembers that fateful New Year’s Eve party, but he knows it was a Saturday. Given 142, return "Monday, May 22, 2017".
function weekdayName2(dayNum) {
    if (dayNum % 7 == 6) {
        return "Friday"
    } else if (dayNum % 7 == 5) {
        return "Thursday";
    } else if (dayNum % 7 == 4) {
        return "Wednessday";
    } else if (dayNum % 7 == 3) {
        return "Tuesday";
    } else if (dayNum % 7 == 2) {
        return "Monday";
    } else if (dayNum % 7 == 1) {
        return "Sunday";
    } else if (dayNum % 7 == 0) {
        return "Saturday";
    } else {
        return "not a day"
    }
}

function monthName(dayNum) {
    let monthDate = 0;
    switch (true) {
        case (dayNum <= 31):
            return `Januray ${dayNum}`;
            break;
        case (dayNum <= 59):
            monthDate = dayNum - 31;
            return `February ${monthDate}`;
            break;
        case (dayNum <= 90):
            monthDate = dayNum - 59;
            return `March ${monthDate}`;
            break;
        case (dayNum <= 120):
            monthDate = dayNum - 90;
            return `April ${monthDate}`;
            break;
        case (dayNum <= 151):
            monthDate = dayNum - 120;
            return `May ${monthDate}`;
            break;
        case (dayNum <= 181):
            monthDate = dayNum - 151;
            return `June ${monthDate}`;
            break;
        case (dayNum <= 212):
            monthDate = dayNum - 181;
            return `July ${monthDate}`;
            break;
        case (dayNum <= 243):
            monthDate = dayNum - 212;
            return `August ${monthDate}`;
            break;
        case (dayNum <= 273):
            monthDate = dayNum - 243;
            return `September ${monthDate}`;
            break;
        case (dayNum <= 304):
            monthDate = dayNum - 273;
            return `October ${monthDate}`;
            break;
        case (dayNum <= 335):
            monthDate = dayNum - 304;
            return `November ${monthDate}`;
            break;
        case (dayNum <= 365):
            monthDate = dayNum - 335;
            return `December ${monthDate}`;
            break;
    }
}

function fullDate(dayNum) {
    let myDay = weekdayName2(dayNum);
    let myMonth = monthName(dayNum);
    console.log(`It is ${myDay}, ${myMonth}, 2017`)

}

fullDate(142);

// 8) Times flies when you’re at a Dojo – months in fact. Build fullDate2(dayNum) that will be given a 4-digit integer: the days that have passed since December 31, 2016. This number can stretch into future years! You can assume that any year number divisible by four is a leap year and has a 29-day February. Given 8475, return "Thursday, March 15, 2040".

// WORDING DOES NOT TAKE INTO ACCOUNT LEAP YEAR IS EVERY 4 YEARS NOT ON JUST A SINGLE YEAR DIVISIBLE BY 4
function fullDate2(dayNum) {
    function monthName(dayNum) {
        let monthDate = 0;
        switch (true) {
            case (dayNum <= 31):
                return `Januray ${dayNum}`;
                break;
            case (dayNum <= 59):
                monthDate = dayNum - 31;
                return `February ${monthDate}`;
                break;
            case (dayNum <= 90):
                monthDate = dayNum - 59;
                return `March ${monthDate}`;
                break;
            case (dayNum <= 120):
                monthDate = dayNum - 90;
                return `April ${monthDate}`;
                break;
            case (dayNum <= 151):
                monthDate = dayNum - 120;
                return `May ${monthDate}`;
                break;
            case (dayNum <= 181):
                monthDate = dayNum - 151;
                return `June ${monthDate}`;
                break;
            case (dayNum <= 212):
                monthDate = dayNum - 181;
                return `July ${monthDate}`;
                break;
            case (dayNum <= 243):
                monthDate = dayNum - 212;
                return `August ${monthDate}`;
                break;
            case (dayNum <= 273):
                monthDate = dayNum - 243;
                return `September ${monthDate}`;
                break;
            case (dayNum <= 304):
                monthDate = dayNum - 273;
                return `October ${monthDate}`;
                break;
            case (dayNum <= 335):
                monthDate = dayNum - 304;
                return `November ${monthDate}`;
                break;
            case (dayNum <= 365):
                monthDate = dayNum - 335;
                return `December ${monthDate}`;
                break;
        }
    }

    function weekdayName2(dayNum) {
        if (dayNum % 7 == 6) {
            return "Saturday"
        } else if (dayNum % 7 == 5) {
            return "Friday";
        } else if (dayNum % 7 == 4) {
            return "Thursday";
        } else if (dayNum % 7 == 3) {
            return "Wednesday";
        } else if (dayNum % 7 == 2) {
            return "Tuesday";
        } else if (dayNum % 7 == 1) {
            return "Monday";
        } else if (dayNum % 7 == 0) {
            return "Sunday";
        } else {
            return "not a day"
        }
    }

    let addYears = Math.ceil(dayNum / 365);
    let leapYears = Math.floor(addYears / 4);
    let theYear = 2016 + addYears;
    let daysLeft = dayNum % 365 - leapYears;
    let actualDay = monthName(daysLeft);
    let dayName = weekdayName2(daysLeft);

    console.log(`${dayName}, ${actualDay}, ${theYear}`);
}
fullDate2(8475);

// 9) Eduardo hacks the Google Maps API and adds this long-forgotten island back onto the map. Soon he is rescued! News of his Hemingway-like stoicism make him famous for centuries. Build fullDate3(dayNum) to handle days up to 140,000! Note: years 2100, 2200, and 2300 are not leap years (although 2400 is). Given 139947, return "Tuesday, February 29, 2400".
function fullDate2(dayNum) {
    function monthName(dayNum) {
        let monthDate = 0;
        switch (true) {
            case (dayNum <= 31):
                return `Januray ${dayNum}`;
                break;
            case (dayNum <= 59):
                monthDate = dayNum - 31;
                return `February ${monthDate}`;
                break;
            case (dayNum <= 90):
                monthDate = dayNum - 59;
                return `March ${monthDate}`;
                break;
            case (dayNum <= 120):
                monthDate = dayNum - 90;
                return `April ${monthDate}`;
                break;
            case (dayNum <= 151):
                monthDate = dayNum - 120;
                return `May ${monthDate}`;
                break;
            case (dayNum <= 181):
                monthDate = dayNum - 151;
                return `June ${monthDate}`;
                break;
            case (dayNum <= 212):
                monthDate = dayNum - 181;
                return `July ${monthDate}`;
                break;
            case (dayNum <= 243):
                monthDate = dayNum - 212;
                return `August ${monthDate}`;
                break;
            case (dayNum <= 273):
                monthDate = dayNum - 243;
                return `September ${monthDate}`;
                break;
            case (dayNum <= 304):
                monthDate = dayNum - 273;
                return `October ${monthDate}`;
                break;
            case (dayNum <= 335):
                monthDate = dayNum - 304;
                return `November ${monthDate}`;
                break;
            case (dayNum <= 365):
                monthDate = dayNum - 335;
                return `December ${monthDate}`;
                break;
        }
    }

    function weekdayName2(dayNum) {
        if (dayNum % 7 == 6) {
            return "Saturday"
        } else if (dayNum % 7 == 5) {
            return "Friday";
        } else if (dayNum % 7 == 4) {
            return "Thursday";
        } else if (dayNum % 7 == 3) {
            return "Wednesday";
        } else if (dayNum % 7 == 2) {
            return "Tuesday";
        } else if (dayNum % 7 == 1) {
            return "Monday";
        } else if (dayNum % 7 == 0) {
            return "Sunday";
        } else {
            return "not a day"
        }
    }

    let addYears = Math.ceil(dayNum / 365);
    let leapYears = Math.floor(addYears / 4) - 2; // subracted 2 for leap yeasr needs to be worked into a function
    let theYear = 2016 + addYears;

    // if(theYear >= 2300){
    //   leapYears-=3;
    // } else if(theYear >= 2200){
    //   leapYears-=2;
    // } else if(theYear >= 2100){
    //   leapYears-=1;

    let daysLeft = dayNum % 365 - leapYears;
    let actualDay = monthName(daysLeft);
    let dayName = weekdayName2(daysLeft);

    console.log(`${dayName}, ${actualDay}, ${theYear}`);
}
fullDate2(139947);

//  Short Answer Questions: Fundamentals, Part II
// What is the JavaScript Math library? What does it contain?
// Why aren’t all those functions just included in JavaScript automatically?
// If I call Math.random(), what will it return?
// What do the following functions do: Math.floor, Math.ceil, Math.trunc, Math.round?
// When do Math.floor and Math.trunc not return the same value?
// What is the % operator? When is it useful?
// How do I make variables declared outside (right next to) a function visible inside it?
// Why should I comment my code? If I know what it does, isn’t commenting just a waste of time?

//  Weekend Challenge: Fundamentals, Part II
// This weekend, complete the “Date, on a Deserted Island” problem series, if you have not yet done so.
// Then, if time allows, incorporate the Math library into a new quiz game. See if users can memorize 10 digits of Pi. Do the same for the constant e, the square root of 2, as well as the square root of 1/2. These values are all available within the Math library. What other Math functions or properties can you incorporate? Continue to use prompt, and output the game statistics when the user quits.
