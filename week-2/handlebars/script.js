// const items = [
//   { item: "bread", price: "15" },
//   { item: "banana", price: "10" },
// ];

// const source = $("#store-template").html();
// console.log(source);
// const template = Handlebars.compile(source);

// for (const item of items) {
//   const newHTML = template({ item: item.item, price: item.price });
//   $(".items").append(newHTML);
// }

const menuData = {
  menu: [
    { name: "Google", link: "http://google.com", socialNetwork: false },
    { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
    { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
    { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
  ],
};

const source = $("#menu-template").html();
const template = Handlebars.compile(source);
const newHTML = template(menuData);
// append our new html to the page
$(".menu").append(newHTML);

var classData = {
  classmates: [
    { name: "That on gal", description: "Always has the ansswer" },
    { name: "The weird dude", description: "Quick with a smile" },
    { name: "Taylor", description: "Just Taylor" },
  ],
};

const source1 = $("#student-description-template").html();
const template1 = Handlebars.compile(source1);
const newHTML1 = template1(classData);
$(".classmates").append(newHTML1);
