class LuxuryFeeder {
  getFood(animalType) {
    if (animalType == "lion") {
      return "chia seeds";
    }
    if (animalType == "elephant") {
      return "peanuts";
    }

    return "scraps";
  }
}

class CheapFeeder {
  getFood(animalType) {
    return "scraps";
  }
}

class Animal {
  constructor(name, type, feeder) {
    this.name = name;
    this.type = type;
    this.feeder = feeder; //dependency injection!
  }

  _consume(food) {
    console.log("Just consumed " + food + ". Feels good.");
  }

  eat() {
    const food = this.feeder.getFood(this.type);
    this._consume(food);
  }
}

const cheapFeeder = new CheapFeeder();
const luxaryFeeder = new LuxuryFeeder();

let weArePoor = true;

if (weArePoor) {
  const bumdo = new Animal("Bumdo", "elephant", cheapFeeder);
  bumdo.eat();
}

weArePoor = false;
if (!weArePoor) {
  const bumdo = new Animal("Bumdo", "elephant", luxaryFeeder);
  bumdo.eat();
}
