var currTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });

// Enter the Time of Meeting in HH:MM 24 Hour format
var destTime = prompt("Enter time of Meeting in HH:MM format 24  Hours");

setTimeout(function () {
    alert("You will be joined to the Meeting at " + destTime + " \nEnjoy your sleep now! I am here to save you :))");
}, 1000);

var timeToMeet = {
    timeDiffer: function () {
        var start = this.cTime.split(":");
        var end = this.dTime.split(":");
        if (parseInt(start[0]) <= parseInt(end[0])) {
            return Math.abs((parseInt(start[0]) * 60 + parseInt(start[1])) - (parseInt(end[0]) * 60 + parseInt(end[1])));
        }
        return (((24 - parseInt(start[0])) * 60 - parseInt(start[1])) + (parseInt(end[0]) * 60 + parseInt(end[1])));
    }
}

var t = {
    cTime: currTime,
    dTime: destTime,
}

var timeInMinutes = timeToMeet.timeDiffer.call(t);

var delayInMicroSec = (timeInMinutes * 60 - 30) * 1000;

// Turn OFF Mic Button
window.document.querySelectorAll(".DPvwYc.JnDFsc.dMzo5")[0].click();
// Turn OFF Webcam Button
window.document.querySelectorAll(".DPvwYc.JnDFsc.dMzo5")[1].click();

// Click Google Meet Logo in every 5 seconds to keep website running
setTimeout(function () {
    setInterval(function () {
        document.querySelector(".u7qdSd.BB6Rdd").click();
    }, 5000);
}, 120000);

// Click Join Button after the required time
setTimeout(function () {
    // Join Button
    window.document.querySelector(".NPEfkd").click();
}, delayInMicroSec);

var counter = delayInMicroSec / 1000;

var countDown = setInterval(function () {
    console.log("Joining in : " + counter + "seconds");
    counter = counter - 5;
    if (counter === 0) {
        setTimeout(function () {
            console.log("Successfully Joined! But you don't need to worry, keep sleeping ;)-");
            alert("Successfully Joined! But you don't need to worry, keep sleeping ;)-");
        }, 1500);
        clearInterval(countDown);
    }
}, 5000);