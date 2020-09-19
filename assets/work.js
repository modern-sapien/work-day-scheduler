console.log("hello cruel world")
$(document).ready(function() {
// GLOBAL VARIABLES
var currentDateText = $("#current-day"); 
console.log(currentDateText)

var mainContainer = $(".main");
console.log(mainContainer)
// MOMENTS

let m = moment();

console.log(m.hour())

let currentHour = (moment().format("h"));
console.log(currentHour);

// CAN I USE THIS IN THE FOR LOOP?
    //Curren hour is displayed in military time
    if (currentHour < 10) {
        console.log(currentHour + " is less than!")
    }

currentDateText.text(moment().format('MMM ddd do YYYY'));
//global variable

// Object that populates the divs we initialize with
        var initialToDoStorageObj ={
            "9am" : "",
            "10am" : "",
            "11am" : "",
            "12pm" : "",
            "1pm" : "",
            "2pm" : "",
            "3pm" : "",
            "4pm" : "",
            "5pm" : "",
        };
// Original Hour List && Key for above object values
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

    var momentHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]


   // This is where we are parsing our local storage
    var initialStorageObj = JSON.parse(localStorage.getItem("agendaList")) || initialToDoStorageObj;
    console.log(initialStorageObj);

    // USE HOUR LIST AS A KEY FOR THE OBJECT VALUES
    //  ==========================================

        // This is where we save our current scheduled events
        mainContainer.on("click", ".saveBtn", function()  {
            console.log($(this).siblings("div").text()); //this works because we need to reference a SIBLING in the same container.
            console.log($(this).siblings("textarea").val());

            
            var hour = $(this).siblings("div").text();
            var agenda = $(this).siblings("textarea").val();
            

            initialStorageObj[hour] = agenda;

            toDoSetter = (JSON.stringify(initialToDoStorageObj) + " howdy")
            localStorage.setItem("agendaList", JSON.stringify(initialStorageObj))
        });


   
        
    for (var i = 0; i < momentHours.length; i++) {
    var timeRow = $("<row>" + "</row>");
    timeRow.addClass("row time-block");
    mainContainer.append(timeRow); // this has the timeBlock row showing up
    
    var hourContainer = $("<div>");
    hourContainer.addClass("col-2 hour");
    hourContainer.text(hourList[i]);
    timeRow.append(hourContainer);

    // FORM CONTAINER that holds text entry & submission
    var formContainer = $("<textarea>");
    formContainer.addClass("text-area col-8");
    formContainer.attr("placeholder", "give me something to do at " + hourList[i]); 
    
    //If else statements for hour adding class to the formContainer
    if (currentHour > momentHours[i])   {
        formContainer.addClass("future");
    } else if (currentHour < momentHours[i]) {
        formContainer.addClass("past");
    }   else (formContainer.addClass("present"))
    
    formContainer.attr("id", [i]);
    formContainer.text(initialStorageObj[hourList[i]])
    timeRow.append(formContainer);

    var formSave = $("<div>" + " SAVE" + "</div>");
    formSave.addClass("saveBtn col-2 fas fa-save");
    formSave.attr("dataType", hourList[i]);
    timeRow.append(formSave);
    }


    //     for (var j = 0; j < hourList.length; j++) {
    //     console.log(initialStorageObj[hourList[j]]);
    //     ;
    // };
    
});




