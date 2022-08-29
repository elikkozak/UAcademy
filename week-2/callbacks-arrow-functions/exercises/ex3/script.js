const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(alert, (logData = console.log), "I like to party");
