let alarmRing = document.getElementsByClassName("ring");
let timeSet = document.getElementsByClassName("firstAlarm");

let hrs = document.getElementById("hrs");
let mnts = document.getElementById("mnts");
let secs = document.getElementById("secs");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  mnts.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);
