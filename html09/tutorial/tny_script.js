"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Kyle Albro
   Date:   10/25/22

*/
runClock();
setInterval("runClock()", 1000)

function runClock() {
   /* Store the current day and time*/
   // var currentDay = new Date("October 25, 2022 11:15:00");
   var currentDay = new Date("May 23, 2018 14:35:05");
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   // calculate the days until jan 1st
   var newYear = new Date("January 1, 2018");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

   // calc the hours left in the current day
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   // calc the minutes and seconds left in the current day
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   /* Display the time left until New Year's Eve*/
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);

   // window.alert("Welcome to Tulsa");
   /*
   this is an error
   Window.Alert("Welcome to Tulsa");
   */
}


