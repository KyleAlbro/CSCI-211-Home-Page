"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Kyle Albro
   Date:   10/25/22

*/
/* Store the current day and time*/
var currentDay = new Date("October 25, 2022 11:15:00");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display the current date and time */ 
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;


/* Display the time left until New Year's Eve*/
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

window.alert("Welcome to Tulsa");
/*
this is an error
Window.Alert("Welcome to Tulsa");
*/

