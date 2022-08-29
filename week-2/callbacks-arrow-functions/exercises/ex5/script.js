const capitalize = (str) => {
  str = str.toLowerCase();
  str = str[0].toUpperCase() + str.substring(1);
  console.log(str);
  return str;
};

capitalize("bOb"); // returns Bob
capitalize("TAYLOR"); // returns Taylor
capitalize("feliSHIA"); // returns Felishia
