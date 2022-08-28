(function () {
  const inputPost = $("#input");

  const post = function () {
    const inputPostText = inputPost.val();
    if (inputPostText !== "") {
      tweeterModule.addPost(inputPostText);
      inputPost.val("");
      renderer.renderPosts(tweeterModule.postsGetter());
    }
  };

  $("#post").on("click", post);

  $("body").on("click", ".delete-comment", function () {
    tweeterModule.removeComment(
      $(this).closest(".my-post").data().id,
      $(this).closest(".comments").data().id
    );
    renderer.renderPosts(tweeterModule.postsGetter());
  });

  $("body").on("click", ".delete", function () {
    tweeterModule.removePost($(this).closest(".my-post").data().id);
    renderer.renderPosts(tweeterModule.postsGetter());
  });

  $("body").on("click", ".add-comment-btn", function () {
    const postElement = $(this).siblings(".my-post");
    const commentInput = $(this).siblings("input").val();
    if (commentInput !== "") {
      tweeterModule.addComment(postElement.data().id, commentInput);
      renderer.renderPosts(tweeterModule.postsGetter());
    } else {
      return;
    }
  });

  const tweeterModule = UsersModule();
  const renderer = Renderer();
  renderer.renderPosts(tweeterModule.postsGetter());
})();
