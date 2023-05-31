import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const countDays = document.querySelector('.value[data-days]');
const countHours = document.querySelector('.value[data-hours]');
const countMinutes = document.querySelector('.value[data-minutes]');
const countSeconds = document.querySelector('.value[data-seconds]');

let currentDate = null;
let selectedDate = null;
let result = 0;
let timerId;
let timerTime;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    currentDate = Date.now();
    selectedDate = selectedDates[0].getTime();
    result = selectedDate - currentDate;
    if (result > 0) {
      startBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(dateInput, options);

startBtn.addEventListener('click', onStartBtn);

function onStartBtn(evt) {
  timerId = setInterval(() => {
    currentDate = Date.now();
    result = selectedDate - currentDate;
    timerTime = convertMs(result);
    startTimer(timerTime);
  }, 1000);
}

function startTimer({ days, hours, minutes, seconds }) {
  if (result < 0) {
    clearInterval(timerId);
  } else {
    startBtn.disabled = true;
    dateInput.disabled = true;

    countDays.textContent = `${timerTime.days}`;
    countHours.textContent = `${timerTime.hours}`;
    countMinutes.textContent = `${timerTime.minutes}`;
    countSeconds.textContent = `${timerTime.seconds}`;
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
