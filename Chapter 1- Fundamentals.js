// Only Keep the Last Few
function keepTheLast(myArr, num) {
   myArr = myArr.slice(num - 1);
   return myArr;
}
keepTheLast([2, 4, 6, 8, 10], 3);

//  Math Help
function mathHelp(m, b) {
 return (-b / m)
}
mathHelp(6, 12);
//  Poor Kenny
function whatHappensToday() {
   let probability = Math.floor(Math.random() * 20) + 1;
   console.log(probability);
   switch (probability) {
       case 1:
       case 2:
           return "volcano";
           break;
       case 3:
       case 4:
       case 5:
           return "tsunami";
           break;
       case 6:
       case 7:
       case 8:
       case 9:
           return "earthquake";
           break;
       case 10:
       case 11:
       case 12:
       case 13:
       case 14:
           return "blizzard";
           break;
       default:
           return "meteor";
   }
}
whatHappensToday(); 

//  What Really Happened?
function whatReallyHappened() {
   let volcano = false;
   let tsunami = false;
   let earthquake = false;
   let blizzard = false;
   let meteor = false;
   let probability = function() {
       myNum = Math.floor(Math.random() * 20) + 1;
       return myNum;
   }
   if (probability() <= 2) {
       volcano = true;
   }
   if (probability() <= 3) {
       tsunami = true;
   }
   if (probability() <= 4) {
       earthquake = true;
   }
   if (probability() <= 5) {
       blizzard = true;
   }
   if (probability() <= 6) {
       meteor = true;
   }

   console.log(`volcano was ${volcano}, tsunami was ${tsunami}, earthquake was ${earthquake}, blizzard was ${blizzard} and meteor was ${meteor}`);
}
whatReallyHappened(); 

//  Soaring IQ
function soaringIQ() {
   let iq = 101;
   for (let i = 1; i <= 98; i++) {
       iq = iq + (i * .01);
   }
   return iq.toFixed(2);
}
soaringIQ();

//  Letter Grade
function letterGrade(grade) {
   switch (true) {
       case grade >= 90:
           return "A";
           break;
       case grade >= 80:
           return "B";
           break;
       case grade >= 70:
           return "C";
           break;
       case grade >= 60:
           return "D";
           break;
       default:
           return "FAIL;"
   }
}
letterGrade(77);

//  More Accurate Grades
function accurateGrades(score) {
 let grade = '';
 if(score > 100 || score < 0){
   return 'INVALID SCORE';
 } else if(score >= 90){
  grade = 'A';
 } else if(score >= 80){
   grade = 'B';
 } else if(score >= 70){
   grade = 'C';
 } else if(score >= 60){
   grade = 'D';
 } else {
   grade = 'F';
 }
 let tempSign = score.toString();
 sign =''
 if(tempSign[1] >= 8){
   sign = '+';
 } else if(tempSign[1] <= 2){
   sign = '-';
 }
 return grade + sign;
}

accurateGrades(98);
accurateGrades(71);

//  Short Answer Questions: Fundamentals
function quizGame() {
   let name = prompt("what is your name?");
   let questions = [
       `What color do you like to wear ${name}?`,
       `Hey ${name} what do you like to eat?`,
       `Where does ${name} like to travel?`
   ];
   let answers = [];
   let myAnswers = ["purple", "pizza", "Australia"];
   for (let i = 0; i < questions.length; i++) {
       answers[i] = prompt(questions[i]);
       if (answers[i].toLowerCase() === "q") {
           break;
       }
   }
   for (let i = 0; i < answers.length; i++) {
       alert(`${name}, you like ${answers[i]}, i like ${myAnswers[i]}`);
   }
}

quizGame();
