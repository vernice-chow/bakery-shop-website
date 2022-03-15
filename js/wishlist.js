

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

var aPI = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=1&combinationMethod=aggregate&contentType=json&unitGroup=us&locationMode=array&key=M22QPV5MG0ATVQQLL1BJIQANZ&dataElements=default&locations=kampar%20malaysia";
$.getJSON(aPI).done(function(data) {
    var now = new Date(Date.now());
    var time = now.getHours();
    var date = now.getDate();
    for (var x in data.locations[0].values) {
        var ttemp = new Date(data.locations[0].values[x].datetimeStr).getHours();
        var dtemp = new Date(data.locations[0].values[x].datetimeStr).getDate();
        if (dtemp == date) {
            if (ttemp == time) {
                var date = new Date(data.locations[0].values[x].datetimeStr);
                var formatted = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                $("#weathering").append(now + "<br>" + "Temperature: " + data.locations[0].values[x].temp + "Fahrenheit" + "<br>Conditions: " + data.locations[0].values[x].conditions);
            }
        }
    }
});



function getwish() {

    if (localStorage.hasOwnProperty('wish')) {
        var retrieve = localStorage.getItem('wish');
        var parsedObject = JSON.parse(retrieve);
        for (var x = 0; x < parsedObject.length; x++)
            document.getElementById("wish").innerHTML +=
            '<tr class = "' + parsedObject[x].pid + '"> <th class="text-left "> <img src = " ' + parsedObject[x].pimage +
            ' " alt=" " class="img-fluid w-25 mr-3 ">' + parsedObject[x].pname + '</th> <td><input id = "textinging' + x + '" type = "text" onchange = "texting(  ' + x + ')" value = "' + parsedObject[x].remark + '"></td> </tr>';
    } else
    ;
}

function texting(x) {
    var t = "textinging";
    t += x;
    var temp = document.getElementById(t).value;


    var mywish = JSON.parse(localStorage.getItem('wish'));
    mywish[x].remark = temp;
    localStorage.setItem("wish", JSON.stringify(mywish));

}



function removelist() {
    if (localStorage.hasOwnProperty('wish')) {
        localStorage.removeItem('wish');
        document.getElementById("wish").innerHTML = "Clear Successfully";
    } else;
}

function removeclick() {
    if (localStorage.hasOwnProperty('click')) {
        localStorage.removeItem('click');
        document.getElementById("piechart").innerHTML = "Clear Successfully";
    } else;
}