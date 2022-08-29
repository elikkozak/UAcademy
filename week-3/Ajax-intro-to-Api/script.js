$.get(
  "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  function (result) {
    console.log(result);
  }
);

$.get(
  "https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind",
  function (result) {
    console.log(result.items[0].volumeInfo.description);
  }
);

//request the data with a GET request
$.get("https://jsonplaceholder.typicode.com/users", function (users) {
  //extract the geo data of the first user
  let lat = users[0].address.geo.lat;
  let long = users[0].address.geo.lng;

  //log the data
  console.log(`${lat}, ${long}`); //prints -37.3159, 81.1496
  console.log(users[users.length - 1].company.catchPhrase);
});

const useData = function (data) {
  console.log(data);
};

$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  success: useData,
});

const fetch = function () {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

$(".btn").click(fetch);
