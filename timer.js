let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time % (100 * 60)) / 1000);
let minutes = Math.floor((time % (100 * 60)) / (1000 * 60));

let timex = 0;
let mytime = setInterval(function () {
  seconds++;
  if (seconds == 59) {
    minutes++;
    seconds = 0;
  }
  let formated_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
  let formated_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
  document.querySelector(
    ".time"
  ).innerHTML = `${formated_min} : ${formated_sec}`;
}, 1000);
