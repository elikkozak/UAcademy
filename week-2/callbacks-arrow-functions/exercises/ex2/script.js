const returnTime = function (time) {
  alert("The current time is: " + time);
};

const getTime = function (func) {
  const time = new Date();
  returnTime(time);
};

getTime(returnTime);
