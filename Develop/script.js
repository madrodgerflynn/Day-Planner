var eventContainer = $(".description");
var displayDate = $("#currentDay");
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var saveButton = $("#saveButton");
var formCell = $(".form-control");
var time = 0
displayDate.text(today) 
console.log(today);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

function saveEvent() {
    textarea.textContent = "";
//   element   
    console.log(saveEvent);
   
    //if save button is clicked, it will store what is in the eventContainer to local storage
    if (saveButton.clicked) {
        localStorage.setItem();
    }
}
 if (time < today) {
    time++
    //if statement saying that if the time is less than the current date/time, it is in the past, if greater than the today time, it is future

 }
// saveButton.addEventListener("click", saveEvent); 
//This is how I am going to store the planner details in local storage
localStorage.setItem('today', today)