let hrs = document.getElementById("hrs");
let mnts = document.getElementById("mnts");
let secs = document.getElementById("secs");
let time = document.getElementById("alarm1")

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  mnts.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secs.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

}, 1000);


let alarmSound = new Audio("old_alarm_sound.mp3")
let check1 = document.getElementById("check1");

check1.onclick = function () {
  let activeAlarm = document.getElementById("alarm1").value;
  if (check1.checked && activeAlarm) {
    document.getElementById("activeTime").textContent = `Next Alarm at  ${activeAlarm}`;
  } else {
    document.getElementById("activeTime").textContent = "No alarm set.";
  }
};

if(time==activeAlarm && check1.checked){
  alarmSound.play();
    alarmSound.loop = true;
    console.log("Ringing")
}

