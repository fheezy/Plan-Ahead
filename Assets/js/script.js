// The current day is going to display on top/middle of the calender 
let today = new Date().toLocaleDateString()

//section where depending on the time it will change colors for each block section(past,present, and future)
var timeTracker = function () {
    //current time 
   
    console.log(currentTime) = moment().hour();

    $(".blockTime").each(function() {
        var currentTime = moment().hours();
    
        var blockTime = parseInt($(this).attr("id"));
    
        if (blockTime < currentTime) {
            $(this).addClass("past");
    
        } else if(blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
    
        }  else {
            $(this).removeClass("past present");
            $(this).addClass("future");
        }
    })
    

// save button 
 $(".saveBtn").on("click", function() { 
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

} 