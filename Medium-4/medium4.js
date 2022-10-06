// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063

const car = {
  make: "BMW",
  model: "Z4",
  year: 2009,
  mileage: 104000,
  color: "black",
  driveToWork: function () {
    console.log(`old mileage: ${this.mileage}`);
    this.mileage += 33;
    console.log(`new mileage: ${this.mileage}`);
  },
  driveAroundTheWorld: function () {
    console.log(`old mileage: ${this.mileage}`);
    this.mileage += 24000;
    console.log(`new mileage: ${this.mileage}`);
  },
  runErrands: function () {
    console.log(`old mileage: ${this.mileage}`);
    this.mileage += 30;
    console.log(`new mileage: ${this.mileage}`);
  },
};

car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();
