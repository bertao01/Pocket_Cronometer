//variables
var startTimeButton = document.querySelector(".startTimer")
var pauseTimerButton = document.querySelector(".pauseTimer")
var timerDisplay = document.querySelector(".timer")
var startTime
var updatedTime
var difference
var tInterval
var savedTime
var paused = 0
var running = 0 


//functions
function startTimer(){
    
    if (!running){
        startTime = new Date().getTime()
        tInterval = setInterval(getShowTime, 1)
    
        paused = 0
        running = 1 
    }
}

function pauseTimer(){
    if(!difference){
        //do nothing
    } else if(!paused) {
        clearInterval(tInterval)
        savedTime = difference
        paused = 1 
        running = 0
    } else {
        //startagain
        startTimer()
    }
}

function resetTimer(){
    clearInterval(tInterval)
    savedTime = 0
    difference = 0
    paused = 0 
    running = 0
    timerDisplay.innerHTML = '00 : 00 : 00 : 000'

}

function getShowTime() {
    updatedTime = new Date().getTime()
    if (savedTime) {
        difference = (updatedTime - startTime) + savedTime
    } else {
        difference = updatedTime - startTime 
    }

    var hours = Math.floor((difference %(1000*60*60*24))/(1000*60*60))
    var minutes = Math.floor((difference %(1000*60*60))/(1000*60))
    var seconds = Math.floor((difference %(1000*60*60))/1000)
    var miliseconds = Math.floor((difference %(1000*60))) 

    //condition ? expr1 : expr2 
    hours = (hours<10) ? "0"+hours : hours
    minutes = (minutes<10) ? "0"+minutes : minutes
    seconds = (seconds<10) ? "0"+seconds : seconds

    if (miliseconds < 100 & miliseconds >= 10){
        miliseconds = "0" + miliseconds
    } else if (miliseconds < 10){
        miliseconds = "00" + miliseconds
    }

    for(i=1 ; miliseconds > (i*1000) ; i){
        miliseconds = miliseconds - (i*1000)
    }

    timerDisplay.innerHTML = ` ${hours} : ${minutes} : ${seconds} : ${miliseconds} `
    
}

