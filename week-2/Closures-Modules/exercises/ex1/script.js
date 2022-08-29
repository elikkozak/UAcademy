const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.substr(1);
    console.log(str);
  };

  const skewerCase = function (str) {
    str = str.replaceAll(" ", "-");
    console.log(str);
  };

  return {
    skewerCase: skewerCase,
    capitalizeFirst: capitalizeFirst,
  };
};

const formatter = StringFormatter();

formatter.capitalizeFirst("dorothy"); //should print Dorothy
formatter.skewerCase("blue box"); //should print blue-box
