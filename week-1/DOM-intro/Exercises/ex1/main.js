// 1
const ball = document.getElementById("ball");

const moveBall = function (index) {
  const distFromLeft = parseInt(ball.style.left) || 0;
  const distFromTop = parseInt(ball.style.top) || 0;
  if (index === 0) {
    ball.style.left = distFromLeft - 15 + "px";
  } else if (index === 1) {
    ball.style.left = distFromLeft + 15 + "px";
  } else if (index === 2) {
    ball.style.top = distFromTop + 15 + "px";
  } else {
    ball.style.top = distFromTop - 15 + "px";
  }
};

document.getElementById("left").setAttribute("onclick", "moveBall(0)");
document.getElementById("right").setAttribute("onclick", "moveBall(1)");
document.getElementById("down").setAttribute("onclick", "moveBall(2)");
document.getElementById("up").setAttribute("onclick", "moveBall(3)");

// Ball Game Extension
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 38) {
    // up arrow
    moveBall(3);
  } else if (e.keyCode === 40) {
    // down arrow
    moveBall(2);
  } else if (e.keyCode === 39) {
    // left arrow
    moveBall(1);
  } else if (e.keyCode === 37) {
    // right arrow
    moveBall(0);
  }
});
