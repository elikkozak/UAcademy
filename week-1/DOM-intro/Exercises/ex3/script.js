const container = document.getElementById("container");

function get_random_color() {
  function c() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substr(-2); // pad with zero
  }
  return "#" + c() + c() + c();
}

const numOfBoxes = 1;

for (let i = 0; i < numOfBoxes; i++) {
  const boxElement = document.createElement("div");
  boxElement.setAttribute("class", "box");
  boxElement.style.height = "100px";
  boxElement.style.width = "100px";
  boxElement.style.border = "solid black 2px";
  boxElement.style.padding = "20px";
  boxElement.style.backgroundColor = get_random_color();
  container.appendChild(boxElement);
}
console.log(
  Array.from(document.getElementsByClassName("box")).map(
    (box) => box.style.backgroundColor
  )
);
for (let box of document.getElementsByClassName("box")) {
  box.onmouseenter = function () {
    this.style.backgroundColor = get_random_color();
    const colorArr = Array.from(document.getElementsByClassName("box")).map(
      (box) => box.style.backgroundColor
    );
    if (checkColorMatch(colorArr)) {
      if (!document.getElementById("same-color-message")) {
        const sameColorMessageElement = document.createElement("h1");
        sameColorMessageElement.innerHTML = "SAME COLOR NICE";
        sameColorMessageElement.style.color = "black";
        sameColorMessageElement.style.fontSize = "30px";
        sameColorMessageElement.setAttribute("id", "same-color-message");
        sameColorMessageElement.style.display = "absolute";
        sameColorMessageElement.style.marginLeft = "50%";
        document.body.appendChild(sameColorMessageElement);
      }
    } else if (document.getElementById("same-color-message")) {
      document.getElementById("same-color-message").remove();
    }
  };
}

const createSameColorMessage = function () {};

const checkColorMatch = function (colorArr) {
  for (let colorIndex in colorArr) {
    if (
      Number(colorIndex) !== colorArr.length - 1 &&
      colorArr[colorIndex] == colorArr[colorArr + 1]
    ) {
      return false;
    }
  }
  return true;
};
