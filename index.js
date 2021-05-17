const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let index = 0;
let intervalId = 0;

const refs = {
    bodyEl: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
}

refs.startBtn.addEventListener('click', onStartClick);  // слухач на start

function onStartClick() {
    console.log('Start is clicked!');
    intervalId = setInterval(() => {
        index = randomIntegerFromInterval(0, colors.length)
        refs.bodyEl.style.backgroundColor = colors[index];
    }, 1000);
    refs.stopBtn.addEventListener('click', onStopClick); // слухач на stop
    refs.startBtn.removeEventListener('click', onStartClick); // вимикаємо start
}

function onStopClick() {
    console.log('Stop is clicked!');
    clearInterval(intervalId);
    refs.startBtn.addEventListener('click', onStartClick); // тепер можна увімкнути start
    refs.stopBtn.removeEventListener('click', onStopClick); // і вимкнути stop
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min); // генерація випадкового числа
};