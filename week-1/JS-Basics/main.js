// EX 9
let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;

if (boughtTesla && isUSCitizen) {
  if (currentYear - yearOfTeslaPurchase >= 4) {
    console.log("Would you like an upgrade?");
  } else {
    console.log("Are you satisfied?");
  }
} else if (boughtTesla) {
  console.log("Would you like to move to the US?");
} else {
  console.log("Would you like to buy a Tesla?");
}

if (boughtTesla) {
  if (isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase >= 4) {
      console.log("Would you like an upgrade?");
    } else {
      console.log("Are you satisfied?");
    }
  } else {
    console.log("Would you like to move to the US?");
  }
} else {
  console.log("Would you like to buy a Tesla?");
}

// EX 13.1

let p1 = {
  name: "ELIK",
  age: 27,
  city: "B7",
};

let p2 = {
  name: "SHIMON",
  age: 100,
  city: "HOLON",
};

if (p1.age == p2.age && p1.city === p2.city) {
  console.log("Jill wanted to date Robert");
} else if (p1.age == p2.age) {
  console.log("Jill wanted to date Robert, but couldn't");
}

let library = {
  books: [
    { name: "HP1", author: "JKR" },
    { name: "HP2", author: "JKR" },
  ],
};
console.log(library);

let companies = ["Tesla", "Amazon", "Google", "Microsoft"];

for (let companyIndex in companies) {
  console.log(companies[companyIndex]);
}

for (let company of companies) {
  console.log(company);
}

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let peopleIndex in names) {
  people.push({ name: names[peopleIndex], age: ages[peopleIndex] });
}
for (let p of people) {
  console.log(`${p.name} is ${p.age} years old.`);
}

const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];

let indexPost;
let id = 2;
for (indexPost in posts) {
  if (posts[indexPost].id === id) {
    break;
  }
}
posts.splice(indexPost, 1);
console.log(posts);

const posts1 = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

let id1 = 2;
let commentId = 3;
let indexComment;
for (indexPost in posts1) {
  for (indexComment in posts1[indexPost].comments) {
    if (indexPost == id1 && commentId == indexComment) {
      break;
    }
  }
}
console.log(indexPost);

posts1[indexPost].comments.splice(indexComment, 1);
console.log(posts1);

const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

for (let char of Object.keys(dictionary)) {
  console.log(`Words that begin with ${char}`);

  for (let word of dictionary[char]) {
    console.log(word);
  }
}

let car = { "?wheels": 4 };
car["?wheels"] = "blue";
console.log(car);

//   const run = true // global

// if (run) {
//     let distance = 8 //local
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles") //error

// if (13 == "space") {
//     let cowSound = "moo" //local
// }
// else {
//     console.log("Cow says " + cowSound) //error
// }

// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)

// const pot = "red pot with earth in it"

// const getSeed = function () {
//     var seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true //local scope
//         }
//     }
//     return found //error
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

// const isEnough = false //global

// const makeEnough = function () { //global
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true //const error
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }

// greet(); //works without a problem
// greetExpression(); //throws an error

// function greet() {
//   console.log("Hello there, from the wild, wild West");
// }

// const greetExpression = function () {
//   console.log("Uh oh");
// };
// let = asd;

const person = {
  name: "Julius",
  speak: function (food) {
    console.log("I like " + food);
  },
};

console.log(person.name); //you know what this will do

person.speak("cheese toast"); //and this? Try it out!

const isEven = function (number) {
  return number % 2 === 0;
};

const printOdds = function (numArr) {
  for (let num of numArr) {
    if (!isEven(num)) {
      console.log(num);
    }
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
printOdds(arr);

function checkExists(arr, num) {
  for (let number of arr) {
    if (number === num) return true;
  }
  return false;
}

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));

let calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

function increaseByNameLength(money, name) {
  return money * name.length;
}

function makeRegal(name) {
  return "His Royal Highness, " + name;
}

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

//All proper nouns* should be capitalized
function capitalize(str) {
  retStr = str[0].toUpperCase() + str.slice(1);
  return retStr;
}
// The city and country should come together with a comma in between
function cityAndCountry(city, country) {
  return city + ", " + country;
}

// If the age is below 21, it should say “Underage” instead
// If the age is above 55 it should say “55+” instead

const checkAge = function (age) {
  if (age < 21) {
    return "Underage ";
  } else if (age > 55) {
    return "55+ ";
  } else {
    return "";
  }
};

// The catchphrase should be wrapped in quotes with its first letter capitalized

const catchphrase = function (str) {
  str = capitalize(str);
  return '"' + str + '"';
};

const getSummary = function (person) {
  let summary = ""; //modify the summary string with the person parameterreturn summary
  summary += capitalize(person.name);
  summary += " is a " + checkAge(person.name);
  summary += capitalize(person.profession);
  summary +=
    " from " +
    cityAndCountry(capitalize(person.city), capitalize(person.country)) +
    ". ";
  summary +=
    capitalize(person.name) +
    " Loves to say " +
    catchphrase(person.catchphrase);
  console.log(summary);
};
//getSummary(people_info[1]);

const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

//1) convert story to lower case and remove special chars

function cleanStory(story, specialChars) {
  story = story.toLowerCase();

  for (let indexChar = 0; indexChar < story.length; indexChar++) {
    // REMOVE SPECIAL CHARS
    if (specialChars.includes(story[indexChar])) {
      story = story.slice(0, indexChar) + story.slice(indexChar + 1);
      indexChar--;
    }
  }
  return story;
}

function insertToObj(str, obj) {
  let arr = str.split(" ");
  for (let word of arr) {
    if (wordCounts[word]) {
      obj[word] += 1;
    } else {
      obj[word] = 1;
    }
  }
}

function mainFunc(obj, story, specialChars) {
  let str = cleanStory(story, specialChars);
  insertToObj(str, obj);
  console.log(obj);
}
mainFunc(wordCounts, story, specialChars);
