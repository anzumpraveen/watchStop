let second=0
let minutes=0
let hours=0

let displaysecond=0
let displayminutes=0
let displayhours=0

let interval=null;
let status="stoped"

function stopWatch(){
    second++

    if (second / 60==1){
        second=0
        minutes++

        if (minutes / 60==1){
            minutes=0
            hours++
        }
    }

    if (displaysecond<10){
        displaysecond="0"+second.toString();
    }
    else{
        displaysecond=second
    }
    if (displayminutes<10){
        displayminutes="0"+minutes.toString();
    }
    else{
        displayminutes=minutes
    }
    if (displayhours<10){
        displayhours="0"+hours.toString();
    }
    else{
        displayhours=hours
    }

    document.getElementById("display").innerHTML=displayhours+":"+displayminutes+":"+displaysecond
}

function startStop(){
    if(status=="stoped"){

        interval=window.setInterval(stopWatch,1000)

        document.getElementById("startStop").innerHTML="stop";
        status="started"
    }

    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML="start";
        status="stoped"

    }
}

function reset() {
    window.clearInterval(interval);
    second=0
    minutes=0
    hours=0
    document.getElementById("display").innerHTML="00:00:00"
    document.getElementById("startStop").innerHTML="Start"

    
}