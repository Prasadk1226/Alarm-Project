let hrs = document.getElementById("hrs");
let mnts = document.getElementById("mnts");
let secs = document.getElementById("secs");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  mnts.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secs.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

// let activeAlarm;

// document.getElementById("check1").onclick = function(){
//     activeAlarm = document.getElementById("alarm1").value;
//     document.getElementById("activeTime").textContent =`Alarm at  ${activeAlarm}`
// }

// document.getElementById("changeBtn").onclick = function(){
//  activeAlarm = document.getElementById("alarm1").value;
//     document.getElementById("activeTime").textContent =`Alarm at  ${activeAlarm}`
// }
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

if(activeTime==currentTime){
  alarmSound.play;
    alarmSound.loop = true;
}
