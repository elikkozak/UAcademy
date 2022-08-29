// //ex1

// const fetch = function (isbn) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//     success: function (data) {
//       console.log(data);
//     },
//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// fetch(9782806269171);
// fetch(1440633908);
// fetch(9781945048470);
// fetch(9780307417138);

//ex2

// const fetch = function (queryType, queryValue) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//     success: function (data) {
//       console.log(data);
//     },
//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// fetch("isbn", 9789814561778);

// fetch("title", "How to Win Friends and Influence People");

//ex3

// const fetch = function (queryType, queryValue) {
//   $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//     success: function (data) {
//       console.log(data);
//       data.items.forEach((element, index) => {
//         console.log(
//           `Book number ${index + 1}, Title: ${
//             element.volumeInfo.title
//           }, Author: ${
//             element.volumeInfo?.authors?.["0"]
//           } and ISBN: ${element.volumeInfo.industryIdentifiers
//             ?.map((element) => element.identifier)
//             .join(" ")}`
//         );
//       });
//     },
//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// fetch("isbn", 9789814561778);

// fetch("title", "How to Win Friends and Influence People");

// ex4

// const fetch = function () {
//   $.ajax({
//     method: "GET",
//     url: `https://api.giphy.com/v1/gifs/search?q=cat&api_key=mEbsCJqS44bGUf6J5K5G0DpkhQeSc24D`,
//     success: function (data) {
//       const firstGif = data.data[0];
//       const gifUrl = firstGif.embed_url;
//       $("#gif-html").attr("src", gifUrl);
//       console.log(firstGif);
//     },

//     error: function (xhr, text, error) {
//       console.log(text);
//     },
//   });
// };

// fetch();

//EX5

// const fetch = function () {
//   const input = $("#gif-value");
//   $.ajax({
//     method: "GET",
//     url: `https://api.giphy.com/v1/gifs/search?q=${input.val()}&api_key=mEbsCJqS44bGUf6J5K5G0DpkhQeSc24D`,
//     success: function (data) {
//       const firstGif = data.data[0];
//       const gifUrl = firstGif.embed_url;
//       $("#gif-html").attr("src", gifUrl);
//       input.val("");
//     },

//     error: function (xhr, text, error) {
//       console.log(text);
//       input.val("");
//     },
//   });
// };

// $("#gif-btn").click(fetch);

let data = $.get("/index.html", function (result) {
  return result;
});
console.log(data);
