$("body").append(
  `<div class = 'box' id ='box1' style="border-radius:5px"></div>`
);

$("body").append(
  `<div class = 'box' id ='box2' style="border-radius:5px"></div>`
);

const colors = ["rgb(142, 68, 173)", "rgb(255, 0, 0)"];

let lastElementId;

$(".box").hover(
  function () {
    if (lastElementId && lastElementId !== $(this).attr("id")) {
      let newColorInd =
        $("#" + lastElementId).css("background-color") === colors[0] ? 1 : 0;
      $("#" + lastElementId).css("background-color", colors[newColorInd]);
      lastElementId = $(this).attr("id");
      $("#" + lastElementId).css("background-color", colors[1 - newColorInd]);
    } else {
      lastElementId = $(this).attr("id");
    }
  },
  () => {}
);
