const fetchRecipes = function (ingredient) {
  $.get(`/recipe/${ingredient}`, function (recipe) {
    console.log(recipe);
  });
};

const newFetchRecipes = async function (ingredient) {
  let data = await $.get(`/recipe/${ingredient}`);
  console.log(data);
};

const getFeed = async function () {
  let feed = await $.get("https://random-word-api.herokuapp.com/word");
  return feed;
};

const puppeteer = async function () {
  let feed = await getFeed();
  console.log(feed);
};

puppeteer();
