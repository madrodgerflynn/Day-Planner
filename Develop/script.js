var eventContainer = $(".description");
var displayDate = $("#currentDay");
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var saveButton = $("#saveButton");

displayDate.text(today) 
console.log(today);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

function saveEvent() {
    eventContainer = "";
   
    //if save button is clicked, it will store what is in the eventContainer to local storage
    if (saveButton.clicked) {
        localStorage.setItem(eventContainer);
    }
}
 if (eventContainer < today) {
    //if statement saying that if the time is less than the current date/time, it is in the past, if greater than the today time, it is future
    
 }
// saveButton.addEventListener("click", saveEvent); 
//This is how I am going to store the planner details in local storage
localStorage.setItem('today', today)