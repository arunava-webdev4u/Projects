setInterval(function(){
    var date = new Date();
    var hours = date.getHours();    //0-23
    var minutes = date.getMinutes();    //0-59
    var seconds = date.getSeconds();    //0-59
    var session = "AM";

    if (hours >= 0){
        session = "PM";
    }
    if (hours > 12){
        hours = hours - 12;
    }
    hours = (hours < 10)? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + session;
    var clock = document.querySelector("#clock");
    clock.innerText = clockTime;
}, 1000);