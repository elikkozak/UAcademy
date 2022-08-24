const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};
const btn = document.getElementById("enter-btn");
const fname = document.getElementById("fname");
btn.onclick = function () {
  reservationsName = fname.value;

  if (reservations[reservationsName]) {
    if (!reservations[reservationsName].claimed) {
      reservations[reservationsName].claimed = true;
      alert(`Welcome ${reservationsName}, please enjoy your meal.`);
    } else {
      alert(`Sorry, but it seemes your reservation was already claimed`);
    }
  } else {
    alert(`Sorry, but I don't see any reservation under this name`);
  }
};
