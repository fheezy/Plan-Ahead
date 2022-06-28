// The current day is going to display on top/middle of the calender 
let todayDate = moment().format('MMMM D, YYYY');
$("#currentDay").html(todayDate);

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

//save button 
$(".saveBtn").on("click", function() { 
    var timeKey = $(this).siblings(".description").attr("id");
    var descriptionVal = $(this).siblings(".description").val();
    

    // save to localStorage; Key(timeKey) Value(descriptionVal)
localStorage.setItem(timeKey, descriptionVal);
})


//key value pairs from localStorage
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#01").val(localStorage.getItem("01"));
$("#02").val(localStorage.getItem("02"));
$("#03").val(localStorage.getItem("03"));
$("#04").val(localStorage.getItem("04"));
$("#05").val(localStorage.getItem("05"));


timeTracker();
