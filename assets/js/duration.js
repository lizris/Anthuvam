

  function updateTimer(deadline){
    var time = deadline - new Date(); 
    return {
      'days': Math.floor( time/(1000*60*60*24) ),
      'hours': Math.floor( (time/(1000*60*60)) % 24 ),
      'minutes': Math.floor( (time/1000/60) % 60 ),
      'seconds': Math.floor( (time/1000) % 60 ),
      'total' : time
    };
  };

  function startTimer(id, deadline){
    
    var timerInterval = setInterval(function(){
      var clock = document.getElementById(id);
      var timer = updateTimer(deadline);
      
      if(timer.total < 1){ 
        clearInterval(timerInterval);
        clock.innerHTML = '<div class="fs-2" style="color:#3B566E;">Deadline is over</div>';
      }else{

      // clock.innerHTML = "<span>timer.days</span>"
      // '' + timer.days + ''
      //                 + '' + timer.hours + ''
      //                 + '' + timer.minutes + ''
      //                 + '' + timer.seconds + '';

      clock.innerHTML= '<div><span class="fs-1" style="color:#3B566E;">'+timer.days+
                        '</span><span class="fs-1" style="color:#3B566E;">'+ timer.hours +
                        '</span><span class="fs-1" style="color:#3B566E;">'+timer.minutes+
                        '</span><span class="fs-1" style="color:#3B566E;">'+timer.seconds+'</span></div>'
  
      var spans = clock.getElementsByTagName("time");
      animateClock(spans[3]);
     
      if(timer.seconds == 59) animateClock(spans[2]);
      if(timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
      if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);
      
      }
    }, 1000);
  }
  function animateClock(span){
    span.className = "turn";
    setTimeout(function(){
      span.className = "";
    },700);
  }

  window.onload = function(){ 
    var deadline = new Date("October 16, 2021 8:27:00"); 
    startTimer("clock", deadline);
  };
