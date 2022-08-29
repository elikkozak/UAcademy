const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (temp) =>
  console.log(`It's ${temp > 25 ? "hot" : "cold"}`);
commentOnWeather(30); //returns "It's hot"
commentOnWeather(22); //returns "It's cold"
