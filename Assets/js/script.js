// The current day is going to display on top/middle of the calender 
let today = new Date().toLocaleDateString()

//section where depending on the time it will change colors for each block section(past,present, and future)
var timeTracker = function () {
    //current time 
   
        var currentTime = moment().hour();
    
console.log(currentTime)
$(".description").each(function () {
            var blockTime = ($(this).attr("id"));
            console.log(blockTime) 
  
            // less than or greater than the current time
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
 $(".saveBtn").on("click", function() { 
    var timeKey = $(this).siblings(".description").attr("id");
    var descriptionValue = $(this).siblings(".description").val();

console.log(descriptionValue)
    // save to localStorage; Key(timeKey) Value(descriptionVal)
    localStorage.setItem(timeKey, descriptionValue);
})

//key value pairs from localStorage
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));

timeTracker()