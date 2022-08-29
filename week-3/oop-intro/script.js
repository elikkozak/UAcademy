// Spot Check 1

// class Animal {
//   constructor(name, numLegs) {
//     this.name = name;
//     this.numLegs = numLegs;
//   }
// }

// const dog = new Animal("panda", 4);
// console.log(dog.name);

// Spot Check 2

class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

const human = new Human("Dekel", 23, false);
console.log(
  `Hi I'm ${human.name}, ${human.age} years old and I am ${
    human.isFriendly ? "" : "not"
  } friendly`
);

//  Spot Check 3

class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.children = [];
  }
  giveBirth(name) {
    this.children.push(name);
  }
}
const cat = new Animal("Puss", 4);

cat.giveBirth("Dolly");
console.log(cat.children); // should print an array with 1 item: ["Dolly"]

// Spot Check 4

// class Vehicle {
//   constructor(x, y, speed) {
//     this.x = x;
//     this.y = y;
//     this.speed = speed;
//   }
//   getInfo() {
//     console.log(`Cars are great`);
//   }
// }

// class Vehicle {
//   constructor(x, y, speed) {
//     this.x = x;
//     this.y = y;
//     this.speed = speed;
//     Vehicle.carsSold++;
//   }

//   static getInfo() {
//     console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//   }
// }
// Vehicle.carsSold = 0;

// const car1 = new Vehicle(0, 0, 100);
// const car3 = new Vehicle(0, 0, 100);
// Vehicle.getInfo();

// Spot Check 5

// class Vehicle {
//   constructor(x, y, speed) {
//     this.x = x;
//     this.y = y;
//     this.speed = speed;
//     Vehicle.carsSold++;
//   }

//   static getInfo() {
//     console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//   }

//   static calculateMoney() {
//     console.log(`Made ${Vehicle.carsSold * 30000} dollars`);
//   }
// }
// Vehicle.carsSold = 0;

// const car1 = new Vehicle(0, 0, 100);
// const car3 = new Vehicle(0, 0, 100);
// Vehicle.getInfo();
// Vehicle.calculateMoney()

//SPOT check 6

class Vehicle {
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this._fuel = fuel;
    Vehicle.carsSold++;
  }

  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles.");
  }

  static calculateMoney() {
    console.log(`Made ${Vehicle.carsSold * 30000} dollars`);
  }

  set fuel(amount) {
    if (fuel < 0 || fuel > 150) {
      console.log("fuel cannot be less than 0 or larger than 150");
    } else this._fuel = amount;
  }

  get fuel() {
    return this._fuel;
  }
}
Vehicle.carsSold = 0;

const car1 = new Vehicle(0, 0, 100);
