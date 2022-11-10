//default values
var title = "Weather For This Week";
var days = ["Sunny", "Rain", "Snow"];
var feelsLike = ["65-70", "32-41", "9"];
var temp = ["60", "40", "20"];

//different city temps
var gfTemp = ["65-70", "32-41", "9"];
var bzTemp = ["55-73", "41-53", "34"];
var btTemp = ["20-25", "30-36", "0"];

//different city weather
var gfWeather = ["Sunny", "Snow", "Snow"];
var bzWeather = ["Sunny", "Sunny", "Rain"];
var btWeather = ["Snow", "Rain", "Snow"];


var heading = document.getElementById("header");

heading.textContent = `${title}`;

//for loop to print each day
weatherHTML = ``;
for (var i = 0; i < days.length; i++) {

    weatherHTML += `${days[i]} <br/> 
    <img src="${days[i]}.png"></img> <br/>
    Temperature: ${temp[i]} <br/> 
    Feels Like: ${feelsLike[i]}`;

    var idName = `day-${i + 1}`;
    document.getElementById(idName).innerHTML = weatherHTML;

    weatherHTML = ``;
}
footerHTML = `These are not my logos, visit   
         <a href='https://windy.app/support/weather-symbols-and-icons.html'>Weather Logos</a> too see all the logos available.`;
document.getElementById("foot").innerHTML = footerHTML;


