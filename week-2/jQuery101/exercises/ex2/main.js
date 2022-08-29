$("#add-human").click(() => {
  $("#name-list").append(`<li>${$("#input-name").val()}</li>`);
  $("#input-name").val("");
});

$("body").on("click", "li", function () {
  $(this).remove();
});
