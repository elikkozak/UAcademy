// localStorage.setItem("age", 50);
// console.log(localStorage.age);

// // SPOT CHECK 1

// let userStorage = {
//   darkMode: true,
//   showSideNav: false,
//   defaultResultCount: 9,
//   latestMarks: {
//     sectionA: 92,
//     sectionB: 11,
//   },
//   cart: [
//     { id: 3112, count: 2 },
//     { id: 812, count: 16 },
//   ],
// };

// localStorage.userStorage = JSON.stringify(userStorage);
// console.log(JSON.parse(localStorage.userStorage).cart[1].count);

//Ex

const wisdom = [];
let counter = 1;
let data = JSON.parse(localStorage.wisdom || "[]");
if (data.length > 0) {
  data.forEach((element) => {
    const wisdom_words = $(
      `<p id = ${element.id} >${element.text} <button id = delete-wisdom class = delete>&times</button></p></p>`
    );
    $("#user-wisdom").append(wisdom_words);
  });
}
$("#btn").click(function () {
  console.log($("#input").val());
  if ($("#input").val()) {
    const wisdom_words = $(
      `<p id = ${counter}>${$(
        "#input"
      ).val()} <button id = delete-wisdom class = delete>&times</button></p>`
    );
    $("#user-wisdom").append(wisdom_words);
    wisdom.push({ id: counter, text: $("#input").val() });
    counter += 1;
    $("#input").val("");
    if (wisdom.length % 2 === 0) {
      localStorage.wisdom = JSON.stringify(wisdom);
    }
  }
});

$("#clear-wisdom-btn").click(function () {
  localStorage.clear();
});

$("#user-wisdom").on("click", "#delete-wisdom", function () {
  let id = $(this).parent().attr("id");
  for (let i = 0; i < wisdom.length; i++) {
    if (wisdom[i].id == id) {
      wisdom.splice(i, 1);
    }
  }
  localStorage.setItem("wisdom", JSON.stringify(wisdom));
  $(this).parent().remove();
});
