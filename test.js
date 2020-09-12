console.log("hello cruel world")
$(document).ready(function() {
// GLOBAL VARIABLES
var currentDateText = $("#current-day"); 
console.log(currentDateText)
var mainContainer = $(".main");
console.log(mainContainer)

//global variable

       var hourList = [ 9, 10, 11, 12, 13, 14, 15, 16, 17];
    
    //ORIGINAL OBJECT if pulled out of local storage
    var toDoListStorageObj_deserialized = JSON.parse(localStorage.getItem("agendaList")) || initialStorageObj;
        console.log(toDoListStorageObj_deserialized); 
    // IF NOT THIS is what a user starts with
    var initialStorageObj   = {
        "9am" : "",
        "10am" : "",
        "11am" : "",
        "12pm" : "",
        "1pm" : "",
        "2pm" : "",
        "3pm" : "",
        "4pm" : "",
        "5pm": "",
    }
    
    for (var i = 0; i < hourList.length; i++) {
        var timeRow = $("<div");
        timeRow.addClass("row testing");

        var hourContainer = $("<div>");
        hourContainer.addClass("testing col-2 hour");
        hourContainer.text(hourList[i]);

    }