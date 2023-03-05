function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// Will execute myCallback every 0.5 seconds 
var intervalID = window.setInterval(myCallback, 1000)
function myCallback() {
    httpGetAsync("http://localhost:5000/", callback)
}

function callback(text) {
    var count = document.getElementById('count')
    var batv = document.getElementById('batv')
    var ts = document.getElementById('ts')
    var obj = JSON.parse(text)
    count.innerHTML = obj.state.reported.pcount
    batv.innerHTML = obj.state.reported.batv

    var d = new Date(0);
    d.setUTCSeconds(obj.state.reported.ts);
    ts.innerHTML = d
    console.log(text);
}


