var validator = require("validator");

const { faker } = require("@faker-js/faker");

// EX1
//Ex. 1
console.log(validator.isEmail("shoobert@dylan"));

//Ex. 2
console.log(validator.isMobilePhone("786-329-9958"));

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
//Ultimately, it should print "im so excited"

console.log(validator.blacklist(text, blacklist));

// EX 2

const makeHuman = function (number) {
  const humansArr = [];
  for (let i = 0; i < number; i++) {
    humansArr.push({
      name: faker.name.fullName(),
      img: faker.image.abstract(),
      company: faker.company.name(),
    });
  }
  return humansArr;
};
console.log(makeHuman(2));
