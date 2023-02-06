let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', beginCounter);
stopBtn.addEventListener('click', stopCounter);
resetBtn.addEventListener('click', resetCounter);

let sec = 0;
let interval;

function beginCounter() {
  interval = setInterval(count, 1000);
  
  function count(){
    sec++;
    seconds.innerHTML = sec;
    let time_hours = Number(hours.innerText);
    let time_minutes = Number(minutes.innerText);
    if (sec >= 59) {
      time_minutes++;
      sec = 0;
      if (time_minutes >= 59) {
        time_hours++;
        time_minutes = 0;
      }
  }
  hours.innerHTML = time_hours;
  minutes.innerHTML = time_minutes;
  seconds.innerHTML = sec;
  }
}

function stopCounter() {
  clearInterval(interval);
}

function resetCounter() {
  clearInterval(interval);
  sec = 0;
  seconds.innerHTML = sec;
  minutes.innerHTML = 0;
}






