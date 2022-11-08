var title = "Weather For This Week";
var days = ["Sunny", "Rain", "Snow"];
var feelsLike = ["65-70", "32-41", "9"]

var temp = ["60", "40", "20"];

var heading = document.getElementById("header");

heading.textContent = `${title}`;

movieHTML = ``;
for (var i = 0; i < days.length; i++) {

    movieHTML += `${days[i]} <br/> 
    <img src="${days[i]}.png"></img> <br/>
    Temperature: ${temp[i]} <br/> 
    Feels Like: ${feelsLike[i]}`;
    
    var idName = `day-${i + 1}`;
    document.getElementById(idName).innerHTML = movieHTML;

    movieHTML = ``;
}
footerHTML = `These are not my logos, visit   
         <a href='https://windy.app/support/weather-symbols-and-icons.html'>Weather Logos</a> too see all the logos available.`;
document.getElementById("foot").innerHTML = footerHTML;