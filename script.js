// The current day is going to display on top/middle of the calender 
let today = new Date().toLocaleDateString()

console.log(today)
//section where depending on the time it will change colors for each block section(past,present, and future)
var trackTimer = function () {
    //current time 
    var currentTime = moment().hour();
    
    $(".description").each(function () {
        var blockTime = ($(this).attr("id"));

        //less than or greater than the current time
        if (blockTime < currentTime) {          //  color will change to gray
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime > currentTime) {    //  color will change to green
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else {                                // change color to red
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
    })
};

// save button 
 $("saveBtn").on("click", function() { 
    var timeKey = $(this).siblings(".description").attr("id");
    var descriptionValue = $(this).siblings(".description").value();


    // save to localStorage; Key(timeKey) Value(descriptionVal)
    localStorage.setItem(timeKey, descriptionValue);
})


//key value pairs from localStorage
$("#9").value(localStorage.getItem("9"));
$("#10").value(localStorage.getItem("10"));
$("#11").value(localStorage.getItem("11"));
$("#12").value(localStorage.getItem("12"));
$("#01").value(localStorage.getItem("01"));
$("#02").value(localStorage.getItem("02"));
$("#03").value(localStorage.getItem("03"));
$("#04").value(localStorage.getItem("04"));
$("#05").value(localStorage.getItem("05"));


timeTracker(timekey);