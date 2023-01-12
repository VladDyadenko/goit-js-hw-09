
const startBtn = document.querySelector('button[data-start]');
const body = document.querySelector("body");
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.disabled = true;

let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
   
  }, 1000);
  activeBtnStart();
  
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  activeBtnStop();
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function activeBtnStop(){
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
function activeBtnStart(){
    startBtn.disabled = true;
    stopBtn.disabled = false;
}