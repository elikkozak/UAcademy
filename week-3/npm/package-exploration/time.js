const moment = require("moment");

const { request } = require("urllib");

async function run() {
  const { data, res } = await request(
    "http://data.nba.net/10s/prod/v1/2016/players.json"
  );
  console.log(data.toString());
}
run();
let formattedTimeNow = moment().format("MMMM Do, YYYY");
console.log(formattedTimeNow); //January 3rd, 2017
