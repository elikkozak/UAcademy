// const explode = (lightFunc, soundFunc, sound) => {
//   lightFunc()
//   soundFunc(sound)
// }

// const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

// const makeSound = sound => alert(sound)

// explode(shineLight, makeSound, "BOOM")

let x = {
  count: 12,
  go: () => {
    setTimeout(function () {
      console.log(this.count);
    }, 1500);
  },
};
x.go();

const suspenseBuilder = {
  name: "El Mysterio",
  displayName: function () {
    console.log("You are going to see the name in 3 seconds...");

    setTimeout(() => {
      //this is the change
      console.log("The name is: " + this.name);
    }, 3000);
  },
};
suspenseBuilder.displayName();

setInterval(() => {
  console.log("hi");
}, 2000);
