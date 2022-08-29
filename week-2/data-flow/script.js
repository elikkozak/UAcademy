const posts = [
  { name: "John", text: "Doe" },
  { name: "John2", text: "Doe2" },
  { name: "John3", text: "Doe3" },
];

const [postsElement] = document.getElementsByClassName("posts");
console.log(postsElement);
const render = function () {
  for (let indexPost = 0; indexPost < posts.length; indexPost++) {
    console.log(indexPost);
    let newChild = document.createElement("div");
    newChild.setAttribute("class", "post");
    newChild.innerHTML = `${posts[indexPost].name}: ${posts[indexPost].text}`;
    postsElement.appendChild(newChild);
  }
};
render();

const btnElement = document.getElementById("submit-btn");
const inputName = document.getElementById("input-name");
const inputText = document.getElementById("input-text");

btnElement.addEventListener("click", function () {
  $(".posts").empty();

  posts.push({ name: inputName.value, text: inputText.value });
  render();
});
