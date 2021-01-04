
// Applied Software Pre - Interview Question 1
// Completed with Javascript
// candidate: Logan Blackstad
// date: OCt 26 2020 


/*
Question 2: Write an OO class system to accommodate vehicles and parking options
*/

// Define the Vehicle class
class Vehicle {

  constructor(make, model, numWheels, len, weight, maxCapacity) {
    if (this.constructor == Vehicle) {
      throw new Error(" Vehicle is an abstract class");
    }
    this.make = make;
    this.model = model;
    this.numWheels = numWheels;
    this.len = len;
    this.weight = weight;
    this.maxCapacity = maxCapacity;
  }

}

// Define the Car class through inheritance of the Vehicle parent class
class Car extends Vehicle {
  vehicleType = 'car';
  constructor(vehicleType, make, model, numWheels, len, weight, maxCapacity, color) {
    super(make, model, numWheels, len, weight, maxCapacity);
    this.make = make;
    this.color = color;
  }
}

// Define the Bus class through inheritance of the Vehicle parent class
class Bus extends Vehicle {
  vehicleType = 'bus';

  constructor(vehicleType, make, model, numWheels, len, weight, maxCapacity, color, usage) {
    super(make, model, numWheels, len, weight, maxCapacity);
    this.color = color;
    this.usage = usage;
  }
}

// Define the Motorcycle class through inheritance of the Vehicle parent class
class Motorcycle extends Vehicle {
  numWheels = 2;
  vehicleType = 'motorcycle';
  constructor(vehicleType, make, model, numWheels, len, weight, maxCapacity, color) {
    super(vehicleType, make, model, numWheels, len, weight, maxCapacity);
    this.color = 'red';
  }
}


// Creating some example objects

let oldCar = new Car('car', 'toyota', 'corolla', 4, 97, 1200, 5, 'white')
console.log(oldCar)

let schoolBus = new Bus('bus', 'International', 'S series', 6, 324, 32500, 54, 'yellow', 'passenger')
console.log(schoolBus)

let sportBike = new Motorcycle('motorcycle', 'Ducati', 'Desmosedici', 2, 62, 800, 1, 'red')
console.log(sportBike)

let pickUp = new Car('car', 'Ford', 'F150', 4, 112, 1800, 5, 'blue')
console.log(pickUp)


// Define the Parking superclass

class Parking {
  parkedVehicles = { 'compact': [], 'regular': [] };

  constructor(regularSpaces, compactSpaces) {
    this.regularSpaces = regularSpaces;
    this.compactSpaces = compactSpaces;
  }

  // parent class method
  parkVehicle() {
    throw new Error("parkVehicle is not implemented");
  };

}

// Define the ParkingLot class through inheritance of the Parking parent class

class ParkingLot extends Parking {

  compactSpaces = 0;  // parking lots don't need compact spaces
  parkingType = 'parking lot';

  constructor(regularSpaces, compactSpaces) {
    super(regularSpaces, compactSpaces)
  }

  parkVehicle(vehicleToBeParked) {
    if (this.parkedVehicles.regular.length < this.regularSpaces) {
      this.parkedVehicles.regular.push(vehicleToBeParked);
    }
  }
}

// Define the ParkingGarage class through inheritance of the Parking parent class

class ParkingGarage extends Parking {

  parkingType = 'parking garage';

  constructor(regularSpaces, compactSpaces) {
    super(regularSpaces, compactSpaces)
  }

  parkVehicle(vehicleToBeParked) {
    if (vehicleToBeParked instanceof Bus) {
      throw new Error('A bus cannot enter a parking garage');  // buses can't park in a garage, throw error
    } else {


      // if there are no more spaces available, throw error
      if (this.parkedVehicles.compact.length + 1 > this.compactSpaces && this.parkedVehicles.regular.length + 1 > this.regularSpaces) {
        throw new Error('\nNo more compact or regular sized parking spots remaining\nPlease park somewhere else\n');

        // if it's a large vehicle and there are not regular spaces available, assign vehicle to 'regular' array in the parkedVehicles object
      } else if (vehicleToBeParked.weight > 1500 && this.parkedVehicles.regular.length + 1 < this.regularSpaces) {
        this.parkedVehicles.regular.push(vehicleToBeParked);

        // if it's a large vehicle and there are regular spaces available, assign vehicle to 'regular' array in the parkedVehicles object
      } else if (vehicleToBeParked.weight > 1500 && this.parkedVehicles.regular.length + 1 >= this.regularSpaces) {
        throw new Error('\nYour car is too heavy (>1500 lbs) and there are no more regular sized parking spots remaining\nPlease park somewhere else\n');

        // assign vehicles less than 1500 to compact spaces first
      } else if (this.parkedVehicles.compact.length + 1 < this.compactSpaces) {
        this.parkedVehicles.compact.push(vehicleToBeParked);

        // assign vehicles less than 1500 lbs to regular spaces if no more compact spaces are available
      } else {
        this.parkedVehicles.regular.push(vehicleToBeParked);
      }
    }

  }
}


// Test Cases: 

// create a downtown lot and garage
let downtownLot = new ParkingLot(10)
let downtownGarage = new ParkingGarage(5, 5)

downtownLot.parkVehicle(oldCar)
console.log(downtownLot.parkedVehicles)

// add a small car to the downtownGarage
downtownGarage.parkVehicle(oldCar)

// uncomment to try to park a schoolBus in the garage 
// downtownGarage.parkVehicle(schoolBus)


// add a large car to the downtownGarage
downtownGarage.parkVehicle(pickUp)
console.log(downtownGarage.parkedVehicles)