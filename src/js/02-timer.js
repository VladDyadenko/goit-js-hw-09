// Описаний в документації
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import 'flatpickr/dist/themes/dark.css';

const refs = {
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
    btnStart: document.querySelector('button[data-start]'),
    inputDate: document.querySelector("#datetime-picker")
}

const {days, hours, minutes, seconds, btnStart, inputDate} = refs;

btnStart.disabled = true;
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      
        const getCurrentTime = new Date()
        // console.log(getCurrentTime)

      if(selectedDates[0] < getCurrentTime) {
         
         Notify.failure("Please choose a date in the future")
        }
        else {
            btnStart.disabled = false;
            btnStart.addEventListener("click", getChangTimerValue )
        }
    },
      
};

flatpickr(inputDate, options);

function getChangTimerValue(value){
  
    let timerId = setInterval(() => {
        const currentDay = new Date();
       
        let countdown = new Date(refs.inputDate.value) - currentDay;
      
        btnStart.disabled = true;
        inputDate.disabled = true;
        
        if(countdown >= 0) {
            let timerDataValue = convertMs(countdown);
            days.textContent = pad(timerDataValue.days);
            hours.textContent = pad(timerDataValue.hours);
            minutes.textContent = pad(timerDataValue.minutes);
            seconds.textContent = pad(timerDataValue.seconds);
        } else {
            clearInterval(timerId)
        }
    },1000);

    
   
};
   
  
function pad(value) {
    return String(value).padStart(2, "0");
}
  
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}







