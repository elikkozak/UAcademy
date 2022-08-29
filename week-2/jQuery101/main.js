// const header = $("h1");
// console.log(header);

// console.log(jQuery);
// console.log($);

// const myQuery = function (selector) {
//   if (selector[0] == "#") {
//     const elementId = selector.split("#")[1]; //will return everything after the # in selector
//     return document.getElementById(elementId);
//   }
// };

// console.log(myQuery("#my-h2"));

// // SPOT CHECK 2

// $("h2").css("color", "red");

// header.css("color", "blue");
// $(".red-div").css("color", "red");
// $("li:first-child").css("color", "green");
// $("li:last-child").css("color", "pink");

// $("#brown-div").css("color", "brown");

// // Spot Check 3
// $("#b1").addClass("box");
// $("#b2").addClass("box");

// // Spot Check 4

// $("#my-input").val("Terabyte");

// Spot Check 5
// console.log($(".my-data").data());

// console.log(
//   `The item with barcode ${$(".my-data").data("barcode")} will expire on ${$(
//     ".my-data"
//   ).data("expirationdate")}`
// );

// Spot Check 6

// $("div").hover(function () {
//   $("div").css("color", "red");
// });

// Spot check 7

// $("button").click(() => alert($("#my-input").val()));

// Spot check 8
// $(".box").hover(function () {
//   $(this).css("background-color", "blue");
// });

// const aDynamicDiv = "<div class='mine'>Oh yes</div>";
// const elem = $(aDynamicDiv);
// console.log(elem);

// $("body").append(elem);

// $(".fruits").append('<p class="red">Raspberry</p>');
// $(".fruits").append('<p class="brown">Kiwi</p>');

// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")

// console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

// Spot Check 9

// $(".feedme").on("click", function () {
// 	let divCopy = `<div class=feedme> ${$(this).text()} </div>`
//   $("body").append(divCopy);
// });

// Spot Check 10
// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" },
// ];
// for (let name of names) {
//   $("body").append(`<div>${name.first}-${name.last}</div>`);
// }

//Sport Check 11
// $(".remove-me").hover(() => $(".remove-me").remove());

// //  Spot Check 12

// $("button").click(function () {
//   $("#blogs").append("<div class='blog'>WOW</div>");
// });

// $("#blogs").click(() => $(".blog").text(`blargh`));

// const addDiv = function () {
//   $("body").append("<div class=box></div>");
// };

// $("button").on("click", function () {
//   addDiv();
// });

// $("body").on("click", ".box", function () {
//   alert("hi");
// });

// Spot Check 13

$("button").click(function () {
  $("#blogs").append("<div class='blog'>WOW</div>");
});
$("body").on("click", ".blog", function () {
  $(this).text(`blargh`);
});
