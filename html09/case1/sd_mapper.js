"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Kyle Albro
   Date:   10/30/22

*/

var thisTime = new Date();
var thisStr = thisTime.toLocaleString();


document.getElementById("timeStamp").innerHTML = timeStr;

var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonths();
var mapNum = (2 * thisMonth + thisHour) % 24;

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

var temp = document.getElementById("planisphere");
temp.instertAdjacentHTML('afterbegin', imgStr);