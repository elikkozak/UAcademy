// EX 1

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // ?  8
// console.log(yearNeptuneDiscovered); // ? 1846

// EX 2

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };

// let { numPlanets, ...discoveryYears } = planetFacts;

// console.log(discoveryYears); // ? {yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659}

// EX3

// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }

//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ? Your name is Alejandro and you like purple
//   getUserData({firstName: "Melissa"}) // ? Your name is Melissa and you like green
//   getUserData({}) // ? Your name is undefined and you like green

// EX4

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ? Maya
// console.log(second); // ? Marisa
// console.log(third); // ? Chi

// EX5

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]

//   console.log(raindrops); // ?   "Raindrops on roses"
//   console.log(whiskers); // ?      "whiskers on kittens",
//   console.log(aFewOfMyFavoriteThings); // ?  [ "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

let origMeatArr = [...meatArr, vegetableArr[0]];
let [_, ...origVegetableArr] = vegetableArr;

console.log(origMeatArr);
console.log(origVegetableArr);

var firstPiece = { id: 101, name: "Ofri" };

var seoncdPiece = { country: "Israel" };

var passport = { ...firstPiece, ...seoncdPiece };
console.log(passport);

let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];
employeesArr.map((employee) => {
  if (
    employee.id !== (employee.id ?? employee.name) ||
    employee.age !== (employee.age ?? employee.name)
  )
    console.log(employee.name);
});
