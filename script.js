const timeBlockContainer = $(".container");
const startTime = 8;
const endTime = 17;

function showTime() {
  var showTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(showTime);
}
setInterval(showTime, 1000);

for (let t = startTime; t <= endTime; t++) {
    const hourStr = `${t % 12 || 12}:00 ${t > 11 ? "PM" : "AM"}`;