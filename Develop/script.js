var eventContainer = $(".description");
var displayDate = $("#currentDay");
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var saveButton = $(".saveBtn");
var formCell = $(".form-control");
var time = 0
var textarea = $("textarea");
displayDate.text(today) 
// console.log(today);
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Event handler for button
saveButton.on("click", function() {
    console.log("press");
    console.log(textarea);
    localStorage.setItem('textarea', textarea);
}); 

//This is how I am going to store the planner details in local storage
// 