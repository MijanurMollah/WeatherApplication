var x;
 var z = 1;
 $(document).ready(function() {
      if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(send);

function send(position) {
$.get("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude 
+ "&lon=" + position.coords.longitude, go);
}

function go(weather){
x = weather.main.temp;
x = Math.round(x);
document.getElementById("we").innerHTML = x + " degrees Celsius";
$("#pic").html("<img src=" + "\"" + weather.weather[0].icon + "\""+ ">");
}

});

function change() {
if (z == 1) {
document.getElementById("we").innerHTML = Math.round(x * (9/5) + 32) + " degrees Fahrenheit";
z = 0;
}
else {
document.getElementById("we").innerHTML = x + " degrees Celsius";
z = 1;
}
}
