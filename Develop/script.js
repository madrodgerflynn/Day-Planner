var eventContainer = $(".description");
var displayDate = $("#currentDay");
var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var saveButton = $(".saveBtn");
var formCell = $(".form-control");
var now = moment().format("HH");
var textareas = $("textarea");
displayDate.text(today);
var row = $(".row");
var storageDataArr = [];
var hours = $(".hour");
var dataHour = $("#10am");
var divHours = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
];

//I need to take what is in the textarea and make it into a string using

// Event handler for button
saveButton.on("click", function () {
  // console.log("press");
  // console.log(textareas);
  //This is how I am going to store the planner details in local storage
  storageDataArr = [];
  for (var i = 0; i < textareas.length; i++) {
    var textValue = textareas[i].value;
    console.log(textValue);
    storageDataArr.push(textValue);
  }
  localStorage.setItem("textarea", JSON.stringify(storageDataArr));
});

$(document).ready(function () {
  storageDataArr = JSON.parse(localstorage.getItem("textarea"));
});

function pageLoad() {
    $(".description").each(function () {
		var hourBlock = $(this).siblings("div").attr("id");
		console.log(hourBlock);
		if (hourBlock < now) {
			$(this).addClass("past");
		}
		if (hourBlock == now) {
			$(this).addClass("present");
		} else if (hourBlock > now) {
			$(this).addClass("future");
		}
	});
}

// function pageLoad() {
//   console.log(moment().format("HH"));
//   console.log(divHours[1]);
//   for (var i = 0; i < divHours.length; ++i) {
//     if (divHours[i] < now) {
//       // eventContainer.style.backgroundColor = "#d3d3d3";
//       $(this).addClass("past");
//     } else if (divHours[i] == now) {
//       $(this).addClass("present");
//     } else if (divHours[i] > now) {
//       $(this).addClass("future");
//     }
//   }
// }

//put into init fx

pageLoad();

console.log();
console.log(now);
// console.log(dataHour.getAttribute("data-dayTime"));
