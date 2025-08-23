const car = {
  make: "Toyota",
  model: "Camry",
  year: 2023,
  engine: {
    type: "V6",
    horsepower: 301,
    fuelType: "gasoline",
    start: function() {
      console.log("Engine starting...");
      // Add engine start logic here
    },
    stop: function() {
      console.log("Engine stopping...");
      // Add engine stop logic here
    }
  },
  steeringSystem: {
    type: "rack and pinion",
    powerSteering: true,
    turnLeft: function() {
      console.log("Steering left...");
      // Add left turn logic here
    },
    turnRight: function() {
      console.log("Steering right...");
      // Add right turn logic here
    }
  },
  drive: function() {
    this.engine.start();
    console.log("Car driving...");
    // Add driving logic here
  }
};

// Accessing properties and methods
console.log(car.make); // Output: Toyota
console.log(car.engine.horsepower); // Output: 301
car.engine.start(); // Output: Engine starting...
car.steeringSystem.turnLeft(); // Output: Steering left...
car.drive(); // Output: Engine starting... Car driving...