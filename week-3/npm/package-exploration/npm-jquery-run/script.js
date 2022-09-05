$(".my-div").on("click", () => {
  $(".my-div").css("background-color", "#f39c12");
});

$.get("http://data.nba.net/10s/prod/v1/2016/players.json", function (data) {
  console.log(data);
});
