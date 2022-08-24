// // EX 1

// const person = {
//   hungry: true,

//   feed: function () {
//     if (this.hungry) {
//       hungry = false;
//       alert("Im no longer hungry!");
//     }
//   },
// };

// person.feed(); //should alert "I'm no longer hungry"

// // EX 2
// const pump = function (amount) {
//   this.liters += amount;
//   console.log("You put " + amount + " liters in " + this.name);
// };

// const garage = {
//   car1: {
//     name: "Audi",
//     liters: 3,
//     fillTank: pump,
//   },
//   car2: {
//     name: "Mercedes",
//     liters: 1,
//     fillTank: pump,
//   },
// };

// garage.car1.fillTank(2);
// console.log("Audi should have 5 liters: ", garage.car1.liters);

// garage.car2.fillTank(30);
// console.log("Mercedes should have 31 liters: ", garage.car2.liters);

// EX3

// const pumpFuel = function (plane) {
//   plane.fuel += 1;
// };

// const airplane = {
//   fly: function () {
//     if (this.fuel < 2) {
//       return "on the ground!";
//     } else {
//       return "flying!";
//     }
//   },
//   fuel: 0,
// };

// console.log("The plane should not be able to fly (yet): " + airplane.fly());

// pumpFuel(airplane);
// console.log("The plane should STILL not be able to fly: " + airplane.fly());
// console.log(airplane);
// pumpFuel(airplane);
// console.log("Take off! " + airplane.fly());

// // EX4

// const tipJar = {
//   coinCount: 20,
//   tip: function () {
//     this.coinCount += 1;
//   },

//   stealCoins: function (amountToSteal) {
//     this.coinCount -= amountToSteal;
//   },
// };

// tipJar.tip();
// console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log("Tip jar should have 8 coins: " + tipJar.coinCount);

// // EX5

// const revealSecret = function () {
//   return this.secret;
// };

// const shoutIt = function (person, func) {
//   person.revealItAll = func;
//   const result = person.revealItAll();
//   alert(person.name + " said: " + result);
// };

// const avi = {
//   name: "Avi",
//   secret: "Im scared of snakes!",
// };

// const narkis = {
//   name: "Narkis",
//   secret: "I dont have secrets because I'm zen like that.",
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);

// EX6 // EXERCISE 6.1

// beanPrice = 1;
// const coffeeShop = {
//   beans: 40,
//   money: 100,
//   buyBeans: function (numBeans) {
//     if (this.money >= numBeans * beanPrice) {
//       this.beans += numBeans;
//       this.money -= numBeans * beanPrice;
//     } else {
//       alert("Can't buy, not enough money.");
//     }
//   },

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12,
//   },

//   makeDrink: function (drinkType) {
//     if (!Object.keys(this.drinkRequirements).includes(drinkType)) {
//       alert("Sorry, we don’t make " + drinkType);
//     } else if (this.beans - this.drinkRequirements[drinkType] >= 0) {
//       this.beans -= this.drinkRequirements[drinkType];
//     } else {
//       alert("Sorry, we’re all out of beans!");
//     }
//   },
// };

// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

// EXERCISE 6.2

beanPrice = 1;
const coffeeShop = {
  beans: 40,
  money: 100,
  buyBeans: function (numBeans) {
    if (this.money >= numBeans * beanPrice) {
      this.beans += numBeans;
      this.money -= numBeans * beanPrice;
    } else {
      alert("Can't buy, not enough money.");
    }
  },

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 10 },
    americano: { beanRequirement: 5, price: 5 },
    doubleShot: { beanRequirement: 15, price: 15 },
    frenchPress: { beanRequirement: 12, price: 12 },
  },

  makeDrink: function (drinkType) {
    console.log(Object.keys(this.drinkRequirements));
    if (!Object.keys(this.drinkRequirements).includes(drinkType)) {
      alert("Sorry, we don’t make " + drinkType);
    } else if (
      this.beans - this.drinkRequirements[drinkType].beanRequirement >=
      0
    ) {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement;
      this.money += this.drinkRequirements[drinkType].price;
    } else {
      alert("Sorry, we’re all out of beans!");
    }
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
