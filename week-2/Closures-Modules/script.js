const setCounter = function (num) {
  let counter = 0;

  const count = function () {
    counter += num;
    console.log(counter);
  };

  return count;
};

const increment = setCounter(2);
increment();

// SPOT CHECK 1

// const Family = function () {
//   let members = [];
//   const birth = function (name) {
//     members.push(name);
//     console.log(members);
//   };
//   return birth;
// };
// const giveBirth = Family();
// giveBirth("lily");
// giveBirth("SHIMON");

// 5. Modules

const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };

  const subtract = function (x, y) {
    return x - y;
  };

  const multiply = function (x, y) {
    return x * y;
  };

  const divide = function (x, y) {
    return x / y;
  };

  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide,
  };
};

const m = mathOperations();
console.log(m.add(3, 4));

// Spot Check 2

console.log(m.add(13, 29));
console.log(m.mult(1.75, 24));

console.log(m.mult(7, m.div(36, 6)));

// 7. Closures & Modules

const coffeMachine = function () {
  const makeEspresso = function (x, y) {
    return "Here is your espresso";
  };

  const makeLatte = function (x, y) {
    return "Here is your latte";
  };

  const makeAmericano = function (x, y) {
    return "Here is your americano";
  };

  const makeMakiato = function (x, y) {
    return "Here is your makiato";
  };

  return {
    espresso: makeEspresso,
    latte: makeLatte,
    americano: makeAmericano,
    makiato: makeMakiato,
  };
};

const nespressoPro = coffeMachine();
console.log(nespressoPro.espresso());
console.log(nespressoPro.makiato());

const UsersModule = function () {
  const _users = ["Aaron", "Avi"];

  const addUser = function (user) {
    _users.push(user);
  };

  const listUsers = function () {
    for (let user of _users) {
      console.log(user);
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");
usersModule.listUsers();

// SPOT CHECK 3

usersModule.addUser("Tom");
usersModule.addUser("Kevin");
usersModule.listUsers();
console.log(usersModule.users);
