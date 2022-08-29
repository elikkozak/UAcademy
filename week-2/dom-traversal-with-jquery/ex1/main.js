const computerDataId = [];

$(".generator").click(function () {
  console.log($(this).closest(".processor").attr("id"));

  console.log($(this).closest(".computer").data("id"));
  computerDataId.push({ cmp_id: $(this).closest(".computer").data("id") });

  console.log($(this).closest(".computer").find(".BUS").text());
});

$(".validator").click(function () {
  console.log($(this).closest(".computer").find(".generator").text());

  console.log($(this).closest(".computer").find(".MB").text());

  $(this)
    .closest(".computer")
    .find(".QR")
    .splice(0, 2)
    .forEach((element) => {
      element.innerHtml;
    });
});

