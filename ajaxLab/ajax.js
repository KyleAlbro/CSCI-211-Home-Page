callApi();

function callApi(){

    var apiString = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`;
    var sandbox = document.getElementById("sandbox");
    //Step 1
    const xhr = new XMLHttpRequest();

    //Step 2
    xhr.open("GET", apiString, true);

    //Step 3
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            var oprStr = `${response.hourly.time[0]} ${response.hourly.temperature_2m[0]}`;

            sandbox.textContent = oprStr;
            console.log(JSON.stringify(response));
        }
        else{
            var err = `ajax failed code = ${this.status}`;
        }
    };

    //Step 4
    xhr.send();


}