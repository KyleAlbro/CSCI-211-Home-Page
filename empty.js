// weather object class lab
var weather = {
    description: "Weather for Montana Cities",
    gfWeather: ["Sunny", "Snow", "Snow", "Rain", "Sunny"],
    bzWeather: ["Sunny", "Sunny", "Rain", "Rain", "Snow"],
    btWeather: ["Snow", "Rain", "Snow", "Snow", "Snow"]
};

document.getElementById("description").textContent = weather.description;

var weatherElements = document.querySelectorAll(".weatherList");
for (var i = 0; i < weather.gfWeather.length; i++) {
    weatherElements[i].textContent = weather.gfWeather[i];
}