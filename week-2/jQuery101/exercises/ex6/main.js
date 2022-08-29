for (let indexColor = 0; indexColor < $("span").length; indexColor++) {
  $("span")[indexColor].setAttribute("class", "picker");
  $("span")[indexColor].style.backgroundColor =
    $("span")[indexColor].dataset.color;
}
$("span").click(function () {
  $(".box").css("background-color", $(this).css("background-color"));
});
