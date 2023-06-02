var hour=document.getElementById("hour")
    var min=document.getElementById("min")
    var sec=document.getElementById("sec")

    var startbtn=document.getElementById("Start")
    var stopbtn=document.getElementById("Stop")
    var resetbtn=document.getElementById("Reset")
    startbtn.disabled=false
var hr=0
var minute=0
var second=0
var interval

function getinput(){
    hour.innerHTML=hr
    min.innerHTML=minute
    sec.innerHTML=second
}

function timer(){
    console.log(second)
    second++
    if(second==59){
        minute++
        second=0
    }
    else if(minute==59){
        hr++
        minute=0
    }
    console.log(hr,minute,second)
    getinput()
}

function start(){
    interval=setInterval(function(){
        timer()
    },1000)
   startbtn.disabled=true
   stopbtn.disabled=false
}
function stop(){
    clearInterval(interval)
    startbtn.disabled=false
    stopbtn.disabled=true
}

function reset(){
    hr=0
    minute=0
    second=0
    getinput()
}
