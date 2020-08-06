function showTime() {
  var showTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(showTime);
}
setInterval(showTime, 1000);
