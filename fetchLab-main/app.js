
fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(data => {
        var opElem = document.getElementById("main-content");
        let opStr = ``;

        for (let i = 0; i < data.data.length; i++) {
            opStr += `${data.data[i].first_name} 
        ${data.data[i].last_name}
        ${data.data[i].email}<br/>`;
        }


        opElem.innerHTML = opStr;
        // console.log(data);

    })