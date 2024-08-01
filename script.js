let stat=document.getElementById("start");
let stp=document.getElementById("stop");
let rest=document.getElementById("reset");
let hour=0;
let minute=0;
let second=0;


stat.addEventListener('click',function(){
    timer=true;
    stopwatch();
});

stp.addEventListener('click',function(){
    timer=false;
});

rest.addEventListener('click',function(){
    timer=false;
    hour=0;
    minute=0;
    second=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("mi").innerHTML="00";
    document.getElementById("se").innerHTML="00";
});

function stopwatch(){
    if(timer){
        second++;
        if(second==60)
        {
            minute++;
            second=0;
        }
        if(minute==60)
        {
            hour++;
            minute=0;
            second=0;
        }
        let hr=hour;
        let min=minute;
        let sec=second;
    
        if(hour<10)
        {
            hr="0"+hr;
        }
        if(minute<10)
        {
            min="0"+min;
        }
        if(second<10)
        {
            sec="0"+sec;
        }
        document.getElementById("hr").innerHTML=hr;
        document.getElementById("mi").innerHTML=min;
        document.getElementById("se").innerHTML=sec;
        setTimeout(stopwatch,1000);
    }
    }
       

