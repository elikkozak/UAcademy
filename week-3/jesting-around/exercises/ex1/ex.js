class Exercises {
  //should return true if n is even, false otherwise
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }

  //should remove at least one element from the array `arr`
  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }

  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }
  validate(boolArr) {
    let trueArr = boolArr.filter((element) => element === true);
    let falseArr = boolArr.filter((element) => element === false);
    if (falseArr.length === 0 && trueArr.length === 0) {
      return { error: "Need at least one boolean" };
    }
    return trueArr.length > falseArr.length ? true : false;
  }

  add(x, y) {
    let stuff = [];
    stuff.push(x, y);
  }
}

module.exports = Exercises;
