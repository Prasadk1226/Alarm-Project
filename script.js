let hrs = document.getElementById("hrs");
let mnts = document.getElementById("mnts");
let secs = document.getElementById("secs");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  mnts.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);

let setAlarm = document.getElementsByClassName("setAlarm")
let checked = document.getElementsByTagName("input")
let audio = document.getElementsByTagName("audio")

let activeAlarm;

document.getElementById("check").onclick = function(){
    activeAlarm = document.getElementById("alarm1").value;
    document.getElementById("activeTime").textContent =`Alarm at  ${activeAlarm}`
}

document.getElementById("changeBtn").onclick = function(){
 activeAlarm = document.getElementById("alarm1").value;
    document.getElementById("activeTime").textContent =`Alarm at  ${activeAlarm}`
}
if (setAlarm==checked && setAlarm==(hrs&&mnts)){
    console.log(audio)
}






