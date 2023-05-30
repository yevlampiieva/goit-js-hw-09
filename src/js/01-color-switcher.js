const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId;
let color;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

stopBtn.setAttribute('disabled', '');

function onStartBtnClick() {
  timerId = setInterval(() => {
    getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
}

function onStopBtnClick() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return (color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`);
}
