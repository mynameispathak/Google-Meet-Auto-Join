var currTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });

// Enter the Time of Meeting in HH:MM 24 Hour format
var destTime = prompt("Enter time of Meeting in HH:MM format 24  Hours");

var time4 = {
    timeDiffer: function () {
        var start = this.cTime.split(":");
        var end = this.dTime.split(":");
        if (parseInt(start[0]) <= parseInt(end[0])) {
            var time1 = Math.abs((parseInt(start[0]) * 60 + parseInt(start[1])) - (parseInt(end[0]) * 60 + parseInt(end[1])));
        }
        else {
            var time1 = (((24 - parseInt(start[0])) * 60 - parseInt(start[1])) + (parseInt(end[0]) * 60 + parseInt(end[1])));
        }
        //         console.log(time1);
        return time1;
    }
}

var t = {
    cTime: currTime,
    dTime: destTime,
}

var tF = time4.timeDiffer.call(t);

var delayInMicroSec = tF * 60 * 1000;

// Mic Button
window.document.querySelectorAll(".DPvwYc.JnDFsc.dMzo5")[0].click();
// Webcam Button
window.document.querySelectorAll(".DPvwYc.JnDFsc.dMzo5")[1].click();

setInterval(function () {
    document.querySelector(".u7qdSd.BB6Rdd").click();
}, 5000);

setTimeout(function () {

    // Join Button
    window.document.querySelector(".NPEfkd").click();

}, delayInMicroSec);

var i = delayInMicroSec/1000;
while (i--) {
    console.log("Joining in : " + i);
}
