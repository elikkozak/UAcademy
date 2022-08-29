// let users = [];

// const getData = function () {
//   setTimeout(function () {
//     users = [{ name: "Rick" }, { name: "Morty" }];
//     console.log("Got users");
//   }, 3000);
// };

// const displayData = function () {
//   console.log("Going to display users");
//   for (let user of users) {
//     console.log(user.name);
//   }
// };

// getData();
// displayData();

// SPOT CHECK 1

// const first = function () {
//   setTimeout(function () {
//     console.log("should be first");
//   }, 3000);
// };

// const second = function () {
//   console.log("should be second");
// };

// first();
// second();

const first = function (callback) {
  //receive the function as a parameter
  setTimeout(function () {
    console.log("should be first");
    callback(); //this is the `second` function being invoked
  }, 3000);
};

const second = function () {
  console.log("should be second");
};

first(second); //pass the second function to the first, as an argument

// SPOT CHECK 2

let users = [];

const getData = function (callback) {
  setTimeout(function () {
    users = [{ name: "Rick" }, { name: "Morty" }];
    console.log("Got users");
    callback();
  }, 3000);
};

const displayData = function () {
  console.log("Going to display: " + users);
  for (let user of users) {
    console.log(user.name);
  }
};

getData(displayData);

// SPOT CHECK 3

// const timer = function () {
//   console.log(new Date());
// };

// // setInterval(timer, 1000);

// setInterval(function () {
//   console.log(new Date());
// }, 1000);

//SPOT CHECK 4

// const square = (num) => console.log(num * num);

// SPOT CHECK 5

// const getFormalTitle = (title, name) => `${title} ${name}`;
// formalTitle = getFormalTitle("Madamme", "Lellouche");
// console.log(formalTitle); //returns "Maddame Lellouche"

const suspenseBuilder = {
  name: "El Mysterio",
  displayName: () => {console.log("The name is: " + this.name)
console.log(this)},
};

suspenseBuilder.displayName();
