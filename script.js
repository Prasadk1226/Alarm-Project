

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
if (setAlarm==checked && setAlarm==(hrs&&mnts)){
    console.log(audio)
}

// // Get all elements with the class 'setAlarm' and 'check'
// let setAlarms = document.getElementsByClassName("setAlarm");
// let checks = document.getElementsByClassName("check");
// let audio = document.getElementsByClassName("ring")[0]; // Assuming there's only one audio element

// // Function to check and trigger alarms
// function checkAlarms() {
//   let currentTime = new Date();
//   let currentHours = currentTime.getHours();
//   let currentMinutes = currentTime.getMinutes();

//   for (let i = 0; i < setAlarms.length; i++) {
//     // Get the time value from the input field
//     let alarmTime = setAlarms[i].value.split(":");
//     let alarmHours = parseInt(alarmTime[0]);
//     let alarmMinutes = parseInt(alarmTime[1]);

//     // Check if the alarm is set and time matches the current time
//     if (checks[i].checked && alarmHours === currentHours && alarmMinutes === currentMinutes) {
//       audio.play(); // Play the alarm sound
//       console.log("Alarm ringing!");
//     }
//   }
// }

// // Check the alarms every minute
// setInterval(checkAlarms, 60000);




