var eventContainer = $(".description");
var displayDate = $("#currentDay")
var today = moment().format('MMMM Do YYYY, h:mm:ss a')


displayDate.text(today) 
console.log(today);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

function addEvent() {
    eventContainer = "";
}
 