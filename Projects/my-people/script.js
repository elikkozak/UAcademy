const userInfo = [];
$.ajax({
  url: "https://randomuser.me/api/?results=10",
  dataType: "json",
  success: function (data) {
    console.log(data.results);
    userInfo.push(data.results);

    const source = $("#data-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ data: data["results"] });
    // append our new html to the page
    console.log(newHTML);
    $(".container-data").append(newHTML);
  },
});

const menuData = {
  menu: [
    { name: "Google", link: "http://google.com", socialNetwork: false },
    { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
    { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
    { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
  ],
};

console.log(menuData);
