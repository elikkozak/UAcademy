// //EX1
// $.get("https://random-word-api.herokuapp.com/word")
//   .then(function (word) {
//     console.log(word[0]);
//     return $.get(
//       `https://www.googleapis.com/books/v1/volumes?q=intitle:${word[0]}`
//     );
//   })
//   .then(function (book) {
//     console.log(book);
//   });

// //Spot Check 2
// $.get("/sentiment/Ploy").then(function (response) {
//   console.log(response);
// });

//api.giphy.com/v1/gifs/search?api_key=mEbsCJqS44bGUf6J5K5G0DpkhQeSc24D&q=

$.get("https://random-word-api.herokuapp.com/word").then(function (word) {
  let bookPromise = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word[0]}`
  );
  let gifPromise = $.get(
    `https://api.giphy.com/v1/gifs/search?api_key=mEbsCJqS44bGUf6J5K5G0DpkhQeSc24D&q=${word[0]}`
  );
  Promise.all([bookPromise, gifPromise]).then(function (results) {
    console.log(word[0]);
    console.log(results[0]?.items[0].volumeInfo.title);
    $("body").append(`<h1>${word[0]}</h1>`);
    $("body").append(`<h1>${results[0]?.items[0].volumeInfo.title}</h1>`);
    const firstGif = results[1]?.data[0];
    const gifUrl = firstGif?.embed_url;
    $("#gif-html").attr("src", gifUrl);
  });
});
