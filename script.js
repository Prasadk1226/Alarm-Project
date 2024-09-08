

let hrs = document.getElementById("hrs");
let mnts = document.getElementById("mnts");
let secs = document.getElementById("secs");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let ringAlarm = document.getElementById("ringAlarm")
let addBtn = document.getElementById("addBtn")
let alarmSound = new Audio("old_alarm_sound.mp3");
let check1 = document.getElementById("check1");
let deleteBtn = document.getElementById("deleteBtn")
let setAlarm = null; // Declare globally to store the alarm time

// Function to update the current time every second
setInterval(() => {
  let currentTime = new Date();

  // Display the current time
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  mnts.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secs.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  // Format the current time as "HH:MM"
  let currentFormattedTime = `${
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours()
  }:${(currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes()}`;

  // Check if the current time matches the set alarm time and the checkbox is checked
  if (currentFormattedTime === setAlarm && check1.checked) {
    alarmSound.play();
    alarmSound.loop = true;
    console.log("Ringing");
  }
}, 1000);

// Handle setting and unsetting the alarm when the checkbox is clicked
check1.onclick = function () {
  if (check1.checked && hours.value && mins.value) {
    // Set the alarm time if the checkbox is checked
    setAlarm = `${hours.value}:${mins.value}`;
    document.getElementById("activeTime").textContent = `Next Alarm at ${setAlarm}`;
  } else {
    // Stop the alarm and reset if the checkbox is unchecked
    alarmSound.pause();
    alarmSound.currentTime = 0; // Reset the sound to the beginning
    setAlarm = null; // Reset the alarm
    document.getElementById("activeTime").textContent = "No alarm set.";
  }
};

addBtn.style.cursor = "pointer"
addBtn.addEventListener("click",function(){
  document.body.appendChild(ringAlarm)
  ringAlarm.style.backgroundColor = "black"
})


deleteBtn.style.cursor = "pointer"
deleteBtn.style.filter = "drop-shadow(2px 0px 20px #ADFF2F)"
deleteBtn.addEventListener("click", ()=>{
  ringAlarm.remove()
})


