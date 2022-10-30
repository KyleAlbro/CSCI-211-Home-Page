"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Kyle Albro
   Date:   10/30/22

*/

var thisTime = new Date("Feburary 3, 2018 3:15:28");
var timeStr = thisTime.toLocaleString();
    
document.getElementById("timeStamp").innerHTML = timeStr;

var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();    
var mapNum = (2 * thisMonth + thisHour) % 24;

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

var temp = document.getElementById("planisphere");
temp.insertAdjacentHTML('afterbegin', imgStr);