console.log("hello cruel world")
$(document).ready(function() {
// GLOBAL VARIABLES
var currentDateText = $("#current-day"); 
console.log(currentDateText)
var mainContainer = $(".main");
console.log(mainContainer)


//global variable

    var hourList = [
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
    ]

currentDateText.text(moment().format('MMM ddd do YYYY'));

// // GLOBAL FUNCTIONS
for (var i = 0; i < hourList.length; i++) {
    var timeRow = $("<div>" + "</div>");
    timeRow.addClass("row testing time-block");
    mainContainer.append(timeRow); // this has the timeBlock row showing up

    var timeContainer = $("<div>" + "</div>");
    timeContainer.addClass("time-block testing col-2 hour");
    timeContainer.text(hourList[i]);
    timeRow.append(timeContainer);

    // FORM CONTAINER that holds text entry & submission
    var formContainer = $("<textarea>" + "</textarea>");
    formContainer.addClass("text-area testing col-8");
    formContainer.attr("data-text", hourList[i]);
    timeRow.append(formContainer);

    var formSave = $("<button>" + "</button>");
    formSave.addClass("text-area saveBtn time-block testing col-2");
    formSave.attr("data-save", hourList[i]);
    formSave.text("SAVE");
    timeRow.append(formSave);
} // for loop




});         // end document read