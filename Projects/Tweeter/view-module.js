const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    posts.forEach((post) => {
      //Go through posts array, for each post create post Element and add each post Element to the HTML
      addPostToPostsElement(post);
    });
  };
  const addPostToPostsElement = function (post) {
    const postElement = createPostElement(post);
    $("#posts").append(postElement);
  };

  const createPostElement = function (post) {
    let postText = post["text"];
    let postId = post["id"];
    let postContainer = $(
      `<div class = post-container><div class = my-post data-id = ${postId}>${postText} <button id = delete-post class = delete>&times</button><br><br>
      </div> <input placeholder="add comment"><button class = add-comment-btn> add comment </button></div>`
    );
    let postElement = postContainer.find(".my-post");
    post["comments"].forEach((comment) => {
      let commentId = comment["id"];
      let commentText = comment["text"];
      postElement.append(
        $(
          `<h5 class = comments data-id = ${commentId}>  <button class = delete-comment>&times</button> ${commentText} </h5>`
        )
      );
    });
    return postContainer;
  };

  return { renderPosts: renderPosts };
};
