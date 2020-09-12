console.log("hello cruel world")
$(document).ready(function() {
// GLOBAL VARIABLES
var currentDateText = $("#current-day"); 
console.log(currentDateText)

var mainContainer = $(".main");
console.log(mainContainer)
// MOMENTS

let currentHour = (moment().format("ha"));
console.log(currentHour);

if (currentHour > "5pm") {
    console.log(currentDateText + " is greater than!")
}

currentDateText.text(moment().format('MMM ddd do YYYY'));
//global variable

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
    
    // initialization();


   // This is where we are parsing our local storage
    var initialStorageObj = JSON.parse(localStorage.getItem("agendaList")) || initialToDoStorageObj;
    console.log(initialStorageObj);

    // USE HOUR LIST AS A KEY FOR THE OBJECT VALUES
    //  ==========================================
    // for (var j = 0; j < hourList.length; j++) {
    //     console.log(initialStorageObj[hourList[j]]);
    // };

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
    
    for (var i = 0; i < hourList.length; i++) {
    var timeRow = $("<row>" + "</row>");
    timeRow.addClass("row testing time-block");
    mainContainer.append(timeRow); // this has the timeBlock row showing up

    var hourContainer = $("<div>");
    hourContainer.addClass("time-block testing col-2 hour");
    hourContainer.text(hourList[i]);
    timeRow.append(hourContainer);

    // FORM CONTAINER that holds text entry & submission
    var formContainer = $("<textarea>");
    formContainer.addClass("text-area testing col-8");
    formContainer.attr("placeholder", "give me something to do at " + hourList[i]);
    formContainer.attr("data-type", hourList[i]);
    formContainer.attr("id", [i]);
    formContainer.text(initialStorageObj[hourList[i]])
    // formContainer.text(initialStorageObj);
    timeRow.append(formContainer);

    var formSave = $("<div>" + "SAVE" + "</div>");
    formSave.addClass("text-area saveBtn time-block testing col-2");
    formSave.attr("dataType", hourList[i]);
    timeRow.append(formSave);
    }


    //     for (var j = 0; j < hourList.length; j++) {
    //     console.log(initialStorageObj[hourList[j]]);
    //     ;
    // };
    
});




