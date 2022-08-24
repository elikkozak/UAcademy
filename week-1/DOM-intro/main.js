console.log(document);
document.getElementById("playing-field").style.backgroundColor = "blue";

const playingField = document.getElementById("playing-field");

console.log(playingField);

// Spot Check 1

const down = document.getElementById("down");
console.log(down);

console.log(down.innerHTML);

down.innerHTML = "Down";
console.log(down.innerHTML);

console.log(playingField.innerHTML);

// Spot Check 2

document.getElementById("ball").style.backgroundColor = "yellow";

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

header.setAttribute("class", "my-header");

//Spot Check 4

const secondHeader = document.createElement("h2");
secondHeader.innerHTML = "Created by: Elik Kozak";
secondHeader.setAttribute("class", "my-second-header");
document.body.appendChild(secondHeader);

// 1
const ball = document.getElementById("ball");

const moveBall = function (index) {
  let dist;
  if (index === 0) {
    dist = parseInt(ball.style.left) || 0;
    ball.style.left = dist - 15 + "px";
  } else if (index === 1) {
    dist = parseInt(ball.style.left) || 0;
    ball.style.left = dist + 15 + "px";
  } else if (index === 2) {
    dist = parseInt(ball.style.top) || 0;
    console.log(dist);
    ball.style.top = dist + 15 + "px";
  } else {
    dist = parseInt(ball.style.top) || 0;
    ball.style.top = dist - 15 + "px";
    console.log(dist);
  }
};

// document.getElementById("left").setAttribute("onclick", "moveBall(0)");
// document.getElementById("right").setAttribute("onclick", "moveBall(1)");
// document.getElementById("down").setAttribute("onclick", "moveBall(2)");
// document.getElementById("up").setAttribute("onclick", "moveBall(3)");

// Ball Game Extension
document.addEventListener("keydown", (e) => {
  if (e.keyCode == "38") {
    // up arrow
    moveBall(3);
  } else if (e.keyCode == "40") {
    // down arrow
    moveBall(2);
  } else if (e.keyCode == "39") {
    // left arrow
    moveBall(1);
  } else if (e.keyCode == "37") {
    // right arrow
    moveBall(0);
  }
});
