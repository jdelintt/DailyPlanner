const timeBlockContainer = $(".container");
const startTime = 8;
const endTime = 17;

function showTime() {
  var showTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(showTime);
}
setInterval(showTime, 1000);
const currentTime = moment().format("k");
for (let t = startTime; t <= endTime; t++) {
  const hourStr = `${t % 12 || 12}:00 ${t > 11 ? "PM" : "AM"}`;
  const row = $("<div>").addClass("row time-block");
  const hourElement = $("<p>").addClass("hour").text(hourStr);
  const textArea = $("<textarea>").addClass("description");
  if (t < currentTime) textArea.addClass("past");
  else if (t === currentTime) textArea.addClass("present");
  else textArea.addClass("future");
  textArea.val(localStorage.getItem(hourStr) || "");
  const btn = $("<button>").addClass("saveBtn");
  btn.on("click", function (event) {
    event.preventDefault();
    localStorage.setItem(hourStr, textArea.val());
  });
  btn.append($("<i>").addClass("far fa-save"));
  row.append(hourElement, textArea, btn);
  timeBlockContainer.append(row);
}
