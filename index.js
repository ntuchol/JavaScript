var Madison = {firstName:"Madison", lastName:"Kanna",age:25, eyeColor:"blue"};

var person = {};
person['firstname'] = 'Madison';
person['lastname'] ='Kanna'; 
person = {'firstname':'Madision', 'lastname':'Kanna'}

var hobbies = ["Coding", "Writing", "Hiking"];
var cars = ["Saab", "Volvo", "BMW"];
cars;
cars.push("Mustang");
var sisterCalls;
for(sisterCalls = 0; sisterCalls < 5; sisterCalls++) {
  console.log("Answer your phone!");
}
console.log(hobbies[0]);
cars.push("Mustang");

var add = function(a,b) {
  var added = a+b;
  return added; 
}

add(3,2);

var addTwoNumbers = function(a,b) {
  return a + b; 
}

addTwoNumbers(3,1);


