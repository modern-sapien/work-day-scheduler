console.log("hello cruel world")
$(document).ready(function() {
// GLOBAL VARIABLES
var currentDateText = $("#current-day"); 
console.log(currentDateText)
var mainContainer = $(".main");
console.log(mainContainer)

currentDateText.text(moment().format('MMM ddd do YYYY'));
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
    ];
    
    
        for (var i = 0; i < hourList.length; i++) {
    var timeRow = $("<row>" + "</row>");
    timeRow.addClass("row testing time-block");
    mainContainer.append(timeRow); // this has the timeBlock row showing up

    var timeContainer = $("<div>");
    timeContainer.addClass("time-block testing col-2 hour");
    timeContainer.text(hourList[i]);
    timeRow.append(timeContainer);

    // FORM CONTAINER that holds text entry & submission
    var formContainer = $("<textarea>");
    formContainer.addClass("text-area testing col-8");
    formContainer.attr("placeholder", "give me something to do at " + hourList[i]);
    formContainer.attr("dataType", hourList[i]);
    formContainer.attr("id", [i]);
    // formContainer.text(initialStorageObj);
    timeRow.append(formContainer);

    var formSave = $("<div>" + "SAVE" + "</div>");
    formSave.addClass("text-area saveBtn time-block testing col-2");
    formSave.attr("dataType", hourList[i]);
    timeRow.append(formSave);
    }



});