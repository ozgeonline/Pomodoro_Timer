const startEl = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const resetEl = document.querySelector("#reset");
const timerEl = document.querySelector("#timer");

let interval;
let timeLeft = 1500;

function updateTimer(){
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer(){
  interval = setInterval(()=>{
    timeLeft--;
    updateTimer();

    if(timeLeft === 0){
      clearInterval(interval);
      timeLeft = 1500;
    }
  },1000);

  startEl.disabled = true;
}

function stopTimer(){
  startEl.disabled = false;
  clearInterval(interval);
}
function resetTimer(){
  startEl.disabled = false;
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}


startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer);
resetEl.addEventListener("click",resetTimer);