document.querySelector(".hour").style.transform =
  "translate(20px, 20px) rotate(90deg)";

const hourhand = document.querySelector(".hour");
const minutehand = document.querySelector(".minute");
const secondshand = document.querySelector(".seconds");
function moveClock() {
  var timeg = new Date();
  const osec = timeg.getSeconds();
  const omin = timeg.getMinutes();
  const ohrs = (timeg.getHours() % 12) + omin / 60;

  minuteAngle = omin * 6 - 90;
  secondsAngle = osec * 6 - 90;
  hourAngle = ohrs * 30 - 90;
  console.log(44 / 60);
  hourhand.style.transform =
    "translate(20px, 20px) rotate(" + hourAngle + "deg)";
  minutehand.style.transform =
    "translate(20px, 20px) rotate(" + minuteAngle + "deg)";
  secondshand.style.transform =
    "translate(20px, 20px) rotate(" + secondsAngle + "deg)";
}

window.setInterval(() => {
  moveClock();
}, 1);
