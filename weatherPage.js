//default values
var title = "Weather For This Week";
var date = "October 31st, 2022"
var days = ["Sunny", "Rain", "Snow"];
var feelsLike = ["65-70", "32-41", "9", "31-33", "42-44"];
var temp = ["60", "40", "20", "34", "45"];

//different city weather
var gfWeather = ["Sunny", "Snow", "Snow", "Rain", "Sunny"];
var bzWeather = ["Sunny", "Sunny", "Rain", "Rain", "Snow"];
var btWeather = ["Snow", "Rain", "Snow", "Snow", "Snow"];

//different city feels
var gfFeels = ["65-70", "32-41", "9", "31-33", "42-44"];
var bzFeels = ["55-73", "41-53", "34-36", "35-38", "29-31"];
var btFeels = ["20-25", "30-36", "0", "12-15", "14"];

//different city temps
var gfTemp = ["60", "40", "20", "34", "45"];
var btTemp = ["70", "42", "35", "39", "28"];
var bzTemp = ["24", "30", "0", "14", "15"];

var heading = document.getElementById("header");
var setDate = document.getElementById("date");

heading.textContent = `${title}`;
setDate.textContent = `${date}`;

window.addEventListener("load", setupStyles);

function setupStyles() {
    var dayNum = 3;

    // this is your page styles
    var pageStyle = document.createElement("link");
    pageStyle.setAttribute("href", "weatherPage.css");
    pageStyle.setAttribute("rel", "stylesheet");
    pageStyle.setAttribute("disabled", "disabled");
    document.head.appendChild(pageStyle);
    pageStyle.disabled = true;

    var buttonDIV = document.createElement("div");
    buttonDIV.setAttribute("id", "styleButtons");

    // great falls button
    var gfButton = document.createElement("input");
    gfButton.setAttribute("type", "button");
    gfButton.setAttribute("value", "Great Falls");

    // butte button
    var btButton = document.createElement("input");
    btButton.setAttribute("type", "button");
    btButton.setAttribute("value", "Butte");

    // bozeman button
    var bzButton = document.createElement("input");
    bzButton.setAttribute("type", "button");
    bzButton.setAttribute("value", "Bozeman");

    // 3 days button
    var three = document.createElement("input");
    three.setAttribute("type", "button");
    three.setAttribute("value", "3 Day");

    // 5 days button
    var five = document.createElement("input");
    five.setAttribute("type", "button");
    five.setAttribute("value", "5 Day");

    // dark mode
    var dark = document.createElement("input");
    dark.setAttribute("type", "button");
    dark.setAttribute("value", "Dark Mode")

    buttonDIV.appendChild(gfButton);
    buttonDIV.appendChild(btButton);
    buttonDIV.appendChild(bzButton);
    buttonDIV.appendChild(three);
    buttonDIV.appendChild(five);
    buttonDIV.appendChild(dark);

    document.body.insertBefore(buttonDIV, document.body.firstChild);

    var buttonStyles = document.createElement("style");
    document.head.appendChild(buttonStyles);

    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "div#styleButtons{ \
         position: fixed;\
         right: 10px;\
      }", 0);

    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "div#styleButtons input {\
         background-color: rgba(68, 94, 186, 0.6); \
         border: 3px solid rgba(0, 24, 123, 0.6); \
         border-radius: 50%;   \
         cursor: pointer;      \
         color: white;         \
         display: inline-block;\
         font-size: 1.2em;     \
         height: 60px;         \
         margin: 5px 10px;     \
         width: 100px;         \
      }", 1);

    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "@media print{      \
         div#styleButtons{\
            display: none;\
         }\
      }", 2);

    //three day button
    three.onclick = function () {
        dayNum = 3;
        weatherHTML = ``;
        for (var i = 0; i < 3; i++) {

            weatherHTML += `${gfWeather[i]} <br/> 
          <img src="${gfWeather[i]}.png"></img> <br/>
          Temperature: ${gfTemp[i]} <br/> 
          Feels Like: ${gfFeels[i]}`;

            var idName = `day-${i + 1}`;
            document.getElementById(idName).innerHTML = weatherHTML;

            weatherHTML = ``;
        }
        location.reload();
    }

    //five day button
    five.onclick = function () {
        dayNum = 5;
    }

    //great falls weather is the default
    weatherHTML = ``;
    for (var i = 0; i < dayNum; i++) {

        weatherHTML += `${gfWeather[i]} <br/> 
          <img src="${gfWeather[i]}.png"></img> <br/>
          Temperature: ${gfTemp[i]} <br/> 
          Feels Like: ${gfFeels[i]}`;

        var idName = `day-${i + 1}`;
        document.getElementById(idName).innerHTML = weatherHTML;

        weatherHTML = ``;
    }

    //great falls weather button
    gfButton.onclick = function () {
        weatherHTML = ``;
        for (var i = 0; i < dayNum; i++) {

            weatherHTML += `${gfWeather[i]} <br/> 
            <img src="${gfWeather[i]}.png"></img> <br/>
            Temperature: ${gfTemp[i]} <br/> 
            Feels Like: ${gfFeels[i]}`;

            var idName = `day-${i + 1}`;
            document.getElementById(idName).innerHTML = weatherHTML;

            weatherHTML = ``;
        }
        pageStyle.disabled = false;

    };

    //bozeman weather button
    bzButton.onclick = function () {
        weatherHTML = ``;
        for (var i = 0; i < dayNum; i++) {

            weatherHTML += `${bzWeather[i]} <br/> 
            <img src="${bzWeather[i]}.png"></img> <br/>
            Temperature: ${bzTemp[i]} <br/> 
            Feels Like: ${bzFeels[i]}`;

            var idName = `day-${i + 1}`;
            document.getElementById(idName).innerHTML = weatherHTML;

            weatherHTML = ``;
        }
        pageStyle.disabled = true;
    }

    //butte weather button
    btButton.onclick = function () {
        weatherHTML = ``;
        for (var i = 0; i < dayNum; i++) {

            weatherHTML += `${btWeather[i]} <br/> 
            <img src="${btWeather[i]}.png"></img> <br/>
            Temperature: ${btTemp[i]} <br/> 
            Feels Like: ${btFeels[i]}`;

            var idName = `day-${i + 1}`;
            document.getElementById(idName).innerHTML = weatherHTML;

            weatherHTML = ``;
        }
        pageStyle.disabled = true;

    }

    //dark mode button
    dark.onclick = function () {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
}

footerHTML = `These are not my logos, visit   
         <a href='https://windy.app/support/weather-symbols-and-icons.html'>Weather Logos</a> too see all the logos available.`;
document.getElementById("foot").innerHTML = footerHTML;
