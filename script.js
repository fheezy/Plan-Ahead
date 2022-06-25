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
        if (blockTime < currentTime) {          // ...if the block is less than the current time; color will change to gray
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime > currentTime) {    // ...if the block is greater than the current time; color will change to green
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else {                                // ...otherwise, currentTime is present; change color to red
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
    })
};



}