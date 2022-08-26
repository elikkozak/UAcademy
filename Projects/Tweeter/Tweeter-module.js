const UsersModule = function () {
  const posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  const _data = posts;
  let _postId = posts.length;
  const createPostId = function () {
    _postId += 1;
    return `p${_postId}`;
  };
  const createCommentId = function (postId) {
    let commentId = getMaxCommentId(postId);
    return `c${commentId + 1}`;
  };

  const getIndexPost = function (postId) {
    let indexPost;
    for (indexPost = 0; indexPost < _data.length; indexPost++) {
      if (postId === _data[indexPost].id) {
        break;
      }
    }
    return indexPost;
  };

  const getIndexComment = function (post, commentId) {
    let indexComment;
    for (
      indexComment = 0;
      indexComment < post.comments.length;
      indexComment++
    ) {
      if (commentId === post.comments[indexComment].id) {
        break;
      }
    }
    return indexComment;
  };

  const getMaxCommentId = function (postId) {
    let indexPost = getIndexPost(postId);
    let maxComment = 0;
    for (
      let comment = 0;
      comment < _data[indexPost].comments.length;
      comment++
    ) {
      let numberInId = Number(_data[indexPost].comments[comment].id.slice(1));
      maxComment = maxComment > numberInId ? maxComment : numberInId;
    }
    return maxComment;
  };

  const postsGetter = function () {
    return _data;
  };
  const addPost = function (text) {
    _data.push({
      text: text,
      id: createPostId(),
      comments: [],
    });
  };
  const removePost = function (postId) {
    let indexPost = getIndexPost(postId);
    _data.splice(indexPost, 1);
  };

  const addComment = function (postId, text) {
    let indexPost = getIndexPost(postId);
    const newComment = { id: createCommentId(postId), text: text };
    _data[indexPost].comments.push(newComment);
  };

  const removeComment = function (postId, commentId) {
    let indexPost = getIndexPost(postId);
    let post = _data[indexPost];
    if (post) {
      let indexComment = getIndexComment(post, commentId);
      post.comments.splice(indexComment, 1);
    }
  };

  return {
    createPostId: createPostId,
    createCommentId: createCommentId,
    postsGetter: postsGetter,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};
